import { createStyles } from "@mantine/core"
import { stylesPropsType } from "./types"

export const useStyles = createStyles((theme, { color }: stylesPropsType) => ({
  paper: {
    maxWidth: "773px",
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
  star: {
    fill:"#5E96FC",
    stroke:"#ACADB9"
  }
}));