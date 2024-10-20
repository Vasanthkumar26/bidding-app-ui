import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CloseIcon from "@mui/icons-material/Close";

import React, { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import { useForm } from "react-hook-form";
import InputFormController from "../ContentComponent/InputFormController";
import { useDispatch, useSelector } from "react-redux";
import { updateBidPopupState } from "../../Reducer/biddingAppSlice";

function BidDialogComponent(props) {
  const dispatch = useDispatch();

  const itemDetails = useSelector((state) => state.biddingApp.selectedItem);
  const openBidPopup = useSelector((state) => state.biddingApp.openBidPopup);

  const methods = useForm({
    defaultValues: {
      straightBid: "",
      maximumBid: "",
    },
  });

  useEffect(() => {
    const nextBidAmount = Math.floor(parseFloat(itemDetails?.currentBid ?? itemDetails?.minimumBid) * 1.1);
    methods.setValue("straightBid", nextBidAmount);
    methods.setValue("maximumBid", nextBidAmount);
  },[]);

  const handleCloseClick = () => {
    dispatch(updateBidPopupState(false));
  };

  return (
    <Dialog open={openBidPopup} maxWidth="sm" fullWidth onClose={handleCloseClick}>
      <DialogTitle>
        Submit Bid | {itemDetails?.label}
        <IconButton edge="end" sx={{ position: "absolute", right: 20 }} onClick={handleCloseClick}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <InputFormController
          label="Straight Bid"
          register="straightBid"
          methods={methods}
          errorMessage="Straight Bid is Required"
          error={methods.formState.errors?.straightBid}
        />
        <InputFormController
          label="Maximum Bid"
          register="maximumBid"
          methods={methods}
          errorMessage="Maximum Bid is Required"
          error={methods.formState.errors?.maximumBid}
        />
        <Grid display="flex" justifyContent="space-between">
          <Typography>Minimum Bid</Typography>
          <Typography>$ {itemDetails.minimumBid}</Typography>
        </Grid>
        <Grid display="flex" justifyContent="space-between">
          <Typography>Current Bid</Typography>
          <Typography>$ {itemDetails.currentBid}</Typography>
        </Grid>
        <Grid>
          <Typography>Ends in : </Typography>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button endIcon={<NavigateNextIcon />} variant="contained" type="submit">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default React.memo(BidDialogComponent);
