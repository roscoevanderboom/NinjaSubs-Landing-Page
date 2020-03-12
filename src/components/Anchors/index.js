import React from "react";
// @material-ui/core components
export default (props) => {
    const { text, href } = props;
    return (
        <a
            className='text-dark'            
            href={href}>
            {text}
        </a>
    )
}