import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Shield, Zap, TrendingUp } from 'lucide-react';
import { Language } from '@/components/LanguageToggle';
import { translations } from '@/data/translations';

interface PaymentSectionProps {
  language: Language;
}

export const PaymentSection = ({ language }: PaymentSectionProps) => {
  const t = translations[language];

  const paymentFeatures = [
    {
      icon: CheckCircle,
      title: t.paymentFeature1,
      description: "Secure API integration for Ethiopian banking",
    },
    {
      icon: Shield,
      title: t.paymentFeature2,
      description: "Trusted mobile money solutions",
    },
    {
      icon: Zap,
      title: t.paymentFeature3,
      description: "Instant digital receipts and confirmations",
    },
    {
      icon: TrendingUp,
      title: t.paymentFeature4,
      description: "Monitor all transactions in real-time",
    },
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                {t.paymentTitle}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t.paymentDescription}
              </p>
            </div>

            {/* Payment Logos */}
            <div className="flex items-center space-x-6">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-semibold text-sm">
                Chappa
              </div>
              <div className="bg-secondary/10 text-secondary px-4 py-2 rounded-lg font-semibold text-sm">
                Ebirr
              </div>
              <div className="text-muted-foreground text-sm">+ More coming soon</div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {paymentFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground text-sm">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-xs">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};