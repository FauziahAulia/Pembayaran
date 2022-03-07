import React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
//import material
import {
  Container,
  Typography,
  TextField,
  Grid,
  Box,
  Button,
} from "@mui/material";
// import roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "../component/Navbar";
// Import React router
import { Link } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 390,
    },
  },
};

const names = ["BNI", "BCA", "Mandiri", "BRI", "BSI"];
// const img = [""];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Bank() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div>
      <Container>
        <Link to="/transfer">
          <Navbar>Ke Rekening Bank</Navbar>
        </Link>
        <FormControl sx={{ width: 390, mt: 6 }}>
          <Select
            displayEmpty
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <>Pilih Bank</>;
              }

              return selected.join(", ");
            }}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* 2.) Rekening */}
        <TextField
          type="number"
          placeholder="No Rekening"
          sx={{ width: 390, mt: 2 }}
        />

        {/* 3.) Saldo */}
        <Grid
          item
          xs={12}
          sx={{ mt: 2, border: 1 }}
          style={{
            //border radius
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
            overflow: "hidden",
          }}
        >
          <Typography sx={{ ml: 2, mt: 1 }} style={{ color: "#249EA0" }}>
            Saldo
          </Typography>
          <Typography
            sx={{ ml: 3, mt: 0 }}
            style={{ fontSize: 21, color: "#249EA0" }}
          >
            Rp 8.345.000
          </Typography>
        </Grid>

        {/* 4.) Nominal Transfer */}
        <Grid
          item
          xs={12}
          sx={{ mt: 2, border: 1 }}
          style={{
            //border radius
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
            overflow: "hidden",
          }}
        >
          <Typography sx={{ ml: 2, mt: 1 }} style={{ color: "#249EA0" }}>
            Nominal Transfer
          </Typography>
          <Typography
            sx={{ ml: 2, mt: 0, mb: 1 }}
            style={{ fontSize: 21, color: "#249EA0" }}
          >
            Rp
            <Box
              sx={{
                mt: -4,
                ml: 4,
                width: 320,
                maxWidth: "100%",
              }}
            >
              <TextField fullWidth size="small" />
            </Box>
          </Typography>
        </Grid>

        {/* 5.) Pesan  */}
        <TextField
          placeholder="Pesan (Opsional) "
          multiline
          rows={4}
          sx={{ width: 390, mt: 2 }}
        />

        {/* Button Lanjutkan */}
        <Box sx={{ mt: 8 }}>
          <Button
            variant="contained"
            color="warning"
            sx={{ width: 390, mt: 2 }}
          >
            Lanjutkan
          </Button>
        </Box>
      </Container>
    </div>
  );
}
