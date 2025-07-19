import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BookOpen, 
  Users, 
  Settings, 
  DollarSign, 
  Home, 
  Truck 
} from 'lucide-react';
import { Language } from '@/components/LanguageToggle';
import { translations } from '@/data/translations';

interface ModulesSectionProps {
  language: Language;
}

export const ModulesSection = ({ language }: ModulesSectionProps) => {
  const t = translations[language];

  const modules = [
    {
      icon: BookOpen,
      title: t.academicModule,
      description: t.academicDescription,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Users,
      title: t.studentModule,
      description: t.studentDescription,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Settings,
      title: t.adminModule,
      description: t.adminDescription,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: DollarSign,
      title: t.financialModule,
      description: t.financialDescription,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: Home,
      title: t.hostelModule,
      description: t.hostelDescription,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Truck,
      title: t.transportModule,
      description: t.transportDescription,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
  ];

  return (
    <section id="modules" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t.modulesTitle}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.modulesSubtitle}
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3 ${module.bgColor}`}>
                  <module.icon className={`h-6 w-6 ${module.color}`} />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {module.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground">
                  {module.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};