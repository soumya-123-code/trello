import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addBoard } from "../actions";




const Home = ({ boards, boardOrder, dispatch }) => {
  // this is the home site that shows you your boards and you can also create a Board here.

  

  const renderBoards = () => {
    return boardOrder.map(boardID => {
      const board = boards[boardID];

      return (
<div>


<Link
className="btn btn-success"
          key={boardID}
          to={`/${board.id}`}
          style={{ textDecoration: "none" }}
        >
         Grabbngo Trello Task
         
        </Link>
        
</div>
      );
    });
  };


  return (
    <div>
     
      
      <div className="container mt-5">
       <center> <h2>Grabbngo Trello App</h2></center> 
       <hr /><br/> 
  <div className="row">
    <div className="col-sm-4">
      
    </div>
    <div className="col-sm-4">
     
     <center> <h1>{renderBoards()} </h1></center>
      
    </div>
    <div className="col-sm-4">
     
    </div>
  </div>
</div>
    
    </div>
  );
};

const mapStateToProps = state => ({
  boards: state.boards,
  boardOrder: state.boardOrder
});

export default connect(mapStateToProps)(Home);
