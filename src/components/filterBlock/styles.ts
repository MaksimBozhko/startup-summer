import { createStyles } from "@mantine/core"

export const useStyles = createStyles(() => ({
  paper: {
    minWidth: "315px",
    border: "1px solid #EAEBED",
    borderRadius: "12px",
    padding: "20px"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "12px"
  },
  title: {
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "20px",
  },
  close: {
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "20px",
    color: "#ACADB9"
  },
  text: {
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "19px",
    margin: "20px 0 8px"
  },
  select: {
    marginBottom: "8px"
  },
  btn: {
    width: "100%",
    color: "#FFFFFF",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "21px",
    borderRadius: "8px",
    marginTop: "20px"
  }
}));