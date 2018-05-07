import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Aside from './components/Aside'
import Home from './components/Home'
import Form from './components/Form'
import Comments from './components/Comments'
import Offices from './components/Offices'
import Blog from './components/Blog'
import ShowPost from './components/ShowPost';
import ContactUs from "./components/ContactUs";
import Sponsers from "./components/Sponsers";


ReactDOM.render(<Aside />, document.querySelector('aside'));

const Root = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component={Home} />
            <Route path="/edit" component={Form} />
            <Route path="/blog" component={Blog} />
            <Route path="/showpost" component={ShowPost} />
            <Route path="/comments" component={Comments} />
            <Route path="/offices" component={Offices} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/sponsers" component={Sponsers} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(<Root />,document.querySelector('.body'));
