import React, { useState } from 'react'
import { Header } from "../../components/header";
import { Select } from "../../components/select";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ToDoList } from "../../components/toDoList";
import { FormModal } from "../../components/modal";
import "./style.css";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return( 
    <div className="main">
        <Header />
        <div className="genre">
          <Select />
          <AddCircleOutlineIcon
            className="add_circle_outline_icon"
            fontSize="medium"
            onClick={ handleOpen }
          />
          <FormModal 
            handleClose={ handleClose } 
            isOpen={ isOpen }
            body="genreBody" 
          />
        </div>
        <div className="contents">
          <ToDoList />
        </div>
    </div>
  );
};