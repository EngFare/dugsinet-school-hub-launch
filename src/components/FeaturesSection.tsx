import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, GraduationCap, CreditCard, Building, Globe } from 'lucide-react';
import { Language } from '@/components/LanguageToggle';
import { translations } from '@/data/translations';

interface FeaturesSectionProps {
  language: Language;
}

export const FeaturesSection = ({ language }: FeaturesSectionProps) => {
  const t = translations[language];

  const features = [
    {
      icon: GraduationCap,
      title: t.feature1Title,
      description: t.feature1Description,
    },
    {
      icon: CreditCard,
      title: t.feature2Title,
      description: t.feature2Description,
    },
    {
      icon: Building,
      title: t.feature3Title,
      description: t.feature3Description,
    },
    {
      icon: Globe,
      title: t.feature4Title,
      description: t.feature4Description,
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t.featuresTitle}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.featuresSubtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
            {t.learnMore}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};