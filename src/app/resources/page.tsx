import React from 'react';
import { getArticles } from '@/lib/scraper';
import { Suspense } from 'react';
import ResourcesHeader from '@/components/ResourcesHeader';

async function ArticlesList() {
  const articles = await getArticles();

  if (articles.length === 0) {
    return (
      <div className="text-center text-gray-600 py-10">
        No articles found. Please try again later.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          {article.image && (
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h2>
            <p className="text-gray-600 mb-4">{article.excerpt}</p>
            <a 
              href={article.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
            >
              Read More 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <ResourcesHeader />
      <div className="container mx-auto px-4 py-16 pt-24"> {/* Added pt-24 for header spacing */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Startup Resources</h1>
        <Suspense fallback={
          <div className="text-center py-10">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Loading articles...</p>
          </div>
        }>
          <ArticlesList />
        </Suspense>
      </div>
    </div>
  );
}
