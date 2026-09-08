import './globals.css';

export const metadata = {
  title: 'Jay Tevar | AI-Enabled Marketing & Business Solutions',
  description: 'Marketing, content, research, operations, creative production, and AI-assisted digital solutions by Jay Tevar.',
  icons: { icon: '/icon.svg', shortcut: '/icon.svg', apple: '/icon.svg' }
};

export default function RootLayout({ children }) { return <html lang="en"><body>{children}</body></html>; }
