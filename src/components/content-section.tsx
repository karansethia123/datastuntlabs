import { Bolt } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

interface ContentSectionProps {
  feature: {
    title: string;
    subtitle: string;
    pointers: {
        name: string;
        text: string;
    }[];
    cta: string;
    ctaHref: string;
    image: string
},
  mockupAlt: string;
  reverse?: boolean;
}

export const ContentSection = ({ 
  feature,
  mockupAlt, 
  reverse = false 
}: ContentSectionProps) => {
  return (
    <section className="py-4 px-4">
      <div className="container mx-auto max-w-7xl">
        <Card className="p-8 bg-card border border-border min-h-64">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Content */}
            <div className={reverse ? 'lg:col-start-2' : ''}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                {feature.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {feature.subtitle}
              </p>
              <ul className="space-y-4">
                {feature.pointers.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className='rounded-full p-2'>
                      <Bolt className="size-4 text-primary shrink-0 mt-0.5" />
                    </span>
                    <span className="text-muted-foreground">{feature.name}</span>
                    <span className="text-muted-foreground text-sm">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Mockup */}
            <div className={reverse ? 'lg:col-start-1' : ''}>
              <div className="rounded-2xl overflow-hidden">
                <Image 
                  width="500"
                  height="500"
                  src={feature.image} 
                  alt={mockupAlt}
                  className="object-cover h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
