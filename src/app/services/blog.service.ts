import { Injectable, signal, computed } from '@angular/core';
import { Article, BlogData } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  private blogData = signal<BlogData>({
    featuredArticle: {
      id: 1,
      title: "Marvel anuncia lançamento do novo filme",
      description: "Novo trailer de Marvel Zombies mostra Vingadores, Homem-Aranha e até Thanos em versão zumbi",
      photoCover: "https://i.ytimg.com/vi/yHTnwYatNKw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA8e5w4zfn-S4GczyAIb2WO7obzaQ",
      category: "Filmes",
      author: "Marvel Studios",
      publishedDate: "2024-10-25",
      featured: true,
      readTime: "5 min",
      tags: ["Marvel", "Zombies", "Vingadores", "Thanos"]
    },
    articles: [
      {
        id: 2,
        title: "Marvel inclui séries da Netflix na linha do tempo do MCU",
        description: "As séries do Demolidor, Jessica Jones e outras da Netflix agora fazem parte oficial do MCU",
        photoCover: "https://img.odcdn.com.br/wp-content/uploads/2023/09/Melhores-filmes-da-Marvel.jpg",
        category: "Séries",
        author: "Kevin Feige",
        publishedDate: "2024-10-24",
        featured: false,
        readTime: "3 min",
        tags: ["Netflix", "MCU", "Demolidor", "Jessica Jones"]
      },
      {
        id: 3,
        title: "Marvel Rivals revela data de chegada de Coisa e outros heróis",
        description: "O novo jogo da Marvel revelou novos personagens jogáveis incluindo o Coisa do Quarteto Fantástico",
        photoCover: "https://t2.tudocdn.net/740258?w=1920",
        category: "Games",
        author: "NetEase Games",
        publishedDate: "2024-10-23",
        featured: false,
        readTime: "4 min",
        tags: ["Marvel Rivals", "Games", "Quarteto Fantástico", "Coisa"]
      },
      {
        id: 4,
        title: "Nintendo Switch Online: Pacote + Expansion chega ao Brasil",
        description: "Nintendo finalmente disponibiliza o serviço premium no Brasil com jogos clássicos",
        photoCover: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000010079/a746d6ebc71bd10eb74ded9afb4ac96b8a795268e9ad47bda982c82190404b0a",
        category: "Nintendo",
        author: "Nintendo Brasil",
        publishedDate: "2024-10-22",
        featured: false,
        readTime: "2 min",
        tags: ["Nintendo", "Switch", "Brasil", "Subscription"]
      }
    ]
  });

  // Getters usando computed signals
  getFeaturedArticle = computed(() => this.blogData().featuredArticle);
  
  getArticles = computed(() => this.blogData().articles);
  
  getAllArticles = computed(() => [
    this.blogData().featuredArticle,
    ...this.blogData().articles
  ]);

  // Methods
  getArticleById(id: number): Article | undefined {
    const allArticles = this.getAllArticles();
    return allArticles.find((article: Article) => article.id === id);
  }

  getArticlesByCategory(category: string): Article[] {
    const allArticles = this.getAllArticles();
    return allArticles.filter((article: Article) => 
      article.category.toLowerCase() === category.toLowerCase()
    );
  }

  getCategories(): string[] {
    const allArticles = this.getAllArticles();
    const categories = allArticles.map((article: Article) => article.category);
    return [...new Set(categories)] as string[];
  }

  getRecentArticles(limit: number = 3): Article[] {
    const allArticles = this.getAllArticles();
    return allArticles
      .sort((a: Article, b: Article) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
      .slice(0, limit);
  }

  // Method to add new article (for future use)
  addArticle(article: Omit<Article, 'id'>): void {
    const currentData = this.blogData();
    const newId = Math.max(...currentData.articles.map((a: Article) => a.id)) + 1;
    const newArticle: Article = { ...article, id: newId };
    
    this.blogData.set({
      ...currentData,
      articles: [...currentData.articles, newArticle]
    });
  }
}