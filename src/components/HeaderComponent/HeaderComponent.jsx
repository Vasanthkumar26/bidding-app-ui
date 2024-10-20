import React, { useState } from "react";
import { Avatar, Button, Menu, MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ContentComponent from "../ContentComponent/ContentComponent";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid2";
import GenixHeaderIcon from "../../assets/Icons/GenixHeaderIcon.png";
import ButtonComponent from "../ContentComponent/ButtonComponent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TranslateIcon from "@mui/icons-material/Translate";
import ItemDetailsComponent from "../ItemDetailsComponent/ItemDetailsComponent";
import {
  resetDetails,
  updateNewItemPopupState,
  updateSeletedItemDetails,
} from "../../Reducer/biddingAppSlice";
import { PROFILE_OPTIONS } from "../../assets/constants/constants";
import NewItemPopup from "../NewItemPopup/NewItemPopup";

function HeaderComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);

  const userDetails = useSelector((state) => state.biddingApp.userDetails);
  const selectedItem = useSelector((state) => state.biddingApp.selectedItem);
  const displayNewItemPopup = useSelector(
    (state) => state.biddingApp.openNewItemPopup
  );

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
    dispatch(updateSeletedItemDetails({}));
    navigate("/");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleOpen1 = (e) => {
    setAnchorEl1(e.currentTarget);
  };

  const handleMenuClick = (option) => {
    if (option === "Log out") {
      dispatch(resetDetails());
    }
  };

  const addItemClickHandler = () => {
    if (userDetails?.emailId) {
      dispatch(
        updateNewItemPopupState({
          openPopup: true,
          isEditing: false,
        })
      );
      setAnchorEl1(null);
      return;
    }
    navigate("/log-in");
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
          zIndex: 1,
        }}
      >
        {/* <div>Genix Auctions</div> */}
        <Grid item size={5}>
          <img
            src={GenixHeaderIcon}
            alt="genix-header-icon"
            onClick={genixIconClickHandler}
          />
        </Grid>
        <Grid
          justifyContent="space-between"
          display="flex"
          justifyItems="flex-end"
          item
          size={7}
          container
        >
          <Grid>
            <Button
              endIcon={<ExpandMoreIcon />}
              color="black"
              onClick={handleOpen1}
              style={{ textTransform: "none" }}
            >
              Auctions
            </Button>
            <Menu
              anchorEl={anchorEl1}
              open={Boolean(anchorEl1)}
              onClose={handleClose1}
            >
              <MenuItem onClick={addItemClickHandler}>Add Item</MenuItem>
            </Menu>
          </Grid>
          <Grid>
            <ButtonComponent endIcon={<ExpandMoreIcon />} color="black">
              Banking
            </ButtonComponent>
          </Grid>
          <Grid>
            <ButtonComponent endIcon={<ExpandMoreIcon />} color="black">
              About us
            </ButtonComponent>
          </Grid>
          <Grid>
            <ButtonComponent
              startIcon={<TranslateIcon />}
              endIcon={<ExpandMoreIcon />}
              color="black"
            >
              English
            </ButtonComponent>
          </Grid>
          {userDetails?.emailId ? (
            <div>
              <Avatar {...stringAvatar(userDetails)} onClick={handleOpen} />
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>
                  <Grid display="flex" spacing={1} alignItems="center">
                    <Grid>
                      <Avatar
                        {...stringAvatar(userDetails)}
                        onClick={handleOpen}
                      />
                    </Grid>
                    <Grid>
                      <Typography variant="subtitle2">
                        {userDetails?.firstName} {userDetails?.lastName}
                      </Typography>
                      <Typography variant="caption">
                        {userDetails?.emailId}
                      </Typography>
                    </Grid>
                  </Grid>
                </MenuItem>
                {PROFILE_OPTIONS.map((option) => (
                  <MenuItem
                    id={option}
                    onClick={() => {
                      handleMenuClick(option);
                    }}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
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
        {Object.keys(selectedItem).length !== 0 && userDetails?.emailId ? (
          <ItemDetailsComponent />
        ) : (
          <ContentComponent />
        )}
      </Grid>
      {displayNewItemPopup && <NewItemPopup />}
    </>
  );
}

export default HeaderComponent;
