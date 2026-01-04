import { Portfolio } from '@/components/Portfolio';
import { portfolioContent } from '@/config/content';

export default function SlidePage() {
  return <Portfolio content={portfolioContent} />;
}

export async function generateStaticParams() {
  const params = [
    { slide: 'home' },
    { slide: 'experience' },
  ];

  // Add experience slides if they exist
  if (portfolioContent.experience && portfolioContent.experience.length > 1) {
    portfolioContent.experience.forEach((_, index) => {
      if (index === 0) return;
      params.push({ slide: `experience/${index}` });
    });
  }

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
