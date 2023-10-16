import { Link } from "react-router-dom";

var PageLinks = ({ children, ...props }) => {
  return (
    <div>
      <Link className="PageLinksUI" {...props}>{children}</Link>
    </div>
  );
};

export default PageLinks;
