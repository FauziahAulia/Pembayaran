import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
// import Card from "@mui/material/Card";
//import dinamis
import messageExamples from "../component/ListData";
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
    setMessages(messageExamples);
  }, [value, setMessages]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Typography
        sx={{ mt: 2, ml: 0 }}
        style={{ fontSize: 20, fontWeight: "bold" }}
      >
        Transaksi terbaru
      </Typography>

      <CssBaseline />
      {/* <Card sx={{ width: 360, height: 80 }}> */}
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
      {/* </Card> */}
    </Box>
  );
}
