import { createStyles } from "@mantine/core"
import { stylesPropsType } from "../../features/vacancyList/vacancy/types"

export const useStyles = createStyles(() => ({
  page: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: "28px",
    '@media (max-width: 750px)': {
      flexDirection: "column"
    },
  },
  content: {
    width: "100%"
  }
}))