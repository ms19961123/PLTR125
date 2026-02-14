import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CommunityCircle',
  description: 'A family-friendly local meetup platform designed for offline connection.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
