import React from "react";
import ProblemAddPageImageListItemComponent from "./ProblemAddPageImageListItemComponent";
import ProblemAddPageAddImageListItemComponent from "./ProblemAddPageAddImageListItemComponent";

export default function ProblemAddPageImageListComponent({
                                                             problemImages,
                                                             onImageDragEnter,
                                                             onImageDragOver,
                                                             onImageDragLeave,
                                                             onImageDragDrop,
                                                             onImageFieldChange,
                                                             onRemoveImageClick,
                                                             highlightAddImageButton,
                                                             processingPublication
                                                         }) {
    const images = problemImages.map((file, index) => file != null ?
        (<ProblemAddPageImageListItemComponent
            componentId={index}
            onRemoveImageClick={onRemoveImageClick}
            key={file.name}
            processingPublication={processingPublication}
            image={file ? URL.createObjectURL(file) : null}/>) : {}
    );
    return <div>
        {images}
        <ProblemAddPageAddImageListItemComponent
            onImageDragEnter={onImageDragEnter}
            onImageDragOver={onImageDragOver}
            onImageDragLeave={onImageDragLeave}
            onImageDragDrop={onImageDragDrop}
            onImageFieldChange={onImageFieldChange}
            highlight={highlightAddImageButton}
            processingPublication={processingPublication}
        />
    </div>
}