import Grid from "@mui/material/Grid2";
import React from "react";
import BidDetailsComponent from "./BidDetailsComponent";
import DescriptionComponent from "./DescriptionComponent";
import CardContent from "../CardComponent/CardContent";
import { useSelector } from "react-redux";

function ItemDetailsComponent() {
    const itemDetails = useSelector((state) => state.biddingApp.selectedItem)
  return (
    <Grid sx={{ padding: "0rem 3rem" }} container>
      <Grid><CardContent item={itemDetails}/></Grid>
      {/* <Grid><DescriptionComponent /></Grid>
      <Grid><BidDetailsComponent /></Grid> */}
    </Grid>
  );
}

export default React.memo(ItemDetailsComponent);
