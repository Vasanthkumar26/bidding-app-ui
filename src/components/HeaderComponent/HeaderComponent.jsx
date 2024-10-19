import React from "react";
import { Avatar, Button, Grid2 } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ContentComponent from "../ContentComponent/ContentComponent";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid2";
import GenixHeaderIcon from "../../assets/Icons/GenixHeaderIcon.png";
import ButtonComponent from "../ContentComponent/ButtonComponent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TranslateIcon from "@mui/icons-material/Translate";
import zIndex from "@mui/material/styles/zIndex";
import ItemDetailsComponent from "../ItemDetailsComponent/ItemDetailsComponent";
import { updateSeletedItemDetails } from "../../Reducer/biddingAppSlice";

function HeaderComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.biddingApp.userDetails);
  const selectedItem = useSelector((state) => state.biddingApp.selectedItem);
  const getStartedClickHander = () => {
    navigate("/sign-up");
  };

  const loginClickHandler = () => {
    navigate("/log-in");
  };

  const stringAvatar = (userDetail) => {
    return {
      sx: { width: 32, height: 32 },
      children: `${userDetail.firstName[0]}${userDetail.lastName[0]}`,
    };
  };

  const genixIconClickHandler = () => {
    dispatch(updateSeletedItemDetails({}))
  }
  return (
    <>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 3rem",
          position: "sticky",
          top: "0",
          backgroundColor: "#FEE4F8",
          zIndex: 1,
        }}
      >
        {/* <div>Genix Auctions</div> */}
        <Grid item size={5}>
          <img src={GenixHeaderIcon} alt="genix-header-icon" onClick={genixIconClickHandler}/>
        </Grid>
        <Grid
          justifyContent="space-between"
          display="flex"
          justifyItems="flex-end"
          item
          size={7}
        >
          <ButtonComponent endIcon={<ExpandMoreIcon />} color="black">
            Auctions
          </ButtonComponent>
          <ButtonComponent endIcon={<ExpandMoreIcon />} color="black">
            Banking
          </ButtonComponent>
          <ButtonComponent endIcon={<ExpandMoreIcon />} color="black">
            About us
          </ButtonComponent>
          <ButtonComponent
            startIcon={<TranslateIcon />}
            endIcon={<ExpandMoreIcon />}
            color="black"
          >
            English
          </ButtonComponent>
          {userDetails?.emailId ? (
            <Avatar {...stringAvatar(userDetails)}></Avatar>
          ) : (
            <>
              <ButtonComponent onClick={loginClickHandler}>
                Log in
              </ButtonComponent>
              <ButtonComponent
                onClick={getStartedClickHander}
                variant="contained"
              >
                Get Started
              </ButtonComponent>
            </>
          )}
        </Grid>
      </Grid>
      <Grid sx={{ padding: "0rem 3rem" }}>
        {Object.keys(selectedItem).length !== 0 && userDetails?.emailId ? <ItemDetailsComponent /> : <ContentComponent />}
      </Grid>
    </>
  );
}

export default HeaderComponent;
