import { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ModulesSection } from '@/components/ModulesSection';
import { PaymentSection } from '@/components/PaymentSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { Language } from '@/components/LanguageToggle';

const Index = () => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      <main>
        <HeroSection language={language} />
        <FeaturesSection language={language} />
        <ModulesSection language={language} />
        <PaymentSection language={language} />
        <CTASection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Index;
