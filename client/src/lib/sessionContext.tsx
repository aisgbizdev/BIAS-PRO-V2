import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Session } from '@shared/schema';

export type BiasMode = 'creator' | 'academic' | 'hybrid' | 'social';

interface SessionContextType {
  session: Session | null;
  mode: BiasMode;
  setMode: (mode: BiasMode) => void;
  updateSession: (session: Session) => void;
  isFreeUser: boolean;
  hasAnalysis: boolean;
  setHasAnalysis: (hasAnalysis: boolean) => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [mode, setMode] = useState<BiasMode>('creator');
  const [hasAnalysis, setHasAnalysis] = useState(false);

  useEffect(() => {
    // Initialize session
    const initSession = async () => {
      let sessionId = localStorage.getItem('bias-session-id');
      
      const response = await fetch('/api/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId }),
      });
      
      const data = await response.json();
      setSession(data);
      
      if (!sessionId) {
        localStorage.setItem('bias-session-id', data.sessionId);
      }
    };
    
    initSession();
  }, []);

  const updateSession = (newSession: Session) => {
    setSession(newSession);
  };

  const isFreeUser = session ? session.freeRequestsUsed < 3 : true;

  return (
    <SessionContext.Provider value={{ session, mode, setMode, updateSession, isFreeUser, hasAnalysis, setHasAnalysis }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within SessionProvider');
  }
  return context;
}
