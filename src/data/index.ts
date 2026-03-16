import type { Stat, Project, Service, Testimonial, TeamMember } from '../types';

export const stats: Stat[] = [
  { id: '1', value: 25, suffix: '+', label: 'Tahun Pengalaman' },
  { id: '2', value: 500, suffix: '+', label: 'Proyek Selesai' },
  { id: '3', value: 300, suffix: '+', label: 'Klien Puas' },
  { id: '4', value: 150, suffix: '+', label: 'Tenaga Ahli' },
];

export const featuredProjects: Project[] = [
  {
    id: '1',
    slug: 'gedung-perkantoran-xyz',
    title: 'Gedung Perkantoran XYZ Tower',
    category: 'gedung',
    client: 'PT XYZ Development',
    location: 'Jakarta Selatan',
    year: 2024,
    duration: '24 bulan',
    value: 'Rp 150 Miliar',
    description: 'Pembangunan gedung perkantoran bertingkat 25 lantai dengan fasilitas modern dan ramah lingkungan. Proyek ini mencakup desain arsitektur kontemporer, sistem MEP lengkap, dan sertifikasi green building.',
    shortDescription: 'Gedung perkantoran modern 25 lantai dengan sertifikasi green building.',
    images: [
      'https://picsum.photos/seed/project1/800/600',
      'https://picsum.photos/seed/project1b/800/600',
    ],
    featured: true,
    tags: ['Gedung Tinggi', 'Green Building', 'Modern']
  },
  {
    id: '2',
    slug: 'perumahan-elite-garden',
    title: 'Perumahan Elite Garden Residence',
    category: 'gedung',
    client: 'Elite Property Group',
    location: 'BSD City, Tangerang',
    year: 2023,
    duration: '36 bulan',
    value: 'Rp 200 Miliar',
    description: 'Pembangunan kompleks perumahan elite dengan 150 unit rumah dan fasilitas clubhouse.',
    shortDescription: 'Kompleks perumahan elite 150 unit dengan fasilitas lengkap.',
    images: [
      'https://picsum.photos/seed/project2/800/600',
      'https://picsum.photos/seed/project2b/800/600',
    ],
    featured: true,
    tags: ['Perumahan', 'Elite', 'Modern']
  },
  {
    id: '3',
    slug: 'renovasi-mall-metropolitan',
    title: 'Renovasi Mall Metropolitan',
    category: 'renovasi',
    client: 'Metropolitan Retail',
    location: 'Jakarta Pusat',
    year: 2023,
    duration: '8 bulan',
    value: 'Rp 45 Miliar',
    description: 'Renovasi total mall dengan penambahan area retail dan modernisasi fasilitas.',
    shortDescription: 'Renovasi total mall dengan modernisasi fasilitas lengkap.',
    images: [
      'https://picsum.photos/seed/project3/800/600',
      'https://picsum.photos/seed/project3b/800/600',
    ],
    featured: true,
    tags: ['Renovasi', 'Commercial', 'Retail']
  },
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    id: '4',
    slug: 'jalan-tol-abc',
    title: 'Pembangunan Jalan Tol ABC',
    category: 'infrastruktur',
    client: 'Kementerian PUPR',
    location: 'Jawa Barat',
    year: 2022,
    duration: '48 bulan',
    value: 'Rp 2 Triliun',
    description: 'Pembangunan jalan tol sepanjang 35 km dengan 5 interchange dan 2 jembatan besar.',
    shortDescription: 'Jalan tol 35 km dengan infrastruktur lengkap.',
    images: ['https://picsum.photos/seed/project4/800/600'],
    featured: false,
    tags: ['Infrastruktur', 'Jalan Tol', 'Strategis']
  },
  {
    id: '5',
    slug: 'pabrik-manufacturing-abc',
    title: 'Pabrik Manufacturing ABC',
    category: 'industri',
    client: 'ABC Manufacturing',
    location: 'Cikarang, Bekasi',
    year: 2024,
    duration: '18 bulan',
    value: 'Rp 80 Miliar',
    description: 'Pembangunan pabrik manufacturing dengan luas 5 hektar.',
    shortDescription: 'Pabrik modern 5 hektar dengan sistem otomasi.',
    images: ['https://picsum.photos/seed/project5/800/600'],
    featured: false,
    tags: ['Industri', 'Manufacturing', 'Otomasi']
  },
  {
    id: '6',
    slug: 'rumah-sakit-sejahtera',
    title: 'Rumah Sakit Sejahtera',
    category: 'gedung',
    client: 'Sejahtera Healthcare',
    location: 'Bandung',
    year: 2023,
    duration: '30 bulan',
    value: 'Rp 120 Miliar',
    description: 'Pembangunan rumah sakit tipe A dengan 300 tempat tidur.',
    shortDescription: 'RS tipe A 300 bed dengan fasilitas medis lengkap.',
    images: ['https://picsum.photos/seed/project6/800/600'],
    featured: true,
    tags: ['Healthcare', 'RS', 'Fasilitas Lengkap']
  },
];

export const services: Service[] = [
  {
    id: '1',
    slug: 'konstruksi-gedung',
    title: 'Konstruksi Gedung',
    shortDescription: 'Pembangunan gedung komersial, perkantoran, dan residensial dengan kualitas terbaik.',
    fullDescription: 'Layanan konstruksi gedung mencakup perencanaan, desain, dan pembangunan gedung komersial, perkantoran, perumahan, dan fasilitas publik.',
    icon: 'Building2',
    features: ['Gedung Perkantoran', 'Kompleks Perumahan', 'Fasilitas Publik', 'Gedung Komersial']
  },
  {
    id: '2',
    slug: 'renovasi-retrofit',
    title: 'Renovasi & Retrofit',
    shortDescription: 'Renovasi dan penguatan struktur bangunan existing untuk memperpanjang umur pakai.',
    fullDescription: 'Layanan renovasi dan retrofit mencakup perbaikan, penguatan struktur, dan modernisasi bangunan existing.',
    icon: 'RefreshCw',
    features: ['Renovasi Total', 'Penguatan Struktur', 'Modernisasi Fasilitas', 'Upgrade Sistem']
  },
  {
    id: '3',
    slug: 'konsultasi-desain',
    title: 'Konsultasi & Desain',
    shortDescription: 'Layanan konsultasi arsitektur dan engineering untuk proyek konstruksi Anda.',
    fullDescription: 'Tim konsultan kami siap membantu dari tahap perencanaan, desain, hingga pengawasan teknis.',
    icon: 'PencilRuler',
    features: ['Desain Arsitektur', 'Perencanaan Struktur', 'MEP Design', 'Pengawasan Teknis']
  },
  {
    id: '4',
    slug: 'manajemen-proyek',
    title: 'Manajemen Proyek',
    shortDescription: 'Manajemen proyek profesional untuk memastikan proyek selesai tepat waktu dan anggaran.',
    fullDescription: 'Kami menyediakan layanan manajemen proyek komprehensif meliputi perencanaan, pengendalian, dan koordinasi.',
    icon: 'ClipboardList',
    features: ['Project Planning', 'Cost Control', 'Quality Assurance', 'Risk Management']
  },
  {
    id: '5',
    slug: 'konstruksi-infrastruktur',
    title: 'Konstruksi Infrastruktur',
    shortDescription: 'Pembangunan infrastruktur seperti jalan, jembatan, dan fasilitas umum.',
    fullDescription: 'Spesialis konstruksi infrastruktur dengan pengalaman dalam proyek jalan tol, jembatan, dan fasilitas umum.',
    icon: 'HardHat',
    features: ['Jalan & Jembatan', 'Saluran & Drainase', 'Fasilitas Umum', 'Infrastruktur Utilitas']
  },
  {
    id: '6',
    slug: 'pengawasan-proyek',
    title: 'Pengawasan Proyek',
    shortDescription: 'Layanan pengawasan teknis dan supervisi konstruksi profesional.',
    fullDescription: 'Tim pengawas berpengalaman kami memastikan setiap aspek proyek memenuhi standar kualitas dan keselamatan.',
    icon: 'Eye',
    features: ['Quality Control', 'Safety Inspection', 'Progress Monitoring', 'Technical Audit']
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Tabranitect memberikan hasil yang melebihi ekspektasi kami. Proyek gedung perkantoran kami selesai tepat waktu dengan kualitas prima.',
    clientName: 'Budi Santoso',
    clientTitle: 'Direktur Utama',
    company: 'PT XYZ Development',
    rating: 5
  },
  {
    id: '2',
    quote: 'Profesionalisme tim Tabranitect sangat mengesankan. Mereka berhasil menyelesaikan renovasi mall kami tanpa mengganggu operasional.',
    clientName: 'Siti Rahayu',
    clientTitle: 'Project Manager',
    company: 'Metropolitan Retail',
    rating: 5
  },
  {
    id: '3',
    quote: 'Kami sangat puas dengan hasil pembangunan perumahan Elite Garden. Desain modern dan kualitas konstruksi yang luar biasa.',
    clientName: 'Ahmad Wijaya',
    clientTitle: 'CEO',
    company: 'Elite Property Group',
    rating: 5
  },
];

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'John Doe',
    position: 'Direktur Utama',
    photo: 'https://picsum.photos/seed/team1/400/400',
    bio: 'Memiliki pengalaman 30 tahun di industri konstruksi.',
    certifications: ['SI-001', 'SKK Muda']
  },
  {
    id: '2',
    name: 'Jane Smith',
    position: 'Kepala Operasional',
    photo: 'https://picsum.photos/seed/team2/400/400',
    bio: 'Spesialis manajemen proyek berskala besar.',
    certifications: ['PMP', 'SKK Madya']
  },
  {
    id: '3',
    name: 'Michael Chen',
    position: 'Kepala Teknik',
    photo: 'https://picsum.photos/seed/team3/400/400',
    bio: 'Ahli struktur dengan pengalaman internasional.',
    certifications: ['SE', 'SKK Utama']
  },
  {
    id: '4',
    name: 'Sarah Williams',
    position: 'Manajer Proyek',
    photo: 'https://picsum.photos/seed/team4/400/400',
    bio: 'Berdedikasi untuk menghasilkan proyek berkualitas.',
    certifications: ['PMP', 'LEED AP']
  },
];

export const companyInfo = {
  name: 'Tabranitect',
  tagline: 'Membangun Masa Depan dengan Fondasi yang Kuat',
  description: 'Perusahaan konstruksi profesional dengan pengalaman lebih dari 25 tahun dalam pembangunan gedung, infrastruktur, dan renovasi.',
  founded: 1999,
  employees: 150,
  office: 'Jl. Konstruksi No. 123, Jakarta Selatan, Indonesia',
  phone: '+62 21 1234 5678',
  email: 'info@tabranitect.com',
  hours: 'Senin - Jumat: 08.00 - 17.00',
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    youtube: '#',
  }
};
