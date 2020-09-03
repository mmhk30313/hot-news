import React, { createContext }  from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import './Home.css';
import Main from '../Main/Main';
import Reviews from '../Reviews/Reviews';
import { useState } from 'react';
import NewsDetails from '../NewDetails/NewsDetails';
import CurrentNews from '../CurrentNews/CurrentNews';
export const Context = createContext();
const Home = () => {
    const [news, setNews] = useState([]);
    const [seenNews, setSeenNews] = useState([]);
    const [currentNews, setCurrentNews] = useState({});
    return (
        <Context.Provider value={[news, setNews,seenNews, setSeenNews,currentNews, setCurrentNews]}>
            <Router>
                <nav>
                    <h5 className='link'><Link to='/home' className="text-light" style={{textDecoration: 'none'}}>Home</Link></h5>
                    <div className='link'><Link to='/current_news' className="text-light" style={{textDecoration: 'none'}}>Current News</Link></div>
                    <h5 className='link'><Link to='/reviews' className="text-light" style={{textDecoration: 'none'}}>Reviews</Link></h5>
                </nav>
                <Switch>
                    {/* <Main/> */}
                    <Route path='/home'>
                        <Main/>
                    </Route>
                    <Route path='/reviews'>
                        <Reviews/>
                    </Route>
                    <Route path='/news/:currentNews'>
                        <NewsDetails/>
                    </Route>
                    <Route path="/current_news">
                        <CurrentNews/>
                    </Route>
                    <Route exact path='/'>
                        <Main/>
                    </Route>
                    <Route path='*'>

                    </Route>
                </Switch>
            </Router>
        </Context.Provider>
    );
};

export default Home;