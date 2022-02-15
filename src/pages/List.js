import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
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
      <Typography sx={{ ml: 2 }} style={{ fontSize: 20, fontWeight: "bold" }}>
        Baru-baru ini
      </Typography>
      <CssBaseline />

      <List align="center">
        {messages.map(({ name, keterangan, price, person }, index) => (
          <div className="list">
            <ListItem button key={index + person}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={person} />
              </ListItemAvatar>
              <ListItemText
                primary={name}
                secondary={keterangan}
                sx={{ width: 180, m: "auto", p: "auto" }}
              />
              <ListItemText
                primary={price}
                sx={{ width: 20, mt: -2, p: "auto" }}
              />
            </ListItem>
          </div>
        ))}
      </List>
    </Box>
  );
}
