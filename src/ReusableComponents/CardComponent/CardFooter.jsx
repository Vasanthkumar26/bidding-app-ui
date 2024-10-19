import { Button, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CardFooter(props) {
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.biddingApp.userDetails);
  const bidNowClickHandler = () => {
    if (userDetails?.emailId) {
      console.log(userDetails)
    } else {
      navigate("/log-in");
    }
  };

  return (
    <>
      <Button style={{ textTransform: "none" }} onClick={bidNowClickHandler}>
        Bid now
      </Button>
    </>
  );
}

export default React.memo(CardFooter);
