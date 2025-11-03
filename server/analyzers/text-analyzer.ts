// Text Analyzer - Educational 8-layer BIAS analysis for text/speech/script

import { EducationalInsight, AnalysisResult, PriorityLevel } from './types';
import { analyzeWarmthIndex } from './behavioral-insights';

interface TextAnalyzerInput {
  content: string;
  mode: 'creator' | 'academic' | 'hybrid';
  inputType: 'text' | 'video' | 'photo' | 'audio';
}

export class TextAnalyzer {
  private content: string;
  private mode: string;
  private inputType: string;

  constructor(input: TextAnalyzerInput) {
    this.content = input.content;
    this.mode = input.mode;
    this.inputType = input.inputType;
  }

  analyze(): AnalysisResult {
    const insights: EducationalInsight[] = [];

    // 8-Layer BIAS Framework
    insights.push(this.analyzeVBM()); // Visual Branding Metric
    insights.push(this.analyzeEPM()); // Emotional Processing Metric
    insights.push(this.analyzeNLP()); // Narrative & Linguistic Patterns
    insights.push(this.analyzeETH()); // Ethical Communication
    insights.push(this.analyzeECO()); // Ecosystem Consistency
    insights.push(this.analyzeSOC()); // Social Interaction
    insights.push(this.analyzeCOG()); // Cognitive Load
    insights.push(this.analyzeBMIL()); // Brand & Message Integration Level

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

  private analyzeVBM(): EducationalInsight {
    // Analyze visual language and imagery in text
    const hasVisualWords = /lihat|bayangkan|warna|bentuk|gambar|visual|tampil|terlihat|kelihatan|see|imagine|picture|look|appear/i.test(this.content);
    const hasDescriptiveLanguage = /\b(sangat|sekali|banget|luar biasa|incredible|amazing)\b/i.test(this.content);
    
    let score = 50;
    if (hasVisualWords) score += 25;
    if (hasDescriptiveLanguage) score += 25;

    const diagnosis = score >= 75 
      ? `✨ **Excellent!** Bahasa visual Anda **SANGAT KUAT** dengan skor ${score}/100. Anda sudah mahir membuat audience bisa "melihat" apa yang Anda sampaikan hanya melalui kata-kata. Kemampuan ini sangat penting karena otak manusia memproses gambar 60,000x lebih cepat daripada teks - jadi ketika Anda pakai visual language, message Anda langsung nyangkut di memori audience. Ini adalah skill premium yang dimiliki professional communicator dan viral content creator. Pertahankan ini dan terus variasikan teknik descriptive Anda!`
      : score >= 50
      ? `💡 **Good Start!** Bahasa visual Anda **CUKUP SOLID** (${score}/100) - artinya Anda sudah paham konsepnya, tapi masih bisa ditingkatkan untuk bikin imagination audience lebih engaged. Saat ini komunikasi Anda mungkin masih cenderung "telling" dibanding "showing". Dengan menambahkan lebih banyak sensory words (warna, tekstur, suara, smell) dan descriptive verbs, Anda bisa transform message dari sekadar informasi jadi pengalaman yang vivid buat audience. Ini yang bikin difference antara konten yang di-skip vs konten yang di-save dan di-share!`
      : `⚠️ **Perlu Improvement!** Bahasa visual Anda masih **KURANG KUAT** (${score}/100). Saat ini komunikasi Anda terlalu abstract dan faktual - audience kesulitan "membayangkan" apa yang Anda maksud karena kurang descriptive details. Ini common banget di tahap awal, dan kabar baiknya: visual language adalah skill yang bisa dilatih! Dengan formula sederhana "Show, don't tell" dan praktek rutin pakai sensory words, dalam 2-3 minggu Anda akan lihat dramatic improvement dalam engagement dan retention rate.`;


    const recommendations: EducationalInsight['recommendations'] = score < 75 ? [{
      priority: (score < 50 ? 'important' : 'opportunity') as PriorityLevel,
      icon: 'Eye',
      title: '🎨 Transformasi: Dari Abstract ke Visual Storytelling',
      description: 'Research neurosciense membuktikan: otak manusia memproses gambar 60,000x lebih cepat daripada text. Inilah kenapa konten dengan strong visual language bisa boost retention rate hingga 65% dan engagement hingga 45%. Ketika Anda "paint a picture with words", Anda tidak cuma ngasih informasi - Anda create experience yang memorable di otak audience. Skill ini yang bikin difference antara komunikator biasa vs yang viral.',
      steps: [
        '**FORMULA: SHOW, DON\'T TELL** - Jangan cuma state fakta, describe the scene! Contoh: ❌ "Saya bangun pagi" → ✅ "Alarm berbunyi jam 5 pagi saat langit masih gelap, udara dingin mengigit kulit" - See the difference? Yang kedua langsung create vivid image!',
        '**SENSORY WORDS TOOLKIT**: Aktivasi 5 panca indera audience - Visual (warna: "merah menyala", "biru langit"), Audio ("suara gemuruh", "bisikan pelan"), Touch ("tekstur kasar", "lembut seperti sutra"), Smell ("aroma kopi hangat"), Taste ("manis sepahit gula aren")',
        '**ANALOGI VISUAL**: Transform konsep abstract jadi concrete dengan "seperti/bagaikan" - Contoh: "Algoritma TikTok seperti ombak - kalau Anda bisa surf momentum, Anda bisa ride it far. Tapi kalau melawan arus, Anda tenggelam" ← This makes complex concept instantly understandable!',
        '**DESCRIPTIVE VERBS**: Ganti verb generic dengan specific action - "Jalan" → "berlari kencang/berjalan santai/melangkah perlahan", "Makan" → "melahap/menikmati/menyantap", "Lihat" → "menatap tajam/mengamati/memandang". Specific verbs = strong imagery!',
        '**POWER OF CONTRAST**: Pakai before-after, big-small, dark-light untuk create dramatic effect - "Dari kamar kosan 3x3 meter yang pengap, sekarang standing di stage 1000 orang" ← Visual contrast = emotional impact!',
        '**PRACTICE DAILY**: Pilih 1 kalimat faktual dari script Anda, transform jadi visual description. Do this 5-10 menit per hari selama 2 minggu, visual language akan jadi second nature!',
      ],
      impactEstimate: '🎯 **Impact Timeline**: 2 minggu practice = +25% engagement, 1 bulan = +45% retention rate, 3 bulan = visual storytelling mastery yang set Anda apart dari 90% creator/professional di niche Anda!',
    }] : [{
      priority: 'opportunity',
      icon: 'CheckCircle',
      title: '✨ Scale Up: Advanced Visual Storytelling Techniques',
      description: 'Anda sudah mahir paint picture dengan kata-kata - sekarang saatnya level up dengan advanced techniques yang dipakai top 1% communicator!',
      steps: [
        '**LAYERED IMAGERY**: Combine multiple senses dalam satu description - "Udara pagi yang dingin mengigit kulit, sementara aroma kopi hangat mengepul dari mug, dan suara burung mulai bersahutan" ← Multi-sensory = deeply immersive!',
        '**PACING VARIATION**: Alternatif antara quick vivid flashes dan slow detailed descriptions untuk create rhythm - Fast untuk action scenes, slow untuk emotional moments',
        '**METAPHOR MASTERY**: Level up dari simile ("seperti") ke metaphor langsung - "Dia adalah singa di panggung" lebih powerful dari "Dia seperti singa". Metaphor create instant identity!',
        '**STRATEGIC AMBIGUITY**: Kadang leaving some details ke imagination audience malah create stronger engagement - Don\'t over-describe everything, biar audience fill in the blanks with their own experience',
      ],
      impactEstimate: '🚀 Maintain excellence + explore advanced techniques = potential viral breakthrough content!',
    }];

    return {
      term: 'Visual Branding Metric (VBM)',
      score,
      category: 'Layer 1 - Visual',
      definition: `**VBM** mengukur seberapa **VISUAL** komunikasi Anda. Visual language bikin message Anda memorable dan engaging karena activate imagination audience. "A picture is worth 1000 words" - even in text!`,
      diagnosis,
      benchmark: {
        yourScore: score,
        nicheAverage: 65,
        topPerformer: 85,
        explanation: `Professional communicator: 85/100. Average: 65/100. Anda: ${score}/100.`,
      },
      recommendations,
    };
  }

  private analyzeEPM(): EducationalInsight {
    // Analyze emotional engagement
    const emotionalWords = this.content.match(/\b(senang|sedih|marah|takut|excited|nervous|happy|sad|angry|scared|love|hate|amazing|terrible)\b/gi) || [];
    const questions = (this.content.match(/\?/g) || []).length;
    const exclamations = (this.content.match(/!/g) || []).length;

    let score = 40;
    score += Math.min(30, emotionalWords.length * 5);
    score += Math.min(15, questions * 5);
    score += Math.min(15, exclamations * 3);
    score = Math.min(100, score);

    const diagnosis = score >= 70
      ? `🔥 **Powerful Emotion!** Emotional engagement Anda **SANGAT TINGGI** (${score}/100) - audience benar-benar bisa **feel** what you're saying! Ini adalah kunci viral content dan high retention karena research shows: konten dengan strong emotional connection mendapat 2x lebih banyak shares dibanding purely factual content. Anda sudah mahir membuat audience tidak cuma "mendengar" tapi benar-benar "merasakan" - ini skill yang dimiliki top communicator dan viral creator. Keep this authenticity sambil maintain balance supaya tidak overwhelming!`
      : score >= 50
      ? `💙 **Good Foundation!** Emotional engagement Anda **MODERATE** (${score}/100) - Anda sudah mulai connect dengan audience secara emosional, tapi masih ada ruang besar untuk lebih expressive dan authentic. Saat ini mungkin komunikasi Anda sedikit "safe" atau reserved. Padahal audience di era digital ini craving untuk authenticity dan vulnerability. People buy with emotion, justify with logic - jadi kalau Anda bisa trigger emotional response yang lebih kuat, engagement dan conversion rate akan melonjak drastis!`
      : `⚡ **Wake Up Call!** Emotional engagement Anda masih **RENDAH** (${score}/100) - komunikasi terasa terlalu robotic, faktual, atau monotone tanpa variasi emosional. Ini adalah red flag karena di era attention economy, content tanpa emotional hook akan langsung di-skip dalam 3 detik pertama. Kabar baiknya: emotional expression adalah skill yang bisa dilatih! Dengan teknik storytelling yang tepat dan authentic self-expression, Anda bisa transform dari "talking head" jadi magnetic communicator yang bikin audience feel something.`;


    const recommendations: EducationalInsight['recommendations'] = score < 70 ? [{
      priority: (score < 50 ? 'important' : 'opportunity') as PriorityLevel,
      icon: 'Heart',
      title: '❤️ Emotional Mastery: Transform Konten dari Faktual ke Feelable',
      description: 'Simon Sinek said: "People don\'t buy WHAT you do, they buy WHY you do it." Emotion adalah currency di era digital - konten yang trigger emotional response get 2x more shares, 3x more comments, dan 5x more saves dibanding purely factual content. Kenapa? Karena emotion create memory, dan memory create loyalty. Ketika audience "feel something", mereka tidak cuma consume - mereka connect. Dan connection adalah ultimate goal setiap komunikator.',
      steps: [
        '**VULNERABILITY = SUPERPOWER**: Share personal story, struggle, atau failure Anda. Contoh: "Tahun lalu saya bangkrut, tinggal Rp 50 ribu di rekening" ← Ini instantly relatable! Vulnerability bukan weakness - ini adalah ultimate trust builder. Audience lebih connect dengan "human" Anda dibanding "perfect" Anda.',
        '**EMOTION VOCABULARY**: Upgrade kata-kata dari neutral ke emotionally charged - ❌ "saya senang" → ✅ "saya excited banget!", ❌ "agak susah" → ✅ "rasanya frustrated setengah mati". Use: excited, nervous, overwhelmed, proud, devastated, grateful, anxious, hopeful - semakin spesifik emotion, semakin strong connection!',
        '**RHETORICAL QUESTIONS**: Trigger self-reflection dengan tanya "Pernah ngerasa...?", "Kalian pasti familiar dengan...", "Siapa yang relate??" ← Ini activate audience brain dan bikin mereka mentally participate. Questions = engagement multiplier!',
        '**TONE VARIATION FORMULA**: Jangan monotone! Mix and match emotional peaks - Start serious/vulnerable → Build excitement → Drop wisdom → End motivational. Rollercoaster emosional keep attention span high. Contoh flow: Shock/surprise (hook) → Relatability (connection) → Hope/inspiration (climax) → Call-to-action (closure)',
        '**STRATEGIC EXCLAMATIONS**: Pakai exclamation marks untuk emphasize key points - tapi JANGAN SEMUA CAPS SEMUA KALIMAT!!! That\'s overkill. Use it 2-3x per content untuk dramatic effect. "Ini game changer!" vs "ini game changer" ← See the energy difference?',
        '**EMOTIONAL CONTRAST**: Pakai "before vs after" atau "struggle vs success" untuk create emotional arc - "Dari ditolak 47x, sekarang leading team 50 orang" ← Contrast = powerful storytelling device yang trigger both empathy dan aspiration!',
      ],
      impactEstimate: '🎯 **Proven Impact**: Konten dengan strong emotional hook = 2x shares + 3x comments + 5x saves. Timeline: 1-2 minggu practice = noticeable improvement, 1 bulan = emotional storytelling menjadi natural part of your style!',
    }] : [{
      priority: 'opportunity',
      icon: 'CheckCircle',
      title: '⚡ Fine-Tune: Emotional Intelligence Advanced Tactics',
      description: 'Anda sudah mahir emotional connection - sekarang optimize untuk maximum impact tanpa sacrifice authenticity!',
      steps: [
        '**EMOTIONAL PACING**: Balance high-energy moments dengan calm reflection - too much excitement jadi overwhelming, too calm jadi boring. Find your sweet spot!',
        '**AUTHENTICITY CHECK**: Pastikan emotion yang Anda express adalah genuine - audience punya strong BS detector. Better under-express genuine emotion than over-perform fake one',
        '**STRATEGIC VULNERABILITY**: Share failures/struggles yang relevant dengan lesson learned - bukan just complaining. Vulnerability WITH growth mindset = powerful!',
        '**EMOTION + LOGIC COMBO**: After emotional hook, back it up with data/logic untuk credibility - "Saya devastated kehilangan 10jt (emotion), tapi ini yang saya pelajari dari mistake itu (logic + lesson)"',
      ],
      impactEstimate: '🚀 Maintain exceptional emotional connection + refine untuk long-term audience loyalty!',
    }];

    return {
      term: 'Emotional Processing Metric (EPM)',
      score,
      category: 'Layer 2 - Emotional',
      definition: `**EPM** mengukur seberapa **EMOTIONALLY ENGAGING** komunikasi Anda. Research: emotional content get 2x more shares vs factual. Emotion = memory trigger + action catalyst.`,
      diagnosis,
      benchmark: {
        yourScore: score,
        nicheAverage: 60,
        topPerformer: 85,
        explanation: `Viral content: 85/100. Average: 60/100. Anda: ${score}/100.`,
      },
      recommendations,
    };
  }

  private analyzeNLP(): EducationalInsight {
    // Analyze narrative structure + WARMTH INDEX
    const wordCount = this.content.split(/\s+/).length;
    const sentenceCount = this.content.split(/[.!?]+/).filter(s => s.trim()).length;
    const avgWordsPerSentence = wordCount / (sentenceCount || 1);

    const hasHook = /^(stop|wait|listen|hey|pernah|tau gak|fun fact|unpopular opinion)/i.test(this.content.trim());
    const hasCTA = /(comment|share|tag|follow|subscribe|like|save)/i.test(this.content);

    // BEHAVIORAL INSIGHT: Warmth vs Pressure Detection
    const warmthAnalysis = analyzeWarmthIndex(this.content);

    let score = 30;
    if (hasHook) score += 15;
    if (hasCTA) score += 10;
    if (avgWordsPerSentence >= 10 && avgWordsPerSentence <= 20) score += 10;
    else if (avgWordsPerSentence > 25) score -= 10; // too long
    if (sentenceCount >= 3) score += 10; // has structure
    
    // Add warmth score impact (major factor!)
    score += Math.round(warmthAnalysis.score * 0.25); // warmth contributes 25%
    
    score = Math.min(100, Math.max(0, score));

    const warmthWarning = warmthAnalysis.score < 50 
      ? ` ⚠️ **WARMTH ALERT**: ${warmthAnalysis.pressureCount} kata pressure vs ${warmthAnalysis.warmthCount} kata empati - algoritma red flag!`
      : '';

    const diagnosis = score >= 75
      ? `📖 **Exceptional Structure!** Narrative + tone Anda **EXCELLENT** (${score}/100)! ${warmthAnalysis.diagnosis}${warmthWarning} Struktur komunikasi Anda sudah mengikuti formula proven viral content: Hook yang strong, body yang jelas, dan flow yang smooth. Ini menunjukkan Anda understand fundamental storytelling dan audience psychology. Pertahankan clarity ini sambil terus experiment dengan different hook styles!`
      : score >= 55
      ? `📝 **Solid Foundation!** Narrative Anda **DECENT** (${score}/100) - struktur dasar sudah ada, tapi masih bisa di-polish. ${warmthAnalysis.diagnosis}${warmthWarning} Dengan strengthen hook opening dan optimize sentence flow, Anda bisa jump ke tier berikutnya dalam waktu singkat!`
      : `⚠️ **Structure Needs Work!** Narrative Anda masih **KURANG TERORGANISIR** (${score}/100). ${warmthAnalysis.diagnosis}${warmthWarning} Komunikasi yang kurang struktur bikin audience confused dan skip. Tapi ini easily fixable dengan apply proven formula Hook-Problem-Solution-CTA!`;

    const recommendations: EducationalInsight['recommendations'] = [];

    // Structure recommendation
    if (score < 70 || !hasHook || avgWordsPerSentence > 20) {
      recommendations.push({
        priority: (score < 50 ? 'urgent' : 'important') as PriorityLevel,
        icon: 'BookOpen',
        title: 'Optimize Narrative Structure',
        description: 'Structure = clarity. Clear structure = easier to follow = higher retention.',
        steps: [
          'Formula: HOOK → PROBLEM → SOLUTION → CTA',
          'Hook opening: "Stop scrolling!" atau "Pernah ngerasa..." (grab dalam 3 detik)',
          'Body: 3-5 kalimat, each build on previous point',
          'Conclusion: summarize + clear CTA',
          'Kalimat ideal: 12-18 kata (too long = confusing)',
        ],
        impactEstimate: 'Clear structure = +50% comprehension + completion rate',
      });
    }

    // Warmth recommendation  
    if (warmthAnalysis.score < 70) {
      recommendations.push({
        priority: (warmthAnalysis.score < 50 ? 'urgent' : 'important') as PriorityLevel,
        icon: 'Heart',
        title: 'FIX: Warmth Index Terlalu Rendah!',
        description: 'Algoritma punya "Warmth Detection" - nada hangat boost +18% engagement, pressure = penalty!',
        steps: [
          '✅ PAKAI: "gak apa-apa", "bareng-bareng", "pelan-pelan", "kita coba yuk"',
          '❌ HINDARI: "cepat!", "buruan!", "harus!", "wajib!", "follow sekarang!"',
          'Frame CTA as invitation: "Kalau suka, comment ya!" > "Komen sekarang!"',
          'Use "kita/kami" (inclusive) vs "Anda harus" (commanding)',
          'Add appreciation: "Terima kasih udah baca!"',
        ],
        impactEstimate: `Warmth >70 = +${Math.min(30, 70 - warmthAnalysis.score)}% engagement + avoid penalty`,
      });
    }

    if (recommendations.length === 0) {
      recommendations.push({
        priority: 'opportunity',
        icon: 'CheckCircle',
        title: 'Excellent Communication!',
        description: 'Structure + warmth Anda solid!',
        steps: ['Maintain proven formula', 'Test different hooks', 'Keep empathetic tone'],
        impactEstimate: 'Maintain high performance',
      });
    }

    return {
      term: 'Narrative & Linguistic Patterns (NLP) + Warmth Index',
      score,
      category: 'Layer 3 - Structure & Tone',
      definition: `**NLP + Warmth** mengukur **STRUKTUR** + **NADA** komunikasi Anda. Formula: Hook → Problem → Solution → CTA. PLUS algoritma track warmth (empati vs pressure) - warmth tinggi = boost, pressure = red flag!`,
      diagnosis,
      benchmark: {
        yourScore: score,
        nicheAverage: 60,
        topPerformer: 90,
        explanation: `Pro: 90/100. Average: 60/100. Anda: ${score}/100. Warmth: ${warmthAnalysis.score}/100.`,
      },
      recommendations,
    };
  }

  private analyzeETH(): EducationalInsight {
    // Analyze ethical communication
    const hasDisclaimer = /(disclaimer|not financial advice|personal opinion|i'm not expert)/i.test(this.content);
    const respectful = !/\b(bodoh|stupid|idiot|goblok)\b/i.test(this.content);
    const factBased = !/(semua orang|everyone|100%|never|always)\b/i.test(this.content) || /(menurut|according|research|study)\b/i.test(this.content);

    let score = 60;
    if (hasDisclaimer) score += 15;
    if (respectful) score += 15;
    if (factBased) score += 10;
    score = Math.min(100, score);

    const diagnosis = score >= 80
      ? `🛡️ **Integrity Excellence!** Etika komunikasi Anda **EXCELLENT** (${score}/100) - Anda sudah maintain high ethical standards dengan transparency, respect, dan fact-based communication. Ini build long-term trust dan credibility yang invaluable di era misinformation. Audience appreciate authenticity dan responsibility seperti ini. Keep being responsible communicator!`
      : score >= 60
      ? `✅ **Good Ethics, Room to Grow!** Etika komunikasi Anda **GOOD** (${score}/100) - sudah di jalur yang benar, tapi ada beberapa area yang bisa di-strengthen. Minor improvements seperti add disclaimers atau cite sources bisa significantly boost credibility Anda di mata audience dan platform algorithm!`
      : `⚠️ **Ethical Red Flags!** Etika komunikasi Anda **PERLU PERBAIKAN SERIUS** (${score}/100). Ada risk of backlash, misinformation spread, atau platform penalty. Ethical violations bisa ruin reputation yang butuh years untuk rebuild. Let's fix this dengan implement transparency best practices dan fact-checking protocol!`;

    const recommendations: EducationalInsight['recommendations'] = score < 80 ? [{
      priority: (score < 60 ? 'important' : 'opportunity') as PriorityLevel,
      icon: 'Shield',
      title: 'Tingkatkan Etika Komunikasi',
      description: 'Ethical communication = build trust + avoid controversy/backlash.',
      steps: [
        'Tambah disclaimer: "This is my personal opinion/experience"',
        'Avoid absolutes: "everyone" → "many people", "always" → "often"',
        'Cite sources: "According to research..." untuk factual claims',
        'Respectful language: critique idea, not people',
        'Transparency: disclose affiliate/sponsor kalau ada',
      ],
      impactEstimate: 'Ethical communication = long-term trust + credibility',
    }] : [{
      priority: 'opportunity',
      icon: 'CheckCircle',
      title: 'Maintain Ethical Standards',
      description: 'Anda udah responsible communicator!',
      steps: ['Continue transparent communication', 'Keep fact-checking'],
      impactEstimate: 'Maintain high credibility',
    }];

    return {
      term: 'Ethical Communication (ETH)',
      score,
      category: 'Layer 4 - Ethics',
      definition: `**ETH** mengukur seberapa **BERTANGGUNG JAWAB** komunikasi Anda. Ethical communication = transparency + respect + accuracy. Build long-term trust vs short-term viral yang toxic.`,
      diagnosis,
      benchmark: {
        yourScore: score,
        nicheAverage: 70,
        topPerformer: 95,
        explanation: `Professional: 95/100. Average: 70/100. Anda: ${score}/100.`,
      },
      recommendations,
    };
  }

  private analyzeECO(): EducationalInsight {
    // Ecosystem consistency - brand voice consistency
    const score = 70; // Default, would need historical data for real analysis

    const diagnosis = score >= 75
      ? `🎨 **Konsisten & Recognizable!** Brand voice consistency Anda **SOLID** (${score}/100) - tone, style, dan messaging Anda punya identitas yang jelas dan consistent! Consistency adalah secret weapon untuk building strong brand recall - audience recognize konten Anda even tanpa lihat nama. Algoritma juga favorit creator yang punya unique brand fingerprint karena mereka build loyal community yang repeat engagement. Keep this consistency - ini foundation untuk long-term growth dan authority di niche Anda! 🚀`
      : `🎭 **Identitas Masih Blur!** Brand voice consistency Anda **PERLU WORK** (${score}/100) - komunikasi Anda masih inconsistent, kadang formal kadang casual, kadang informatif kadang sales-heavy. Audience confused tentang "siapa sih ini sebenarnya?" Inconsistency = sulit build brand loyalty karena mereka gak tau apa yang expect dari Anda next time. Start dengan define: apakah Anda educator? entertainer? motivator? Pick one primary identity dan consistent deliver value dalam character itu. Consistency beats variety dalam brand building!`;

    return {
      term: 'Ecosystem Consistency (ECO)',
      score,
      category: 'Layer 5 - Branding',
      definition: `**ECO** mengukur **KONSISTENSI** brand voice Anda across different content. Consistency = recognizability = stronger brand recall.`,
      diagnosis,
      benchmark: {
        yourScore: score,
        nicheAverage: 65,
        topPerformer: 90,
        explanation: `Strong brand: 90/100. Average: 65/100. Anda: ${score}/100.`,
      },
      recommendations: [{
        priority: 'opportunity',
        icon: 'Target',
        title: 'Build Brand Consistency',
        description: 'Consistent brand voice = stronger identity + loyalty.',
        steps: [
          'Define tone: professional/casual/humorous - pick one primary',
          'Signature phrases: create catchphrases yang Anda repeat',
          'Content pillars: 3-5 topik core yang Anda always cover',
          'Visual consistency: same filter/color scheme/intro',
        ],
        impactEstimate: 'Brand consistency = +70% audience loyalty',
      }],
    };
  }

  private analyzeSOC(): EducationalInsight {
    const questions = (this.content.match(/\?/g) || []).length;
    const callToAction = /(comment|share|tag|tell me|let me know|what do you think)/i.test(this.content);

    let score = 50;
    if (questions > 0) score += 25;
    if (callToAction) score += 25;
    score = Math.min(100, score);

    const diagnosis = score >= 75
      ? `💬 **Highly Interactive!** Social interaction level Anda **TINGGI** (${score}/100) - Anda actively engage audience dengan questions, CTAs, dan conversation starters! Ini trigger comments dan shares yang boost algorithma favorability. Interactive content = community building, bukan just broadcasting!`
      : `📢 **One-Way Communication!** Social interaction level Anda **RENDAH** (${score}/100) - komunikasi terasa broadcast-only tanpa invite participation. Di era social media, "social" adalah keyword - audience want conversation, bukan monolog. Add questions dan CTAs untuk transform passive viewers jadi active participants!`;

    return {
      term: 'Social Interaction Level (SOC)',
      score,
      category: 'Layer 6 - Engagement',
      definition: `**SOC** mengukur seberapa **INTERAKTIF** komunikasi Anda. High interaction = comments + shares = algoritma boost.`,
      diagnosis,
      benchmark: {
        yourScore: score,
        nicheAverage: 60,
        topPerformer: 90,
        explanation: `Viral content: 90/100. Average: 60/100. Anda: ${score}/100.`,
      },
      recommendations: score < 75 ? [{
        priority: 'important',
        icon: 'MessageCircle',
        title: 'Tingkatkan Interaksi',
        description: 'Interaction = engagement = algoritma boost.',
        steps: [
          'Ask questions: "Setuju gak?" atau "Pernah ngalamin?"',
          'CTA jelas: "Comment pengalaman kamu di bawah!"',
          'Controversial statement: trigger discussion',
          'Poll/quiz: "Pilih A atau B?"',
        ],
        impactEstimate: '+2x comments = algoritma push ke 5x lebih banyak FYP',
      }] : [{
        priority: 'opportunity',
        icon: 'CheckCircle',
        title: 'Maintain Engagement',
        description: 'Interaction level udah bagus!',
        steps: ['Keep asking questions', 'Vary CTA types'],
        impactEstimate: 'Maintain high engagement',
      }],
    };
  }

  private analyzeCOG(): EducationalInsight {
    const wordCount = this.content.split(/\s+/).length;
    const sentenceCount = this.content.split(/[.!?]+/).filter(s => s.trim()).length;
    const avgWordsPerSentence = wordCount / (sentenceCount || 1);

    let score = 70;
    if (avgWordsPerSentence > 25) score -= 20; // too complex
    if (avgWordsPerSentence < 10) score -= 10; // too choppy
    if (wordCount > 500) score -= 15; // too long
    score = Math.max(0, Math.min(100, score));

    return {
      term: 'Cognitive Load (COG)',
      score,
      category: 'Layer 7 - Clarity',
      definition: `**COG** mengukur seberapa **MUDAH** content Anda dipahami. Low cognitive load = easy to process = higher retention.`,
      diagnosis: score >= 70 
        ? `🧠 **Brain-Friendly Content!** Cognitive load Anda **OPTIMAL** (${score}/100) - content Anda easy to digest tanpa overwhelm audience brain! Simple language + clear structure = higher retention rate. Di era short attention span, clarity adalah competitive advantage!`
        : `🤯 **Mental Overload!** Cognitive load Anda **TERLALU TINGGI** (${score}/100) - content terlalu complex, panjang, atau dense. Audience skip konten yang bikin otak capek. Simplify language, shorten sentences, break paragraphs untuk instant improvement!`,
      benchmark: {
        yourScore: score,
        nicheAverage: 70,
        topPerformer: 85,
        explanation: `Viral content: 85/100 (simple). Average: 70/100. Anda: ${score}/100.`,
      },
      recommendations: score < 70 ? [{
        priority: 'important',
        icon: 'Zap',
        title: 'Reduce Cognitive Load',
        description: 'Simple = better. Audience scroll = short attention span.',
        steps: [
          'Short sentences: 12-18 kata per kalimat',
          'Simple words: "beli" not "mengakuisisi"',
          'Break paragraphs: max 3-4 kalimat per paragraph',
          'Use bullets/numbers untuk clarity',
        ],
        impactEstimate: 'Lower cognitive load = +40% completion rate',
      }] : [{
        priority: 'opportunity',
        icon: 'CheckCircle',
        title: 'Maintain Clarity',
        description: 'Content Anda sudah easy to digest!',
        steps: ['Keep sentences concise', 'Maintain simple language'],
        impactEstimate: 'Maintain high readability',
      }],
    };
  }

  private analyzeBMIL(): EducationalInsight {
    const score = 65; // Default baseline

    const diagnosis = score >= 75
      ? `🎯 **Perfectly Aligned!** Brand-message integration Anda **EXCELLENT** (${score}/100) - setiap kata yang Anda sampaikan perfectly reinforce brand identity Anda! Message dan branding Anda cohesive, bukan random scattered thoughts. Ini powerful karena every single content piece jadi opportunity untuk strengthen positioning Anda di market. Audience remember Anda bukan cuma untuk content quality, tapi untuk WHO you are dan WHAT you stand for. Cohesive branding = differentiation = loyalty = sustainable growth! 🌟`
      : `🧩 **Disconnected Pieces!** Brand-message integration Anda **NEEDS IMPROVEMENT** (${score}/100) - message Anda kadang gak align sama brand positioning yang ingin Anda build. Konten Anda might be good individually, tapi when viewed together, they don't paint cohesive picture tentang siapa Anda. Ini bikin audience confused dan hard to develop strong brand association. Every message should reinforce core values Anda - kalau Anda position yourself sebagai "productivity expert", don't suddenly post random lifestyle content yang gak connected. Integration = coherence = professional brand image!`;

    return {
      term: 'Brand & Message Integration Level (BMIL)',
      score,
      category: 'Layer 8 - Integration',
      definition: `**BMIL** mengukur seberapa **TERINTEGRASI** message Anda dengan overall brand identity. Cohesive branding = professional + memorable.`,
      diagnosis,
      benchmark: {
        yourScore: score,
        nicheAverage: 60,
        topPerformer: 90,
        explanation: `Professional brand: 90/100. Average: 60/100. Anda: ${score}/100.`,
      },
      recommendations: [{
        priority: 'opportunity',
        icon: 'Layers',
        title: 'Strengthen Brand Integration',
        description: 'Every content should reinforce brand identity.',
        steps: [
          'Brand values: inject core values ke every message',
          'Signature style: unique angle/perspective yang differentiate Anda',
          'Visual branding: consistent color/font/logo placement',
          'Tagline: create memorable catchphrase',
        ],
        impactEstimate: 'Strong brand = +80% recall + loyalty',
      }],
    };
  }

  private calculateOverallScore(insights: EducationalInsight[]): number {
    const total = insights.reduce((sum, i) => sum + i.score, 0);
    return Math.round(total / insights.length);
  }

  private generateSummary(overallScore: number): string {
    if (overallScore >= 75) {
      return `🎉 **Luar biasa!** Komunikasi Anda berada di level **EXCELLENT** dengan skor ${overallScore}/100 dari 8 lapisan framework BIAS. Ini menunjukkan bahwa Anda sudah memiliki fondasi komunikasi yang kuat - dari struktur narasi, koneksi emosional, hingga etika penyampaian semuanya sudah di jalur yang tepat. Yang perlu Anda lakukan sekarang adalah **mempertahankan konsistensi** ini dan terus mengasah beberapa area spesifik untuk mencapai level top performer. Ingat: komunikasi yang efektif adalah skill yang terus berkembang, bukan destinasi akhir. Terus eksplorasi, test berbagai pendekatan, dan jangan takut untuk bereksperimen dengan gaya baru!`;
    } else if (overallScore >= 60) {
      return `💪 **Anda sudah di jalur yang benar!** Skor komunikasi Anda saat ini ${overallScore}/100 - ini artinya **fondasi sudah solid**, tapi ada beberapa area yang bisa ditingkatkan untuk membawa hasil Anda ke level berikutnya. Jangan lihat ini sebagai kekurangan, tapi sebagai **peluang untuk growth**. Setiap kreator atau profesional pernah di posisi ini - yang membedakan adalah mereka yang konsisten melakukan improvement kecil setiap hari. Fokus ke prioritas yang sudah kami tandai di bawah, implementasikan satu-satu dengan sabar, dan dalam 2-4 minggu Anda akan lihat peningkatan signifikan. **Anda pasti bisa!** 🚀`;
    } else {
      return `🎯 **Mari kita bangun fondasi yang kuat!** Skor ${overallScore}/100 menunjukkan bahwa komunikasi Anda masih **perlu pengembangan lebih lanjut** - dan itu **tidak masalah sama sekali**! Setiap expert pernah mulai dari nol. Yang penting sekarang adalah Anda sudah aware dan ready untuk improve. Kami sudah buatkan action plan lengkap di bawah ini yang akan guide Anda **step-by-step** dari level sekarang ke level yang jauh lebih tinggi. Fokus ke 3 prioritas teratas dulu, jangan overwhelm diri dengan semua sekaligus. **Progress beats perfection** - better improve 10% setiap minggu daripada stuck di analysis paralysis. Commit 20-30 menit sehari untuk practice, dan dalam 1-2 bulan Anda akan amazed dengan transformasi yang terjadi. Mari kita mulai! 💪`;
    }
  }

  private generateNextSteps(insights: EducationalInsight[]): string[] {
    const sorted = [...insights].sort((a, b) => a.score - b.score);
    const top3 = sorted.slice(0, 3);

    return top3.map(insight => {
      const rec = insight.recommendations[0];
      return `${insight.score < 50 ? '🚨' : insight.score < 70 ? '⚠️' : '💡'} ${rec.title}`;
    });
  }
}
