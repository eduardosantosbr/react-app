import React from "react";
import {Switch, Route} from "react-router-dom";

const UsersRoutes = ({match:{url}}) => {
    return (
        <Switch>
            <Route path={`${url}`} component={() => <>Tasks Sub</>} />
        </Switch>
      );
};

export default UsersRoutes;