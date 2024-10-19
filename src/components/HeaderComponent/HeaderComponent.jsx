import React from "react";
import { bidList } from "../../data/data";
import Card from "../../ReusableComponents/CardComponent/Card";
import { Avatar, Button, Grid2 } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ContentComponent from "../ContentComponent/ContentComponent";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid2";
import GenixHeaderIcon from "../../assets/Icons/GenixHeaderIcon.png";
import ButtonComponent from "../ContentComponent/ButtonComponent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TranslateIcon from "@mui/icons-material/Translate";

function HeaderComponent() {
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.biddingApp.userDetails);
  const getStartedClickHander = () => {
    navigate("/sign-up");
  };

  const loginClickHandler = () => {
    navigate("/log-in");
  };

  const stringAvatar = (name) => {
    return {
      sx: { width: 32, height: 32 },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };

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
        }}
      >
        {/* <div>Genix Auctions</div> */}
        <Grid item size={5}>
          <img src={GenixHeaderIcon} alt="genix-header-icon" />
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
            <Avatar {...stringAvatar("Vasanthkumar Sadasivam")}></Avatar>
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
        <ContentComponent />
      </Grid>
    </>
  );
}

export default HeaderComponent;
