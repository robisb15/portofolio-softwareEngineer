# Robi Aulia Kurniawan: portfolio

Website Next.js App Router + TypeScript. Enam section: Home, About, Experience, Projects, Skills, Contact. Tampilan berasal dari HTML awal, dengan data pribadi dari CV dan proyek dari situs portofolio Robi.

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk produksi:

```bash
npm run build
npm start
```

Node.js 20.9+ diperlukan oleh Next.js. Proyek ini diuji memakai Node.js 24.11.1.

## Mengubah konten

- `lib/content.ts`: profil, email, tautan sosial, riwayat, keterampilan, dan sembilan proyek.
- `app/page.tsx`: urutan section dan teks pengantar.
- `app/globals.css`: tema, tinggi layar, dan layout responsif.
- `public/foto.png`: foto asli pemilik.
- `public/cv-robi-aulia-kurniawan.pdf`: CV unduhan.
- `public/projects/`: screenshot asli dari portofolio sebelumnya.

Pada laptop/desktop, keenam section pas satu viewport, diverifikasi pada 1280x720, 1366x720, 1366x768 dan 1024x768. `min-height: 100svh` menjaga minimal satu layar. Pada ponsel atau jika teks membesar, section boleh lebih tinggi untuk mempertahankan keterbacaan dan akses seluruh konten. Tidak ada scroll hijacking.

## Kontak

Formulir memvalidasi nama, email dan pesan. Submit membuka dialog draf, bukan mengirim email otomatis. Tombol email membuka aplikasi email pengunjung menuju `robiaulia.k@gmail.com`; opsi unduhan menyimpan draf teks. Tidak ada database, penyimpanan server atau layanan email pihak ketiga.

## Backup dan sumber

`backup/html/` menyimpan salinan byte-identik keenam HTML awal. Foto dan gambar proyek contoh yang diperlukan backup ikut disalin. HTML asli di root tetap dipertahankan; aplikasi Next.js tidak memakainya. Sebagian referensi HTML awal seperti foto-about.png dan cv.pdf memang belum tersedia pada versi awal.

`reference/portfolio-source.html` menyimpan snapshot HTML situs lama sebagai jejak sumber. Rincian sumber ada di `reference/SOURCES.md`. Halaman dan screenshot preview di `tmp/` hanya untuk QA.

## Verifikasi

```bash
npm run typecheck
npm run build
npm start
# Terminal lain, setelah server aktif:
npm run test:e2e
```

Playwright menggunakan Microsoft Edge yang sudah terpasang (`channel: msedge`). Lima tes mencakup responsivitas, aset, tinggi section, tab, semua langkah slider, validasi/draf/download, dan menu HP. Rincian pemeriksaan desain ada di `DELIVERY-REVIEW.md`.

Font DM Sans dan Barlow Condensed disertakan melalui paket Fontsource; ikon teknologi memakai Simple Icons. Tidak ada permintaan font ke Google saat runtime.
