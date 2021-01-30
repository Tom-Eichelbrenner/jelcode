import React, {Component} from 'react';
import {Box, Button, Grid, Typography} from "@material-ui/core";

class MainPageLeftPart extends Component {
    render() {
        return (
            <Box style={{
                height: "100%",
                width: "100%",
            }}>
                <Grid container
                      direction={"column"}
                      justify={"center"}
                      alignItems={"center"}
                      style={{
                          height: "100vh"
                      }}>
                    <Grid item>
                        <Typography
                            variant={"h3"}
                            component={"h1"}
                            color={"secondary"}
                            style={{
                                padding: "16px"
                            }}>
                            JelCODE
                        </Typography>
                        <Box bgcolor={"primary.light"}>
                            <Typography
                                variant={"subtitle1"}
                                style={{
                                    padding: "16px"
                                }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, doloribus, possimus?
                                Doloribus ducimus excepturi fuga harum maiores odio, quaerat quam quidem, quos,
                                recusandae
                                sed sequi! Distinctio ex incidunt modi totam.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item
                          style={{
                              padding: "16px"
                          }}>
                        <Button
                            color={"secondary"}
                            variant={"outlined"}>
                            En savoir plus
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default MainPageLeftPart;