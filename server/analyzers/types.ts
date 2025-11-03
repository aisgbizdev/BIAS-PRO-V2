// Educational Analysis Types - Professional terms with layman explanations

export type PriorityLevel = 'urgent' | 'important' | 'opportunity';

export interface EducationalInsight {
  term: string; // Professional term (e.g., "Visual Branding Metric (VBM)")
  score: number; // 0-100
  category: string; // VBM, EPM, NLP, etc.
  
  // Educational components
  definition: string; // Bahasa awam: "Apa itu VBM?"
  diagnosis: string; // "Kenapa skor lo rendah/tinggi?"
  benchmark: {
    yourScore: number;
    nicheAverage: number;
    topPerformer: number;
    explanation: string;
  };
  
  // Actionable recommendations
  recommendations: Array<{
    priority: PriorityLevel;
    icon: string; // emoji or icon name
    title: string;
    description: string;
    steps: string[]; // Step-by-step actions
    impactEstimate: string; // "Fix ini = +40% engagement"
  }>;
}

export interface AccountMetrics {
  followers: number;
  following: number;
  subscribers?: number; // YouTube uses subscribers instead of followers
  totalLikes: number;
  videoCount: number;
  avgViews: number;
  engagementRate: number;
  growthRate?: number;
  postingFrequency?: number;
}

export interface AccountBenchmark {
  niche: string;
  avgEngagement: number;
  avgFollowerLikeRatio: number;
  avgPostFrequency: number;
  topPerformerEngagement: number;
}

export interface VideoMetrics {
  views: number;
  likes: number;
  comments: number;
  shares: number;
  duration: number;
  completionRate?: number;
  hookRetention?: number; // First 3 seconds
}

export interface AnalysisResult {
  overallScore: number;
  summary: string;
  insights: EducationalInsight[];
  priorities: {
    urgent: EducationalInsight[];
    important: EducationalInsight[];
    opportunities: EducationalInsight[];
  };
  nextSteps: string[];
}
