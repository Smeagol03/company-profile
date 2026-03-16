import { useParams } from 'react-router';

export const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-white">
      <div className="text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
          Detail Proyek
        </h1>
        <p className="font-body text-concrete">
          Slug: {slug}
        </p>
        <p className="font-body text-concrete max-w-md mx-auto mt-4">
          Halaman ini sedang dalam pengembangan.
        </p>
      </div>
    </div>
  );
};
