import React from "react";

export const ColorfilMessage = (props) => {
    const {color,children} = props
    // console.log(props)
    const contentLadyStyle = {
        color,
        fontSize: '18px'
    };
    return (
        <p style={contentLadyStyle}>{children}</p>
    );
};

// export default ColorfilMessage;