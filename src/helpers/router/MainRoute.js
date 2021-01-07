import { Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import NotLoginedMain from "../../Pages/NotLoginedMain";

const MainRoute = ({ component: Component, ...rest }) => {
  const [cookie] = useCookies(["waverytime"]);
  return (
    <Route
      {...rest}
      render={(props) =>
        cookie["waverytime"] !== undefined ? (
          <Component {...props} />
        ) : (
          <NotLoginedMain />
        )
      }
    />
  );
};

export default MainRoute;
