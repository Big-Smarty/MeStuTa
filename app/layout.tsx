// app/layout.tsx

// 🔑 Import the global CSS file here
import './globals.css'; 

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mestuta Tauri App',
  description: 'A TypeScript React/Next.js/Tauri application.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* The styles from globals.css are now applied to the entire <body> */}
      <body>
        {children}
      </body>
    </html>
  );
}
