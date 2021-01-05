import { Link } from "react-router-dom";

import "./Auth.css";
import "./userInfo.css";

const AuthMethod = ({ method }) => {
  const { AuthName, description, link } = method;
  return (
    <Link to={link}>
      <article className="authMethod-wrapper">
        <h2 className="info-header-font">{AuthName}</h2>
        <p className="auth-descript-font">{description}</p>
      </article>
    </Link>
  );
};

export default AuthMethod;
