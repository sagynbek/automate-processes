import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import DashboardPage from 'src/pages/dashboard/DashboardPage';
import TextIntoParagraph from 'src/pages/text-into-paragraph/TextIntoParagraph';


const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={DashboardPage} />
      <Route exact path="/text-into-paragraph" component={TextIntoParagraph} />
    </Switch>
  );
}

export default AppRouter;
