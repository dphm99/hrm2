import React from 'react';
import ReactDOM from 'react-dom/client';
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RecruitProvider } from "./components/contexts/ContextRecuit";
import Loading from "./components/Loading/Loading";

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsRecuit from './pages/DetailsRecruit/DetailsRecuit';

// const Recruit = lazy(() => import("./pages/Recruit"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(
  <BrowserRouter>
    <RecruitProvider>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/tuyen-dung" component={DetailsRecuit} />
          {/* <Route exact path="/tuyen-dung" component={Recruit} /> */}
          {/* <Route path="/tuyen-dung/:name" component={Recruit} /> */}
          <Route path="/*" component={PageNotFound} />
        </Switch>
      </Suspense>
    </RecruitProvider>
  </BrowserRouter>
);
