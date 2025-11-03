import { useState } from 'react';
import { useLanguage } from '@/lib/languageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { VideoUploadAnalyzer } from '@/components/VideoUploadAnalyzer';
import { AnalysisInput } from '@/components/AnalysisInput';
import { AnalysisResults } from '@/components/AnalysisResults';
import { Briefcase, FileText, Zap } from 'lucide-react';
import type { BiasAnalysisResult } from '@shared/schema';

export default function AcademicAnalysis() {
  const { language, t } = useLanguage();
  const [inputMode, setInputMode] = useState<'form' | 'upload'>('form');
  const [currentAnalysis, setCurrentAnalysis] = useState<BiasAnalysisResult | null>(null);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-blue-500" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              {t('Academic Mode', 'Mode Akademik')}
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl">
            {t(
              'Evaluate professional communication for leadership, public speaking, presentations, and team contexts.',
              'Evaluasi komunikasi profesional untuk kepemimpinan, public speaking, presentasi, dan konteks tim.'
            )}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Input Mode Selector */}
        <Card className="bg-[#141414] border-gray-800">
          <CardContent className="pt-6">
            <Tabs value={inputMode} onValueChange={(v) => setInputMode(v as typeof inputMode)}>
              <TabsList className="grid w-full grid-cols-2 bg-[#1E1E1E] border border-gray-700">
                <TabsTrigger 
                  value="form"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
                  data-testid="tab-input-form"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  {t('Text Input', 'Input Teks')}
                </TabsTrigger>
                <TabsTrigger 
                  value="upload"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-teal-400 data-[state=active]:text-white"
                  data-testid="tab-input-upload"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  {t('Video Upload', 'Upload Video')}
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>

        {/* Analysis Input - Form Mode */}
        {inputMode === 'form' && (
          <AnalysisInput onAnalysisComplete={setCurrentAnalysis} />
        )}

        {/* Analysis Input - Upload Mode */}
        {inputMode === 'upload' && (
          <VideoUploadAnalyzer onAnalysisComplete={setCurrentAnalysis} mode="academic" />
        )}

        {/* Analysis Results */}
        {currentAnalysis && (
          <div data-results-container>
            <AnalysisResults result={currentAnalysis} />
          </div>
        )}
      </div>
    </div>
  );
}
