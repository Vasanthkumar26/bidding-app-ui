import Grid from "@mui/material/Grid2";
import React, { useEffect, useState } from "react";
import BidDetailsComponent from "./BidDetailsComponent";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ButtonComponent from "../ContentComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";
import {
  updateBidPopupState,
  updateNewItemPopupState,
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

  const [disableBidNow, setDisableBidNow] = useState(false);

  const itemDetails = useSelector((state) => state.biddingApp.selectedItem);
  const openBidPopup = useSelector((state) => state.biddingApp.openBidPopup);
  const userDetails = useSelector((state) => state.biddingApp.userDetails);

  const checkBidNowDisplay = () => {
    const currentTime = new Date();
    const createdAt = new Date(itemDetails?.endsAt);
    const diffInMs = createdAt - currentTime;
    return diffInMs > 0 ? true : false;
  };

  useEffect(() => {
    checkBidNowDisplay(checkBidNowDisplay());
  }, []);

  setTimeout(() => {
    if (!disableBidNow) {
      setDisableBidNow(checkBidNowDisplay());
    }
  }, 60000);

  const backToCatalogClickHandler = () => {
    dispatch(updateSeletedItemDetails({}));
    navigate("/");
  };

  const bidNowClickHandler = () => {
    dispatch(updateBidPopupState(true));
  };

  const deleteItemClickHandler = async () => {
    try {
      let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `http://localhost:5555/items/${itemDetails?._id}`,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.request(config);
      if (res?.data?.message === "Item deleted successfully") {
        backToCatalogClickHandler();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const editItemClickHandler = () => {
    dispatch(
      updateNewItemPopupState({
        openPopup: true,
        isEditing: true,
      })
    );
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
            <ButtonComponent
              startIcon={<EditIcon />}
              onClick={editItemClickHandler}
              disabled={itemDetails?.createdBy !== userDetails?.emailId}
            >
              Edit
            </ButtonComponent>
            <ButtonComponent
              startIcon={<DeleteIcon />}
              onClick={deleteItemClickHandler}
              disabled={itemDetails?.createdBy !== userDetails?.emailId}
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
        <BidDetailsComponent />
        <ButtonComponent
          endIcon={<KeyboardArrowRightIcon />}
          variant="contained"
          onClick={bidNowClickHandler}
          disabled={disableBidNow}
        >
          Bid now
        </ButtonComponent>
      </Grid>
      {openBidPopup && <BidDialogComponent />}
    </Grid>
  );
}

export default React.memo(ItemDetailsComponent);
