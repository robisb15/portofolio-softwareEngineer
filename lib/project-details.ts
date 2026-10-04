export type ProjectDetail = {
  slug: string;
  projectType: string;
  platform: string[];
  audience: string;
  objective: string;
  problem: string;
  solution: string;
  features: { title: string; description: string }[];
  technologies?: { category: string; names: string[] }[];
  year?: string;
  role?: string;
  timeline?: string;
  status?: string;
  repositoryUrl?: string;
  contributions?: string[];
  process?: { title: string; description: string }[];
  challenges?: { challenge: string; solution: string }[];
  architecture?: { title: string; description: string }[];
  screenshots?: { src: string; caption: string }[];
};

// Project-specific facts come from reference/portfolio-source.html; CV-wide skills are not attributed to individual projects.
export const projectDetails: Record<string, ProjectDetail> = {
  sidomulyo: {
    slug: 'web-desa-platform', projectType: 'Platform website desa', platform: ['Web'], audience: 'Pemerintah desa, masyarakat, dan pelaku UMKM desa.',
    objective: 'Memberikan setiap desa website resminya sendiri melalui platform berbasis template multi-tenant.',
    problem: 'Setiap desa membutuhkan ruang publikasi resmi untuk menyampaikan profil, berita, informasi anggaran, dan potensi usaha lokal.',
    solution: 'Platform multi-tenant menyediakan website per desa dengan ruang publikasi untuk informasi pemerintahan dan UMKM.',
    features: [
      { title: 'Website per desa', description: 'Template multi-tenant untuk website resmi masing-masing desa.' },
      { title: 'Profil & berita', description: 'Publikasi identitas desa serta kabar yang ditujukan kepada masyarakat.' },
      { title: 'Transparansi anggaran', description: 'Ruang publikasi informasi anggaran desa.' },
      { title: 'Publikasi UMKM', description: 'Menampilkan usaha lokal sebagai bagian dari informasi desa.' },
    ], technologies: [{ category: 'Frontend', names: ['Next.js'] }],
  },
  ppid: {
    slug: 'ppid-tebo', projectType: 'Portal informasi publik', platform: ['Web'], audience: 'Masyarakat pemohon informasi dan pengelola informasi pemerintah.',
    objective: 'Menyediakan layanan keterbukaan informasi publik melalui portal digital.',
    problem: 'Masyarakat membutuhkan akses terhadap dokumen dan regulasi pemerintah, serta kanal untuk permohonan informasi dan pengaduan.',
    solution: 'Portal menyediakan publikasi dokumen, pengelolaan regulasi, permohonan informasi, dan pengaduan dalam layanan web.',
    features: [
      { title: 'Publikasi dokumen', description: 'Penyediaan dokumen pemerintah untuk akses informasi publik.' },
      { title: 'Regulasi', description: 'Pengelolaan informasi regulasi melalui portal.' },
      { title: 'Permohonan informasi', description: 'Kanal digital bagi masyarakat yang membutuhkan informasi.' },
      { title: 'Pengaduan', description: 'Layanan pengaduan sebagai bagian dari keterbukaan informasi.' },
    ],
  },
  ayunda: {
    slug: 'ayunda-tebo', projectType: 'Aplikasi layanan kependudukan', platform: ['Web'], audience: 'Masyarakat yang mengurus dokumen kependudukan.',
    objective: 'Mendukung pengajuan dokumen administrasi kependudukan secara online.',
    problem: 'Pengurusan dokumen kependudukan membutuhkan sarana pengajuan dan informasi mengenai perkembangan proses layanan.',
    solution: 'Ayunda menyediakan pengajuan dokumen secara online disertai pelacakan proses layanan.',
    features: [
      { title: 'Akta kelahiran', description: 'Pengajuan dokumen akta kelahiran secara online.' },
      { title: 'Kartu Identitas Anak', description: 'Layanan pengajuan KIA melalui aplikasi.' },
      { title: 'Kartu keluarga', description: 'Pengajuan dokumen kartu keluarga.' },
      { title: 'Pelacakan layanan', description: 'Pemantauan perkembangan proses pengajuan.' },
    ],
  },
  nakertrans: {
    slug: 'nakertrans-tebo', projectType: 'Portal ketenagakerjaan', platform: ['Web'], audience: 'Pencari kerja dan masyarakat yang membutuhkan informasi ketenagakerjaan.',
    objective: 'Menyediakan informasi pelatihan, regulasi, dan akses layanan lowongan kerja.',
    problem: 'Masyarakat membutuhkan informasi ketenagakerjaan yang mencakup kesempatan kerja, pelatihan, dan regulasi terkait.',
    solution: 'Portal web menghadirkan informasi pelatihan dan regulasi dengan integrasi layanan lowongan kerja.',
    features: [
      { title: 'Informasi pelatihan', description: 'Publikasi informasi pelatihan untuk masyarakat.' },
      { title: 'Regulasi ketenagakerjaan', description: 'Informasi aturan yang berkaitan dengan ketenagakerjaan.' },
      { title: 'Layanan lowongan', description: 'Integrasi layanan informasi lowongan kerja.' },
    ],
  },
  dmd: {
    slug: 'sidmd', projectType: 'Sistem informasi kesehatan', platform: ['Web'], audience: 'Masyarakat desa yang membutuhkan informasi layanan kesehatan.',
    objective: 'Mendistribusikan informasi layanan medis dan jadwal dokter masuk dusun.',
    problem: 'Masyarakat membutuhkan informasi tentang jadwal layanan dokter dan edukasi kesehatan yang dapat diakses.',
    solution: 'Sistem menyediakan jadwal dokter masuk dusun, informasi layanan medis, dan materi edukasi kesehatan.',
    features: [
      { title: 'Jadwal dokter', description: 'Informasi jadwal program dokter masuk dusun.' },
      { title: 'Edukasi kesehatan', description: 'Publikasi informasi kesehatan untuk masyarakat.' },
      { title: 'Layanan medis', description: 'Distribusi informasi mengenai layanan medis.' },
    ],
  },
  siga: {
    slug: 'siga', projectType: 'Dashboard data sektoral', platform: ['Web'], audience: 'Pengelola data sektoral dan penyusun kebijakan pemerintah daerah.',
    objective: 'Mendukung pengelolaan data gender dan anak untuk penyusunan kebijakan berbasis data.',
    problem: 'Penyusunan kebijakan gender dan anak membutuhkan data sektoral yang dapat dikelola dan ditinjau.',
    solution: 'SIGA menyediakan dashboard untuk pengelolaan data gender dan anak sebagai dukungan informasi bagi pemerintah daerah.',
    features: [
      { title: 'Data gender', description: 'Pengelolaan informasi sektoral terkait gender.' },
      { title: 'Data anak', description: 'Pengelolaan data anak dalam sistem informasi.' },
      { title: 'Dashboard sektoral', description: 'Penyajian data untuk mendukung penyusunan kebijakan.' },
    ],
  },
  lpju: {
    slug: 'sippulan', projectType: 'Aplikasi pelaporan publik', platform: ['Web'], audience: 'Masyarakat pelapor lampu jalan dan pengelola tindak lanjut laporan.',
    objective: 'Memfasilitasi pelaporan lampu jalan berbasis lokasi beserta pemantauan tindak lanjutnya.',
    problem: 'Laporan lampu jalan membutuhkan informasi lokasi dan cara untuk memantau tindak lanjut penanganan.',
    solution: 'SiPPULAN menghubungkan pelaporan berbasis lokasi dengan sistem ticketing yang dapat dipantau masyarakat.',
    features: [
      { title: 'Pelaporan lokasi', description: 'Pengiriman laporan lampu jalan dengan informasi lokasi.' },
      { title: 'Sistem ticketing', description: 'Pengelolaan laporan dalam alur ticketing.' },
      { title: 'Pemantauan tindak lanjut', description: 'Masyarakat dapat memantau penanganan laporan yang dikirim.' },
    ],
  },
  pasar: {
    slug: 'umkm-tebo', projectType: 'Marketplace lokal', platform: ['Web'], audience: 'Pelaku UMKM lokal dan masyarakat yang mencari produk mereka.',
    objective: 'Mendukung promosi dan pemasaran digital produk UMKM lokal.',
    problem: 'Pelaku usaha lokal membutuhkan sarana untuk memperkenalkan serta memasarkan produk melalui kanal digital.',
    solution: 'Marketplace menghadirkan produk UMKM lokal dalam platform promosi dan pemasaran berbasis web.',
    features: [
      { title: 'Produk UMKM', description: 'Publikasi produk dari pelaku usaha lokal.' },
      { title: 'Promosi digital', description: 'Ruang promosi produk melalui marketplace.' },
      { title: 'Pemasaran lokal', description: 'Kanal pemasaran digital untuk mendukung usaha lokal.' },
    ],
  },
  portofolio: {
    slug: 'portofolio-pribadi', projectType: 'Website portofolio', platform: ['Web'], audience: 'Calon kolaborator dan pengunjung yang ingin mengenal karya serta pengalaman developer.',
    objective: 'Menampilkan karya, pengalaman, dan informasi profesional melalui website portofolio interaktif.',
    problem: 'Pengunjung membutuhkan gambaran karya dan pengalaman yang mudah dibaca pada berbagai perangkat.',
    solution: 'Website portofolio menyajikan project dan pengalaman dengan layout responsif, transisi halaman, dan pilihan mode gelap.',
    features: [
      { title: 'Galeri project', description: 'Menampilkan karya beserta deskripsi dan tautan website.' },
      { title: 'Desain responsif', description: 'Tata letak yang menyesuaikan perangkat pengunjung.' },
      { title: 'Mode gelap', description: 'Pilihan mode gelap pada website portofolio referensi.' },
      { title: 'Transisi halaman', description: 'Animasi transisi menggunakan Framer Motion.' },
    ], technologies: [{ category: 'Frontend', names: ['React', 'Next.js', 'Tailwind CSS'] }, { category: 'Animation', names: ['Framer Motion'] }],
  },
};
