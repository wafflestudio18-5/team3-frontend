import { AuthMethod } from "./";
import { MidWrapper } from "../";
const AuthWrapper = ({ section }) => {
  const { header, contents } = section;
  const renderedContents = contents.map((method, index) => {
    return <AuthMethod method={method} key={index} />;
  });
  return (
    <MidWrapper>
      <h2 className="auth-header-font">{header}</h2>
      {renderedContents}
    </MidWrapper>
  );
};

export default AuthWrapper;
