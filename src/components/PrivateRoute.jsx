import { Redirect, Route } from 'react-router-dom';
import { useName } from '../context/NameContext';


// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export function PrivateRoute({ children, ...rest }) {
  const auth = useName();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.name ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
