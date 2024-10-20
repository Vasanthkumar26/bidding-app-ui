import Grid from "@mui/material/Grid2";
import React from "react";
import BidDetailsComponent from "./BidDetailsComponent";
import DescriptionComponent from "./DescriptionComponent";
import { useDispatch, useSelector } from "react-redux";
import { Button, Checkbox, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ButtonComponent from "../ContentComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { updateSeletedItemDetails } from "../../Reducer/biddingAppSlice";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DummyImage from "../../assets/Icons/DummyImage.png";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import CardContent from "../CardComponent/CardContent";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

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
      <Grid size={2} display="grid">
        <ButtonComponent
          startIcon={<KeyboardArrowLeftIcon />}
          onClick={backToCatalogClickHandler}
        >
          Back to catalog
        </ButtonComponent>
        <Grid sixe={12} spacing={2} container>
          <Grid size={12} display="flex">
            <img alt="image-of-article" src={DummyImage} width="100%" />
            <Grid>
              <Checkbox
                sx={{ position: "relative", right: "2rem" }}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
                checked={itemDetails.isFavourite}
              />
            </Grid>
          </Grid>
          <Grid size={12}>
            <CardContent item={itemDetails} />
          </Grid>
          <Grid size={12} display="flex">
            <ButtonComponent startIcon={<EditIcon />}>Edit</ButtonComponent>
            <ButtonComponent startIcon={<DeleteIcon />}>Delete</ButtonComponent>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={8}>
        <Typography>Description</Typography>
      </Grid>
      <Grid size={2}>
        <ButtonComponent
          endIcon={<KeyboardArrowRightIcon />}
          variant="contained"
        >
          Bid now
        </ButtonComponent>
      </Grid>
    </Grid>
  );
}

export default React.memo(ItemDetailsComponent);
