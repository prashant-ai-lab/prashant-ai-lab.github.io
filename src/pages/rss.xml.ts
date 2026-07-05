import type { APIRoute } from "astro";
import { getPublishedPosts } from "../data/blog";

export const GET: APIRoute = async () => {
  const site = "https://prashant.github.io";
  const posts = getPublishedPosts();

  const items = posts
    .map(
      (post) => `
    <item>
      <title>${post.title}</title>
      <link>${site}/blog/${post.slug}/</link>
      <description>${post.description}</description>
      <pubDate>${new Date(post.date! + "T00:00:00Z").toUTCString()}</pubDate>
      <guid>${site}/blog/${post.slug}/</guid>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Prashant Chaturvedi — Blog</title>
    <link>${site}/blog/</link>
    <description>Thoughts on programming, data science, and technology</description>
    <language>en-us</language>
    <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
