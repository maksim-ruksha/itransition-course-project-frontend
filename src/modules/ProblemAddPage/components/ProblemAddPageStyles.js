import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
    mainCard: {
        margin: "16px",
        marginLeft: "200px",
        marginRight: "200px",
    },
    margin16px: {
        margin: "16px"
    },
    borderCollapse: {
        borderCollapse: "collapse",
    },
    borderColor: {
        border: "1px solid grey",
    },
    button: {
        margin: "16px"
    },
    imageAddButton: {
        margin: "16px",
        width: "256px",
        height: "128px",
    },
    imageRemoveButton: {
        position: "absolute",
        width: "256px",
        height: "128px",
        borderRadius: "4px",
        overflow: "hidden",
        zIndex: "-1",

    }
});