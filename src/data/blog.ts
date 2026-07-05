export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date?: string;
  readingTime?: string;
  status: "published" | "coming";
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "path-to-becoming-a-data-scientist",
    title: "The Path to Becoming a Data Scientist",
    description:
      "Machine learning basics, deep learning, Transformers, LLMs, Git, Docker — a complete roadmap for aspiring data scientists.",
    date: "2026-06-18",
    readingTime: "12 min read",
    status: "published",
    tags: ["Data Science", "Machine Learning", "Roadmap"],
  },
  {
    slug: "getting-started-with-machine-learning",
    title: "Getting Started with Machine Learning",
    description:
      "A practical guide to starting your ML journey with hands-on examples.",
    status: "coming",
    tags: ["Machine Learning"],
  },
  {
    slug: "building-with-astro",
    title: "Building with Astro",
    description:
      "Why I chose Astro for my portfolio and how it compares to other frameworks.",
    date: "2026-07-05",
    readingTime: "8 min read",
    status: "published",
    tags: ["Web Development", "Astro"],
  },
  {
    slug: "nlp-feature-engineering",
    title: "NLP Feature Engineering",
    description:
      "Techniques for extracting features from text data for machine learning models.",
    status: "coming",
    tags: ["NLP", "Machine Learning"],
  },
];

export function getPublishedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.status === "published");
}

export function getRelatedPosts(
  slug: string,
  count: number = 2
): BlogPost[] {
  const current = blogPosts.find((p) => p.slug === slug);
  if (!current) return [];
  return getPublishedPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, count);
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
