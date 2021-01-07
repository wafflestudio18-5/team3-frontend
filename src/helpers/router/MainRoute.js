import { Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import NotLoginedMainPage from "../../Pages/NotLoginedMain";

const MainRoute = ({ component: Component, ...rest }) => {
  const [cookie] = useCookies();
  return (
    <Route
      {...rest}
      render={(props) =>
        cookie["waverytime"] !== undefined ? (
          <Component {...props} />
        ) : (
          <NotLoginedMainPage />
        )
      }
    />
  );
};

export default MainRoute;
