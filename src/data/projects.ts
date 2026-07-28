import type { ImageMetadata } from 'astro';
import szazszorszepCover from '../assets/projects/szazszorszep_cover.png';
import sanusmedCover from '../assets/projects/sanusmed_cover.png';
import miniSaigonCover from '../assets/projects/mini-saigon-cover.png';

export interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  full?: string;
}

export interface Project {
  slug: string;
  title: string;
  services: string[];
  cover: ImageMetadata;
  gallery: GalleryItem[];
  description: string[];
}

const szazszorszepFolder = '/projects/szazszorszep-kozmetika';

export const projects: Project[] = [
  {
    slug: 'szazszorszep-kozmetika',
    title: 'Százszorszép Kozmetika',
    services: ['Branding', 'Marketing', 'Print', 'Social Media'],
    cover: szazszorszepCover,
    gallery: [
      { type: 'image', src: `${szazszorszepFolder}/BotoxP_kisfuzet.jpeg` },
      { type: 'image', src: `${szazszorszepFolder}/Rollup.jpeg` },
      { type: 'image', src: `${szazszorszepFolder}/IMG-20250416-WA0004.jpg` },
      { type: 'image', src: `${szazszorszepFolder}/IMG-20250531-WA0006.jpg` },
      { type: 'image', src: `${szazszorszepFolder}/IMG-20250531-WA0007.jpg` },
      { type: 'image', src: `${szazszorszepFolder}/IMG-20250603-WA0000.jpg` },
      { type: 'video', src: `${szazszorszepFolder}/VID-20250605-WA0001.mp4` },
      { type: 'image', src: `${szazszorszepFolder}/IMG-20251002-WA0000.jpg` },
      { type: 'video', src: `${szazszorszepFolder}/VID-20251106-WA0000.mp4` },
      { type: 'video', src: `${szazszorszepFolder}/VID-20251106-WA0003.mp4` },
      { type: 'image', src: `${szazszorszepFolder}/IMG-20251109-WA0000.jpg` },
      { type: 'image', src: `${szazszorszepFolder}/IMG-20251115-WA0001.jpg` },
      { type: 'image', src: `${szazszorszepFolder}/IMG-20251116-WA0001.jpg` },
      { type: 'image', src: `${szazszorszepFolder}/IMG-20251116-WA0003.jpg` },
      { type: 'image', src: `${szazszorszepFolder}/IMG-20251122-WA0000.jpg` },
      { type: 'image', src: `${szazszorszepFolder}/IMG-20251123-WA0005.jpg` },
      { type: 'image', src: `${szazszorszepFolder}/IMG-20251123-WA0006.jpg` },
      { type: 'video', src: `${szazszorszepFolder}/VID-20251202-WA0000.mp4` },
      { type: 'video', src: `${szazszorszepFolder}/VID-20251202-WA0001.mp4` },
      { type: 'image', src: `${szazszorszepFolder}/IMG-20251223-WA0002.jpg` },
    ],
    description: [
      "Creating a complete brand identity and marketing system for Százszorszép Kozmetika, designed to reflect the salon's premium quality, professional expertise and welcoming, feminine atmosphere.",
    ],
  },
  {
    slug: 'sanus-anatomic',
    title: 'Sanus Anatomic',
    services: ['Labels', 'User Manual Design', 'Print Design'],
    cover: sanusmedCover,
    gallery: [],
    description: [
      "Developing product labels and printed user manuals for Sanus Anatomic's orthopedic insole collection.",
      'The project focused on creating clear, compliant and user-friendly print materials while maintaining a clean, trustworthy visual identity across the product range.',
    ],
  },
  {
    slug: 'mini-saigon',
    title: 'Mini Saigon Étterem',
    services: ['Branding', 'Menu Design', 'Social Media', 'Print'],
    cover: miniSaigonCover,
    // Bare filenames (no leading slash) resolve to src/assets/projects/mini-saigon/
    // and are optimized at build time in [slug].astro.
    gallery: [
      { type: 'image', src: 'posterh2.jpg' },
      { type: 'image', src: 'coveri.jpg' },
      { type: 'image', src: 'background.jpg' },
      { type: 'image', src: 'menu-a3.png' },
      { type: 'image', src: 'pho-leves-a4.png' },
      { type: 'image', src: 'banh-mi.png' },
      { type: 'image', src: 'banh-mi-post.png' },
      { type: 'image', src: 'hamburger-mega.png' },
      { type: 'image', src: 'tavaszi.png' },
      { type: 'image', src: 'tejberr.png' },
      { type: 'image', src: 'tejberizs-cimke.png' },
      { type: 'image', src: 'kuponszlinap.png' },
      { type: 'image', src: 'minis-insta-1.png' },
      { type: 'image', src: 'minis-insta-2.png' },
      { type: 'image', src: 'minis-insta-3.png' },
      { type: 'image', src: 'minis-insta-4.png' },
      { type: 'image', src: 'minis-insta-5.png' },
      { type: 'image', src: 'minis-insta-6.png' },
      { type: 'image', src: 'nevjegy-eleje.jpg' },
      { type: 'image', src: 'nevjegy-hatulja.jpg' },
      { type: 'image', src: 'img-71ec9d6d.png' },
      { type: 'image', src: 'received-1665534273942695.png' },
      { type: 'image', src: '20230922-124339.jpg' },
      { type: 'image', src: '20230922-124346.jpg' },
      { type: 'image', src: '20230922-124352.jpg' },
      { type: 'image', src: '20240406-111006.png' },
    ],
    description: [
      'Content creation and graphic design for Mini Saigon Étterem, shaping a visual identity across menus, print materials, and social media.',
    ],
  },
];
