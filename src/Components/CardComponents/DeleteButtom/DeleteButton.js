import React from "react";
import Button from "@material-ui/core/Button";

export default function DeleteButtom({ onClick }) {
  return (
    <div>
      <Button
        color="primary"
        variant="contained"
        type="buttom"
        onClick={onClick}
      >
        delete
      </Button>
    </div>
  );
}