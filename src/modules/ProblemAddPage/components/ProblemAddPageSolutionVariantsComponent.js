import React from "react";
import ProblemAddPageSolutionVariantItemComponent from "./ProblemAddPageSolutionVariantItemComponent";
import {Button} from "@mui/material";
import {useTranslation} from "react-multi-lang";

export default function ProblemAddPageSolutionVariantsComponent({
                                                                    variants,
                                                                    onSolutionVariantChange,
                                                                    onSolutionVariantRemoveClick,
                                                                    onSolutionVariantAddClick,
                                                                    processingPublication
                                                                }) {

    const t = useTranslation("problem-add-page");
    const items = variants.map((variant, index) =>
        <ProblemAddPageSolutionVariantItemComponent
            key={index}
            componentId={index}
            solution={variant}
            onSolutionChange={onSolutionVariantChange}
            onSolutionRemoveClick={onSolutionVariantRemoveClick}
        />
    );

    return <div>
        <Button
            variant="outlined"
            onClick={onSolutionVariantAddClick}
            disabled={processingPublication}
        >
            {t("add-solution")}
        </Button>
        {items}
    </div>;
}