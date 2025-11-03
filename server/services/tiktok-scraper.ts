/**
 * TikTok Web Scraper
 * Fetches public TikTok profile data by scraping HTML
 */

import { parseMetricBigInt } from '../utils/metrics';

export interface TikTokScrapedProfile {
  username: string;
  nickname: string;
  signature: string;
  avatarUrl: string;
  verified: boolean;
  followerCount: bigint;
  followingCount: bigint;
  videoCount: bigint;
  likesCount: bigint;
}

export async function scrapeTikTokProfile(username: string): Promise<TikTokScrapedProfile> {
  try {
    const profileUrl = `https://www.tiktok.com/@${username}`;
    
    // Fetch with timeout to prevent hanging
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout
    
    const response = await fetch(profileUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Cache-Control': 'max-age=0'
      }
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Failed to fetch TikTok profile: ${response.status} ${response.statusText}`);
    }

    const html = await response.text();

    // TikTok embeds data in <script id="__UNIVERSAL_DATA_FOR_REHYDRATION__">
    const scriptMatch = html.match(/<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__" type="application\/json">([\s\S]*?)<\/script>/);
    
    if (scriptMatch && scriptMatch[1]) {
      const data = JSON.parse(scriptMatch[1]);
      const userDetail = data?.__DEFAULT_SCOPE__?.['webapp.user-detail']?.userInfo;
      
      if (userDetail?.user && userDetail?.stats) {
        // Use 'heart' field first to avoid JSON.parse() overflow on heartCount
        return {
          username: userDetail.user.uniqueId || username,
          nickname: userDetail.user.nickname || username,
          signature: userDetail.user.signature || '',
          avatarUrl: userDetail.user.avatarLarger || userDetail.user.avatarMedium || '',
          verified: userDetail.user.verified || false,
          followerCount: parseMetricBigInt(userDetail.stats.followerCount),
          followingCount: parseMetricBigInt(userDetail.stats.followingCount),
          videoCount: parseMetricBigInt(userDetail.stats.videoCount),
          likesCount: parseMetricBigInt(userDetail.stats.heart || userDetail.stats.heartCount)
        };
      }
    }

    // Fallback: Try alternative script tag format
    const altScriptMatch = html.match(/<script id="SIGI_STATE" type="application\/json">([\s\S]*?)<\/script>/);
    
    if (altScriptMatch && altScriptMatch[1]) {
      const data = JSON.parse(altScriptMatch[1]);
      const userModule = data?.UserModule?.users;
      const statsModule = data?.UserModule?.stats;
      
      if (userModule && statsModule) {
        const userId = Object.keys(userModule)[0];
        const user = userModule[userId];
        const stats = statsModule[userId];
        
        if (user && stats) {
          return {
            username: user.uniqueId || username,
            nickname: user.nickname || username,
            signature: user.signature || '',
            avatarUrl: user.avatarLarger || user.avatarMedium || '',
            verified: user.verified || false,
            followerCount: parseMetricBigInt(stats.followerCount),
            followingCount: parseMetricBigInt(stats.followingCount),
            videoCount: parseMetricBigInt(stats.videoCount),
            likesCount: parseMetricBigInt(stats.heart || stats.heartCount)
          };
        }
      }
    }

    // Last resort: Try regex extraction (less reliable)
    const followerMatch = html.match(/"followerCount[\"']?\s*:\s*(\d+)/i);
    const followingMatch = html.match(/"followingCount[\"']?\s*:\s*(\d+)/i);
    const videoMatch = html.match(/"videoCount[\"']?\s*:\s*(\d+)/i);
    const likesMatch = html.match(/"heart(?:Count)?[\"']?\s*:\s*(\d+)/i);
    const nicknameMatch = html.match(/"nickname[\"']?\s*:\s*[\"']([^\"']+)[\"']/i);
    const signatureMatch = html.match(/"signature[\"']?\s*:\s*[\"']([^\"']*)[\"']/i);
    const avatarMatch = html.match(/"avatarLarger[\"']?\s*:\s*[\"']([^\"']+)[\"']/i);
    const verifiedMatch = html.match(/"verified[\"']?\s*:\s*(true|false)/i);

    if (followerMatch || videoMatch) {
      return {
        username,
        nickname: nicknameMatch?.[1] || username,
        signature: signatureMatch?.[1] || '',
        avatarUrl: avatarMatch?.[1] || '',
        verified: verifiedMatch?.[1] === 'true',
        followerCount: followerMatch ? parseMetricBigInt(followerMatch[1]) : BigInt(0),
        followingCount: followingMatch ? parseMetricBigInt(followingMatch[1]) : BigInt(0),
        videoCount: videoMatch ? parseMetricBigInt(videoMatch[1]) : BigInt(0),
        likesCount: likesMatch ? parseMetricBigInt(likesMatch[1]) : BigInt(0)
      };
    }

    throw new Error('Could not parse TikTok profile data from HTML');

  } catch (error) {
    console.error(`[TikTok Scraper] Error scraping profile @${username}:`, error);
    throw new Error(`Failed to scrape TikTok profile: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Extract username from TikTok URL
 */
export function extractUsernameFromUrl(url: string): string | null {
  try {
    // Match patterns like:
    // https://www.tiktok.com/@username
    // https://tiktok.com/@username/video/123456
    // @username
    
    const match = url.match(/@([a-zA-Z0-9_.]+)/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}
