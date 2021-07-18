import React from "react";
import { Button } from "@material-ui/core";

interface Props {
  color?: string;
  variant?: string;
  type?: string;
  onClick(): void;
}

const DeleteButtom = ({ onClick }: Props) => {
  return (
    <div>
      <Button
        color="secondary"
        variant="contained"
        type="button"
        onClick={onClick}
      >
        delete
      </Button>
    </div>
  );
};

export default DeleteButtom;
