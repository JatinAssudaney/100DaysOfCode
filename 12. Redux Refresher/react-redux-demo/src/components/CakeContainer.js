import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../actions";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  numOfCakes: state.cake.numOfCakes,
});

const mapDispatchToProps = { buyCake };

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
