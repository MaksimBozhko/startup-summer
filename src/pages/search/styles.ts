import { createStyles } from "@mantine/core"

export const useStyles = createStyles(() => ({
  page: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: "28px",
    "@media (max-width: 750px)": {
      flexDirection: "column"
    }
  },
  content: {
    width: "100%",
    minHeight: "60vh",
    position: "relative"
  }
}))