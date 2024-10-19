import React, { useEffect } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useDispatch, useSelector } from "react-redux";
import BidDialogComponent from "../BidDialogComponent/BidDialogComponent";
import FooterComponent from "../FooterComponent/FooterComponent";
import ExploreAuctionsIcon from "../../assets/Icons/ExploreAuctions.png";
import Card from "../CardComponent/Card";
import axios from "axios";
import { getAllItemDetails } from "../../Reducer/biddingAppSlice";

function ContentComponent() {
  const dispatch = useDispatch();
  const overAllItemsList = useSelector((state) => state.biddingApp.items);
  useEffect(() => {
    axios
      .request({
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:5555/items",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch(getAllItemDetails(res.data.data));
      });
  }, []);

  const userDetails = useSelector((state) => state.biddingApp.userDetails);
  return (
    <div>
      <Grid>
        {userDetails?.emailId ? (
          <Grid
            sx={{ padding: "1rem 0rem" }}
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
            <img alt="explore-acutions" src={ExploreAuctionsIcon} />
          </Grid>
        )}
      </Grid>
      <BidDialogComponent />
      <Grid
        display="flex"
        container
        padding="4rem 0 4rem 0"
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {(overAllItemsList ?? []).map((item) => (
          <Card item={item} />
        ))}
      </Grid>
      <FooterComponent />
    </div>
  );
}

export default ContentComponent;
