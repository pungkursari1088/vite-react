import React, { Component } from "react";
import BlogPost from "./BlogPost/BlogPost";

export default class Home extends Component {
  render() {
    return (
      <div>
        <p>BlogPost</p>
        <BlogPost />
      </div>
    );
  }
}

// import React, { Component } from "react";
// // import { CardMenu } from "../components/CardMenu";
// import BlogPost from "./BlogPost/BlogPost";

// export default class Home extends Component {
//   render() {
//     return (
//       // <div>
//       //   <h1 className="flex justify-center ">Card Holder</h1>
//       //   <div className="flex">
//       //     <CardMenu
//       //       title="Random"
//       //       desc="Deserunt nostrud ex Lorem adipisicing do mollit."
//       //     />
//       //     <CardMenu
//       //       title="Elite Pic"
//       //       desc="Deserunt nostrud ex Lorem adipisicing do mollit."
//       //     />
//       //     <CardMenu />
//       //   </div>
//       // </div>
//       <div>
//         <p>BlogPost</p>
//       </div>
//     );
//   }
// }
