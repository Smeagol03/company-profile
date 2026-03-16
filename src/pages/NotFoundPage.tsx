import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal">
      <div className="text-center px-4">
        <div className="mb-8">
          <span className="font-display text-8xl md:text-9xl font-bold text-gold">404</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-warm-white mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p className="font-body text-concrete-light max-w-md mx-auto mb-8">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin telah dipindahkan atau dihapus.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-charcoal font-body font-semibold px-6 py-3 rounded-sm transition-colors"
          >
            <Home size={18} />
            Kembali ke Beranda
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold/10 font-body font-semibold px-6 py-3 rounded-sm transition-colors"
          >
            <ArrowLeft size={18} />
            Halaman Sebelumnya
          </button>
        </div>
      </div>
    </div>
  );
};
