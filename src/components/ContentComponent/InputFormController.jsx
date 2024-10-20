import { FormControl, TextField, Typography } from "@mui/material";
import React from "react";

function InputFormController(props) {

  const validateEnterdValue = (value) => {
    if(isNaN(value)) return false;
    if(parseFloat(value) <= Math.floor(parseFloat(props.currentBid))) return false
    return true
  }

  return (
    <FormControl
      sx={{
        width: "100%",
        margin: "0px 0px 8px 0px",
      }}
    >
      <Typography variant="body2">{props.label}</Typography>
      <TextField
        name={props.register}
        variant="outlined"
        fullWidth
        margin="normal"
        type={props.register === "password" ? "password" : "text"}
        ref={props.methods.register(props.register, {
          required: props.errorMessage,
          pattern:
            props.register === "emailId"
              ? {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email address",
                }
              : undefined,
          validate: (val) => {
            if (props.register === "minimumBid") {
              return !isNaN(val);
            } else if (
              props.register === "straightBid" ||
              props.register === "maximumBid"
            ) {
              return validateEnterdValue(val)
            } else {
              return undefined;
            }
          },
        })}
        onChange={(e) =>
          props.methods.setValue(props.register, e?.target?.value?.trim(), {
            shouldValidate: true,
          })
        }
        sx={{
          "& .MuiInputBase-input": {
            padding: "0px 0px 0px 4px",
            height: "32px",
            border: props.error ? "1px solid red" : "",
            borderRadius: 1,
          },
          "& .MuiFormHelperText-root": {
            color: "red",
          },
          margin: 0,
        }}
        helperText={props.error ? props.errorMessage : ""}
        defaultValue={props.methods.getValues(props.register)}
        disabled={props.disabled ?? false}
      />
    </FormControl>
  );
}

export default React.memo(InputFormController);
