export interface Article {
  id: number;
  title: string;
  description: string;
  photoCover: string;
  category: string;
  author: string;
  publishedDate: string;
  featured: boolean;
  readTime: string;
  tags?: string[];
}

export interface BlogData {
  featuredArticle: Article;
  articles: Article[];
}