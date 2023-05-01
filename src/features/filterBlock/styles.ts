import { createStyles } from "@mantine/core"

export const useStyles = createStyles(() => ({
  paper: {
    minWidth: "315px",
    border: "1px solid #EAEBED",
    borderRadius: "12px",
    padding: "20px",
    '@media (max-width: 750px)': {
      width: "100%"
    },
  },
  show: {
    display: "none",
    '@media (max-width: 750px)': {
      display: "block"
    },
  },
  header: {
    justifyContent: "space-between",
    paddingBottom: "12px"
  },
  reset: {
    cursor: "pointer"
  },
  close: {
    fontWeight: 500,
    fontSize: "14px",
    color: "#ACADB9"
  },
  text: {
    margin: "20px 0 8px"
  },
  select: {
    marginBottom: "8px",
    "& .mantine-Input-wrapper mantine-NumberInput-wrapper": {
      '& > div':{
        background: "red",
      }
    },
  },
  btn: {
    height: "40px",
    marginTop: "20px"
  },
}));