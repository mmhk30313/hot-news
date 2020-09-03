import React, { useContext, useEffect } from 'react';
import { Context } from '../Home/Home';
import NewsCard from '../NewsCard/NewsCard';

const Main = () => {
    const [news, setNews] = useContext(Context);
    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=74d7c3308fdb4c5899c7989f64d0f9aa`;
        fetch(url)
        .then(response => response.json())
        .then(data => setNews(data.articles));
    },[]);
    if(news.length===0){
        return "";
    }
    // console.log(news);
    return (
        <div className="jumbotron">
            {/* <h1>This is main page for news</h1> */}
            <NewsCard/>
            {/* {
                news.map((NEWS, idx) => <NewsCard key={idx} news={NEWS}></NewsCard>)
            } */}
        </div>
    );
};

export default Main;