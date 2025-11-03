import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/languageContext';
import type { BiasLayerResult } from '@shared/schema';

interface RadarChart8LayerProps {
  layers: BiasLayerResult[];
  title?: string;
  description?: string;
}

export function RadarChart8Layer({ layers, title, description }: RadarChart8LayerProps) {
  const { language, t } = useLanguage();

  const data = layers.map(layer => ({
    layer: layer.layer.split(' ')[0],
    score: layer.score * 10,
    fullMark: 100,
  }));

  return (
    <Card className="bg-[#141414] border-gray-800">
      <CardHeader>
        <CardTitle className="bg-gradient-to-r from-pink-500 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          {title || t('8-Layer Behavioral Analysis', 'Analisis Behavioral 8-Layer')}
        </CardTitle>
        {description && (
          <CardDescription className="text-gray-400">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={data}>
            <PolarGrid stroke="#374151" />
            <PolarAngleAxis 
              dataKey="layer" 
              tick={{ fill: '#9CA3AF', fontSize: 12, fontWeight: 600 }}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 100]} 
              tick={{ fill: '#6B7280', fontSize: 10 }}
            />
            <Radar
              name={t('Score', 'Skor')}
              dataKey="score"
              stroke="#FF1654"
              fill="#FF1654"
              fillOpacity={0.2}
              strokeWidth={2}
              dot={{ fill: '#FF1654', strokeWidth: 2, r: 4, stroke: '#FFFFFF' }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
