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
    objective: 'Menyediakan platform terpadu multi-tenant agar setiap pemerintah desa memiliki website resmi mandiri untuk menyebarkan informasi publik dan mempromosikan potensi lokal.',
    problem: 'Pemerintah desa membutuhkan sarana publikasi resmi yang mudah dikelola untuk menyampaikan profil wilayah, transparansi realisasi dana desa, warta kegiatan, dan promosi UMKM lokal.',
    solution: 'Membangun arsitektur website multi-tenant berbasis Next.js yang menyediakan ruang publikasi informasi pemerintahan desa, keterbukaan anggaran, arsip berita, dan galeri produk UMKM secara terstruktur.',
    features: [
      { title: 'Website multi-tenant desa', description: 'Arsitektur sistem template mandiri untuk portal resmi masing-masing desa.' },
      { title: 'Profil wilayah & warta lokal', description: 'Publikasi identitas kelembagaan desa, agenda kerja, dan kabar terkini bagi warga.' },
      { title: 'Transparansi dana desa', description: 'Kanal keterbukaan informasi laporan realisasi dan alokasi anggaran belanja desa.' },
      { title: 'Etalase promosi UMKM', description: 'Ruang pamer produk komoditas dan usaha warga untuk memperluas pasar secara online.' },
    ], technologies: [{ category: 'Frontend', names: ['Next.js'] }],
  },
  ppid: {
    slug: 'ppid-tebo', projectType: 'Portal informasi publik', platform: ['Web'], audience: 'Masyarakat pemohon informasi dan pengelola informasi pemerintah.',
    objective: 'Menyediakan portal digital terpadu untuk menjamin hak masyarakat terhadap keterbukaan informasi birokrasi pemerintah daerah.',
    problem: 'Masyarakat membutuhkan saluran resmi yang praktis untuk mengakses dokumen regulasi, mengajukan permohonan informasi publik, dan menyampaikan aspirasi atau aduan.',
    solution: 'Portal PPID menghadirkan repositori dokumen kebijakan, formulir daring permohonan informasi, dan kanal pengaduan masyarakat yang terorganisir.',
    features: [
      { title: 'Repositori dokumen publik', description: 'Penyediaan dokumen kebijakan dan laporan kerja instansi pemerintah untuk akses publik.' },
      { title: 'Direktori regulasi daerah', description: 'Pengelolaan arsip peraturan daerah, keputusan bupati, dan ketentuan perundang-undangan.' },
      { title: 'Formulir permohonan daring', description: 'Layanan digital bagi masyarakat untuk mengajukan permohonan informasi resmi secara transparan.' },
      { title: 'Kanal aduan terpadu', description: 'Penerimaan aspirasi dan pengaduan publik yang diproses dalam alur verifikasi resmi.' },
    ],
  },
  ayunda: {
    slug: 'ayunda-tebo', projectType: 'Aplikasi layanan kependudukan', platform: ['Web'], audience: 'Masyarakat yang mengurus dokumen kependudukan.',
    objective: 'Mendukung pelayanan administrasi kependudukan secara online guna mempermudah warga mengurus dokumen identitas tanpa antrean fisik.',
    problem: 'Pengurusan dokumen kependudukan manual membutuhkan waktu lama dan kehadiran fisik di kantor dinas, menyulitkan warga yang berada di pelosok.',
    solution: 'Aplikasi Ayunda menyediakan sistem pendaftaran online untuk akta kelahiran, KIA, dan kartu keluarga dengan fitur pemantauan status berkas.',
    features: [
      { title: 'Permohonan akta kelahiran', description: 'Pengajuan penerbitan akta kelahiran secara online dengan unggah dokumen pendukung.' },
      { title: 'Penerbitan KIA daring', description: 'Layanan pendaftaran Kartu Identitas Anak tanpa antrean loket fisik kantor dinas.' },
      { title: 'Pembaruan kartu keluarga', description: 'Pengurusan mutasi data dan penerbitan kartu keluarga baru melalui sistem digital.' },
      { title: 'Pelacakan berkas berkala', description: 'Pemantauan alur pemrosesan dokumen secara berkala dari verifikasi hingga selesai.' },
    ],
  },
  nakertrans: {
    slug: 'nakertrans-tebo', projectType: 'Portal ketenagakerjaan', platform: ['Web'], audience: 'Pencari kerja dan masyarakat yang membutuhkan informasi ketenagakerjaan.',
    objective: 'Menyediakan pusat informasi terpadu untuk pelatihan vokasi, regulasi tenaga kerja, dan integrasi bursa lowongan kerja daerah.',
    problem: 'Pencari kerja dan masyarakat membutuhkan kanal informasi terverifikasi seputar program peningkatan keahlian kerja serta info lowongan yang tepercaya.',
    solution: 'Portal web Nakertrans mengintegrasikan jadwal pelatihan kerja resmi dinas, arsip regulasi ketenagakerjaan, dan bursa lowongan kerja aktif.',
    features: [
      { title: 'Informasi pelatihan vokasi', description: 'Publikasi jadwal, kuota, dan pendaftaran program pelatihan kejuruan kerja daerah.' },
      { title: 'Regulasi ketenagakerjaan', description: 'Penyediaan aturan hukum hubungan industrial, upah, dan hak tenaga kerja bagi publik.' },
      { title: 'Bursa lowongan kerja', description: 'Integrasi kanal informasi lowongan pekerjaan dari perusahaan mitra yang terverifikasi.' },
    ],
  },
  dmd: {
    slug: 'sidmd', projectType: 'Sistem informasi kesehatan', platform: ['Web'], audience: 'Masyarakat desa yang membutuhkan informasi layanan kesehatan.',
    objective: 'Mendistribusikan jadwal layanan medis keliling dan informasi posko kesehatan dalam program Dokter Masuk Dusun.',
    problem: 'Masyarakat di dusun terpencil kerap kekurangan akses jadwal layanan medis primer dan informasi edukasi preventif kesehatan.',
    solution: 'Sistem SIDMD menyediakan kalender jadwal kunjungan dokter, direktori pos pelayanan medis desa, dan materi edukasi pencegahan penyakit.',
    features: [
      { title: 'Jadwal dokter masuk dusun', description: 'Penyebaran kalender jadwal kunjungan berkala tim medis ke dusun-dusun pelosok.' },
      { title: 'Informasi posko medis', description: 'Distribusi informasi mengenai ketersediaan layanan pengobatan gratis dan posko darurat.' },
      { title: 'Edukasi preventif warga', description: 'Publikasi materi penyuluhan hidup bersih, sehat, dan pencegahan penyakit menular.' },
    ],
  },
  siga: {
    slug: 'siga', projectType: 'Dashboard data sektoral', platform: ['Web'], audience: 'Pengelola data sektoral dan penyusun kebijakan pemerintah daerah.',
    objective: 'Mendukung pengelolaan data terpilah gender dan anak untuk perumusan kebijakan pembangunan berbasis data pemerintah daerah.',
    problem: 'Penyusunan program pemberdayaan perempuan dan perlindungan anak membutuhkan data sektoral terstruktur yang mudah dipantau lintas dinas.',
    solution: 'Dashboard SIGA mengonsolidasi data gender, pemantauan hak anak, dan pelaporan kasus ke dalam visualisasi analitik terpusat.',
    features: [
      { title: 'Statistik terpilah gender', description: 'Pengelolaan data demografi dan indikator partisipasi sosial berbasis pilah gender.' },
      { title: 'Pemantauan hak & kasus anak', description: 'Pencatatan data pemenuhan hak anak serta pelaporan kasus perlindungan sosial.' },
      { title: 'Dashboard analitik sektoral', description: 'Penyajian grafik statistik untuk mendukung perumusan kebijakan daerah berbasis bukti.' },
    ],
  },
  lpju: {
    slug: 'sippulan', projectType: 'Aplikasi pelaporan publik', platform: ['Web'], audience: 'Masyarakat pelapor lampu jalan dan pengelola tindak lanjut laporan.',
    objective: 'Memfasilitasi pelaporan kerusakan penerangan jalan umum berbasis lokasi GPS dan dokumentasi foto dengan sistem ticketing.',
    problem: 'Laporan kerusakan lampu jalan membutuhkan penentuan titik koordinat akurat agar petugas lapangan dapat langsung menangani tanpa kendala pencarian lokasi.',
    solution: 'SiPPULAN menghubungkan pelaporan koordinat presisi dengan nomor tiket aduan, memungkinkan warga memantau progres perbaikan oleh teknisi.',
    features: [
      { title: 'Pelaporan koordinat GPS', description: 'Pengiriman titik lokasi fisik lampu jalan yang padam beserta foto bukti kerusakan.' },
      { title: 'Sistem ticketing otomatis', description: 'Penomoran tiket laporan untuk alur verifikasi penugasan teknisi dinas terkait.' },
      { title: 'Pemantauan tindak lanjut', description: 'Kanal pemantauan transparan bagi masyarakat guna mengecek status penanganan perbaikan.' },
    ],
  },
  pasar: {
    slug: 'umkm-tebo', projectType: 'Marketplace lokal', platform: ['Web'], audience: 'Pelaku UMKM lokal dan masyarakat yang mencari produk mereka.',
    objective: 'Mendorong promosi dan pemasaran digital bagi produk komoditas unggulan pelaku UMKM lokal ke pasar yang lebih luas.',
    problem: 'Pelaku usaha mikro lokal membutuhkan platform digital terpusat yang praktis untuk memperkenalkan produk tanpa biaya operasional tinggi.',
    solution: 'Marketplace UMKM Tebo menampilkan katalog produk komoditas terverifikasi lengkap dengan rincian harga dan tautan komunikasi langsung ke penjual.',
    features: [
      { title: 'Katalog komoditas UMKM', description: 'Etalase produk unggulan daerah dari sektor kuliner, kerajinan tangan, dan hasil tani.' },
      { title: 'Promosi harga & spesifikasi', description: 'Penyajian rincian spesifikasi produk, foto barang, dan informasi harga transparan.' },
      { title: 'Kontak transaksi langsung', description: 'Penyediaan tautan komunikasi langsung ke kontak pedagang untuk mempermudah pemesanan.' },
    ],
  },
  portofolio: {
    slug: 'portofolio-pribadi', projectType: 'Website portofolio', platform: ['Web'], audience: 'Calon kolaborator dan pengunjung yang ingin mengenal karya serta pengalaman developer.',
    objective: 'Menyajikan karya rekayasa perangkat lunak, studi kasus proyek, dan keahlian teknis secara interaktif, cepat, dan terstruktur.',
    problem: 'Pengunjung dan perekrut membutuhkan pemahaman komprehensif mengenai fungsi arsitektur dan kapabilitas teknis dari sistem yang pernah dibangun.',
    solution: 'Website portofolio menyajikan proyek dengan tata letak responsif, transisi halaman Framer Motion, dan opsi tema kontras tinggi yang ramah aksesibilitas.',
    features: [
      { title: 'Galeri studi kasus proyek', description: 'Dokumentasi detail mengenai tujuan, arsitektur, dan fitur aplikasi yang telah dibangun.' },
      { title: 'Tata letak responsif', description: 'Desain antarmuka fleksibel yang nyaman diakses pada perangkat mobile, tablet, maupun desktop.' },
      { title: 'Dukungan preferensi tema', description: 'Pilihan mode visual terang dan gelap dengan kontras warna yang teruji ramah mata.' },
      { title: 'Transisi animasi interaktif', description: 'Peralihan navigasi antarmuka yang halus menggunakan library animasi modern.' },
    ], technologies: [{ category: 'Frontend', names: ['React', 'Next.js', 'Tailwind CSS'] }, { category: 'Animation', names: ['Framer Motion'] }],
  },
  jobtracker: {
    slug: 'jobtracker', projectType: 'Aplikasi manajemen karier', platform: ['Web'], audience: 'Pencari kerja, profesional, dan pengembang yang sedang aktif mengelola proses lamaran kerja.',
    objective: 'Menyediakan sistem pelacakan lamaran kerja yang terstruktur untuk memantau progres rekrutmen, jadwal wawancara, dan statistik pencarian kerja secara terpusat.',
    problem: 'Mengirimkan banyak berkas lamaran kerja sering menimbulkan kekacauan pencatatan, risiko terlewatnya jadwal tes atau wawancara, serta sulitnya mengevaluasi efektivitas lamaran tanpa data yang terukur.',
    solution: 'JobTracker menghadirkan dasbor manajemen karier dengan kategorisasi status bertahap, modul agenda wawancara terdekat, pencarian instan, dan grafik analitik distribusi lamaran.',
    features: [
      { title: 'Dasbor statistik lamaran', description: 'Metrik ringkasan status lamaran mulai dari terkirim, seleksi tes dan wawancara, offering, hingga arsip hasil lamaran.' },
      { title: 'Agenda tes & wawancara', description: 'Pengingat jadwal terdekat agenda seleksi dalam zona waktu WIB agar persiapan wawancara lebih teratur.' },
      { title: 'Pencarian & filter lowongan', description: 'Pencarian cepat berdasarkan nama perusahaan, posisi pekerjaan, lokasi kerja, dan status aktif lamaran.' },
      { title: 'Analitik visual tren karier', description: 'Visualisasi diagram lingkaran distribusi status dan grafik batang tren pengiriman lamaran per bulan.' },
    ], technologies: [{ category: 'Frontend', names: ['React', 'Next.js', 'Tailwind CSS'] }, { category: 'State & UI', names: ['TypeScript', 'Lucide Icons'] }],
    screenshots: [
      { src: '/projects/jobtracker-1.png', caption: 'Halaman beranda dan pengenalan fitur JobTracker' },
      { src: '/projects/jobtracker-2.png', caption: 'Dasbor ringkasan statistik dan pelacakan status lamaran aktif' },
    ],
  },
};
