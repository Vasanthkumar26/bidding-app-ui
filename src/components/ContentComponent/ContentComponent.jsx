import React from "react";
import { bidList } from "../../data/data";
import Card from "../../ReusableComponents/CardComponent/Card";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useSelector } from "react-redux";
import BidDialogComponent from "../BidDialogComponent/BidDialogComponent";
import FooterComponent from "../FooterComponent/FooterComponent";
import ExploreAuctionsIcon from "../../assets/Icons/ExploreAuctions.png";

function ContentComponent() {
  const userDetails = useSelector((state) => state.biddingApp.userDetails);
  return (
    <div>
      <Grid>
        {userDetails?.emailId ? (
          <Grid
            sx={{ padding: "2rem 0rem" }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              Welcome{" "}
              <span style={{ color: "#4973FD" }}>
                {userDetails?.firstName}!
              </span>
            </Typography>
            <FormControl sx={{ minWidth: "150px", maxWidth: "200px" }}>
              <Select
                label="showing all"
                disabled
                sx={{ maxHeight: "32px", padding: "0px" }}
                value={1}
              >
                <MenuItem value={1}>showing all</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        ) : (
          <Grid display="flex">
            {/* <Typography>Explore Auctions</Typography> */}
            <img alt='explore-acutions' src={ExploreAuctionsIcon} />
          </Grid>
        )}
      </Grid>
      <BidDialogComponent />
      {(bidList ?? []).map((item) => (
        <Card item={item} />
      ))}
      <FooterComponent />
    </div>
  );
}

export default ContentComponent;
