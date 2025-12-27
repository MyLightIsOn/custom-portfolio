import { Portfolio } from '@/components/Portfolio';
import { defaultContent } from '@/config/content';

export default function SlidePage() {
  return <Portfolio content={defaultContent} />;
}

export async function generateStaticParams() {
  const slides = [
    { slide: 'home' },
    { slide: 'about' },
    { slide: 'education' },
    ...defaultContent.projects.map((project) => ({ slide: project.id })),
  ];

  return slides;
}
