import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

const styles = {
    fontColor: 'black'
}

export default (props) => {
    const { text, href } = props;
    return (
        <a
            className='text-dark'
            target="_blank"
            rel="noopener noreferrer"
            href={href}>
            {text}
        </a>
    )
}