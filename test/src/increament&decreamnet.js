import React from "react";
import { connect } from "react-redux";
class IncAndDnc extends React.Component {
  onIncreamentClick = () => {
    this.props.dispatch({ type: "INC", selectionType: this.props.forSelected });
  };
  onDecreamentClick = () => {
    this.props.dispatch({ type: "DEC", selectionType: this.props.forSelected });
  };
  constraints = () => {
    let selectionType = this.props.forSelected;
    let roomBooked = this.props.roomCount;
    let maxPerson = roomBooked * 4;
    let noOfAdults = this.props.adultCount;
    let noOfChildrens = this.props.childCount;
    if (selectionType === "ROOMS" && roomBooked === 5) {
      return true;
    }
    if (
      selectionType === "ADULTS" &&
      (noOfAdults === maxPerson || maxPerson === noOfAdults + noOfChildrens)
    ) {
      return true;
    }
    if (
      selectionType === "CHILDREN" &&
      noOfChildrens === maxPerson - noOfAdults
    ) {
      return true;
    }

    return false;
  };
  render() {
    const selectionType = this.props.forSelected;
    return (
      <div className="container">
         <button className="btn" onClick={this.onDecreamentClick}>-</button>&nbsp;&nbsp;

        {selectionType === "ROOMS" && <p>{this.props.roomCount}</p>}
        {selectionType === "ADULTS" && <p>{this.props.adultCount}</p>}
        {selectionType === "CHILDREN" && <p>{this.props.childCount}</p>}
        &nbsp;&nbsp;
        <button className="btn" disabled={this.constraints()} onClick={this.onIncreamentClick}>
          +
        </button>
        
      </div>
    );
  }
}
const mapStatetoProps = (state) => ({
  count: state.count,
  roomCount: state.roomCount,
  adultCount: state.adultCount,
  childCount: state.childCount,
});
export default connect(mapStatetoProps)(IncAndDnc);
