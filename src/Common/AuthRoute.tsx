import React from 'react';
import {
  Route,
  Redirect,
} from "react-router-dom";

export default function AuthRoute({ children, ...rest }: { children: React.ReactElement | React.ReactElement[], [x: string]: any }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        const token = localStorage.getItem('auth');
        if (!token) {
          return (
            <Redirect
              to={{
                pathname: "/",
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
