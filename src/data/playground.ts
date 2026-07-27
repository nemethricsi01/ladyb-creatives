export interface PlaygroundItem {
  src: string;
  alt: string;
  caption?: string;
}

/**
 * Fallback placeholders for the "Creative Playground" cloud on the home
 * page, shown only while `src/assets/playground/` has no images in it.
 * To add real playground pictures, drop files into that folder — see its
 * README. This list can be deleted once real images are in place.
 */
export const playgroundItems: PlaygroundItem[] = [
  { src: '/szazszorszep_cover.png', alt: 'Százszorszép Kozmetika branding', caption: 'Placeholder — swap me' },
  { src: '/projects/szazszorszep-kozmetika/BotoxP_kisfuzet.jpeg', alt: 'Booklet design', caption: 'Placeholder — swap me' },
  { src: '/projects/szazszorszep-kozmetika/Rollup.jpeg', alt: 'Roll-up banner', caption: 'Placeholder — swap me' },
  { src: '/sanusmed_cover.png', alt: 'Sanus Anatomic labels', caption: 'Placeholder — swap me' },
  { src: '/projects/szazszorszep-kozmetika/IMG-20250531-WA0006.jpg', alt: 'Print detail', caption: 'Placeholder — swap me' },
  { src: '/projects/szazszorszep-kozmetika/IMG-20251002-WA0000.jpg', alt: 'Social media graphic', caption: 'Placeholder — swap me' },
  { src: '/projects/szazszorszep-kozmetika/IMG-20251116-WA0001.jpg', alt: 'Poster experiment', caption: 'Placeholder — swap me' },
  { src: '/projects/szazszorszep-kozmetika/IMG-20251122-WA0000.jpg', alt: 'Illustration sketch', caption: 'Placeholder — swap me' },
  { src: '/projects/szazszorszep-kozmetika/IMG-20251223-WA0002.jpg', alt: 'One-off design', caption: 'Placeholder — swap me' },
];
