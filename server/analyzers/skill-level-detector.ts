// Skill Level Detector - Adaptive recommendation system
// Detects user expertise level to provide appropriate advice

export type SkillLevel = 'beginner' | 'intermediate' | 'professional';

export interface SkillLevelResult {
  level: SkillLevel;
  confidence: number;
  reasoning: string;
}

// Platform-specific thresholds
const PLATFORM_THRESHOLDS = {
  tiktok: {
    beginner: { followers: 10000, engagement: 2, postFrequency: 3 },
    intermediate: { followers: 100000, engagement: 5, postFrequency: 5 },
    professional: { followers: 100000, engagement: 5, postFrequency: 5 },
  },
  instagram: {
    beginner: { followers: 5000, engagement: 3, postFrequency: 3 },
    intermediate: { followers: 50000, engagement: 6, postFrequency: 4 },
    professional: { followers: 50000, engagement: 6, postFrequency: 4 },
  },
  youtube: {
    beginner: { subscribers: 1000, engagement: 2, postFrequency: 1 },
    intermediate: { subscribers: 100000, engagement: 4, postFrequency: 2 },
    professional: { subscribers: 100000, engagement: 4, postFrequency: 2 },
  },
};

// Social Media Account Level Detection
export function detectSocialMediaLevel(params: {
  platform: 'tiktok' | 'instagram' | 'youtube';
  followers?: number;
  subscribers?: number;
  engagementRate?: number;
  postsPerWeek?: number;
  avgViews?: number;
  contentQuality?: number; // 0-100 from quality metrics
}): SkillLevelResult {
  const { platform, followers = 0, subscribers = 0, engagementRate = 0, postsPerWeek = 0, contentQuality = 50 } = params;
  
  const thresholds = PLATFORM_THRESHOLDS[platform];
  const audienceSize = platform === 'youtube' ? subscribers : followers;
  
  // Get audience thresholds based on platform
  const beginnerThreshold = platform === 'youtube' 
    ? (thresholds.beginner as any).subscribers 
    : (thresholds.beginner as any).followers;
  const intermediateThreshold = platform === 'youtube'
    ? (thresholds.intermediate as any).subscribers
    : (thresholds.intermediate as any).followers;

  let level: SkillLevel = 'beginner';
  let score = 0;
  const reasons: string[] = [];

  // Audience size scoring
  if (audienceSize < beginnerThreshold) {
    score += 0;
    reasons.push(`Audience size ${audienceSize.toLocaleString()} (building phase)`);
  } else if (audienceSize < intermediateThreshold) {
    score += 35;
    reasons.push(`Audience ${audienceSize.toLocaleString()} (established)`);
  } else {
    score += 50;
    reasons.push(`Audience ${audienceSize.toLocaleString()} (mature)`);
  }

  // Engagement rate scoring
  if (engagementRate < thresholds.beginner.engagement) {
    score += 0;
    reasons.push(`Engagement ${engagementRate.toFixed(1)}% (needs work)`);
  } else if (engagementRate < thresholds.intermediate.engagement) {
    score += 20;
    reasons.push(`Engagement ${engagementRate.toFixed(1)}% (healthy)`);
  } else {
    score += 30;
    reasons.push(`Engagement ${engagementRate.toFixed(1)}% (excellent)`);
  }

  // Posting consistency scoring
  if (postsPerWeek < thresholds.beginner.postFrequency) {
    score += 0;
    reasons.push(`Posting ${postsPerWeek}x/week (inconsistent)`);
  } else if (postsPerWeek < thresholds.intermediate.postFrequency) {
    score += 10;
    reasons.push(`Posting ${postsPerWeek}x/week (regular)`);
  } else {
    score += 15;
    reasons.push(`Posting ${postsPerWeek}x/week (consistent)`);
  }

  // Content quality bonus
  if (contentQuality >= 80) {
    score += 5;
    reasons.push('High production quality');
  }

  // Determine level based on total score
  if (score >= 70) {
    level = 'professional';
  } else if (score >= 35) {
    level = 'intermediate';
  } else {
    level = 'beginner';
  }

  return {
    level,
    confidence: Math.min(100, score),
    reasoning: reasons.join(' | '),
  };
}

// Video/Presentation Quality Level Detection
export function detectPresentationLevel(params: {
  eyeContactScore?: number; // 0-100
  vocalQualityScore?: number; // 0-100
  structureScore?: number; // 0-100
  warmthScore?: number; // 0-100
  visualQualityScore?: number; // 0-100
}): SkillLevelResult {
  const {
    eyeContactScore = 50,
    vocalQualityScore = 50,
    structureScore = 50,
    warmthScore = 50,
    visualQualityScore = 50,
  } = params;

  let score = 0;
  const reasons: string[] = [];

  // Eye contact assessment
  if (eyeContactScore >= 75) {
    score += 20;
    reasons.push('Strong eye contact');
  } else if (eyeContactScore >= 50) {
    score += 10;
    reasons.push('Moderate eye contact');
  } else {
    reasons.push('Needs eye contact work');
  }

  // Vocal quality assessment
  if (vocalQualityScore >= 75) {
    score += 20;
    reasons.push('Polished vocal delivery');
  } else if (vocalQualityScore >= 50) {
    score += 10;
    reasons.push('Decent vocal delivery');
  } else {
    reasons.push('Vocal delivery needs practice');
  }

  // Structure assessment
  if (structureScore >= 75) {
    score += 20;
    reasons.push('Excellent structure');
  } else if (structureScore >= 50) {
    score += 10;
    reasons.push('Basic structure present');
  } else {
    reasons.push('Structure needs development');
  }

  // Warmth/authenticity assessment
  if (warmthScore >= 75) {
    score += 20;
    reasons.push('Authentic warmth');
  } else if (warmthScore >= 50) {
    score += 10;
    reasons.push('Moderate warmth');
  } else {
    reasons.push('Needs more warmth');
  }

  // Visual quality assessment
  if (visualQualityScore >= 75) {
    score += 20;
    reasons.push('Professional visual quality');
  } else if (visualQualityScore >= 50) {
    score += 10;
    reasons.push('Acceptable visual quality');
  } else {
    reasons.push('Visual quality needs improvement');
  }

  let level: SkillLevel = 'beginner';
  if (score >= 70) {
    level = 'professional';
  } else if (score >= 40) {
    level = 'intermediate';
  }

  return {
    level,
    confidence: score,
    reasoning: reasons.join(' | '),
  };
}

// Text/Script Communication Level Detection
export function detectCommunicationLevel(params: {
  warmthScore?: number; // 0-100
  structureScore?: number; // 0-100
  vocabularySophistication?: number; // 0-100
  rhetoricalDevices?: number; // count of advanced techniques
  ethicsScore?: number; // 0-100
}): SkillLevelResult {
  const {
    warmthScore = 50,
    structureScore = 50,
    vocabularySophistication = 50,
    rhetoricalDevices = 0,
    ethicsScore = 60,
  } = params;

  let score = 0;
  const reasons: string[] = [];

  // Warmth assessment
  if (warmthScore >= 70) {
    score += 25;
    reasons.push('Empathetic communication');
  } else if (warmthScore >= 50) {
    score += 15;
    reasons.push('Moderate warmth');
  } else {
    reasons.push('Needs more empathy');
  }

  // Structure assessment
  if (structureScore >= 75) {
    score += 25;
    reasons.push('Clear structure');
  } else if (structureScore >= 50) {
    score += 15;
    reasons.push('Basic structure');
  } else {
    reasons.push('Structure needs work');
  }

  // Vocabulary sophistication
  if (vocabularySophistication >= 70) {
    score += 20;
    reasons.push('Sophisticated vocabulary');
  } else if (vocabularySophistication >= 50) {
    score += 10;
    reasons.push('Standard vocabulary');
  } else {
    reasons.push('Basic vocabulary');
  }

  // Rhetorical devices (advanced techniques)
  if (rhetoricalDevices >= 3) {
    score += 15;
    reasons.push('Uses advanced rhetoric');
  } else if (rhetoricalDevices >= 1) {
    score += 8;
    reasons.push('Some rhetorical techniques');
  }

  // Ethics score
  if (ethicsScore >= 80) {
    score += 15;
    reasons.push('Responsible communication');
  } else if (ethicsScore >= 60) {
    score += 8;
    reasons.push('Acceptable ethics');
  } else {
    reasons.push('Ethics need attention');
  }

  let level: SkillLevel = 'beginner';
  if (score >= 75) {
    level = 'professional';
  } else if (score >= 45) {
    level = 'intermediate';
  }

  return {
    level,
    confidence: score,
    reasoning: reasons.join(' | '),
  };
}

