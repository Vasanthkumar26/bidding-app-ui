// src/components/SignUpForm.js
import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import SignUpImage from "../../assets/Icons/SignUpImage.png";
import ButtonComponent from "../ContentComponent/ButtonComponent";
import InputFormController from "../ContentComponent/InputFormController";
import { useForm } from "react-hook-form";

const SignUpComponent = () => {
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      receiveEmails: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
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
          <Typography variant="h6">Sign up</Typography>
          <Typography variant="subtitle2" gutterBottom>
            New bidders, as soon as you submit your information you will be
            eligible to bid in the auction.
          </Typography>
          <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
            <InputFormController
              label="First Name"
              register="firstName"
              methods={methods}
              errorMessage="First Name is Required"
              error={methods.formState.errors?.firstName}
            />
            <InputFormController
              label="Last Name"
              register="lastName"
              methods={methods}
              errorMessage="Last Name is Required"
              error={methods.formState.errors?.lastName}
            />
            <InputFormController
              label="Email Address"
              register="email"
              methods={methods}
              errorMessage="Email is Required"
              error={methods.formState.errors?.email}
            />
            <InputFormController
              label="Password"
              register="password"
              methods={methods}
              errorMessage="Password is Required"
              error={methods.formState.errors?.password}
            />
            {console.log(methods)}
            <FormControlLabel
              control={
                <Checkbox
                  ref={methods.register("receiveEmails")}
                  name="receiveEmails"
                  value={methods.getValues("receiveEmails")}
                  onChange={(e) =>
                    methods.setValue("receiveEmails", e?.target?.checked)
                  }
                  sx={{ padding: "0 16" }}
                />
              }
              label="Receive outbid emails"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, mb: 2, height: 32, margin: "2 0 0 0" }}
            >
              Submit
            </Button>
          </form>

          <Divider sx={{ my: 2 }}>or sign up with</Divider>

          <Grid container spacing={1}>
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
            Want to know more? <Link href="#">Auction rules</Link>
          </Typography>
        </Box>
      </Grid>
      <Grid size={8}>
        <img alt="sign-up-image" src={SignUpImage} />
      </Grid>
    </Grid>
  );
};

export default React.memo(SignUpComponent);
