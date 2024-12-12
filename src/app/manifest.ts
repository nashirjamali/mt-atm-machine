import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ATM Machine PWA',
    short_name: 'ATM PWA',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
      },
      {
        src: '/icon-256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: '/atm-screenshot.png',
        sizes: '931x672',
        form_factor: 'narrow',
      },
      {
        src: '/atm-screenshot.png',
        sizes: '931x672',
        form_factor: 'wide',
      },
    ],
  };
}
