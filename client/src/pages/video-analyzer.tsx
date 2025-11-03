import { useState } from 'react';
import { useLanguage } from '@/lib/languageContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MetricCard } from '@/components/MetricCard';
import { RadarChart8Layer } from '@/components/RadarChart8Layer';
import { VideoUploadAnalyzer } from '@/components/VideoUploadAnalyzer';
import { 
  Play, Eye, Heart, MessageCircle, Share2, TrendingUp, 
  CheckCircle2, AlertCircle, Zap, Target, Video, Clock,
  ThumbsUp, Users, Award, Sparkles, Upload, Link2
} from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import type { BiasAnalysisResult } from '@shared/schema';

export default function VideoAnalyzer() {
  const { language, t } = useLanguage();
  const [videoUrl, setVideoUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [inputMode, setInputMode] = useState<'url' | 'upload'>('upload');
  const [currentAnalysis, setCurrentAnalysis] = useState<BiasAnalysisResult | null>(null);

  const mockAnalysis = {
    title: 'Cara Jualan di TikTok Shop untuk Pemula',
    views: 45200,
    likes: 3800,
    comments: 342,
    shares: 156,
    duration: '02:45',
    engagementRate: 9.2,
    retentionRate: 68,
    averageWatchTime: '01:52',
    layers: [
      { layer: 'VBM Visual Branding', score: 8, feedback: 'Strong visual quality with good lighting', feedbackId: 'Kualitas visual kuat dengan pencahayaan baik' },
      { layer: 'EPM Emotional Processing', score: 7, feedback: 'Good emotional connection with audience', feedbackId: 'Koneksi emosional baik dengan audiens' },
      { layer: 'NLP Narrative & Language', score: 6, feedback: 'Clear narrative but could be more engaging', feedbackId: 'Narasi jelas tapi bisa lebih engaging' },
      { layer: 'ETH Ethical Communication', score: 9, feedback: 'Excellent ethical standards', feedbackId: 'Standar etika sangat baik' },
      { layer: 'ECO Ecosystem Awareness', score: 8, feedback: 'Good understanding of platform dynamics', feedbackId: 'Pemahaman platform baik' },
      { layer: 'SOC Social Intelligence', score: 5, feedback: 'Interaction could be improved', feedbackId: 'Interaksi bisa ditingkatkan' },
      { layer: 'COG Cognitive Load', score: 7, feedback: 'Good pacing and clarity', feedbackId: 'Kecepatan dan kejelasan baik' },
      { layer: 'BMIL Micro-Indicators', score: 8, feedback: 'Strong behavioral signals', feedbackId: 'Sinyal behavioral kuat' },
    ],
    checklist: [
      { id: 1, item: 'Hook dalam 3 detik pertama', checked: true, priority: 'high' },
      { id: 2, item: 'Gunakan caption yang menarik', checked: true, priority: 'high' },
      { id: 3, item: 'Tambahkan musik trending', checked: false, priority: 'medium' },
      { id: 4, item: 'Gunakan hashtag yang relevan (3-5)', checked: true, priority: 'high' },
      { id: 5, item: 'Akhiri dengan clear CTA', checked: false, priority: 'high' },
      { id: 6, item: 'Optimalkan lighting & framing', checked: true, priority: 'medium' },
      { id: 7, item: 'Periksa volume audio', checked: true, priority: 'medium' },
      { id: 8, item: 'Tambahkan text overlay untuk poin penting', checked: false, priority: 'low' },
    ],
  };

  const priorityColors = {
    high: 'text-pink-500 border-pink-500/30',
    medium: 'text-yellow-500 border-yellow-500/30',
    low: 'text-cyan-400 border-cyan-400/30',
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-400/10 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Video className="w-8 h-8 text-pink-500" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              {t('Video Analyzer', 'Video Analyzer')}
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl">
            {t(
              'Deep behavioral analysis for your TikTok videos. Get detailed metrics, editing checklist, and optimization recommendations.',
              'Analisis behavioral mendalam untuk video TikTok Anda. Dapatkan metrik detail, checklist editing, dan rekomendasi optimasi.'
            )}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Input Mode Selector */}
        <Card className="bg-[#141414] border-gray-800">
          <CardContent className="pt-6">
            <Tabs value={inputMode} onValueChange={(v) => setInputMode(v as typeof inputMode)}>
              <TabsList className="grid w-full grid-cols-2 bg-[#1E1E1E] border border-gray-700">
                <TabsTrigger 
                  value="upload"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-pink-600 data-[state=active]:text-white"
                  data-testid="tab-input-upload"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {t('Upload Video', 'Upload Video')}
                </TabsTrigger>
                <TabsTrigger 
                  value="url"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
                  data-testid="tab-input-url"
                >
                  <Link2 className="w-4 h-4 mr-2" />
                  {t('Paste URL', 'Paste URL')}
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>

        {/* Video Upload Mode */}
        {inputMode === 'upload' && (
          <VideoUploadAnalyzer onAnalysisComplete={setCurrentAnalysis} mode="creator" />
        )}

        {/* Video URL Input Mode */}
        {inputMode === 'url' && (
          <Card className="bg-[#141414] border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-pink-500" />
                {t('Analyze Video from URL', 'Analisis Video dari URL')}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {t('Paste TikTok video URL for comprehensive analysis', 'Paste URL video TikTok untuk analisis komprehensif')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <SiTiktok 
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-500" 
                  />
                  <Input
                    placeholder="https://www.tiktok.com/@username/video/..."
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    className="pl-12 bg-[#1E1E1E] border-gray-700 focus:border-pink-500 text-white"
                    data-testid="input-video-url"
                  />
                </div>
                <Button
                  onClick={() => setIsAnalyzing(true)}
                  disabled={!videoUrl || isAnalyzing}
                  className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 shadow-lg shadow-pink-500/20 px-8"
                  data-testid="button-analyze-video"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  {isAnalyzing ? t('Analyzing...', 'Menganalisis...') : t('Analyze', 'Analisis')}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Video Preview & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <Card className="bg-[#141414] border-gray-800 overflow-hidden">
              <div className="aspect-[9/16] max-h-[600px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Play className="w-20 h-20 mx-auto text-pink-500 opacity-50" />
                    <p className="text-gray-400">{t('Video preview will appear here', 'Preview video akan muncul di sini')}</p>
                  </div>
                </div>
                {/* Mock Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{mockAnalysis.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-300">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {mockAnalysis.duration}
                    </span>
                    <Badge className="bg-pink-500/20 text-pink-400 border-pink-500/30">
                      <SiTiktok className="w-3 h-3 mr-1" />
                      TikTok
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Metrics */}
          <div className="space-y-4">
            <Card className="bg-[#141414] border-gray-800 p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                {t('Performance', 'Performa')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">{t('Views', 'Tayangan')}</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-white">45.2K</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{t('Likes', 'Suka')}</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-white">3.8K</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{t('Comments', 'Komentar')}</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-white">342</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm">{t('Shares', 'Share')}</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-white">156</span>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-pink-500/10 to-cyan-400/10 border-pink-500/30 p-6">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent font-mono mb-2">
                  9.2%
                </div>
                <p className="text-sm text-gray-400">{t('Engagement Rate', 'Engagement Rate')}</p>
                <Badge className="mt-3 bg-green-500/20 text-green-400 border-green-500/30">
                  {t('Excellent', 'Sangat Baik')}
                </Badge>
              </div>
            </Card>
          </div>
        </div>

        {/* Performance Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title={t('Avg Watch Time', 'Rata-rata Tonton')}
            value="1:52"
            subtitle={t('Out of 2:45 total', 'Dari total 2:45')}
            icon={Clock}
            progress={68}
            color="pink"
          />
          <MetricCard
            title={t('Retention Rate', 'Retention Rate')}
            value="68%"
            subtitle={t('Above average', 'Di atas rata-rata')}
            icon={TrendingUp}
            progress={68}
            change={5.2}
            trend="up"
            color="cyan"
          />
          <MetricCard
            title={t('Like Rate', 'Like Rate')}
            value="8.4%"
            subtitle={t('Strong engagement', 'Engagement kuat')}
            icon={ThumbsUp}
            progress={84}
            change={2.1}
            trend="up"
            color="purple"
          />
          <MetricCard
            title={t('Share Rate', 'Share Rate')}
            value="0.3%"
            subtitle={t('Can improve', 'Bisa ditingkatkan')}
            icon={Share2}
            progress={30}
            change={-0.5}
            trend="down"
            color="yellow"
          />
        </div>

        {/* Tabs: Analysis, Checklist, Recommendations */}
        <Tabs defaultValue="analysis" className="space-y-6">
          <TabsList className="bg-[#1E1E1E] border border-gray-700 p-1">
            <TabsTrigger 
              value="analysis" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-pink-600 data-[state=active]:text-white"
              data-testid="tab-analysis"
            >
              <Award className="w-4 h-4 mr-2" />
              {t('8-Layer Analysis', 'Analisis 8-Layer')}
            </TabsTrigger>
            <TabsTrigger 
              value="checklist"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
              data-testid="tab-checklist"
            >
              <CheckCircle2 className="w-4 h-4 mr-2" />
              {t('Editing Checklist', 'Checklist Editing')}
            </TabsTrigger>
            <TabsTrigger 
              value="recommendations"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              data-testid="tab-recommendations"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {t('Recommendations', 'Rekomendasi')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analysis">
            <RadarChart8Layer 
              layers={mockAnalysis.layers}
              title={t('Behavioral Intelligence Score', 'Skor Behavioral Intelligence')}
              description={t('Comprehensive 8-layer analysis of video content', 'Analisis 8-layer komprehensif dari konten video')}
            />
          </TabsContent>

          <TabsContent value="checklist">
            <Card className="bg-[#141414] border-gray-800">
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                  {t('Pre-Upload Editing Checklist', 'Checklist Editing Sebelum Upload')}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {t('Follow these steps to maximize video performance', 'Ikuti langkah-langkah ini untuk maksimalkan performa video')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockAnalysis.checklist.map((item) => (
                  <div 
                    key={item.id}
                    className={`flex items-start gap-3 p-4 rounded-lg border ${priorityColors[item.priority as keyof typeof priorityColors]} bg-white/5`}
                    data-testid={`checklist-item-${item.id}`}
                  >
                    <Checkbox 
                      checked={item.checked}
                      className="mt-1"
                      data-testid={`checkbox-item-${item.id}`}
                    />
                    <div className="flex-1">
                      <p className={`font-medium ${item.checked ? 'line-through text-gray-500' : 'text-white'}`}>
                        {item.item}
                      </p>
                      <Badge 
                        variant="outline" 
                        className={`mt-2 text-xs ${priorityColors[item.priority as keyof typeof priorityColors]}`}
                      >
                        {item.priority === 'high' && t('High Priority', 'Prioritas Tinggi')}
                        {item.priority === 'medium' && t('Medium Priority', 'Prioritas Sedang')}
                        {item.priority === 'low' && t('Low Priority', 'Prioritas Rendah')}
                      </Badge>
                    </div>
                    {item.checked ? (
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-yellow-500" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-pink-500/10 to-transparent border-pink-500/30">
                <CardHeader>
                  <CardTitle className="text-pink-400 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    {t('Strengths', 'Kekuatan')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                    <p className="text-sm text-gray-300">
                      {t('Strong visual quality with professional lighting setup', 'Kualitas visual kuat dengan pencahayaan profesional')}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                    <p className="text-sm text-gray-300">
                      {t('Good hook in first 3 seconds captures attention', 'Hook bagus di 3 detik pertama menarik perhatian')}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                    <p className="text-sm text-gray-300">
                      {t('High retention rate shows engaging content', 'Retention rate tinggi menunjukkan konten engaging')}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-500/10 to-transparent border-yellow-500/30">
                <CardHeader>
                  <CardTitle className="text-yellow-400 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    {t('Improvements', 'Perbaikan')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <p className="text-sm text-gray-300">
                      {t('Add clear CTA at end to boost shares', 'Tambahkan CTA jelas di akhir untuk tingkatkan share')}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <p className="text-sm text-gray-300">
                      {t('Use trending audio to increase discoverability', 'Gunakan audio trending untuk tingkatkan discoverability')}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <p className="text-sm text-gray-300">
                      {t('Improve social intelligence layer with more engagement triggers', 'Tingkatkan layer social intelligence dengan trigger engagement lebih banyak')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
