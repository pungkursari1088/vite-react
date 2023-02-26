import React, { Component } from "react";
import { CardMenu } from "../components/CardMenu";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="flex justify-center ">Card Holder</h1>
        <div className="flex">
          <CardMenu
            title="Random"
            desc="Deserunt nostrud ex Lorem adipisicing do mollit."
          />
          <CardMenu
            title="Elite Pic"
            desc="Deserunt nostrud ex Lorem adipisicing do mollit."
          />
          <CardMenu />
        </div>
      </div>
    );
  }
}
