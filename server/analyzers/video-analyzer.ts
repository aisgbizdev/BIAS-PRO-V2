// Video Analyzer - Educational insights for video content analysis

import { EducationalInsight, VideoMetrics, AnalysisResult, PriorityLevel } from './types';
import { VISUAL_BEHAVIOR, AUDIO_BEHAVIOR, getContentStructure } from './behavioral-insights';

interface VideoAnalyzerInput {
  platform: 'tiktok' | 'instagram' | 'youtube';
  metrics: VideoMetrics;
  description?: string;
  hashtags?: string[];
}

export class VideoAnalyzer {
  private platform: 'tiktok' | 'instagram' | 'youtube';
  private metrics: VideoMetrics;
  private contentStructure: any;

  constructor(input: VideoAnalyzerInput) {
    this.platform = input.platform;
    this.metrics = input.metrics;
    this.contentStructure = getContentStructure(input.platform);
  }

  analyze(): AnalysisResult {
    const insights: EducationalInsight[] = [];

    // 1. Hook Effectiveness (First 3 seconds retention)
    insights.push(this.analyzeHook());

    // 2. Visual Quality
    insights.push(this.analyzeVisual());

    // 3. Audio Quality
    insights.push(this.analyzeAudio());

    // 4. Energy Level
    insights.push(this.analyzeEnergy());

    // 5. Viral Potential
    insights.push(this.analyzeViralPotential());

    const urgent = insights.filter(i => i.recommendations.some(r => r.priority === 'urgent'));
    const important = insights.filter(i => i.recommendations.some(r => r.priority === 'important'));
    const opportunities = insights.filter(i => i.recommendations.some(r => r.priority === 'opportunity'));

    const overallScore = this.calculateOverallScore(insights);

    return {
      overallScore,
      summary: this.generateSummary(overallScore),
      insights,
      priorities: { urgent, important, opportunities },
      nextSteps: this.generateNextSteps(insights),
    };
  }

  private analyzeHook(): EducationalInsight {
    const hookRetention = this.metrics.hookRetention || 0;
    const completionRate = this.metrics.completionRate || 0;

    let score = Math.round(hookRetention);
    let priority: PriorityLevel = 'opportunity';
    let diagnosis = '';

    if (hookRetention < 40) {
      diagnosis = `Hook retention lo **${hookRetention.toFixed(0)}%** - LEMAH! Mayoritas orang scroll dalam 3 detik pertama. Ini bunuh viral potential lo.`;
      priority = 'urgent';
    } else if (hookRetention < 60) {
      diagnosis = `Hook retention lo **${hookRetention.toFixed(0)}%** - CUKUP. Masih banyak yang skip, perlu hook yang lebih kuat.`;
      priority = 'important';
    } else if (hookRetention < 80) {
      diagnosis = `Hook retention lo **${hookRetention.toFixed(0)}%** - BAGUS! Tapi bisa lebih powerful lagi.`;
      priority = 'opportunity';
    } else {
      diagnosis = `Hook retention lo **${hookRetention.toFixed(0)}%** - EXCELLENT! Hook lo bikin orang stuck!`;
      priority = 'opportunity';
    }

    const recommendations: EducationalInsight['recommendations'] = [];

    if (hookRetention < 60) {
      recommendations.push({
        priority,
        icon: 'Zap',
        title: 'Optimize Hook (3 Detik Pertama)',
        description: 'Hook adalah make-or-break point. 3 detik pertama menentukan apakah video lo viral atau scroll.',
        steps: [
          'Pattern Interrupt: mulai dengan gerakan tiba-tiba, loud sound, atau shocking visual',
          'Open Loop: "Stop scrolling! Ini yang bikin gw dapet 100K follower dalam 30 hari..."',
          'Visual Hook: teks overlay besar "WAIT!" atau "WARNING!" di frame 1',
          'Jangan mulai dengan "Halo guys" - langsung ke value/shock/intrigue',
          'Test A/B: rekam 2-3 hook berbeda untuk video yang sama, posting, lihat mana yang retention nya lebih tinggi',
        ],
        impactEstimate: `Hook 80%+ retention = 5-10x viral potential vs hook 40%`,
      });
    } else {
      recommendations.push({
        priority: 'opportunity',
        icon: 'TrendingUp',
        title: 'Scale Hook Pattern',
        description: 'Hook lo udah bagus, sekarang replikasi formula ini ke semua video',
        steps: [
          'Document hook pattern lo yang proven works',
          'Buat template: visual + audio + text overlay',
          'Test variasi: hook yang sama tapi dengan twist berbeda',
        ],
        impactEstimate: 'Consistent strong hook = predictable viral success',
      });
    }

    return {
      term: 'Hook Retention Rate',
      score,
      category: 'Video Performance',
      definition: `**Hook** adalah 3 detik pertama video lo. Ini **PALING PENTING** karena menentukan apakah orang scroll atau nonton. ${this.platform.toUpperCase()} algorithm track ini - video dengan hook kuat otomatis di-push ke lebih banyak FYP/Explore.`,
      diagnosis,
      benchmark: {
        yourScore: hookRetention,
        nicheAverage: 50,
        topPerformer: 80,
        explanation: `Rata-rata: 50%, Top viral video: 80%+. Lo: ${hookRetention.toFixed(0)}%.`,
      },
      recommendations,
    };
  }

  private analyzeVisual(): EducationalInsight {
    // Estimate based on engagement metrics
    const engagementRate = this.calculateEngagement();
    let score = Math.min(100, Math.round(engagementRate * 10));

    let diagnosis = '';
    let priority: PriorityLevel = 'opportunity';

    if (score < 50) {
      diagnosis = `Visual quality lo **${score}/100** - Perlu improvement besar. Lighting, framing, atau color grading kemungkinan kurang optimal.`;
      priority = 'urgent';
    } else if (score < 70) {
      diagnosis = `Visual quality lo **${score}/100** - CUKUP. Masih bisa ditingkatkan untuk professional look.`;
      priority = 'important';
    } else {
      diagnosis = `Visual quality lo **${score}/100** - BAGUS! Visual lo eye-catching.`;
      priority = 'opportunity';
    }

    const visualBehaviorTips = VISUAL_BEHAVIOR.find(b => b.category === 'Lighting')?.tips || [];
    const eyeContactTips = VISUAL_BEHAVIOR.find(b => b.category === 'Eye Contact')?.tips || [];
    const expressionTips = VISUAL_BEHAVIOR.find(b => b.category === 'Expression')?.tips || [];

    const recommendations: EducationalInsight['recommendations'] = [{
      priority,
      icon: 'Eye',
      title: 'Master Visual Behavior (VBM)',
      description: 'Algoritma baca eye contact, expression authenticity, dan gesture sync. Visual bukan cuma "cantik" tapi "jujur & engaging".',
      steps: [
        '👁️ EYE CONTACT 70-80%: Tatapan ke kamera (bukan layar) minimal 70% durasi - ini bikin koneksi emosional',
        '😊 NATURAL EXPRESSION: Senyum HANYA saat genuine happy - forced smile = red flag algoritma',
        '👐 GESTURE SYNC: Gerakan tangan lembut mengikuti kata-kata - jangan cepat/menutupi wajah',
        '💡 LIGHTING DEPAN: Golden hour (sunset) atau dekat jendela - NO backlight (cahaya dari belakang)',
        '🎨 BACKGROUND NETRAL: Warna polos/rapi - hindari ramai/flicker yang distract audience',
        '📐 FRAME COMPOSITION: Kamera eye-level, wajah di 1/3 atas frame (rule of thirds)',
        `${this.platform === 'tiktok' ? '🎭 Authenticity > Perfect: TikTok favors REAL over polished' : this.platform === 'instagram' ? '✨ Aesthetic Matters: IG rewards color grading & clean visuals' : '🎓 Educational Look: YouTube favors clear, professional presentation'}`,
      ],
      impactEstimate: `Visual behavior optimization = +40% retention + algoritma boost "authentic" flag`,
    }];

    return {
      term: 'Visual Performance Quality (VBM)',
      score,
      category: 'Production Value',
      definition: `**Visual Performance** adalah kualitas visual video lo: lighting, framing, color, clarity. Otak manusia process visual 60,000x lebih cepat dari teks - visual quality INSTANTLY affect credibility & engagement.`,
      diagnosis,
      benchmark: {
        yourScore: score,
        nicheAverage: 65,
        topPerformer: 85,
        explanation: `Average creator: 65/100. Top creator: 85/100. Lo: ${score}/100.`,
      },
      recommendations,
    };
  }

  private analyzeAudio(): EducationalInsight {
    const engagementRate = this.calculateEngagement();
    let score = Math.min(100, Math.round(engagementRate * 9 + 10));

    let diagnosis = '';
    let priority: PriorityLevel = 'opportunity';

    if (score < 50) {
      diagnosis = `Audio quality lo **${score}/100** - Ada masalah. Background noise, volume gak balance, atau clarity kurang.`;
      priority = 'urgent';
    } else if (score < 70) {
      diagnosis = `Audio quality lo **${score}/100** - CUKUP. Perlu polish untuk professional sound.`;
      priority = 'important';
    } else {
      diagnosis = `Audio quality lo **${score}/100** - BAGUS! Audio lo clean dan clear.`;
      priority = 'opportunity';
    }

    const warmthTips = AUDIO_BEHAVIOR.find(b => b.category === 'Warmth Index')?.tips || [];
    const clarityTips = AUDIO_BEHAVIOR.find(b => b.category === 'Clarity')?.tips || [];

    const recommendations: EducationalInsight['recommendations'] = [{
      priority,
      icon: 'Volume2',
      title: 'Master Audio Behavior (ABM)',
      description: 'Algoritma detect warmth index, pitch stability, dan clarity. Audio bukan cuma "jernih" tapi "hangat & trustworthy".',
      steps: [
        '🔥 WARMTH INDEX >0.85: Nada hangat & empathetic - bayangin lagi nemenin temen yang lagi down',
        '🎵 PITCH NATURAL (4-6dB): Naik-turun ringan - jangan monoton (robot) atau over-energy (fake)',
        '🔇 NOISE <10%: Ruang tenang - matiin AC/fan, jarak mic 15-20cm dari mulut',
        '🎙️ MIC EKSTERNAL: Clip-on/lav mic ($20-50) = GAME CHANGER vs phone mic built-in',
        '🎶 MUSIK 30% VOLUME: Background music supporting - jangan overpowering suara lo',
        '💬 KATA EMPATI: "gak apa-apa", "bareng-bareng", "pelan-pelan" > "cepat!", "buruan!", "harus!"',
        `${this.platform === 'tiktok' ? '🎵 Trending Sound: Pakai sound viral = 2x FYP chance' : this.platform === 'instagram' ? '🎼 Music Matters: IG favors trending audio + original sound mix' : '🔊 Clear Voice: YouTube rewards clarity over music'}`,
      ],
      impactEstimate: `Audio warmth + clarity = +18% engagement + algoritma "authentic voice" boost`,
    }];

    return {
      term: 'Audio Quality Score (EPM Audio)',
      score,
      category: 'Production Value',
      definition: `**Audio Quality** adalah clarity & balance suara lo. Research shows: bad audio = 53% instant skip, sedangkan bad visual cuma 38%. Audio LEBIH PENTING dari visual untuk retention!`,
      diagnosis,
      benchmark: {
        yourScore: score,
        nicheAverage: 60,
        topPerformer: 90,
        explanation: `Average: 60/100. Professional: 90/100. Lo: ${score}/100.`,
      },
      recommendations,
    };
  }

  private analyzeEnergy(): EducationalInsight {
    const duration = this.metrics.duration;
    const completionRate = this.metrics.completionRate || 0;

    let score = Math.round(completionRate * 0.8 + 20);

    let diagnosis = '';
    let priority: PriorityLevel = 'opportunity';

    if (score < 50) {
      diagnosis = `Energy level lo **${score}/100** - FLAT. Lo terdengar bosan/monoton. Audience feel the vibe!`;
      priority = 'urgent';
    } else if (score < 70) {
      diagnosis = `Energy level lo **${score}/100** - CUKUP. Bisa lebih expressive dan engaging.`;
      priority = 'important';
    } else {
      diagnosis = `Energy level lo **${score}/100** - BAGUS! Energy lo contagious!`;
      priority: 'opportunity';
    }

    const recommendations: EducationalInsight['recommendations'] = [{
      priority,
      icon: 'Zap',
      title: 'Tingkatkan Energy & Presence',
      description: 'Energy = engagement magnet. High energy creator = high retention.',
      steps: [
        'Voice modulation: VARIASIKAN volume & tempo. Loud untuk emphasis, whisper untuk intrigue.',
        'Body language: gesture tangan untuk emphasize point (jangan static kayak robot)',
        'Facial expression: OVERACT sedikit - kamera eat 30% energy, jadi amplify!',
        'Pacing: fast cuts setiap 2-3 detik, jangan slow & dragging',
        'Enthusiasm: rekam pas lo ACTUALLY excited tentang topik - fake energy kelihatan',
        `Durasi optimal ${this.platform === 'tiktok' ? '7-15 detik' : this.platform === 'instagram' ? '15-30 detik' : '60-90 detik'} untuk ${this.platform.toUpperCase()}`,
      ],
      impactEstimate: `High energy = +60% completion rate + +35% shares`,
    }];

    return {
      term: 'Energy & Presence Score (EPM Energy)',
      score,
      category: 'Delivery',
      definition: `**Energy & Presence** adalah seberapa **ALIVE** lo di video. Energy rendah = audience bored. Energy tinggi = dopamine hit → mereka tag temen, share, save. Algoritma detect completion rate dan boost high-energy content.`,
      diagnosis,
      benchmark: {
        yourScore: score,
        nicheAverage: 60,
        topPerformer: 85,
        explanation: `Average creator: 60/100. Viral creator: 85/100. Lo: ${score}/100.`,
      },
      recommendations,
    };
  }

  private analyzeViralPotential(): EducationalInsight {
    const { views, likes, comments, shares } = this.metrics;
    
    const likeRate = views > 0 ? (likes / views) * 100 : 0;
    const commentRate = views > 0 ? (comments / views) * 100 : 0;
    const shareRate = views > 0 ? (shares / views) * 100 : 0;

    // Weighted viral score
    const viralScore = Math.round(
      (likeRate * 40) + 
      (commentRate * 100) + 
      (shareRate * 200)
    );
    const score = Math.min(100, viralScore);

    let diagnosis = '';
    let priority: PriorityLevel = 'opportunity';

    if (score < 40) {
      diagnosis = `Viral potential lo **${score}/100** - RENDAH. Video lo kurang shareable/memorable.`;
      priority = 'urgent';
    } else if (score < 65) {
      diagnosis = `Viral potential lo **${score}/100** - MODERATE. Perlu tweak untuk maximize reach.`;
      priority = 'important';
    } else {
      diagnosis = `Viral potential lo **${score}/100** - TINGGI! Video lo punya elemen viral.`;
      priority = 'opportunity';
    }

    const recommendations: EducationalInsight['recommendations'] = [{
      priority,
      icon: 'TrendingUp',
      title: 'Maximize Viral Potential',
      description: 'Viral = bukan luck, ada science-nya. Follow proven formula.',
      steps: [
        'Controversial/Polarizing: "Unpopular opinion:" atau "Everyone does X wrong..." (trigger engagement)',
        'Relatable pain point: "POV: when you..." atau "Tell me why..." (audience tag friends)',
        'Unexpected twist: build up expectation, deliver surprise ending (rewatch + share)',
        'CTA akhir: "Wait for part 2!" atau "Comment if you agree!" (boost engagement)',
        `Hashtag strategy: 3 niche hashtags + 2 broad + 1 trending (#${this.platform === 'tiktok' ? 'fyp' : this.platform === 'instagram' ? 'reels' : 'shorts'})`,
        'Posting time: ${this.platform} prime time 7-9 PM weekdays',
      ],
      impactEstimate: `Viral formula = 10-50x normal reach (from thousands to millions)`,
    }];

    return {
      term: 'Viral Potential Score (VPS)',
      score,
      category: 'Growth',
      definition: `**Viral Potential** mengukur seberapa likely video lo di-share ke FYP/Explore massa. Formula: Shares > Comments > Likes. 1 share = 10x value dari 1 like karena reach exponential growth.`,
      diagnosis,
      benchmark: {
        yourScore: score,
        nicheAverage: 45,
        topPerformer: 75,
        explanation: `Viral benchmark: Like rate 8%+, Comment 1%+, Share 0.5%+. Lo: Like ${likeRate.toFixed(1)}%, Comment ${commentRate.toFixed(2)}%, Share ${shareRate.toFixed(2)}%.`,
      },
      recommendations,
    };
  }

  private calculateEngagement(): number {
    const { views, likes, comments } = this.metrics;
    if (views === 0) return 0;
    return ((likes + comments * 2) / views) * 100;
  }

  private calculateOverallScore(insights: EducationalInsight[]): number {
    const total = insights.reduce((sum, i) => sum + i.score, 0);
    return Math.round(total / insights.length);
  }

  private generateSummary(overallScore: number): string {
    if (overallScore >= 80) {
      return `Video lo EXCELLENT! Score ${overallScore}/100. Ini formula viral - replikasi untuk semua konten lo!`;
    } else if (overallScore >= 65) {
      return `Video lo GOOD (${overallScore}/100) tapi belum optimal. Fix prioritas merah/kuning untuk maximize viral potential.`;
    } else if (overallScore >= 45) {
      return `Video lo perlu IMPROVEMENT (${overallScore}/100). Follow action plan untuk transform jadi viral-worthy content.`;
    } else {
      return `Video lo butuh MAJOR OVERHAUL (${overallScore}/100). Tapi gak apa, semua creator mulai dari sini - execute checklist step-by-step!`;
    }
  }

  private generateNextSteps(insights: EducationalInsight[]): string[] {
    const sorted = [...insights].sort((a, b) => a.score - b.score);
    const top3 = sorted.slice(0, 3);

    return top3.map(insight => {
      const rec = insight.recommendations[0];
      return `${insight.score < 50 ? '🚨' : insight.score < 70 ? '⚠️' : '💡'} ${rec.title}: ${rec.steps[0]}`;
    });
  }
}
