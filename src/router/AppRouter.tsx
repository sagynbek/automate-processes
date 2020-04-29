import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import DashboardPage from 'src/pages/dashboard/DashboardPage';
import TextIntoParagraph from 'src/pages/text-into-paragraph/TextIntoParagraph';
import ChangeParagraphCase from 'src/pages/change-paragraph-case/ChangeParagraphCase';


const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={DashboardPage} />
      <Route exact path="/text-into-paragraph" component={TextIntoParagraph} />
      <Route exact path="/change-paragraph-case" component={ChangeParagraphCase} />
    </Switch>
  );
}

export default AppRouter;
