import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { Context } from '../Home/Home';
import { Link } from 'react-router-dom';
const Reviews = () => {
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

    return (
        <div className="jumbotron" style={{overflowX: 'none'}}>
            <div className="row text-center justify-content-md-center">
            {
                seenNews.length>0 ? seenNews.reverse().map((NEWS,idx) =>
                    // console.log(NEWS.url)
                    NEWS.urlToImage && <div key={idx} className="col-lg-10 col-md-10 col-sm-12 col">
                        <div style={{margin:'25px auto',padding: '2% 15%',overflow: 'hidden'}} className="text-center bg-light d-flex">
                        {/* <Card.Header>Featured</Card.Header> */}
                    
                            <Card style={{width: '50%'}}>
                                <Card.Img style={{height: '80%',position: 'relative',top: '15%',width: '90%',margin: '0 auto'}} variant="center" src={NEWS.urlToImage}></Card.Img>
                            </Card>
                            <Card style={{width: '50%'}}>
                                <Card.Body>
                                <Card.Title>{NEWS.title}</Card.Title>
                                <Card.Text className="text-dark">{NEWS.content}</Card.Text>
                                
                                <Link to={`/news/${NEWS.author}`}>
                                    <Button onClick={() => handleAddNews(NEWS)}  variant="outline-success">Details</Button>
                                </Link>
                                </Card.Body>
                                <Card.Footer className="text-info">Last Seen: {NEWS.today}</Card.Footer>
                            </Card>
                        </div>
                    </div>
                )
                : <Card.Text className="text-info">Your History News Are Not In Available...</Card.Text>
            }
            </div>
        </div>
    );
};

export default Reviews;