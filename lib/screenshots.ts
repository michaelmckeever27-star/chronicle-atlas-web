// Complete App Store marketing panels, not unframed app screens.
export const screenshots = {
  home: {
    src: "/screenshots/app-store/01-medieval-england.webp",
    alt: "England 871 for iPhone: Medieval England. Made fascinating. Today screen with a saved reading position and a story from the archive.",
  },
  reader: {
    src: "/screenshots/app-store/02-short-stories.webp",
    alt: "A little history. A few minutes. England 871 reader showing an illustrated Chronicle Card about Henry the Young King, with image details and a Next card button.",
  },
  map: {
    src: "/screenshots/app-store/03-interactive-map.webp",
    alt: "Put history on the map. England 871 interactive map across 871–1399 with Winchester selected and links to connected stories.",
  },
  people: {
    src: "/screenshots/app-store/04-historical-people.webp",
    alt: "Meet the people. Know their stories. England 871 People directory showing historical depictions of Alfred, Æthelflæd and Edward the Elder.",
  },
  library: {
    src: "/screenshots/app-store/05-story-library.webp",
    alt: "Find your next story. England 871 library of 80 stories, with search, filters and illustrated stories from the early kingdoms.",
  },
  timeline: {
    src: "/screenshots/app-store/06-timeline.webp",
    alt: "Five centuries. One timeline. England 871 timeline spanning 871–1399, showing the Battle of Ashdown and Alfred becoming king of Wessex.",
  },
  explore: {
    src: "/screenshots/app-store/07-explore.webp",
    alt: "Follow your curiosity. England 871 Explore screen with Stories and Series, People, Timeline, Map and subjects including everyday life and women and family.",
  },
} as const;

export type ScreenshotName = keyof typeof screenshots;
