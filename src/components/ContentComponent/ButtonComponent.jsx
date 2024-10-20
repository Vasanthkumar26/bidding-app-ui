import { Button } from "@mui/material";
import React from "react";

function ButtonComponent(props) {
  return (
    <Button
      variant={props?.variant}
      fullWidth
      startIcon={props?.startIcon}
      style={{ textTransform: "none" }}
      endIcon={props?.endIcon}
      color={props.color}
      disabled={props.disabled ?? false}
      onClick={props.onClick}
      sx={{ backgroundColor: props.backgroundColor }}
      type={props.type ?? "text"}
    >
      {props?.children}
    </Button>
  );
}

export default ButtonComponent;
