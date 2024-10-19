import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

function CardContent(props) {
  return (
    <>
      <Grid display="flex">
        <Typography
          variant="caption"
          color="white"
          sx={{
            backgroundColor: "#4E9B01",
            padding: "2px 4px",
            borderRadius: "4px",
          }}
        >
          Live Auction
        </Typography>
      </Grid>
      <Grid display="flex">
        <Typography variant="subtitle2">{props.item.label}</Typography>
      </Grid>
      <Grid display="flex" justifyContent="space-between">
        <Typography variant="body2">Minimum Bid</Typography>
        <Typography>$ {props.item.minimumBid}</Typography>
      </Grid>
      <Grid display="flex" justifyContent="space-between">
        <Typography variant="body2">Current Bid</Typography>
        <Typography>$ {props.item.currentBid}</Typography>
      </Grid>
      <Grid display="flex" justifyContent="space-between">
        <Typography variant="body2">Ends in </Typography>
      </Grid>
    </>
  );
}

export default React.memo(CardContent);
