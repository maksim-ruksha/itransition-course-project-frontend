import React from "react";
import {Button, Card, CardContent, Slider, Typography} from "@mui/material";
//TODO: on problem click
export default function AccountPageComponent({onProblemClick}) {
    return (
        <div>
            <Card className="main-card">
                <CardContent>
                    <Typography
                        component="h1" variant="h5"
                        className="main-card"
                    >
                        Текст
                    </Typography>
                    <Slider className="slider"/>
                    <Button className="main-card">
                        Батон
                    </Button>
                </CardContent>
            </Card>


        </div>);
}