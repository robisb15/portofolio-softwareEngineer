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
  { name: 'OTS Audit', image: 'ots', url: 'https://ots-audit.ronovalabs.cloud', category: 'Enterprise & audit', tags: ['Web & Mobile', 'Next.js', 'Flutter'], description: 'Sistem informasi berbasis web dan mobile untuk mengelola proses audit dan verifikasi lapangan secara terintegrasi pada Anugerah Group. Aplikasi ini menyediakan manajemen pengguna, pengelolaan pelanggan, penjadwalan kunjungan, monitoring aktivitas petugas secara real-time, pencatatan hasil audit, serta approval laporan.', color: 'lime' },
  { name: 'JobTracker', image: 'jobtracker', url: 'https://jobtracker.robiaulia.online', category: 'Produktivitas', tags: ['Career Management', 'Dashboard'], description: 'Platform manajemen perjalanan karier dan pelacakan lamaran kerja yang berfungsi mengorganisasi seluruh tahapan rekrutmen dalam satu dasbor terpadu. Aplikasi ini memfasilitasi pencatatan lowongan, pemantauan status seleksi dari tahap awal hingga penawaran kerja, pengingat agenda tes dan wawancara, serta analitik visual tren lamaran.', color: 'peach' },
  { name: 'Web Desa Platform', image: 'sidomulyo', url: 'https://sidomulyo-tebo.desa.id/', category: 'Layanan publik', tags: ['Next.js', 'Multi-tenant'], description: 'Platform sistem website desa multi-tenant yang berfungsi sebagai pusat informasi dan layanan publik resmi pemerintahan desa. Aplikasi ini memfasilitasi publikasi profil desa, transparansi realisasi anggaran dana desa, diseminasi warta kegiatan, serta etalase digital untuk mempromosikan produk usaha UMKM warga.', color: 'yellow' },
  { name: 'PPID Tebo', image: 'ppid', url: 'https://ppidv2.tebokab.go.id/', category: 'Layanan publik', tags: ['Informasi publik', 'Portal web'], description: 'Portal keterbukaan informasi publik resmi Pemerintah Kabupaten Tebo yang berfungsi menjamin hak masyarakat atas akses informasi birokrasi. Sistem ini menyediakan repositori dokumen kebijakan daerah, direktori regulasi hukum, formulir pengajuan informasi daring, serta kanal aspirasi dan pengaduan warga yang transparan.', color: 'lime' },
  { name: 'Ayunda Tebo', image: 'ayunda', url: 'https://ayunda.tebokab.go.id/', category: 'Layanan publik', tags: ['Dukcapil', 'E-Government'], description: 'Aplikasi administrasi kependudukan daring untuk Dinas Dukcapil yang berfungsi melayani pengurusan dokumen sipil warga secara terpadu. Berfungsi memproses permohonan akta kelahiran, Kartu Identitas Anak (KIA), serta pembaruan kartu keluarga tanpa antrean loket, dilengkapi fitur pelacakan status berkas secara berkala.', color: 'peach' },
  { name: 'Nakertrans Tebo', image: 'nakertrans', url: 'https://nakertrans.tebokab.go.id/', category: 'Layanan publik', tags: ['Ketenagakerjaan', 'Portal web'], description: 'Portal layanan terpadu ketenagakerjaan dan transmigrasi yang berfungsi menghubungkan pencari kerja dengan peluang karier dan program pelatihan daerah. Sistem ini mempublikasikan informasi pelatihan vokasi, regulasi hubungan industrial ketenagakerjaan, serta integrasi bursa lowongan kerja resmi bagi masyarakat.', color: 'yellow' },
  { name: 'SIDMD', image: 'dmd', url: 'https://dmd.tebokab.go.id/', category: 'Layanan publik', tags: ['Kesehatan', 'Penjadwalan'], description: 'Sistem informasi kesehatan masyarakat yang dirancang untuk mendukung efektivitas program Dokter Masuk Dusun di wilayah pedesaan. Berfungsi mendistribusikan jadwal kunjungan tenaga medis ke pelosok desa, menyampaikan ketersediaan posko pengobatan gratis, serta menyajikan panduan edukasi preventif bagi kesehatan warga.', color: 'lime' },
  { name: 'SIGA', image: 'siga', url: 'https://siga.tebokab.go.id/', category: 'Data & pelaporan', tags: ['Dashboard', 'Data sektoral'], description: 'Dashboard analitik data sektoral gender dan perlindungan anak yang berfungsi mengelola indikator demografi sosial daerah secara terpusat. Sistem ini mengolah data terpilah gender, memantau pencatatan perlindungan hak anak, serta menyediakan visualisasi statistik untuk mendukung perumusan kebijakan daerah berbasis bukti.', color: 'peach' },
  { name: 'SiPPULAN', image: 'lpju', url: 'https://lpju.tebokab.go.id/', category: 'Data & pelaporan', tags: ['Pelaporan lokasi', 'Ticketing'], description: 'Aplikasi pelayanan pengaduan infrastruktur penerangan jalan umum yang berfungsi memfasilitasi pelaporan lampu jalan padam berbasis titik GPS dan foto lapangan. Dilengkapi alur ticketing penanganan aduan otomatis agar masyarakat dapat memantau progres verifikasi hingga penyelesaian perbaikan oleh tim teknis dinas.', color: 'yellow' },
  { name: 'UMKM Tebo', image: 'pasar', url: 'https://pasar.tebokab.go.id/', category: 'Commerce', tags: ['Marketplace', 'UMKM'], description: 'Platform pasar digital dan etalase komoditas daerah yang berfungsi mendorong transformasi pemasaran bagi pelaku usaha mikro, kecil, dan menengah. Aplikasi ini mengatalogkan produk kuliner, kriya, dan hasil bumi lengkap dengan rincian harga serta kontak penjual langsung untuk memperluas jangkauan penjualan ke pasar digital.', color: 'lime' },
  { name: 'Portofolio Pribadi', image: 'portofolio', url: 'https://portofolio.robiaulia.online', category: 'Personal', tags: ['Next.js', 'Tailwind CSS'], description: 'Website portofolio developer interaktif yang dirancang untuk menyajikan dokumentasi studi kasus teknis dan kapabilitas rekayasa full-stack secara komprehensif. Berfungsi mendemonstrasikan implementasi komponen antarmuka responsif, transisi halaman animasi halus', color: 'peach' },
].map(project => ({ ...project, ...projectDetails[project.image] }));

export type PortfolioProject = (typeof projects)[number];
