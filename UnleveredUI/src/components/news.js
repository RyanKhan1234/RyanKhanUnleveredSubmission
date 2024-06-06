import React, { useEffect, useState } from 'react';
import AnalystEstimates from './analaystEstimates';
import Articles from './articles';

const StockDataComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Assuming the JSON data is fetched from an API or available locally
    const jsonData = {
      "analyst_estimates": {
        "Citibank": 6.5,
        "Goldman Sachs": 7.9,
        "Morgan Stanley": 9.87
      },
      "current_ratio": 7.1,
      "debt_to_equity_ratio": 2.1,
      "eps": 1.7,
      "market_ap": 2.5,
      "news": {
        "article1": {
          "sentiment": {
            "score": 0.9,
            "value": "positive"
          },
          "summary": "This is Article1"
        },
        "article2": {
          "sentiment": {
            "score": 0.67,
            "value": "negative"
          },
          "summary": "This is Article2"
        },
        "article3": {
          "sentiment": {
            "score": 0.559,
            "value": "positive"
          },
          "summary": "This is Article3"
        }
      },
      "pb_ratio": 7.9,
      "pe_ratio": 1.2,
      "peg_ratio": 5.5,
      "ps_ratio": 33.5,
      "shares_outstanding": 317,
      "ticker": "AAPL"
    };

    setData(jsonData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Stock Data for {data.ticker}</h1>
      <AnalystEstimates estimates={data.analyst_estimates} />
      <Articles articles={data.news} />
    </div>
  );
};

export default StockDataComponent;
