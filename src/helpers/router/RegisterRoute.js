import { Redirect, Route } from "react-router-dom";
import { useRegisterContext } from "../../Context/";

const RegisterRoute = ({ component: Component, ...rest }) => {
  const { checkUniYear, info } = useRegisterContext();
  return (
    <Route
      {...rest}
      render={(props) =>
        checkUniYear(info.university) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/register",
            }}
          />
        )
      }
    />
  );
};

export default RegisterRoute;
