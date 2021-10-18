import React from "react";
import ProblemAddPageSolutionVariantItemComponent from "./ProblemAddPageSolutionVariantItemComponent";

export default function ProblemAddPageSolutionVariantsComponent({
                                                                    variants,
                                                                    onSolutionVariantChange,
                                                                    onSolutionVariantRemoveClick
                                                                }) {
    const items = variants.map((variant, index) =>
        <ProblemAddPageSolutionVariantItemComponent
            key={index}
            componentId={index}
            solution={variant}
            onSolutionChange={onSolutionVariantChange}
            onSolutionRemoveClick={onSolutionVariantRemoveClick}
        />
    );

    return items;
}