import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/languageContext';
import { useSession } from '@/lib/sessionContext';
import { Coins, Globe, BookOpen, Home, Mic, Briefcase, Zap, Sparkles, ExternalLink } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import { Link, useLocation } from 'wouter';
import biasLogo from '@assets/bias logo_1762016709581.jpg';

export function BiasHeader() {
  const { language, toggleLanguage, t } = useLanguage();
  const { session } = useSession();
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src={biasLogo} 
            alt="BiAS²³ Pro Logo" 
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>

        {/* Navigation Menu - Reordered: Social Pro First */}
        <div className="flex items-center gap-1">
          <Link href="/">
            <Button
              variant={location === '/' ? 'default' : 'ghost'}
              size="sm"
              className="gap-1.5"
              data-testid="button-nav-home"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{t('Home', 'Beranda')}</span>
            </Button>
          </Link>
          <Link href="/social-media-pro">
            <Button
              variant={location === '/social-media-pro' ? 'default' : 'ghost'}
              size="sm"
              className="gap-1.5"
              data-testid="button-nav-social-pro"
            >
              <SiTiktok className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{t('Social Pro', 'Social Pro')}</span>
            </Button>
          </Link>
          <Link href="/creator">
            <Button
              variant={location === '/creator' ? 'default' : 'ghost'}
              size="sm"
              className="gap-1.5"
              data-testid="button-nav-creator"
            >
              <Mic className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{t('Communication', 'Komunikasi')}</span>
            </Button>
          </Link>
          <Link href="/academic">
            <Button
              variant={location === '/academic' ? 'default' : 'ghost'}
              size="sm"
              className="gap-1.5"
              data-testid="button-nav-academic"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{t('Academic', 'Akademik')}</span>
            </Button>
          </Link>
          <Link href="/hybrid">
            <Button
              variant={location === '/hybrid' ? 'default' : 'ghost'}
              size="sm"
              className="gap-1.5"
              data-testid="button-nav-hybrid"
            >
              <Zap className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{t('Hybrid', 'Hybrid')}</span>
            </Button>
          </Link>
          <Link href="/library">
            <Button
              variant={location === '/library' ? 'default' : 'ghost'}
              size="sm"
              className="gap-1.5"
              data-testid="button-nav-library"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{t('Library', 'Library')}</span>
            </Button>
          </Link>
        </div>

        {/* ChatGPT Button */}
        <Button
          onClick={() => window.open('https://chatgpt.com/g/g-68f512b32ef88191985d7e15f828ae7d-bias-pro-behavioral-intelligence-audit-system', '_blank', 'noopener,noreferrer')}
          size="sm"
          data-testid="button-chatgpt"
          className="gap-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white border-0 shadow-md hover:shadow-lg transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span className="hidden md:inline font-medium">
            {language === 'id' ? 'Chat GPT' : 'Chat GPT'}
          </span>
          <ExternalLink className="w-3 h-3" />
        </Button>

        {/* Right Side: Language + Token Badge */}
        <div className="flex items-center gap-3">

          {/* Free Unlimited Badge */}
          {session && (
            <Badge variant="secondary" className="gap-1.5 hidden sm:flex" data-testid="badge-token-count">
              <Coins className="w-3.5 h-3.5" />
              <span className="font-mono text-xs">
                {t('Free', 'Gratis')}
              </span>
            </Badge>
          )}

          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            title={t('Switch to Indonesian', 'Ganti ke Bahasa Inggris')}
            data-testid="button-language-toggle"
            className="gap-1"
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs font-medium">{language.toUpperCase()}</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
