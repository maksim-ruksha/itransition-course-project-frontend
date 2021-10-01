import {TextField} from "@mui/material";
import React from "react";
import {useStyles} from "./ProblemAddPageStyles";
import {useTranslation} from "react-multi-lang";

export default function ProblemAddPageEditTabComponent({onRawDescriptionTextChange, rawDescription}) {
    const t = useTranslation();
    return (
        <div>
            <TextField
                label={t("description")}
                required
                fullWidth={true}
                multiline={true}
                value={rawDescription}
                onChange={onRawDescriptionTextChange}
                onKeyDown={e => {
                    if (e.key === 'Tab' && !e.shiftKey) {
                        document.execCommand('insertText', false, "\t");
                        e.preventDefault();
                        return false;
                    }
                }}
                variant="filled"/>
        </div>
    );
}