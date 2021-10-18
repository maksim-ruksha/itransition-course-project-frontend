import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
    mainCard: {
        margin: "16px",
        marginLeft: "200px",
        marginRight: "200px",
    },
    margin16px: {
        margin: "16px",
    },
    tagChip: {
        marginRight: "8px",
        marginLeft: "8px",
        marginTop: "4px",
        marginBottom: "4px",
    },
    tags: {
        marginTop: "16px",
        marginBottom: "16px",
        flexShrink: "1",
        overflowX: "scroll",
    },
    borderCollapse: {
        borderCollapse: "collapse",
    },
    borderColor: {
        border: "1px solid grey",
    },
    button: {
        margin: "16px",
    },
    imageAddButton: {
        margin: "16px",
        width: "256px",
        height: "128px",
    },
    image: {
        width: "256px",
        height: "128px",
        objectFit: "cover",
        borderRadius: "4px",
    },
    select:{
        width: "128px",
    },
    imageRemoveButton: {
        marginTop: "8px",
        marginBottom: "16px",
        marginLeft: "16px",
        marginRight: "16px"
    },
    solutionVariantTextField: {
        width: "128px"
    }

});