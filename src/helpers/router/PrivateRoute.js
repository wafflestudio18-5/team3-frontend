import { Redirect, Route } from "react-router-dom";
import { useLoginContext } from "../../Context/LoginData";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLogined } = useLoginContext();
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogined() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
