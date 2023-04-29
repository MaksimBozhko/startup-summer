import { createStyles } from "@mantine/core"
import { stylesPropsType } from "../../features/vacancyList/vacancy/types"

export const useStyles = createStyles((theme, { color }: stylesPropsType) => ({
  page: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  content: {
    padding: "24px",
    maxWidth: "773px",
    width: "100%",
    marginBottom: "50px"
  }
}))