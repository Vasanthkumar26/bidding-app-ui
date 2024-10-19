import React from "react";
import Grid from "@mui/material/Grid2";
import { Divider, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import FooterGenixIcon from "../../assets/Icons/GenixFooterIcon.png";

function FooterComponent() {
  return (
    <Grid
      sx={{
        backgroundColor: "#05011E",
        height: "13rem",
        padding: "0",
        margin: "0",
      }}
    >
      <Grid sx={{ padding: "3rem 5rem 0rem 5rem" }}>
        <Grid display="flex" container>
          <Grid size={4}>
            <img alt="genix-footer-icon" src={FooterGenixIcon} />
          </Grid>
          <Grid size={2}>
            <Typography sx={{ color: "#EBECF0" }}>Products</Typography>
            <Typography sx={{ color: "#EBECF0" }}>About us</Typography>
            <Typography sx={{ color: "#EBECF0" }}>Contact</Typography>
          </Grid>
          <Grid size={2}>
            <Typography sx={{ color: "#EBECF0" }}>Auctions</Typography>
          </Grid>
          <Grid size={2}>
            <Typography sx={{ color: "#EBECF0" }}>Bidding</Typography>
          </Grid>
          <Grid
            spacing={2}
            size={2}
            justifyContent="space-between"
            display="flex"
            justifyItems="flex-end"
          >
            <TwitterIcon style={{ color: "#EBECF0" }} />
            <FacebookIcon style={{ color: "#EBECF0" }} />
            <InstagramIcon style={{ color: "#EBECF0" }} />
            <GitHubIcon style={{ color: "#EBECF0" }} />
          </Grid>
        </Grid>
        <Divider sx={{ my: 2, backgroundColor: "#EBECF0" }}></Divider>
        <Grid
          display="flex"
          justifyContent="center"
          sx={{ paddingTop: "1rem" }}
        >
          <Typography variant="caption" sx={{ color: "#EBECF0" }}>
            &copy; Copyright 2024, All Rights Reserved by Genix
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FooterComponent;
