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

function BidDialogComponent(props) {
  const methods = useForm({
    defaultValues: {
      straightBid: "",
      maximumBid: "",
    },
  });

  useEffect(() => {

  },[]);

  const handleCloseClick = () => {
    console.log("Test");
  };

  return (
    <Dialog open={false} maxWidth="sm" fullWidth onClose={handleCloseClick}>
      <DialogTitle>
        Submit Bid |{" "}
        <IconButton edge="end" sx={{ position: "absolute", right: 20 }}>
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
          <Typography>$</Typography>
        </Grid>
        <Grid display="flex" justifyContent="space-between">
          <Typography>Current Bid</Typography>
          <Typography>$</Typography>
        </Grid>
        <Grid>
          <Typography>Ends in : </Typography>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button endIcon={<NavigateNextIcon />} variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default BidDialogComponent;
