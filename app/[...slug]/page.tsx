import { Portfolio } from '@/components/Portfolio';
import { defaultContent } from '@/config/content';

export default function SlidePage() {
  return <Portfolio content={defaultContent} />;
}

export async function generateStaticParams() {
  const params: { slug: string[] }[] = [
    { slug: ['home'] },
    { slug: ['about'] },
    { slug: ['education'] },
  ];

  // Add project pages with their sub-slides
  defaultContent.projects.forEach((project) => {
    // First slide (overview)
    params.push({ slug: [project.id] });
    
    // Additional slides if they exist
    if (project.slides && project.slides.length > 0) {
      project.slides.forEach((_, index) => {
        params.push({ slug: [project.id, String(index + 1)] });
      });
    }
  });

  return params;
}
