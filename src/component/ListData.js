import React from "react";
import {
  Container,
  Box,
  Typography,
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
    setMessages(ListData);
  }, [value, setMessages]);

  return (
    <Container sx={{ minWidth: 405 }}>
      <Box sx={{ minWidth: 380, pb: 7 }} ref={ref}>
        <Typography
          sx={{ mt: 2, ml: -2 }}
          style={{ fontSize: 20, fontWeight: "bold" }}
        >
          Transaksi terbaru
        </Typography>

        <CssBaseline />

        <List align="center">
          {messages.map(({ name, keterangan, price, person }, index) => (
            <Card
              elevation={2}
              sx={{ minWidth: 300, height: 62, mb: 2, mt: 0, ml: -2 }}
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
                  sx={{ minWidth: 190, m: "auto", p: "auto" }}
                />
                <ListItemText
                  primary={price}
                  sx={{ minWidth: 50, mt: -2, textAlign: "right" }}
                />
              </ListItem>
            </Card>
          ))}
        </List>
      </Box>
    </Container>
  );
}

const ListData = [
  {
    name: "Damar Putra Jaya",
    price: "Rp20.000",
    keterangan: "Pembayaran iuran bulan januari",
    person: require("../assets/Image/ava2.jpg"),
  },
  {
    name: "Atika Putri",
    price: "Rp120.000",
    keterangan: "Pembayaran pendaftaran",
    person: require("../assets/Image/ava1.jpg"),
  },
  {
    name: "Muhammad Kemal",
    price: "Rp65.000",
    keterangan: "Pembelian sabuk hijau",
    person: require("../assets/Image/ava4.jpg"),
  },
  {
    name: "Kiki",
    price: "Rp1.000.000",
    keterangan: "Tarik tunai",
    person: require("../assets/Image/ava3.jpg"),
  },
  {
    name: "Damar Putra Jaya",
    price: "Rp20.000",
    keterangan: "Pembayaran iuran bulan januari",
    person: require("../assets/Image/ava2.jpg"),
  },
  {
    name: "Atika Putri",
    price: "Rp120.000",
    keterangan: "Pembayaran pendaftaran",
    person: require("../assets/Image/ava1.jpg"),
  },
  {
    name: "Muhammad Kemal",
    price: "Rp65.000",
    keterangan: "Pembelian sabuk hijau",
    person: require("../assets/Image/ava4.jpg"),
  },
  {
    name: "Kiki",
    price: "Rp1.000.000",
    keterangan: "Tarik tunai",
    person: require("../assets/Image/ava3.jpg"),
  },
];
