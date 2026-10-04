import { projectDetails } from './project-details';

export const profile = {
  name: 'Robi Aulia Kurniawan',
  role: 'Full Stack Developer',
  email: 'robiaulia.k@gmail.com',
  location: 'Jambi, Indonesia',
  github: 'https://github.com/robisb15',
  linkedin: 'https://www.linkedin.com/in/robi-aulia-kurniawan-684722275/',
  cv: '/cv-robi-aulia-kurniawan.pdf',
};

export const experience = [
  {
    company: 'Anugerah Group Jambi', role: 'Fullstack Developer · Freelance',
    date: 'Juli 2026 - Sekarang', mark: 'AG',
    summary: 'Pengembangan OTS Audit untuk web dan mobile, dari RESTful API dan RBAC hingga database dan deployment.',
    stack: 'Next.js / NestJS / Flutter / PostgreSQL',
  },
  {
    company: 'Diskominfo Tebo', role: 'Programmer',
    date: 'Januari 2024 - Desember 2025', mark: 'DT',
    summary: 'Membangun dan memelihara sistem layanan publik, integrasi SSO, RESTful API, serta deployment pada server Linux.',
    stack: 'Laravel / MySQL / RESTful API / Linux',
  },
];

export const education = [
  {
    company: 'Universitas Dinamika Bangsa', role: 'Teknik Informatika',
    date: 'September 2019 - Februari 2023', mark: 'DB',
    summary: 'Pendidikan Teknik Informatika di Universitas Dinamika Bangsa.',
    stack: 'Jambi, Indonesia',
  },
];

export const skillGroups = [
  { name: 'Frontend', skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML & CSS', 'Tailwind CSS', 'Bootstrap'] },
  { name: 'Backend & API', skills: ['PHP', 'Laravel', 'CodeIgniter', 'Node.js', 'NestJS', 'RESTful API'] },
  { name: 'Database & security', skills: ['MySQL', 'PostgreSQL', 'Prisma ORM', 'Auth.js', 'JWT', 'Keycloak', 'SSO & RBAC'] },
  { name: 'Mobile & infrastructure', skills: ['Flutter', 'Dart', 'Docker', 'Linux', 'VPS', 'Vercel', 'Cloudflare', 'LAN & WiFi'] },
];

export const projects = [
  { name: 'Web Desa Platform', image: 'sidomulyo', url: 'https://sidomulyo-tebo.desa.id/', category: 'Layanan publik', tags: ['Next.js', 'Multi-tenant'], description: 'Platform website desa untuk profil, berita, transparansi anggaran, dan publikasi UMKM. Setiap desa memiliki website resminya sendiri.', color: 'yellow' },
  { name: 'PPID Tebo', image: 'ppid', url: 'https://ppidv2.tebokab.go.id/', category: 'Layanan publik', tags: ['Informasi publik', 'Portal web'], description: 'Portal keterbukaan informasi publik untuk regulasi, permohonan informasi, pengaduan, dan publikasi dokumen pemerintah.', color: 'lime' },
  { name: 'Ayunda Tebo', image: 'ayunda', url: 'https://ayunda.tebokab.go.id/', category: 'Layanan publik', tags: ['Dukcapil', 'E-Government'], description: 'Layanan administrasi kependudukan online untuk pengajuan akta kelahiran, KIA, kartu keluarga, dan pelacakan proses layanan.', color: 'peach' },
  { name: 'Nakertrans Tebo', image: 'nakertrans', url: 'https://nakertrans.tebokab.go.id/', category: 'Layanan publik', tags: ['Ketenagakerjaan', 'Portal web'], description: 'Website ketenagakerjaan dengan informasi pelatihan, regulasi, dan integrasi layanan lowongan kerja bagi masyarakat.', color: 'yellow' },
  { name: 'SIDMD', image: 'dmd', url: 'https://dmd.tebokab.go.id/', category: 'Layanan publik', tags: ['Kesehatan', 'Penjadwalan'], description: 'Sistem layanan kesehatan desa untuk jadwal dokter masuk dusun, edukasi masyarakat, dan informasi layanan medis.', color: 'lime' },
  { name: 'SIGA', image: 'siga', url: 'https://siga.tebokab.go.id/', category: 'Data & pelaporan', tags: ['Dashboard', 'Data sektoral'], description: 'Dashboard data gender dan anak untuk pengelolaan data sektoral dan penyusunan kebijakan berbasis data pemerintah daerah.', color: 'peach' },
  { name: 'SiPPULAN', image: 'lpju', url: 'https://lpju.tebokab.go.id/', category: 'Data & pelaporan', tags: ['Pelaporan lokasi', 'Ticketing'], description: 'Aplikasi pelaporan lampu jalan berbasis lokasi. Masyarakat dapat mengirim laporan dan memantau tindak lanjut melalui sistem ticketing.', color: 'yellow' },
  { name: 'UMKM Tebo', image: 'pasar', url: 'https://pasar.tebokab.go.id/', category: 'Commerce', tags: ['Marketplace', 'UMKM'], description: 'Marketplace digital untuk promosi dan pemasaran produk UMKM lokal, mendukung pelaku usaha berjualan secara digital.', color: 'lime' },
  { name: 'Portofolio Pribadi', image: 'portofolio', url: 'https://portofolio.robiaulia.online', category: 'Personal', tags: ['Next.js', 'Tailwind CSS'], description: 'Website portofolio dengan desain responsif, transisi Framer Motion, dan mode gelap untuk menampilkan karya serta pengalaman.', color: 'peach' },
].map(project => ({ ...project, ...projectDetails[project.image] }));

export type PortfolioProject = (typeof projects)[number];
