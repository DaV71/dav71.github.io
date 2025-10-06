import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://itsolutions.pl</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>https://itsolutions.pl/blog</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     ${posts
       .map((post) => {
         return `
       <url>
           <loc>https://itsolutions.pl/blog/${post.slug}</loc>
           <lastmod>${new Date(post.date).toISOString()}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.6</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap({ sitemap }) {
  return (
    <div>
      <pre>{sitemap}</pre>
    </div>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'blog');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      slug: filename.replace('.md', ''),
      date: data.date || new Date().toISOString(),
    };
  });

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  return {
    props: {
      sitemap,
    },
  };
}

export default SiteMap;
