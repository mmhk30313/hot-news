import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { Context } from '../Home/Home';
import { Link } from 'react-router-dom';
const NewsCard = () => {
    const [news,setNews, seenNews, setSeenNews,currentNews, setCurrentNews] = useContext(Context);
    const handleAddNews = (current) =>{
        const today = new Date();
        // console.log(current);
        current.today = today.toLocaleDateString()+' - '+today.toLocaleTimeString();
        const allSeenNews = [...seenNews,current];
        // console.log(allSeenNews);
        setSeenNews(allSeenNews);
        // setCurrentNews([]);
        const myCurrentNews = news.find(nws => nws.url === current.url);
        setCurrentNews(myCurrentNews);
    }
    // console.log(currentNews);
    // console.log(news);
    for(let i = news.length-1;i>0;i--){
        const j = Math.floor(Math.random() * i)
        const temp = news[i]
        news[i] = news[j]
        news[j] = temp
    }
    return (
        <div className="row text-center justify-content-md-center">
            {/* <h4>News</h4> */}
            {
                news.map((NEWS,idx) =>
                    // console.log(NEWS.url)
                    NEWS.urlToImage && <div key={idx} className="col-lg-8 col-md-7 col-sm-12 col">
                        <Card style={{margin:'25px auto',padding: '2% 15%'}} className="text-center">
                        {/* <Card.Header>Featured</Card.Header> */}
                    
                            <Card.Img style={{height: '250px',width: '70%',margin: '0 auto'}} variant="top" src={NEWS.urlToImage}></Card.Img>
                            <Card.Body>
                            <Card.Title>{NEWS.title}</Card.Title>
                            <Card.Text className="text-dark">{NEWS.content}</Card.Text>
                            
                            <Link to={`/news/${NEWS.author}`}>
                                <Button onClick={() => handleAddNews(NEWS)}  variant="outline-danger">Details</Button>
                            </Link>
                            </Card.Body>
                            {
                                NEWS.author 
                                ? <Card.Footer className="text-warning">{NEWS.author}</Card.Footer>
                                : <Card.Footer className="text-warning">Daily News</Card.Footer>
                            }
                        </Card>
                    </div>
                )
            }
        </div>
    );
};

export default NewsCard;