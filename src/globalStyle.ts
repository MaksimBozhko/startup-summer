import { MantineThemeOverride } from "@mantine/core"

export const globalStyle: MantineThemeOverride = {
  colors: {
    dark: ["#232134"],
    blue: ["#5E96FC"]
  },
  headings: {
    sizes: {
      h2: {
        fontWeight: "600",
        fontSize: "20px",
        lineHeight: "24px"
      },
      h3: {
        fontWeight: "700",
        fontSize: "20px",
        lineHeight: "20px"
      },
      h4: {
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "19px"
      }
    }
  },
  components: {
    Button: {
      styles: (theme) => ({
        root: {
          width: "100%",
          color: "#FFFFFF",
          background: theme.colors.blue[0],
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "21px",
          borderRadius: "8px"
        }
      })
    },
    MultiSelect: {
      styles: () => ({
        root: {
          borderRadius: "8px"
        }
      })
    },
    NumberInput: {
      styles: () => ({
        root: {
          borderRadius: "8px",
          "& .mantine-Input-wrapper": {
            "& .mantine-unhde": {
              "& .mantine-1s0kk1f": {
                "& > button": {
                  border: "none"
                }
              }
            }
          }
        }
      })
    },
    Text: {
      styles: () => ({
        root: {
          fontFamily: "Inter, sans-serif",
          lineHeight: "20px",
          fontWeight: 400,
          fontSize: "16px",
          color: "#232134",
        }
      })
    },
    Input: {
      styles: () => ({
        root: {
          width: "100%",
          height: "48px",
          "& .mantine-Input-wrapper": {
            "& > button": {
              borderRadius: "30px"
            }
          }
        }
      })
    }
  },
  globalStyles: (theme) => ({
    body: {
      fontFamily: "Inter, sans-serif",
      backgroundColor: "#F7F7F8",
    }
  })
}