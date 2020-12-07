import React from "react";
// @material-ui/core components
const Anchor = props => {
  const { text, href } = props;
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="text-dark"
      href={href}
    >
      {text}
    </a>
  );
};
export default Anchor;
