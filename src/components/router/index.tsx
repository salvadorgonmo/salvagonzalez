import React from "react";
import { Home } from "../../pages/Home";
import { Portfolio } from "../../pages/Portfolio";
import { MainLayout } from "../layout";
import { Blog } from "../../pages/Blog";
import { Contact } from "../../pages/Contact";
import { Resume } from "../../pages/Resume";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const RouterApp = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>
        <Route path="/portfolio" exact>
          <MainLayout>
            <Portfolio title="hello" amount={20} cardTitle="example" />
          </MainLayout>
        </Route>

        <Route path="/blog" exact>
          <MainLayout>
            <Blog />
          </MainLayout>
        </Route>

        <Route path="/resume" exact>
          <MainLayout>
            <Resume />
          </MainLayout>
        </Route>

        <Route path="/contact" exact>
          <MainLayout>
            <Contact />
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterApp;
