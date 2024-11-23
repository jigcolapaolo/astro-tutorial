interface FrontMatter {
    title: string;
    description: string;
    pubDate: Date;
    image: {
      url: string;
      alt: string;
    };
    author: string;
    tags: string[];
}

interface Post {
    url: string;
    frontmatter: FrontMatter;
}