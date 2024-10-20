import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Link,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import InputFormController from "../ContentComponent/InputFormController";
import { useForm } from "react-hook-form";
import ButtonComponent from "../ContentComponent/ButtonComponent";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import LogInImage from "../../assets/Icons/LogInImage.png";
import Grid from "@mui/material/Grid2";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUserDetails } from "../../Reducer/biddingAppSlice";
import { useNavigate } from "react-router-dom";

function LogInComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const methods = useForm();

  const [showError, setShowError] = useState(false);
  const onSubmit = (data) => {
    const payload = { emailId: data?.emailId, password: data?.password };
    axios
      .request({
        method: "put",
        maxBodyLength: Infinity,
        url: "http://localhost:5555/users/checkValidUser",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        data: JSON.stringify(payload),
      })
      .then((response) => {
        if("message" in response?.data) {
          setShowError(true)
          return
        }
        dispatch(updateUserDetails(response.data[0]))
        navigate("/")
      });
  };
  const onError = (data) => {
    console.log(data);
  };
  return (
    <Grid container sx={{ height: "100%" }} alignContent="center">
      <Grid size={4}>
        <Box
          sx={{
            paddingTop: 4,
            paddingLeft: 8,
          }}
        >
          <Typography variant="h6">Log in</Typography>
          <Typography variant="subtitle2" gutterBottom>
            Welcome back. Enter your credentials to access your account.
          </Typography>
          <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
            <InputFormController
              label="Email Address"
              register="emailId"
              methods={methods}
              errorMessage="Email is Required"
              error={methods.formState.errors?.emailId}
            />
            <InputFormController
              label="Password"
              register="password"
              methods={methods}
              errorMessage="Password is Required"
              error={methods.formState.errors?.password}
            />
            <FormControlLabel
              control={
                <Checkbox
                  ref={methods.register("keepMeSignedIn")}
                  name="keepMeSignedIn"
                  value={methods.getValues("keepMeSignedIn")}
                  onChange={(e) =>
                    methods.setValue("keepMeSignedIn", e?.target?.checked)
                  }
                  sx={{ padding: "0 16" }}
                />
              }
              label="Keep me signed in"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, mb: 2, height: 32, margin: "2 0 0 0" }}
            >
              Continue
            </Button>
            {showError && <Typography color="red">Please enter correct mail id & password</Typography>}
          </form>

          <Divider sx={{ my: 2 }}>or sign up with</Divider>

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <ButtonComponent
                startIcon={<GoogleIcon />}
                variant="outlined"
                disabled={true}
              >
                Google
              </ButtonComponent>
            </Grid>
            <Grid item xs={4}>
              <ButtonComponent
                startIcon={<AppleIcon />}
                variant="outlined"
                disabled={true}
              >
                Apple
              </ButtonComponent>
            </Grid>
            <Grid item xs={4}>
              <ButtonComponent
                startIcon={<FacebookIcon />}
                variant="outlined"
                disabled={true}
              >
                Facebook
              </ButtonComponent>
            </Grid>
          </Grid>

          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Don't have an Account? <Link href="/sign-up">Sign up here</Link>
          </Typography>
        </Box>
      </Grid>
      <Grid size={8}>
        <img alt="log-in-image" src={LogInImage} />
      </Grid>
    </Grid>
  );
}

export default React.memo(LogInComponent);
