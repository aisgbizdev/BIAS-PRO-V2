// Behavioral Insights Library - Extracted from TikTok/IG/YouTube best practices
// Educational insights for visual, audio, and engagement behavior

export interface BehavioralStandard {
  category: string;
  metric: string;
  ideal: string;
  why: string;
  tips: string[];
}

// VISUAL BEHAVIOR STANDARDS
export const VISUAL_BEHAVIOR: BehavioralStandard[] = [
  {
    category: 'Eye Contact',
    metric: '70-80% camera focus',
    ideal: 'Tatapan ke kamera minimal 70% durasi video',
    why: 'Eye contact bikin koneksi emosional dengan audience. Algoritma track ini - video dengan eye contact kuat retention nya 40% lebih tinggi.',
    tips: [
      'Bayangin lagi ngobrol 1-on-1 dengan sahabat Anda',
      'Jangan lihat layar/preview terus - fokus ke lensa',
      'Kalau baca script, posisikan di sebelah kamera (bukan di bawah)',
      'Latihan: rekam 10 detik tanpa lihat ke mana-mana, cuma ke kamera',
    ],
  },
  {
    category: 'Expression',
    metric: 'Natural > Forced',
    ideal: 'Ekspresi alami sesuai emosi, jangan overacting',
    why: 'Algoritma bisa detect "forced smile" vs "natural smile" dari micro-expression antar frame. Senyum palsu = engagement turun 25%.',
    tips: [
      'Senyum HANYA saat Anda genuinely merasa happy/excited',
      'Ekspresi tenang > ekspresi berlebihan',
      'Jangan senyum setiap kalimat - bikin keliatan fake',
      'Test: rekam tanpa senyum dulu, terus rekam sambil senyum - compare mana yang lebih authentic',
    ],
  },
  {
    category: 'Gesture',
    metric: 'Sync dengan kata-kata',
    ideal: 'Gerakan tangan mengikuti intonasi dan isi pembicaraan',
    why: 'Gesture yang sinkron bikin video lebih engaging dan mudah dipahami. Tapi gesture cepat/menutupi wajah = red flag.',
    tips: [
      'Gesture lembut dan perlahan - jangan kayak lagi panik',
      'Tangan gak boleh menutupi wajah',
      'Gunakan gesture untuk emphasize poin penting aja',
      'Natural beats choreographed - jangan forced',
    ],
  },
  {
    category: 'Lighting',
    metric: 'Key light depan, no backlight',
    ideal: 'Cahaya dari depan/samping depan agar wajah jelas',
    why: 'Backlight (cahaya dari belakang) bikin wajah gelap. Algoritma gak bisa baca ekspresi Anda = distribusi turun.',
    tips: [
      'Golden hour (jam 5-6 sore) = best natural light',
      'Indoor: rekam dekat jendela, hadap ke cahaya',
      'Kalau pake lampu: taruh 45° depan wajah Anda',
      'Hindari cahaya dari atas (overhead lamp) - bikin shadow jelek',
    ],
  },
  {
    category: 'Background',
    metric: 'Netral & rapi',
    ideal: 'Background polos atau tertata rapi, no distraction',
    why: 'Background ramai/berantakan = audience focus terpecah. Algoritma juga track ini - latar flicker/bergerak = visual discomfort.',
    tips: [
      'Warna netral: putih, krem, abu-abu, cokelat kayu',
      'Hindari neon, brand logo besar, atau benda bergerak',
      'Rapiin dulu sebelum rekam - keliatan lebih profesional',
      'Kalau di luar: cari spot yang clean, minim distraction',
    ],
  },
  {
    category: 'Frame Composition',
    metric: 'Eye level, rule of thirds',
    ideal: 'Kamera sejajar mata, wajah di 1/3 atas frame',
    why: 'Angle rendah = keliatan dominan/intimidating. Angle tinggi = keliatan lemah. Eye level = equal conversation.',
    tips: [
      'Taruh kamera/phone setinggi mata Anda',
      'Wajah di 1/3 atas frame (rule of thirds)',
      'Jangan terlalu dekat (claustrophobic) atau terlalu jauh (lost connection)',
      'Posisi tengah frame - balance kiri-kanan',
    ],
  },
];

// AUDIO BEHAVIOR STANDARDS
export const AUDIO_BEHAVIOR: BehavioralStandard[] = [
  {
    category: 'Warmth Index',
    metric: '>0.85 (hangat & empatik)',
    ideal: 'Nada suara hangat, supportive, gak pressure',
    why: 'Algoritma punya "Warmth Detection" - nada hangat = engagement +18%. Nada agresif/pressure = red flag.',
    tips: [
      'Bayangin lagi nemenin temen yang lagi down - nada Anda pasti otomatis lembut',
      'Volume sedang (70-80dB) - jangan teriak, jangan bisik',
      'Pitch natural (4-6dB variance) - naik turun ringan aja',
      'Senyum saat ngomong = otomatis bikin nada lebih hangat',
    ],
  },
  {
    category: 'Clarity',
    metric: '>90%, noise <10%',
    ideal: 'Suara jernih, minim background noise',
    why: 'Noise tinggi = audience cepet skip. Video dengan clarity <80% jarang masuk FYP.',
    tips: [
      'Pakai mic eksternal (game changer) - clip-on mic murah tapi efek gede',
      'Rekam di ruang tenang - matiin AC, kipas, TV',
      'Jarak mic ke mulut: 15-20cm (terlalu dekat = over-peak)',
      'Test dulu: rekam 10 detik, dengar pakai earphone - cek ada noise gak',
    ],
  },
  {
    category: 'Music Balance',
    metric: 'Musik 30% volume vs suara',
    ideal: 'Background music supporting, bukan overpowering',
    why: 'Musik terlalu keras = suara Anda ketutupan = clarity turun = engagement drop 30%.',
    tips: [
      'Volume musik: 30% dari volume suara utama',
      'Gunakan musik dengan tempo 60-90 BPM (calm & focused)',
      'Hindari musik dengan vocal/lirik (distract dari kata-kata Anda)',
      'Lower musik saat Anda ngomong poin penting',
    ],
  },
  {
    category: 'Empathy Words',
    metric: 'Hangat > Perintah',
    ideal: 'Kata-kata supportive, bukan commanding',
    why: 'Kata empati trigger positive emotion = algorithm boost. Kata tekanan = pressure signal = distribusi turun.',
    tips: [
      '✅ PAKAI: "gak apa-apa", "bareng-bareng", "pelan-pelan aja", "kita coba yuk"',
      '❌ HINDARI: "cepat!", "buruan!", "harus!", "follow sekarang!"',
      'Frame CTA sebagai invitation, bukan demand',
      'Contoh: "Kalau suka, comment pengalaman kamu ya!" > "Komen sekarang!"',
    ],
  },
  {
    category: 'Pitch Stability',
    metric: '4-6dB variance (natural)',
    ideal: 'Naik-turun ringan, jangan monoton atau over-energy',
    why: 'Monoton = boring = low retention. Over-energy (>10dB) = keliatan fake = penalti.',
    tips: [
      'Natural conversation tone - bayangin lagi cerita ke temen',
      'Emphasize kata penting dengan slight pitch raise',
      'Jangan flat terus (robot) atau high terus (panik)',
      'Latihan: rekam sambil duduk santai vs berdiri excited - compare',
    ],
  },
];

// ENGAGEMENT BEHAVIOR STANDARDS (for Live)
export const ENGAGEMENT_BEHAVIOR: BehavioralStandard[] = [
  {
    category: 'Response Speed',
    metric: '<5 detik',
    ideal: 'Balas comment/chat dalam 5 detik',
    why: 'Response cepat = Engagement Responsiveness Index tinggi = algoritma boost live Anda ke lebih banyak orang.',
    tips: [
      'Siapkan mental: live = full focus ke audience',
      'Jangan sibuk lihat gift dulu - prioritas jawab chat',
      'Sebut nama orang yang comment: "Terima kasih Budi!"',
      'Kalau banyak banget: acknowledge grup: "Wah rame banget guys, makasih semua!"',
    ],
  },
  {
    category: 'Interaction Density',
    metric: '10+ per menit',
    ideal: 'Minimal 10 interaksi (comment/gift/question) per menit',
    why: 'Live yang sepi interaction = algoritma stop push. High interaction = viral live.',
    tips: [
      'Ajak engagement: "Ada yang pernah ngalamin ini?"',
      'Polling: "Comment 1 kalau setuju, 2 kalau enggak"',
      'Shoutout: "Halo yang dari Jakarta! Mana suaranya?"',
      'Games ringan: "Tebak ini apa - jawaban di comment!"',
    ],
  },
  {
    category: 'No Dead Air',
    metric: '<10 detik silence',
    ideal: 'Jangan diam lebih dari 10 detik',
    why: 'Dead air = audience keluar = live drop exposure. Algoritma track ini real-time.',
    tips: [
      'Siapkan talking points sebelum live',
      'Kalau stuck: "Oke, sambil nunggu ada yang mau tanya?"',
      'Music background subtle kalau Anda perlu mikir sebentar',
      'Filler yang OK: "Hmm menarik nih..." sambil baca comment',
    ],
  },
  {
    category: 'Natural CTA',
    metric: 'Invitation > Demand',
    ideal: 'Ajak dengan lembut, jangan paksa',
    why: 'CTA agresif = red flag "manipulation" = exposure turun 20%.',
    tips: [
      '✅ PAKAI: "Kalau kalian suka, tap layar pelan-pelan ya"',
      '✅ PAKAI: "Terima kasih buat yang udah follow!"',
      '❌ HINDARI: "AYO FOLLOW! FOLLOW! FOLLOW!"',
      '❌ HINDARI: "Kasih gift dulu baru aku lanjut"',
    ],
  },
  {
    category: 'Personalization',
    metric: 'Sebut nama, jawab spesifik',
    ideal: 'Response personal, bukan template',
    why: 'Template berulang = bot detection = live ditahan. Personal response = authentic = boost.',
    tips: [
      'Baca nama yang comment: "Hai Sarah, thanks udah join!"',
      'Jawab pertanyaan spesifik, jangan "Oke makasih"',
      'Variasi response - jangan copy-paste jawaban',
      'Acknowledge kontribusi: "Pertanyaan bagus nih dari Rizky!"',
    ],
  },
];

// CONTENT STRUCTURE STANDARDS (Platform-specific)
export const CONTENT_STRUCTURE = {
  tiktok: {
    hookDuration: '3 detik',
    idealDuration: '7-15 detik',
    maxDuration: '60 detik',
    cutFrequency: 'Setiap 2-3 detik',
    postingFrequency: '4-7 video per minggu',
    bestTimes: ['7-9 PM weekdays', '1-3 PM weekend'],
    hookFormula: [
      'Pattern Interrupt: gerakan tiba-tiba atau shocking visual',
      'Open Loop: "Stop scrolling! Ini yang bikin gw..."',
      'Text Overlay: "WAIT!" atau "WARNING!" di frame 1',
      'Jangan mulai dengan "Halo guys" - langsung ke value',
    ],
    tips: [
      'Hook = 50% viral potential - invest waktu di 3 detik pertama',
      'Fast cuts = retention tinggi (algorithm favorit)',
      'Trending sound = 2x lebih besar masuk FYP',
      'Hashtag strategy: 3 niche + 2 trending',
    ],
  },
  instagram: {
    hookDuration: '3 detik',
    idealDuration: '15-30 detik',
    maxDuration: '90 detik',
    cutFrequency: 'Setiap 3-4 detik',
    postingFrequency: '3-5 reels per minggu',
    bestTimes: ['6-8 PM weekdays', '11 AM-1 PM weekend'],
    hookFormula: [
      'Visual Hook: aesthetic/warna eye-catching',
      'Text Hook: "You need to see this..."',
      'Value Proposition di 3 detik pertama',
      'Face on camera = 30% more engagement',
    ],
    tips: [
      'Aesthetic matters - color grading boost 25%',
      'Carousel + Reel combo = max reach',
      'Instagram favorit format tutorial/transformation',
      'Hashtag: 5-10 max (3 niche + 2-3 trending + location)',
    ],
  },
  youtube: {
    hookDuration: '5 detik',
    idealDuration: '60-90 detik (Shorts)',
    maxDuration: '3 menit',
    cutFrequency: 'Setiap 5-7 detik',
    postingFrequency: '2-3 shorts per minggu',
    bestTimes: ['12-3 PM', '7-10 PM'],
    hookFormula: [
      'Problem Statement: "Struggling with..."',
      'Curiosity Gap: "Here\'s what nobody tells you..."',
      'Benefit Promise: "This will change how you..."',
      'Longer explanation OK - audience lebih patient',
    ],
    tips: [
      'YouTube Shorts audience lebih patient - bisa 60-90 detik',
      'Educational content performs best',
      'Thumbnail + Title penting even untuk Shorts',
      'Call to action: "Subscribe untuk part 2"',
    ],
  },
};

// HELPER: Get behavioral insights by category
export function getBehavioralInsights(category: 'visual' | 'audio' | 'engagement'): BehavioralStandard[] {
  switch (category) {
    case 'visual':
      return VISUAL_BEHAVIOR;
    case 'audio':
      return AUDIO_BEHAVIOR;
    case 'engagement':
      return ENGAGEMENT_BEHAVIOR;
    default:
      return [];
  }
}

// HELPER: Get platform-specific content structure
export function getContentStructure(platform: 'tiktok' | 'instagram' | 'youtube') {
  return CONTENT_STRUCTURE[platform];
}

// WARMTH vs PRESSURE WORD DETECTION
export const WARMTH_WORDS = [
  'gak apa-apa', 'pelan-pelan', 'bareng-bareng', 'santai', 'ayo coba',
  'kita', 'bersama', 'yuk', 'terima kasih', 'makasih', 'appreciate',
  'love', 'support', 'semangat', 'keren', 'bagus banget', 'mantap',
];

export const PRESSURE_WORDS = [
  'cepat', 'buruan', 'sekarang', 'harus', 'wajib', 'jangan sampai',
  'rugi', 'kalau gak', 'ayo dong', 'follow dulu', 'kasih gift',
  'bantu', 'tolong', 'pliss', 'please', 'must', 'need to',
];

export function analyzeWarmthIndex(text: string): {
  score: number;
  warmthCount: number;
  pressureCount: number;
  diagnosis: string;
} {
  const lowerText = text.toLowerCase();
  
  const warmthCount = WARMTH_WORDS.filter(word => lowerText.includes(word)).length;
  const pressureCount = PRESSURE_WORDS.filter(word => lowerText.includes(word)).length;
  
  // Score: warmth boosts, pressure reduces
  let score = 50 + (warmthCount * 10) - (pressureCount * 15);
  score = Math.max(0, Math.min(100, score));
  
  let diagnosis = '';
  if (score >= 80) {
    diagnosis = 'Nada komunikasi Anda HANGAT dan SUPPORTIVE! Ini bikin audience feel safe dan connected.';
  } else if (score >= 60) {
    diagnosis = 'Komunikasi Anda cukup baik, tapi bisa lebih empathetic dengan tambah kata-kata supportive.';
  } else if (score >= 40) {
    diagnosis = 'Ada unsur pressure di komunikasi Anda. Audience might feel pushed, bukan invited.';
  } else {
    diagnosis = 'BAHAYA! Nada Anda terlalu commanding/aggressive. Ini red flag untuk algoritma - distribusi bakal turun.';
  }
  
  return { score, warmthCount, pressureCount, diagnosis };
}
