import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  CssBaseline,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Skeleton,
} from "@mui/material";

// import roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function FixedBottomNavigation() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  const [value] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(messageExamples);
  }, [value, setMessages]);

  return (
    <Box sx={{ width: 410, pb: 7 }} ref={ref}>
      <Typography
        sx={{ mt: 2, ml: 0 }}
        style={{ fontSize: 20, fontWeight: "bold" }}
      >
        Transaksi terbaru
      </Typography>

      <CssBaseline />

      <List align="center">
        {messages.map(({ name, keterangan, price, person }, index) => (
          <ListItem button key={index + person}>
            <ListItemAvatar sx={{ ml: -2 }}>
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
        ))}
      </List>
    </Box>
  );
}

const messageExamples = [
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
