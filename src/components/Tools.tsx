import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Palette, Table2, Layout } from 'lucide-react';

const tools = [
  {
    title: 'CapCut',
    description: 'Video editing and short-form content production',
    icon: <Video className='w-5 h-5' />,
  },
  {
    title: 'Canva',
    description: 'Graphic design, thumbnails, and social media creatives',
    icon: <Palette className='w-5 h-5' />,
  },
  {
    title: 'Google Sheets',
    description:
      'Content planning, analytics tracking, and performance monitoring',
    icon: <Table2 className='w-5 h-5' />,
  },
  {
    title: 'Notion',
    description:
      'Content calendar management, idea organization, and workflow systems.',
    icon: <Layout className='w-5 h-5' />,
  },
];

export function Tools() {
  return (
    <div className='space-y-8'>
      <div className='space-y-2'>
        <h2 className='text-3xl font-bold tracking-tight'>Tools & Platforms</h2>
        <p className='text-muted-foreground text-lg'>
          To create, manage, and optimize my content, I use:
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {tools.map((tool) => (
          <Card
            key={tool.title}
            className='border-border/50 bg-card hover:border-primary/50 transition-colors shadow-none'
          >
            <CardHeader className='pb-2'>
              <div className='p-2 w-fit rounded-lg bg-primary/10 text-primary mb-2'>
                {tool.icon}
              </div>
              <CardTitle className='text-lg'>{tool.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {tool.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
