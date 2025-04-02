import axios from 'axios';
import * as cheerio from 'cheerio';

interface Article {
  title: string;
  excerpt: string;
  link: string;
  image?: string;
}

export async function getArticles(): Promise<Article[]> {
  // Directly return curated articles
  return [
    {
      title: "Essential Guide to Startup Funding",
      excerpt: "A comprehensive guide to different funding stages, from seed funding to Series A, and how to approach investors effectively.",
      link: "https://www.ycombinator.com/library/4A-a-guide-to-seed-fundraising",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Building a Successful MVP",
      excerpt: "Learn the essential steps to create a minimum viable product that validates your business idea and attracts early adopters.",
      link: "https://www.ycombinator.com/library/4D-building-your-mvp",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Marketing Strategies for Startups",
      excerpt: "Effective marketing techniques and growth hacking strategies for startups with limited budgets.",
      link: "https://www.ycombinator.com/library/5c-growth-tactics",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Legal Essentials for New Businesses",
      excerpt: "Navigate the legal requirements and compliance needs for your startup, from registration to intellectual property.",
      link: "https://www.ycombinator.com/library/6d-legal-basics",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Product-Market Fit Guide",
      excerpt: "How to identify, measure, and achieve product-market fit for your startup's success.",
      link: "https://www.ycombinator.com/library/5c-product-market-fit",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Team Building for Startups",
      excerpt: "Best practices for hiring, managing, and scaling your startup team from early stage to growth.",
      link: "https://www.ycombinator.com/library/8d-building-great-teams",
      image: "https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Financial Planning for Startups",
      excerpt: "Essential financial strategies and planning techniques to manage your startup's runway and growth.",
      link: "https://www.ycombinator.com/library/7c-startup-finances",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Tech Stack Selection Guide",
      excerpt: "How to choose the right technology stack for your startup that balances scalability and development speed.",
      link: "https://www.ycombinator.com/library/9a-tech-decisions",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Customer Acquisition Strategies",
      excerpt: "Proven strategies to acquire and retain customers while building a sustainable growth model.",
      link: "https://www.ycombinator.com/library/6b-customer-acquisition",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Startup Metrics That Matter",
      excerpt: "Key performance indicators and metrics that every startup should track for success.",
      link: "https://www.ycombinator.com/library/5d-startup-metrics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    }
  ];
}