import { Button } from '@/components/ui/button';
import { ArrowRight, Users, CheckCircle } from 'lucide-react';
import { Language } from '@/components/LanguageToggle';
import { translations } from '@/data/translations';

interface CTASectionProps {
  language: Language;
}

export const CTASection = ({ language }: CTASectionProps) => {
  const t = translations[language];

  const benefits = [
    "30-day free trial",
    "No setup fees",
    "24/7 support",
    "Data migration included",
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-hover opacity-90"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Content */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
              {t.ctaTitle}
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              {t.ctaDescription}
            </p>
          </div>

          {/* Benefits List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/90">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Users className="mr-2 h-5 w-5" />
              {t.ctaButton}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Schedule a Demo
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="pt-8">
            <p className="text-primary-foreground/70 text-sm">
              Join 500+ schools already using Dugsinet • No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};