import React, { Component } from "react";
import { Fragment } from "react";
import { Post } from "./Post";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
  };
  componentDidMount() {
    fetch("http://localhost:3000/posts", {
      headers: {
        "Access-Control-Allow-Origin": "true",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS,PUT,PATCH,DELETE",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          post: json,
        });
      });
    // const cors = require("cors");
    // axios.request(cors());
    // axios
    //   .get("http://192.168.88.57:3000/posts")
    //   .then((result) => {
    //     console.log(result.data);
    //     this.setState({
    //       post: result.data,
    //     });
    //   })
    //   .catch((err) => console.log(err));
  }
  render() {
    return (
      <Fragment>
        <div>Blog Component</div>
        {this.state.post.map((post) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              desc={post.body}
              image="https://placeimg.com/1200/800/any"
            />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
