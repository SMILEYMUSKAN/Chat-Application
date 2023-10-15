import { Link } from "react-router-dom";

var PageLinks = ({ children, ...props }) => {
  return (
    <div>
      <Link className="transition hover:text-white" {...props}>{children}</Link>
    </div>
  );
};

export default PageLinks;
