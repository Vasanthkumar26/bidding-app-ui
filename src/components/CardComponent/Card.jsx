import React from "react";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import Grid from "@mui/material/Grid2";
import DummyImage from "../../assets/Icons/DummyImage.png";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

function Card(props) {
  return (
    <Grid
      size={{ xs: 2, sm: 2.25, md: 2.25 }}
      padding="5px"
      borderRadius="4px"
      boxShadow={2}
      container
      spacing={2}
    >
      <Grid size={12} display="flex">
        <img alt="image-of-article" src={DummyImage} width="100%" />
        <Grid>
          <Checkbox
            sx={{ position: "relative", right: "2rem" }}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
            checked={props.item.isFavourite}
          />
        </Grid>
      </Grid>
      <Grid size={12}>
        <CardContent item={props.item} />
      </Grid>
      <Grid size={12}>
        <CardFooter item={props.item} />
      </Grid>
    </Grid>
  );
}

export default React.memo(Card);
