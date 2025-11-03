// Benchmark data for different niches and platforms

export interface NicheBenchmark {
  niche: string;
  platform: 'tiktok' | 'instagram' | 'youtube';
  metrics: {
    avgEngagementRate: number; // percentage
    avgFollowerLikeRatio: number; // likes per follower
    avgVideoViewRate: number; // views per follower
    idealPostFrequency: number; // posts per week
    topPerformerEngagement: number;
  };
}

// Platform-specific benchmark data
export const PLATFORM_BENCHMARKS = {
  tiktok: {
    'lifestyle': {
      avgEngagementRate: 5.3,
      avgFollowerLikeRatio: 1.5,
      avgVideoViewRate: 0.15,
      idealPostFrequency: 5,
      topPerformerEngagement: 12.0,
    },
    'education': {
      avgEngagementRate: 6.8,
      avgFollowerLikeRatio: 2.1,
      avgVideoViewRate: 0.18,
      idealPostFrequency: 4,
      topPerformerEngagement: 15.0,
    },
    'comedy': {
      avgEngagementRate: 8.2,
      avgFollowerLikeRatio: 2.5,
      avgVideoViewRate: 0.25,
      idealPostFrequency: 7,
      topPerformerEngagement: 18.0,
    },
    'business': {
      avgEngagementRate: 4.5,
      avgFollowerLikeRatio: 1.8,
      avgVideoViewRate: 0.12,
      idealPostFrequency: 3,
      topPerformerEngagement: 10.0,
    },
    'fitness': {
      avgEngagementRate: 6.0,
      avgFollowerLikeRatio: 1.9,
      avgVideoViewRate: 0.16,
      idealPostFrequency: 5,
      topPerformerEngagement: 13.0,
    },
    'default': {
      avgEngagementRate: 5.0,
      avgFollowerLikeRatio: 1.5,
      avgVideoViewRate: 0.15,
      idealPostFrequency: 4,
      topPerformerEngagement: 12.0,
    },
  },
  
  instagram: {
    'lifestyle': {
      avgEngagementRate: 3.2,
      avgFollowerLikeRatio: 0.8,
      avgVideoViewRate: 0.12,
      idealPostFrequency: 4,
      topPerformerEngagement: 8.0,
    },
    'education': {
      avgEngagementRate: 4.1,
      avgFollowerLikeRatio: 1.2,
      avgVideoViewRate: 0.15,
      idealPostFrequency: 3,
      topPerformerEngagement: 9.5,
    },
    'comedy': {
      avgEngagementRate: 5.5,
      avgFollowerLikeRatio: 1.8,
      avgVideoViewRate: 0.20,
      idealPostFrequency: 5,
      topPerformerEngagement: 12.0,
    },
    'business': {
      avgEngagementRate: 2.8,
      avgFollowerLikeRatio: 0.9,
      avgVideoViewRate: 0.10,
      idealPostFrequency: 3,
      topPerformerEngagement: 7.0,
    },
    'fitness': {
      avgEngagementRate: 3.8,
      avgFollowerLikeRatio: 1.1,
      avgVideoViewRate: 0.14,
      idealPostFrequency: 4,
      topPerformerEngagement: 9.0,
    },
    'fashion': {
      avgEngagementRate: 3.5,
      avgFollowerLikeRatio: 1.0,
      avgVideoViewRate: 0.13,
      idealPostFrequency: 5,
      topPerformerEngagement: 8.5,
    },
    'food': {
      avgEngagementRate: 4.2,
      avgFollowerLikeRatio: 1.3,
      avgVideoViewRate: 0.16,
      idealPostFrequency: 4,
      topPerformerEngagement: 10.0,
    },
    'default': {
      avgEngagementRate: 3.5,
      avgFollowerLikeRatio: 1.0,
      avgVideoViewRate: 0.13,
      idealPostFrequency: 3,
      topPerformerEngagement: 8.0,
    },
  },
  
  youtube: {
    'lifestyle': {
      avgEngagementRate: 2.5,
      avgFollowerLikeRatio: 0.05,
      avgVideoViewRate: 0.08,
      idealPostFrequency: 2,
      topPerformerEngagement: 6.0,
    },
    'education': {
      avgEngagementRate: 3.2,
      avgFollowerLikeRatio: 0.08,
      avgVideoViewRate: 0.12,
      idealPostFrequency: 2,
      topPerformerEngagement: 7.5,
    },
    'gaming': {
      avgEngagementRate: 4.8,
      avgFollowerLikeRatio: 0.12,
      avgVideoViewRate: 0.18,
      idealPostFrequency: 4,
      topPerformerEngagement: 10.0,
    },
    'tech': {
      avgEngagementRate: 3.5,
      avgFollowerLikeRatio: 0.09,
      avgVideoViewRate: 0.14,
      idealPostFrequency: 2,
      topPerformerEngagement: 8.0,
    },
    'comedy': {
      avgEngagementRate: 4.0,
      avgFollowerLikeRatio: 0.10,
      avgVideoViewRate: 0.15,
      idealPostFrequency: 3,
      topPerformerEngagement: 9.0,
    },
    'business': {
      avgEngagementRate: 2.8,
      avgFollowerLikeRatio: 0.06,
      avgVideoViewRate: 0.10,
      idealPostFrequency: 1,
      topPerformerEngagement: 6.5,
    },
    'vlog': {
      avgEngagementRate: 3.0,
      avgFollowerLikeRatio: 0.07,
      avgVideoViewRate: 0.11,
      idealPostFrequency: 3,
      topPerformerEngagement: 7.0,
    },
    'default': {
      avgEngagementRate: 3.0,
      avgFollowerLikeRatio: 0.07,
      avgVideoViewRate: 0.10,
      idealPostFrequency: 2,
      topPerformerEngagement: 7.0,
    },
  },
};

// Get benchmark for specific platform and niche
export function getBenchmark(
  platform: 'tiktok' | 'instagram' | 'youtube',
  niche?: string
): NicheBenchmark['metrics'] {
  const platformBenchmarks = PLATFORM_BENCHMARKS[platform];
  const detectedNiche = niche || 'default';
  
  return platformBenchmarks[detectedNiche as keyof typeof platformBenchmarks] || 
         platformBenchmarks.default;
}

// Detect niche from bio/content keywords
export function detectNiche(bio: string, hashtags: string[] = [], platform: 'tiktok' | 'instagram' | 'youtube' = 'tiktok'): string {
  const text = `${bio} ${hashtags.join(' ')}`.toLowerCase();
  
  // Common niches across all platforms
  if (text.match(/edukasi|belajar|tutorial|tips|how to|pembelajaran|education/)) return 'education';
  if (text.match(/lucu|komedi|funny|joke|prank|humor|comedy/)) return 'comedy';
  if (text.match(/bisnis|entrepreneur|marketing|sales|uang|money|business/)) return 'business';
  if (text.match(/fitness|gym|workout|olahraga|sehat|diet|health/)) return 'fitness';
  
  // Platform-specific niches
  if (platform === 'instagram') {
    if (text.match(/fashion|ootd|style|outfit|baju|pakaian/)) return 'fashion';
    if (text.match(/food|kuliner|recipe|masak|cooking|makanan/)) return 'food';
  }
  
  if (platform === 'youtube') {
    if (text.match(/gaming|game|gamer|esport|main game/)) return 'gaming';
    if (text.match(/tech|teknologi|gadget|review|unboxing/)) return 'tech';
    if (text.match(/vlog|daily|kehidupan|sehari-hari/)) return 'vlog';
  }
  
  // General lifestyle
  if (text.match(/lifestyle|daily|vlog|travel|fashion|beauty/)) return 'lifestyle';
  
  return 'default';
}

// Calculate engagement rate
export function calculateEngagementRate(metrics: {
  followers: number;
  totalLikes: number;
  videoCount: number;
}): number {
  if (metrics.followers === 0 || metrics.videoCount === 0) return 0;
  
  const avgLikesPerVideo = metrics.totalLikes / metrics.videoCount;
  const engagementRate = (avgLikesPerVideo / metrics.followers) * 100;
  
  return Math.round(engagementRate * 100) / 100; // Round to 2 decimals
}

// Calculate follower:like ratio
export function calculateFollowerLikeRatio(followers: number, totalLikes: number): number {
  if (followers === 0) return 0;
  return Math.round((totalLikes / followers) * 100) / 100;
}

// Detect potential bot/fake followers
export function detectBotPatterns(metrics: {
  followers: number;
  following: number;
  totalLikes: number;
  videoCount: number;
  engagementRate: number;
}): {
  botScore: number; // 0-100, higher = more likely bots
  reasons: string[];
} {
  const reasons: string[] = [];
  let botScore = 0;
  
  // Red flag 1: Very low engagement despite high followers
  if (metrics.followers > 10000 && metrics.engagementRate < 1.0) {
    botScore += 30;
    reasons.push('Engagement rate sangat rendah untuk jumlah follower sebesar ini');
  }
  
  // Red flag 2: Following way more than followers
  const followRatio = metrics.following / (metrics.followers || 1);
  if (followRatio > 2.0) {
    botScore += 20;
    reasons.push('Following jauh lebih banyak dari follower (follow-for-follow pattern)');
  }
  
  // Red flag 3: Very low total likes relative to followers
  const likeRatio = metrics.totalLikes / (metrics.followers || 1);
  if (metrics.followers > 5000 && likeRatio < 0.5) {
    botScore += 25;
    reasons.push('Total likes terlalu rendah dibanding jumlah follower');
  }
  
  // Red flag 4: Sudden spike (would need historical data)
  // This would require checking growth patterns over time
  
  // Good sign: High engagement
  if (metrics.engagementRate > 5.0) {
    botScore -= 20;
  }
  
  return {
    botScore: Math.max(0, Math.min(100, botScore)),
    reasons,
  };
}
