import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

// Routes
import { book } from './book';

// Pages
import { TopSongs } from '../pages/topSongs';

export const Routes = () => {
    return (
        <>
            <nav>
                <Link to={book.root}>Топ песен</Link>
                &nbsp;
                <Link to={book.donations}>Пожертвования</Link>
            </nav>
            <Switch>
                <Route exact path={ book.root }>
                    <TopSongs/>
                </Route>
                <Route exact path={ book.donations }>
                    <p>donations</p>
                </Route>
            </Switch>
        </>
    )
};