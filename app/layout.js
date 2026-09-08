import './globals.css';

const profileImage = 'https://raw.githubusercontent.com/jettevar/jaytevar/main/profile.jpg';

export const metadata = {
  title: 'Jay Tevar | AI-Enabled Marketing & Business Solutions',
  description: 'Marketing, content, research, operations, creative production, and AI-assisted digital solutions by Jay Tevar.',
  icons: { icon: profileImage, shortcut: profileImage, apple: profileImage }
};

export default function RootLayout({ children }) { return <html lang="en"><body>{children}</body></html>; }
