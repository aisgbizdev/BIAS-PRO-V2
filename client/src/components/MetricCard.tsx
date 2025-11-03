import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { LucideIcon } from 'lucide-react';
import { useLanguage } from '@/lib/languageContext';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
  illustrationUrl?: string;
  progress?: number;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
  color?: 'pink' | 'cyan' | 'purple' | 'yellow';
}

export function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  illustrationUrl,
  progress,
  change,
  trend,
  color = 'pink'
}: MetricCardProps) {
  const { t } = useLanguage();

  const colorClasses = {
    pink: {
      border: 'border-pink-500/50',
      glow: 'hover:shadow-[0_0_30px_rgba(255,22,84,0.2)]',
      gradient: 'from-pink-500 to-pink-600',
      text: 'text-pink-500',
      progress: 'bg-pink-500',
    },
    cyan: {
      border: 'border-cyan-400/50',
      glow: 'hover:shadow-[0_0_30px_rgba(0,245,255,0.2)]',
      gradient: 'from-cyan-400 to-cyan-500',
      text: 'text-cyan-400',
      progress: 'bg-cyan-400',
    },
    purple: {
      border: 'border-purple-500/50',
      glow: 'hover:shadow-[0_0_30px_rgba(167,139,250,0.2)]',
      gradient: 'from-purple-500 to-purple-600',
      text: 'text-purple-500',
      progress: 'bg-purple-500',
    },
    yellow: {
      border: 'border-yellow-500/50',
      glow: 'hover:shadow-[0_0_30px_rgba(255,184,0,0.2)]',
      gradient: 'from-yellow-500 to-yellow-600',
      text: 'text-yellow-500',
      progress: 'bg-yellow-500',
    },
  };

  const colors = colorClasses[color];

  return (
    <Card 
      className={`bg-[#141414] border ${colors.border} hover:${colors.border} ${colors.glow} transition-all duration-300 p-6 rounded-3xl overflow-hidden`}
      data-testid={`card-metric-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-400 mb-1">{title}</p>
          <p 
            className={`text-4xl font-bold font-mono bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}
            data-testid={`text-value-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {value}
          </p>
          {subtitle && (
            <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
          )}
        </div>
        {illustrationUrl ? (
          <div className={`w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0`}>
            <img 
              src={illustrationUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        ) : Icon ? (
          <div className={`p-3 rounded-xl bg-gradient-to-br ${colors.gradient} bg-opacity-10`}>
            <Icon className={`w-6 h-6 ${colors.text}`} />
          </div>
        ) : null}
      </div>

      {progress !== undefined && (
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">{t('Progress', 'Progres')}</span>
            <span className={colors.text}>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      )}

      {change !== undefined && (
        <div className="flex items-center gap-2 mt-3">
          {trend === 'up' && (
            <span className="text-xs text-green-400 flex items-center gap-1">
              ↑ +{Math.abs(change)}%
            </span>
          )}
          {trend === 'down' && (
            <span className="text-xs text-red-400 flex items-center gap-1">
              ↓ {change}%
            </span>
          )}
          {trend === 'neutral' && (
            <span className="text-xs text-gray-400">
              {change}%
            </span>
          )}
        </div>
      )}
    </Card>
  );
}
