import React from "react";
import {
    AppBar,
    Box,
    Button,
    FormControlLabel,
    Switch,
    Toolbar,
    Typography
} from "@mui/material";
import styled from "@emotion/styled";

const Offset = styled('div')(({theme}) => theme.mixins.toolbar);

export default function AppBarComponent({onThemeSwitchChange, isDarkThemeEnabled}) {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="fixed">

                <Toolbar>

                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Матеша
                    </Typography>
                    <FormControlLabel
                        control={
                            <Switch
                                color="secondary"
                                checked={isDarkThemeEnabled}
                                onChange={onThemeSwitchChange}/>
                        }
                        label="сниггерс"
                        labelPlacement="start"

                    />

                    <Button color="inherit">Хто я</Button>
                </Toolbar>

            </AppBar>
            <Offset/>
        </Box>


    );
}