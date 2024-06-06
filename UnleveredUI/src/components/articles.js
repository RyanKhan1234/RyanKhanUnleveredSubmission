// import React from 'react';
// import '../App.css'

// const Articles = () => {
//   const articles = {
//     "article1": {
//       "sentiment": {
//         "score": 0.9,
//         "value": "positive"
//       },
//       "summary": "This is Article1"
//     },
//     "article2": {
//       "sentiment": {
//         "score": 0.67,
//         "value": "negative"
//       },
//       "summary": "This is Article2"
//     },
//     "article3": {
//       "sentiment": {
//         "score": 0.559,
//         "value": "positive"
//       },
//       "summary": "This is Article3"
//     }
//   };

//   return (
//     <div className='text-violet-300 font-serif montserrat'>
//       <h2>News Articles</h2>
//       {Object.entries(articles).map(([articleId, article]) => (
//         <div key={articleId}>
//           <h3>{articleId}</h3>
//           <p>Sentiment: {article.sentiment.value} (Score: {article.sentiment.score})</p>
//           <p>Summary: {article.summary}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Articles;
import React from 'react';
import './Home.css'

const NewsArticles = () => {
  const articles = [
    {
      title: 'Article1',
      sentiment: 'positive',
      score: 0.9,
      summary: 'This is Article1 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.'
    },
    {
      title: 'Article2',
      sentiment: 'negative',
      score: 0.67,
      summary: 'This is Article2'
    },
    {
      title: 'Article3',
      sentiment: 'positive',
      score: 0.559,
      summary: 'This is Article3'
    }
  ];

  return (
    <div className='text-violet-300 montserrat border-solid border-2 rounded-md border-indigo-600 custom-articlePadding custom-hover'>
      <h2 className='text-center'>News</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {articles.map((article, index) => (
          <div key={index} className='p-1 border-solid border-2 border-indigo-600 rounded-lg'>
            <h3 className='text-xl font-bold'>{article.title}</h3>
            <p>
              <strong>Sentiment:</strong> {article.sentiment} (Score: {article.score})
            </p>
            <p>
              <strong>Summary:</strong> {article.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsArticles;
