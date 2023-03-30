import React, { Component } from "react";
import { Fragment } from "react";
import { Post } from "./Post";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
  };
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       post: json,
    //     });
    //   });
    axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
      console.log(result.data);
      this.setState({
        post: result.data,
      });
    });
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
