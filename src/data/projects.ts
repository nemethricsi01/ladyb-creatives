export interface GalleryItem {
  type: 'image' | 'video';
  src: string;
}

export interface Project {
  slug: string;
  title: string;
  services: string[];
  cover: string;
  gallery: GalleryItem[];
  description: string[];
}

const szazszorszepFolder = '/projects/szazszorszep-kozmetika';

export const projects: Project[] = [
  {
    slug: 'szazszorszep-kozmetika',
    title: 'Százszorszép Kozmetika',
    services: ['Branding', 'Marketing', 'Print', 'Social Media'],
    cover: '/szazszorszep_cover.png',
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
    cover: '/sanusmed_cover.png',
    gallery: [],
    description: [
      "Developing product labels and printed user manuals for Sanus Anatomic's orthopedic insole collection.",
      'The project focused on creating clear, compliant and user-friendly print materials while maintaining a clean, trustworthy visual identity across the product range.',
    ],
  },
];
