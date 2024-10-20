import Grid from "@mui/material/Grid2";
import React from "react";
import BidDetailsComponent from "./BidDetailsComponent";
import DescriptionComponent from "./DescriptionComponent";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ButtonComponent from "../ContentComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";
import {
  updateBidPopupState,
  updateSeletedItemDetails,
} from "../../Reducer/biddingAppSlice";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DummyImage from "../../assets/Icons/DummyImage.png";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import CardContent from "../CardComponent/CardContent";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BidDialogComponent from "../BidDialogComponent/BidDialogComponent";
import axios from "axios";

function ItemDetailsComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const itemDetails = useSelector((state) => state.biddingApp.selectedItem);
  const openBidPopup = useSelector((state) => state.biddingApp.openBidPopup);

  const backToCatalogClickHandler = () => {
    dispatch(updateSeletedItemDetails({}));
    navigate("/");
  };

  const bidNowClickHandler = () => {
    dispatch(updateBidPopupState(true));
  };

  const deleteItemClickHandler = () => {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `http://localhost:5555/items/${itemDetails?._id}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios.request(config).then((response) => {
      navigate("/")
    });
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
            <ButtonComponent
              startIcon={<DeleteIcon />}
              onClick={deleteItemClickHandler}
            >
              Delete
            </ButtonComponent>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={8}>
        <Typography>Description</Typography>
        <Typography>
          {itemDetails?.description ?? "No description available"}
        </Typography>
      </Grid>
      <Grid size={2}>
        <ButtonComponent
          endIcon={<KeyboardArrowRightIcon />}
          variant="contained"
          onClick={bidNowClickHandler}
        >
          Bid now
        </ButtonComponent>
      </Grid>
      {openBidPopup && <BidDialogComponent />}
    </Grid>
  );
}

export default React.memo(ItemDetailsComponent);
