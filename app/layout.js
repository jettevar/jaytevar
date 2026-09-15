import './globals.css';

export const metadata = {
  title: 'Jay Tevar | Marketing, Operations, Content & Research',
  description: 'Jay Tevar is a cross-functional marketing and operations professional with 15+ years of experience across content, research, communications, process improvement, and business support.',
  icons: { icon: '/icon.svg', shortcut: '/icon.svg', apple: '/icon.svg' }
};

export default function RootLayout({ children }) { return <html lang="en"><body>{children}</body></html>; }
