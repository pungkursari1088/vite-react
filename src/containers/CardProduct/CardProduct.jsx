import React, { Component } from "react";

class CardProduct extends Component {
  state = {
    order: 0,
  };
  btnPlus = () => {
    this.setState({ order: this.state.order + 1 }, () =>
      this.handleCounterChange(this.state.order)
    );
  };

  btnMinus = () => {
    this.setState({ order: this.state.order - 1 }, () =>
      this.handleCounterChange(this.state.order)
    );
  };

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  render() {
    return (
      <div className=" flex flex-col w-1/4 m-5 border-2 shadow-xl justify-center">
        <img
          className=" object-contain border-2 border-red-600 mb-5"
          src="https://loremflickr.com/380/400"
        ></img>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-500 px-4 py-2" onClick={this.btnPlus}>
            +
          </button>
          <input
            className="flex text-center"
            type="text"
            value={this.state.order}
          ></input>
          <button className="bg-blue-500 px-4 py-2" onClick={this.btnMinus}>
            -
          </button>
        </div>
      </div>
    );
  }
}

export default CardProduct;
