import { Link } from "react-router-dom";

var PageLinks = ({ children, ...props }) => {
  return (
    <div>
      <Link {...props}>{children}</Link>
    </div>
  );
};

export default PageLinks;
