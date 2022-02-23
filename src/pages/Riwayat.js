import React from "react";
import PropTypes from "prop-types";
//import material
import { Container, Tabs, Tab, Typography, Box } from "@mui/material";
// import roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// import navbar
import Navbar from "../component/Navbar";
// import ListRiwayat
import ListRiwayat from "./ListRiwayat";
// Import React router
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Riwayat() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <Link to="/">
        <Navbar>Riwayat</Navbar>
      </Link>
      <Container align="center" sx={{ width: 430, pt: 2 }}>
        <Box position="static" sx={{ bgcolor: "grey", pt: 3 }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="fullWidth"
            >
              <Tab label="Iuran" {...a11yProps(0)} />
              <Tab label="Pendaftaran" {...a11yProps(1)} />
              <Tab label="Toko" {...a11yProps(2)} />
              <Tab label="Tarik Tunai" {...a11yProps(3)} />
            </Tabs>
          </Box>
          {/* Tabs Iuran */}
          <TabPanel value={value} index={0}>
            <ListRiwayat />
          </TabPanel>
          <TabPanel value={value} index={1}></TabPanel>
          <TabPanel value={value} index={2}></TabPanel>
          <TabPanel value={value} index={3}></TabPanel>
        </Box>
      </Container>
    </div>
  );
}
