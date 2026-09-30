// Complete version 2.0 marketing compositions; each includes its own device.
export const screenshots = {
  home: {
    src: "/screenshots/v2/01-daily-history.webp",
    alt: "England 871 Today screen: a daily reading streak, continued reading and a Listen button, in the supplied iPhone preview.",
  },
  reader: {
    src: "/screenshots/v2/02-read-and-listen.webp",
    alt: "England 871 illustrated reader showing A crown without control, with a Listen control and image details.",
  },
  library: {
    src: "/screenshots/v2/03-stories.webp",
    alt: "England 871 Stories and Series library with 103 illustrated stories, search and period browsing.",
  },
  people: {
    src: "/screenshots/v2/04-people.webp",
    alt: "England 871 People directory with 162 historical lives, including Alfred the Great, Ealhswith and Guthrum.",
  },
  map: {
    src: "/screenshots/v2/05-map.webp",
    alt: "England 871 interactive map with Winchester selected, places linked to stories and a historical period filter.",
  },
  timeline: {
    src: "/screenshots/v2/06-timeline.webp",
    alt: "England 871 timeline spanning 871–1485, with 192 events including the Battle of Ashdown and Alfred becoming king.",
  },
  explore: {
    src: "/screenshots/v2/07-explore.webp",
    alt: "England 871 Explore screen linking Stories and Series, People, Timeline and Map, plus everyday life and women and family.",
  },
} as const;

export type ScreenshotName = keyof typeof screenshots;
