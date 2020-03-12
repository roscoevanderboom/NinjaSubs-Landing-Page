import React from "react";
// @material-ui/core components
export default (props) => {
    const { text, href } = props;
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            className='text-dark'
            href={href}>
            {text}
        </a>
    )
}