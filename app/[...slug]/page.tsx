import { Portfolio } from '@/components/Portfolio';
import { portfolioContent } from '@/config/content';

export default function SlidePage() {
  return <Portfolio content={portfolioContent} />;
}

export async function generateStaticParams() {
  const params: { slug: string[] }[] = [
    { slug: ['home'] },
  ];

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
