import type { Metadata } from 'next';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/600.css';
import '@fontsource/dm-sans/700.css';
import '@fontsource/barlow-condensed/800.css';
import '@fontsource/barlow-condensed/900.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/space-grotesk/700.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Robi Aulia Kurniawan | Full Stack Developer',
  description: 'Portofolio Robi Aulia Kurniawan, Full Stack Developer di Jambi. Pengembangan web, mobile, RESTful API, dan sistem layanan publik.',
  openGraph: {
    title: 'Robi Aulia Kurniawan | Full Stack Developer',
    description: 'Web, mobile, dan sistem yang membantu pekerjaan sehari-hari.',
    locale: 'id_ID', type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
