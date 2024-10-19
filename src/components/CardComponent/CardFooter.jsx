import { Button, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../ContentComponent/ButtonComponent";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function CardFooter(props) {
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.biddingApp.userDetails);
  const bidNowClickHandler = () => {
    if (userDetails?.emailId) {
      console.log(userDetails);
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
