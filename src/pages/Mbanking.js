import React, { useState } from "react";
import {
  Container,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
} from "@mui/material";
import { Data } from "../component/MbankingData";
import Navbar from "../component/Navbar";
// Import React router
import { Link } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

const Mbangking = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //jika menekan nama atm dia aktif dan bisa di close
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <Container sx={{ mt: 7 }}>
      <Link to="/topup">
        <Navbar>Top Up - Mobile Banking</Navbar>
      </Link>

      {Data.map((item, index) => {
        return (
          <>
            <Card
              sx={{ border: 1, mt: 2, color: "#249EA0" }}
              style={{
                //border radius
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                overflow: "hidden",
              }}
            >
              <AccordionSummary
                onClick={() => toggle(index)}
                key={index}
                sx={{ m: "auto", color: "#000" }}
              >
                <span>
                  {clicked === index ? (
                    <IndeterminateCheckBoxIcon
                      sx={{ width: 30, height: 30, color: "#249EA0" }}
                      style={{
                        //border radius
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        overflow: "hidden",
                      }}
                    />
                  ) : (
                    <AddBoxIcon
                      sx={{ width: 30, height: 30, color: "#249EA0" }}
                      style={{
                        //border radius
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        overflow: "hidden",
                      }}
                    />
                  )}
                </span>
                <Typography
                  sx={{ ml: 2 }}
                  style={{ fontSize: 18, fontWeight: " bold" }}
                >
                  {item.name}
                </Typography>
              </AccordionSummary>
              {clicked === index ? (
                <AccordionDetails>
                  {" "}
                  <nav aria-label="main mailbox folders">
                    <List sx={{ mt: -4 }}>
                      <ListItem disablePadding>
                        <ListItemText>{item.procedures}</ListItemText>
                      </ListItem>
                    </List>
                  </nav>
                </AccordionDetails>
              ) : null}
            </Card>
          </>
        );
      })}
    </Container>
  );
};

export default Mbangking;
