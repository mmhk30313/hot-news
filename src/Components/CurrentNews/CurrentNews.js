import React from 'react';
import { useContext } from 'react';
import { Context } from '../Home/Home';
import { Card } from 'react-bootstrap';
const CurrentNews = () => {
    const [news,setNews, seenNews, setSeenNews,currentNews, setCurrentNews] = useContext(Context);
    // console.log(currentNews);
    const {url, urlToImage, title,source,content, description,author,publishedAt} = currentNews;
    const image = urlToImage;
    return (
        <div className='jumbotron text-center'>
            {
                url ? <Card className="text-center"  style={{width:'60%', margin: '0 auto',marginTop: '-8px'}}>
                        <Card.Img style={{width: '60%',margin: '20px auto'}} variant="top" src={image}></Card.Img>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text className="text-dark">
                                {content}
                            </Card.Text>
                            <hr/>
                            <Card.Text>{description}</Card.Text>
                            <Card.Link href={url} target="_blank" variant="outline-primary">see here</Card.Link>
                            <Card.Text className="text-dark">From: {author} - {source.name}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Published At: {publishedAt}</Card.Footer>
                    </Card>
                :   <Card.Text>No current news is now in available...</Card.Text>
            }
        </div>
    );
};
export default CurrentNews;