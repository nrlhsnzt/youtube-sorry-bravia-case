import './globals.css';

export const metadata = {
  title: 'CLAIM READY — A free checklist for anyone about to file a warranty claim.',
  description: 'A warranty claim is decided on records. Keep yours, and ask for theirs in writing.',
  openGraph: {
    title: 'CLAIM READY — A free checklist for anyone about to file a warranty claim.',
    description: 'A warranty claim is decided on records. Keep yours, and ask for theirs in writing.',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#087A58',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
