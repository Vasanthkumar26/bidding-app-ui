import React from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function BidDetailsComponent() {
  const itemDetails = useSelector(
    (state) => state.biddingApp.selectedItem.bidDetails ?? []
  );

  return (
    <Grid container spacing={1} sx={{ padding: "1rem 0px" }}>
      {itemDetails.map((item, index) => (
        <Grid>
          <li
            key={item?.emailId}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Typography>
              {item?.firstName} bids ${item?.currentBid}
            </Typography>
          </li>
        </Grid>
      ))}
    </Grid>
  );
}

export default React.memo(BidDetailsComponent);
