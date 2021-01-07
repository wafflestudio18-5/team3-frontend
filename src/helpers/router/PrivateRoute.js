import { Redirect, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
const PrivateRoute = ({ component: Component, renderDecision, ...rest }) => {
  const [cookie] = useCookies();
  // renderDecision = renderDecision || cookie["waverytime"] !== undefined;
  return (
    <Route
      {...rest}
      render={(props) =>
        renderDecision ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
