import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, useParams, useRouteMatch} from 'react-router-dom';
import Movies from './components/Movies';
import Admin from './components/Admin';
import Home from './components/Home';
import Categories from './components/Categories';
import OneMovie from './components/OneMovie';

export default function App() {
  return (
    <Router>
    <div className="Container">
      <div className="row">
        <h1 className="mt-3">
          Movie to Watch! 
        </h1>
        <hr className="mt-3"></hr>
      </div>

    </div><div className="row">
        <div className="col-md-2">
          <nav>
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="/">Home</Link>
              </li>
              <li className="list-group-item">
                <Link to="/movies">Movies</Link>
              </li>
              <li className="list-group-item">
                <Link to="/by-category">Categories</Link>
              </li>
              <li className="list-group-item">
                <Link to="/admin">Manage Catelogies</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="col-md-10">
          <Switch>
            <Route exact path="/movies/:id" component={OneMovie} />
            <Route exact path="/" component={Home} />
            <Route exact path="/by-category" component={CategoryPage} />

            <Route exact path="/by-category/drama" 
              render={(props) => <Categories {...props} title={`Drama`} />} />

            <Route exact path="/by-category/action"
              render={(props) => <Categories {...props} title={`Action`} />} />

            <Route exact path="/by-category/comedy"
              render={(props) => <Categories {...props} title={`Comedy`} />} />

            <Route path="/movies" component={Movies} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}


function CategoryPage() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Categories</h2>
      <ul>

        <li>
          <Link to={`${path}/action`}>Action</Link>
        </li>
        <li>
          <Link to={`${path}/comedy`}>Comedy</Link>
        </li>
        <li>
          <Link to={`${path}/drama`}>Drama</Link>
        </li>
      </ul>
    </div>
  );
}


