import React, {Component} from 'react';
import {Box, Grid} from "@material-ui/core";
import {Character5} from "../../svg";

class MainPageRightPart extends Component {
    render() {
        return (
            <Box style={{
                height: "100%",
                width: "100%",
            }}>
                <Grid container
                      justify={"center"}
                      alignItems={"center"}
                      style={{height: "100%"}}>
                    <Character5/>
                </Grid>
            </Box>
        );
    }
}

export default MainPageRightPart;