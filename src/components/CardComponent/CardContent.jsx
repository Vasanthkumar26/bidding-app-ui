import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

function CardContent(props) {
  return (
    <>
      <Grid display="flex">
        <Typography>Live Auction</Typography>
      </Grid>
      <Grid display="flex" justifyContent="space-between">
        <Typography>Minimum Bid</Typography>
        <Typography>$ {props.minimumBid}</Typography>
      </Grid>
      <Grid display="flex" justifyContent="space-between">
        <Typography>Current Bid</Typography>
        <Typography>$ {props.currentBid}</Typography>
      </Grid>
      <Grid display="flex" justifyContent="space-between">
        <Typography>Ends in </Typography>
      </Grid>
    </>
  );
}

export default React.memo(CardContent);
