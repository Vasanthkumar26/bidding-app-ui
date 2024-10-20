import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useEffect, useState } from "react";
import { getDiff } from "../../utilities/utilFunctions";

function CardContent(props) {
  const [timeDiff, setTimeDiff] = useState("");

  useEffect(() => {
    setTimeDiff(getDiff(props.item.endsAt));
  }, [props.item.endsAt])

  setTimeout(() => {
    setTimeDiff(getDiff(props.item.endsAt));
  }, 60000);

  return (
    <Grid container spacing={2}>
      <Grid display="flex" size={12}>
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
      <Grid size={12}>
        <Grid display="flex">
          <Typography variant="subtitle2">{props.item.label}</Typography>
        </Grid>
        <Grid display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">Minimum Bid</Typography>
          <Typography>$ {props.item.minimumBid}</Typography>
        </Grid>
        <Grid display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">Current Bid</Typography>
          <Typography>
            $ {props.item.currentBid ?? props.item.minimumBid}
          </Typography>
        </Grid>
        <Grid display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">Ends in {timeDiff}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default React.memo(CardContent);
