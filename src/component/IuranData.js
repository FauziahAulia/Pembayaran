import * as React from "react";
import {
  Box,
  CssBaseline,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Card,
} from "@mui/material";
// import roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function FixedBottomNavigation() {
  const [value] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(IuranData);
  }, [value, setMessages]);

  return (
    <Box sx={{ minWidth: 380, mt: -3, pb: 7, p: 0 }} ref={ref}>
      <CssBaseline />
      {/* <Card sx={{ width: 360, height: 80 }}> */}
      <List align="center">
        {messages.map(({ name, keterangan, price, person }, index) => (
          <Card
            elevation={2}
            sx={{ minWidth: 400, height: 62, mb: 2, mt: 2, ml: -3 }}
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
              <ListItemAvatar sx={{ ml: -1 }}>
                <Avatar alt="Profile Picture" src={person} />
              </ListItemAvatar>
              <ListItemText
                primary={name}
                secondary={keterangan}
                sx={{ width: 190, m: "auto", p: "auto" }}
              />
              <ListItemText
                primary={price}
                sx={{ width: 70, mt: -2, textAlign: "right" }}
              />
            </ListItem>
          </Card>
        ))}
      </List>
      {/* </Card> */}
    </Box>
  );
}

const IuranData = [
  {
    name: "Damar Putra Jaya",
    price: "Rp20.000",
    keterangan: "Pembayaran iuran bulan januari",
    person: require("../assets/Image/ava2.jpg"),
  },
];
