import { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainLayout from '_common/layouts/MainLayout';
import LazyLoading from './_common/components/LazyLoading';

const DashboardRoutes = lazy(() => import('./Modules/dashboard/dashboard.routes'));
const TasksRoutes = lazy(() => import('./Modules/tasks/tasks.routes'));
const UsersRoutes = lazy(() => import('./Modules/users/users.routes'));

const MainRoutes = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/dashboard" component={LazyLoading(DashboardRoutes)} />
        <Route path="/tarefas" component={LazyLoading(TasksRoutes)} />
        <Route path="/usuarios" component={LazyLoading(UsersRoutes)} />

        <Redirect to="/dashboard" />
      </Switch>
    </MainLayout>
  );
};

export default MainRoutes;
