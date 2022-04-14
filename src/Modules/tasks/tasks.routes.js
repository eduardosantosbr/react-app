import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TaskList from './TasksList';

const TasksRoutes = ({ match: { url } }) => {
  return (
    <Switch>
      <Route path={`${url}`} component={TaskList} />
    </Switch>
  );
};

export default TasksRoutes;
