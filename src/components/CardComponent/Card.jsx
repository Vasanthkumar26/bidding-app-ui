import { CardHeader } from "@mui/material";
import React from "react";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import Grid from "@mui/material/Grid2";

function Card(props) {
  return (
    <Grid
      size={{ xs: 2, sm: 2.25, md: 2.25 }}
      padding="5px"
      borderRadius="4px"
      boxShadow={2}
    >
      <CardHeader item={props.item} />
      <CardContent item={props.item} />
      <CardFooter item={props.item} />
    </Grid>
  );
}

export default React.memo(Card);
