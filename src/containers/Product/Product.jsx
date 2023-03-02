import React, { Component } from "react";
import { Fragment } from "react";
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component {
  state = {
    order: 0,
  };

  getData = (val) => {
    this.getData = this.getData.bind(this);
    console.log("value :" + val);
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <header className=" flex justify-between p-4 bg-green-400">
          <h1 className=" text-3xl font-bold uppercase">logo</h1>
          <div>
            <span className="absolute right-1 text-white bg-red-600 rounded-full w-6 text-center">
              {this.state.order}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
              <path
                fillRule="evenodd"
                d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zM12 10.5a.75.75 0 01.75.75v4.94l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72v-4.94a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </header>
        <CardProduct
          onCounterChange={(nonValue) => this.handleCounterChange(nonValue)}
        />
      </Fragment>
    );
  }
}

export default Product;
