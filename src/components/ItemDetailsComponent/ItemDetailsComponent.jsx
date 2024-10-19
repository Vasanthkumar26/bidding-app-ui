import Grid from "@mui/material/Grid2";
import React from "react";
import BidDetailsComponent from "./BidDetailsComponent";
import DescriptionComponent from "./DescriptionComponent";
import CardContent from "../CardComponent/CardContent";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ButtonComponent from "../ContentComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { updateSeletedItemDetails } from "../../Reducer/biddingAppSlice";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function ItemDetailsComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const itemDetails = useSelector((state) => state.biddingApp.selectedItem);

  const backToCatalogClickHandler = () => {
    dispatch(updateSeletedItemDetails({}));
    navigate("/");
  };

  return (
    <Grid sx={{ padding: "1rem 3rem 0rem 3rem" }} container spacing={2}>
      <Grid size={2}>
        <ButtonComponent
          startIcon={<KeyboardArrowLeftIcon />}
          onClick={backToCatalogClickHandler}
        >
          Back to catalog
        </ButtonComponent>
        <CardContent item={itemDetails} />
      </Grid>
      <Grid size={8}>
        <Typography>Description</Typography>
      </Grid>
      <Grid size={2}>
        <ButtonComponent endIcon={<KeyboardArrowRightIcon />} variant="contained">Bid now</ButtonComponent>
      </Grid>
    </Grid>
  );
}

export default React.memo(ItemDetailsComponent);
