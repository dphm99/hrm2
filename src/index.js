import React from 'react';
import ReactDOM from 'react-dom';
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RecruitProvider } from "./components/contexts/ContextRecuit";
import Loading from "./components/Loading/Loading";

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsRecuit from './pages/DetailsRecruit/DetailsRecuit';
import { BlogProvider } from './components/contexts/ContextBlog'
// const Recruit = la zy(() => import("./pages/Recruit"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const JobList = lazy(() => import("./pages/JobList/JobList"))

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <RecruitProvider>
      <BlogProvider>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/tuyen-dung" component={DetailsRecuit} />
            {/* <Route exact path="/tuyen-dung" component={Recruit} /> */}
            {/* <Route path="/tuyen-dung/:name" component={Recruit} /> */}
            <Route exact path="/vi-tri-tuyen-dung" component={JobList} />
            <Route path="/*" component={PageNotFound} />
          </Switch>
        </Suspense>
      </BlogProvider>
    </RecruitProvider>
  </BrowserRouter>
  , rootElement);
