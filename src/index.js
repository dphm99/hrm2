import React from "react";
import { createRoot } from "react-dom/client";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RecruitProvider } from "./components/contexts/ContextRecuit";
import { BlogProvider } from "./components/contexts/ContextBlog";
import Loading from "./components/Loading/Loading";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailsRecuit from "./pages/DetailsRecruit/DetailsRecuit";
// const Recruit = lazy(() => import("./pages/Recruit"));
import Blog from "./pages/Blog/Blog";
import Culture from "./pages/Culture/Culture";
import CultureDetail from "./pages/Culture/CultureDetail/CultureDetail";
import FormRecruit from "./pages/FormRecruit/FormRecruit";
import RecruitPosition from "./pages/RecruitPosition/RecruitPosition";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import Index from "./pages/FAQs/index";
import ScrollToTop from "./components/extensions/scrollToTop";
import FlowHiring from "./pages/FlowHiring/FlowHiring";
import Research from "../src/pages/Research/Research";
import ApplySuccess from "../src/pages/ApplySuccess/ApplySuccess";
import Alert from "../src/components/Alert/alert";
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const JobList = lazy(() => import("./pages/JobList/JobList"));

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(
  <BrowserRouter>
    <RecruitProvider>
      <BlogProvider>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/tuyen-dung/:name" component={DetailsRecuit} />
            {/* <Route exact path="/tuyen-dung" component={Recruit} /> */}
            <Route path="/tuyen-dung" component={JobList} />
            <Route exact path="/dinh-huong-nghe-nghiep" component={Blog} />
            <Route
              path="/dinh-huong-nghe-nghiep/:name"
              component={BlogDetail}
            />
            <Route exact path="/van-hoa" component={Culture} />
            <Route path="/van-hoa/:name" component={CultureDetail} />
            <Route path="/ung-tuyen/:name" component={FormRecruit} />
            <Route exact path="/ung-tuyen/" component={FormRecruit} />
            <Route path="/ung-tuyen-nang-luc" component={RecruitPosition} />
            <Route path="/tro-giup" component={Index} />
            <Route path="/quy-trinh-tuyen-dung" component={FlowHiring} />
            <Route path="/tra-cuu" component={Research} />
            <Route path="/ung-tuyen-thanh-cong" component={ApplySuccess} />
            <Route path="/*" component={PageNotFound} />
          </Switch>
        </Suspense>
        <ScrollToTop />
      </BlogProvider>
    </RecruitProvider>
  </BrowserRouter>
);
