import React from "react";
import { Button } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

interface Props {
  onDelete(id:string): void;
  id:string;
}

const DeleteButtom = ({ onDelete, id }: Props) => {
  const deleteFunc = ()=>{
    onDelete(id)
  }
  
  return (
    <div>
      <Button
      // size="small"
      startIcon={<DeleteIcon />}
      className="Card__delete"
        color="secondary"
        variant="contained"
        type="button"
        onClick={deleteFunc}
      >Удалить</Button>
    </div>
  );
};

export default DeleteButtom;
