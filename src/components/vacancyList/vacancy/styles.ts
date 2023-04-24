import { createStyles } from "@mantine/core"

export const useStyles = createStyles(() => ({
  paper: {
    width: "100%",
    padding: "24px",
    margin: "16px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "24px",
    color: "var(--secondaryColor)"
  },
  content: {
    maxWidth: "340px",
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
  },
  info: {

    margin: "12px 0"
  },
  salary: {
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "20px",
  },
  schedule: {
    lineHeight: "20px",
  },
  placeBlock: {
    display: "flex",
    flexDirection: "row",
    gap: "11px"
  },
  place: {
    lineHeight: "19px",
  },
}));