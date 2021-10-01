import React from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Tab,
    Tabs,
    TextField,
    Typography
} from "@mui/material";

import PropTypes from "prop-types";
import {useTranslation} from 'react-multi-lang'

import {useStyles} from "./ProblemAddPageStyles";
import ProblemAddPageEditTabComponent from "./ProblemAddPageEditTabComponent";
import ProblemAddPagePreviewTabComponent from "./ProblemAddPagePreviewTabComponent";



function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

// TODO: разобраться шо это
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function ProblemAddPageComponent({
                                                    imageList,
                                                    onImageFieldChange,
                                                    tabsValue,
                                                    onTabsChange,
                                                    onTitleTextChange,
                                                    onRawDescriptionTextChange,
                                                    rawDescription
                                                }) {
    const classes = useStyles();
    const t = useTranslation("problem-add-page");
    return (<Card className={classes.mainCard}>
        <CardContent>
            <Typography
                className={classes.margin16px}
                component="h1"
                variant="h4">
                {t("new-problem")}
            </Typography>
            <div className={classes.margin16px}>
                <TextField
                    label={t("title")}
                    autoFocus
                    required
                    onChange={onTitleTextChange}/>
            </div>
            <div>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={tabsValue} onChange={onTabsChange} aria-label="basic tabs example">
                        <Tab label={t("tab-edit")} {...a11yProps(0)} />
                        <Tab label={t("tab-preview")} {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={tabsValue} index={0}>
                    <ProblemAddPageEditTabComponent onRawDescriptionTextChange={onRawDescriptionTextChange}
                                                    rawDescription={rawDescription}/>
                </TabPanel>
                <TabPanel value={tabsValue} index={1}>
                    <ProblemAddPagePreviewTabComponent rawDescription={rawDescription}/>
                </TabPanel>
            </div>

            <Typography
                className={classes.margin16px}
                component="h1"
                variant="h5">
                {t("upload-images")}
            </Typography>
            <div>
                {imageList}
            </div>
            <div>
                <Button variant="contained" className={classes.button}>
                    {t("publish")}
                </Button>
            </div>
        </CardContent>
    </Card>);
}