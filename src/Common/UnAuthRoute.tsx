import React from 'react';
import {
  Route,
  Redirect,
} from "react-router-dom";

export default function UnAuthRoute({ children, ...rest }: { children: React.ReactElement | React.ReactElement[], [x: string]: any }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        const token = localStorage.getItem('auth');
        if (token) {
          return (
            <Redirect
              to={{
                pathname: "/dashboard",
                state: { from: location }
              }}
            />
          )
        }
        return children;
      }}
    />
  );
}
