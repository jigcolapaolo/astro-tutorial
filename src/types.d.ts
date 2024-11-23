interface FrontMatter {
    title: string;
    pubDate: Date;
    description: string;
    author: string;
    image: {
      url: string;
      alt: string;
    };
    tags: string[];
}

interface Post {
    url: string;
    frontmatter: FrontMatter;
}