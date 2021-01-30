import React from 'react';
import {Container} from "@material-ui/core";

function FullHeight(props) {
    return (
        <Container
            style={{
                minHeight: "100vh",
                width: "100vw"
            }}>
            {props.children}
        </Container>
    );
}

export default FullHeight;