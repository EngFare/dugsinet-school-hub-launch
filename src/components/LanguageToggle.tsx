import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export type Language = 'en' | 'so';

interface LanguageToggleProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export const LanguageToggle = ({ currentLanguage, onLanguageChange }: LanguageToggleProps) => {
  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex rounded-lg border bg-background p-1">
        <Button
          variant={currentLanguage === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onLanguageChange('en')}
          className="text-xs px-3 py-1 h-7"
        >
          EN
        </Button>
        <Button
          variant={currentLanguage === 'so' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onLanguageChange('so')}
          className="text-xs px-3 py-1 h-7"
        >
          SO
        </Button>
      </div>
    </div>
  );
};