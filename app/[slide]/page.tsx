import { Portfolio } from '@/components/Portfolio';
import { portfolioContent } from '@/config/content';

export default function SlidePage() {
  return <Portfolio content={portfolioContent} />;
}

export async function generateStaticParams() {
  const params = [
    { slide: 'home' },
    { slide: 'about' },
    { slide: 'education' },
  ];

  // Add project pages with their sub-slides
  portfolioContent.projects.forEach((project) => {
    // First slide (overview)
    params.push({ slide: project.id });
    
    // Additional slides if they exist
    if (project.slides && project.slides.length > 0) {
      project.slides.forEach((_, index) => {
        params.push({ slide: `${project.id}/${index + 1}` });
      });
    }
  });

  return params;
}
