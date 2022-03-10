import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  textFieldCalendar: {
    width: "390",

    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "1.5px solid",
      borderColor: "grey",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#249EA0",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "grey",
    },
    "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: "#249EA0",
    },
    "& svg": {
      color: "#249EA0",
    },
  },
  datePicker: {
    "& .MuiInputBase-root": {},
    "& .MuiButtonBase-root .MuiPickersDay-root .Mui-selected": {
      backgroundColor: "#249EA0",
    },
  },
}));
