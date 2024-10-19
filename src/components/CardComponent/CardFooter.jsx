import { Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../ContentComponent/ButtonComponent";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { updateSeletedItemDetails } from "../../Reducer/biddingAppSlice";

function CardFooter(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.biddingApp.userDetails);
  const bidNowClickHandler = () => {
    if (userDetails?.emailId) {
      dispatch(updateSeletedItemDetails(props.item))
    } else {
      navigate("/log-in");
    }
  };

  return (
    <>
      <ButtonComponent
        onClick={bidNowClickHandler}
        endIcon={<KeyboardArrowRightIcon />}
        variant="contained"
        backgroundColor="#A30002"
      >
        Bid now
      </ButtonComponent>
    </>
  );
}

export default React.memo(CardFooter);
