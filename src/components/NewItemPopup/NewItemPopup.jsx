import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  updateNewItemPopupState,
  updateSeletedItemDetails,
} from "../../Reducer/biddingAppSlice";
import InputFormController from "../ContentComponent/InputFormController";
import axios from "axios";

function NewItemPopup() {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.biddingApp.userDetails);
  const isEditing = useSelector(
    (state) => state.biddingApp.isEditingInNewPopup
  );
  const itemDetails = useSelector((state) => state.biddingApp.selectedItem);

  useEffect(() => {
    if (isEditing) {
      methods.setValue("label", itemDetails?.label);
      methods.setValue("description", itemDetails?.description);
      methods.setValue("minimumBid", itemDetails?.minimumBid);
      methods.setValue("isFavourite", itemDetails?.isFavourite);
    }
  }, []);

  const methods = useForm({
    defaultValues: {
      label: "",
      description: "",
      minimumBid: "",
      isFavourite: false,
    },
  });

  const handleCloseClick = () => {
    dispatch(
      updateNewItemPopupState({
        openPopup: false,
        isEditing: false,
      })
    );
  };

  const onSubmit = (data) => {
    if (isEditing) {
      let config = {
        method: "put",
        maxBodyLength: Infinity,
        url: `http://localhost:5555/items/${itemDetails._id}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios.request(config).then((response) => {
        dispatch(updateSeletedItemDetails(response.data));
        handleCloseClick();
      });
    } else {
      const payload = {
        ...data,
        currentBid: data?.minimumBid,
        createdBy: userDetails?.emailId,
      };
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:5555/items",
        headers: {
          "Content-Type": "application/json",
        },
        data: payload,
      };
      axios.request(config).then((response) => {
        dispatch(updateSeletedItemDetails(response.data));
        handleCloseClick();
      });
    }
  };

  return (
    <Dialog open={true} maxWidth="sm" fullWidth>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <DialogTitle>
          Add new auction item
          <IconButton
            edge="end"
            sx={{ position: "absolute", right: 20 }}
            onClick={handleCloseClick}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <InputFormController
            label="Title"
            register="label"
            methods={methods}
            errorMessage="Title is Required"
            error={methods.formState.errors?.label}
          />
          <InputFormController
            label="Description"
            register="description"
            methods={methods}
            errorMessage="Description is Required"
            error={methods.formState.errors?.description}
          />
          <InputFormController
            label="Starting bid"
            register="minimumBid"
            methods={methods}
            errorMessage="Starting bid is Required"
            error={methods.formState.errors?.minimumBid}
            type="number"
            disabled={isEditing}
          />
          <FormControlLabel
            control={
              <Checkbox
                ref={methods.register("isFavourite")}
                name="isFavourite"
                value={methods.getValues("isFavourite")}
                onChange={(e) =>
                  methods.setValue("isFavourite", e?.target?.checked)
                }
                sx={{ padding: "0 16" }}
              />
            }
            label="Is Favourite"
          />
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            style={{ textTransform: "none" }}
            variant="contained"
          >
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default React.memo(NewItemPopup);
