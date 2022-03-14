import * as React from "react";
import {
  Box,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  Card,
} from "@mui/material";
// import styled
import { styled } from "@mui/material/styles";
// import roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function FixedBottomNavigation() {
  const [value] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState([]);

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(TransaksiData);
  }, [value, setMessages]);

  return (
    <Box sx={{ minWidth: 360, mt: -1, pb: 7, p: 0 }} ref={ref}>
      <CssBaseline />
      {/* <Card sx={{ width: 360, height: 80 }}> */}
      <List align="center">
        {messages.map(
          ({ name, keterangan, nominal, kategori, person }, index) => (
            <Card
              elevation={2}
              sx={{ minWidth: 380, height: 62, mb: 2, mt: 2 }}
              style={{
                backgroundColor: "#fff",
                //border radius
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                overflow: "hidden",
              }}
            >
              <ListItem button key={index + person}>
                <ListItemText
                  sx={{ width: 10, height: 35, ml: 0, mb: 3 }}
                  style={{
                    //border radius
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <Img
                    alt="Profile Picture"
                    src={person}
                    sx={{ width: 32, height: 32 }}
                  />
                </ListItemText>
                <ListItemText
                  primary={name}
                  secondary={keterangan}
                  sx={{ width: 190, ml: 2, mb: 3, p: "auto" }}
                />
                <ListItemText
                  primary={nominal}
                  sx={{ mt: -2, textAlign: "right", mr: 0 }}
                  style={{ color: `${kategori === "topup" ? "green" : "red"}` }}
                />
               
              </ListItem>
            </Card>
          )
        )}
      </List>
      {/* </Card> */}
    </Box>
  );
}

const TransaksiData = [
  {
    name: "Send Money",
    nominal: "-Rp20.000",
    kategori: "send",
    keterangan: "01 Maret 2022 · 8.03 AM",
    person: require("../assets/Image/wallet.png"),
  },
  {
    name: "Send Money",
    nominal: "-Rp20.000",
    kategori: "send",
    keterangan: "27 Februari 2022 · 9.23 AM",
    person: require("../assets/Image/wallet.png"),
  },
  {
    name: "Top Up",
    nominal: "Rp85.000",
    kategori: "topup",
    keterangan: "19 Februari 2022 · 4.13 M",
    person: require("../assets/Image/plus.png"),
  },
  {
    name: "Send Money",
    nominal: "-Rp20.000",
    kategori: "send",
    keterangan: "18 Februari 2022 · 8.03 AM",
    person: require("../assets/Image/wallet.png"),
  },
];
