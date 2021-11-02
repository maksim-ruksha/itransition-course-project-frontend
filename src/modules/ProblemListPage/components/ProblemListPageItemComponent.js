import React from "react";
import {Divider, Link, Typography} from "@mui/material";
import {useStyles} from "./ProblemListPageStyles";
import {PROBLEM_LIST_PAGE_HREF_PROBLEM} from "../constants/ProblemListPage";
import {APP_CLOUDINARY_CLOUD_NAME} from "../../../shared/App/constants/App";
import {CloudinaryContext, Image} from "cloudinary-react";

export default function ProblemListPageItemComponent({problem}) {
    const classes = useStyles();
    const imagesToLoadCount = Math.min(3, problem.images.length);
    const imagesToLoad = problem.images.slice(0, imagesToLoadCount);


    const images = imagesToLoad.map((image, index) =>
            <Image key={index}
                   className={classes.image}
                   publicId={image.imageFileName}
            />
        /*<img alt={"Image " + index + 1}
             key={index}
             className={classes.image}
             src={"http://res.cloudinary.com/dj65iclul/image/upload/" + image.imageFileName + ".png"}/>*/
    );


    return <div className={classes.margin16px}>
        <Typography
            component="h1"
            variant="h4">
            <Link underline="none"
                  href={PROBLEM_LIST_PAGE_HREF_PROBLEM + problem.id}>
                {problem.title}
            </Link>
            <CloudinaryContext cloudName={APP_CLOUDINARY_CLOUD_NAME}>
                {images}
            </CloudinaryContext>
        </Typography>
        <Divider/>
    </div>
}