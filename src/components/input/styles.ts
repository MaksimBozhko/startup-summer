import { createStyles } from "@mantine/core"

export const useStyles = createStyles(() => ({
  form: {
    position: "relative",
  },
  input: {
    width:"100%",
    height: "48px",
    borderRadius: "8px",
  },
  button: {
    position: "absolute",
    top: "16%",
    right: ".4em",
    width: "83px",
    height: "32px",
    background: "var(--secondaryColor)",
    borderRadius: "8x",
}
}));