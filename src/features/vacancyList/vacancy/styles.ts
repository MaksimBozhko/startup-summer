import { createStyles } from "@mantine/core"
import { stylesPropsType } from "./types"

export const useStyles = createStyles((theme, { titleColor, colorIcon }: stylesPropsType) => ({
  paper: {
    maxWidth: "773px",
    width: "100%",
    padding: "24px",
    margin: "16px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "30px",
  },
  title: {
    color: titleColor
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
    display: "inline-block",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "20px",
    position: "relative",
    marginRight: "24px",
    "&::after": {
      content: "''",
      position: "absolute",
      width: "4px",
      height: "4px",
      borderRadius: "50%",
      backgroundColor: "#ACADB9",
      top: "50%",
      right: "-14px",
      transform: "translateY(-50%)",
    },
    '@media (max-width: 550px)': {
      display: "block",
      marginLeft: "0",
      "&::after": {
        display: 'none',
      }
    },
  },
  schedule: {
    display: "inline-block",
    lineHeight: "20px",
    position: "relative",
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
    minWidth: "22px",
    fill: colorIcon ? "#5E96FC" : "#FFFFFF",
    stroke: colorIcon ?  "#5E96FC": "#ACADB9"
  }
}));