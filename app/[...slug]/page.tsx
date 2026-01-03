import { Portfolio } from '@/components/Portfolio';
import { portfolioContent } from '@/config/content';

export default function SlidePage() {
  return <Portfolio content={portfolioContent} />;
}

export async function generateStaticParams() {
  const params: { slug: string[] }[] = [
    { slug: ['home'] },
  ];

  // Add experience pages
  if (portfolioContent.experience && portfolioContent.experience.length > 0) {
    // First slide: /experience
    params.push({ slug: ['experience'] });

    // Additional slides: /experience/1, /experience/2, etc.
    if (portfolioContent.experience.length > 1) {
      portfolioContent.experience.forEach((_, index) => {
        if (index === 0) return; // Already added /experience
        params.push({ slug: ['experience', String(index)] });
      });
    }
  }

  // Add project pages with new URL structure: /projects/project-id or /projects/project-id/slideIndex
  portfolioContent.projects.forEach((project) => {
    // First slide (overview): /projects/project-id
    params.push({ slug: ['projects', project.id] });

    // Additional slides: /projects/project-id/1, /projects/project-id/2, etc.
    if (project.slides && project.slides.length > 0) {
      project.slides.forEach((_, index) => {
        params.push({ slug: ['projects', project.id, String(index + 1)] });
      });
    }
  });

  return params;
}
