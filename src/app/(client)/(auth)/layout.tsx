import { montserrat } from '@/components/fonts';
import '../../globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-colorsecondary ${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
