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
// import icon
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

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
                        <ListItemText>
                          <Card
                            sx={{ pb: 2, mt: 2 }}
                            style={{ backgroundColor: "white" }}
                          >
                            {/* instruksi */}
                            <Typography
                              sx={{ ml: 2, mt: 1, mb: 2 }}
                              style={{ fontSize: 18, fontWeight: "bold" }}
                            >
                              Instruksi
                            </Typography>
                            {/* porsedur1 */}
                            <RadioButtonCheckedIcon
                              sx={{ ml: 2, mt: -2, color: "#249EA0" }}
                              style={{ fontSize: 18 }}
                            />{" "}
                            <Typography sx={{ mt: -3.4, ml: 7 }}>
                              {item.procedures1}
                            </Typography>
                            {/* porsedur2 */}
                            <RadioButtonCheckedIcon
                              sx={{ ml: 2, mt: -2, color: "#249EA0" }}
                              style={{ fontSize: 18 }}
                            />{" "}
                            <Typography sx={{ mt: -3.4, ml: 7 }}>
                              {item.procedures2}
                            </Typography>
                            {/* porsedur3 */}
                            <RadioButtonCheckedIcon
                              sx={{ ml: 2, mt: -2, color: "#249EA0" }}
                              style={{ fontSize: 18 }}
                            />{" "}
                            <Typography sx={{ mt: -3.4, ml: 7 }}>
                              {item.procedures3}
                            </Typography>
                            {/* porsedur4 */}
                            <RadioButtonCheckedIcon
                              sx={{ ml: 2, mt: -2, color: "#249EA0" }}
                              style={{ fontSize: 18 }}
                            />{" "}
                            <Typography sx={{ mt: -3.4, ml: 7 }}>
                              {item.procedures4}
                            </Typography>
                            <Typography
                              sx={{ ml: 2, mt: 8 }}
                              style={{ fontSize: 14 }}
                            >
                              Catatan :
                            </Typography>
                            <Typography sx={{ ml: 3 }} style={{ fontSize: 13 }}>
                              Minimum top-up Rp 20.000
                            </Typography>
                            <Typography sx={{ ml: 3 }} style={{ fontSize: 13 }}>
                              Biaya admin Rp 1000 dipotong dari minimal top up
                            </Typography>
                            <Typography sx={{ ml: 3 }} style={{ fontSize: 13 }}>
                              DOMPETKU Cash
                            </Typography>
                          </Card>
                        </ListItemText>
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
