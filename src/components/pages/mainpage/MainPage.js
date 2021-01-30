import React, {Component} from 'react';
import FullHeight from "../../layouts/FullHeight";
import {Grid, Hidden} from "@material-ui/core";
import MainPageLeftPart from "./MainPageLeftPart";
import MainPageRightPart from "./MainPageRightPart";

class MainPage extends Component {
    render() {
        return (
            <FullHeight>
                <Grid container
                      direction={"column"}
                      justify={"center"}
                      alignItems={"center"}>
                    <Grid container
                          direction={"row"}
                          justify={"space-around"}
                          alignItems={"center"}
                          style={{
                              height: "100vh"
                          }}>
                        <Grid item
                              xs={10}
                              sm={5}
                              style={{
                                  height: "100%"
                              }}>
                            <MainPageLeftPart/>
                        </Grid>
                        <Hidden xsDown>
                            <Grid item
                                  sm={5}
                                  style={{
                                      height: "100%"
                                  }}>
                                <MainPageRightPart/>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Grid>
            </FullHeight>
        );
    }
}

export default MainPage;