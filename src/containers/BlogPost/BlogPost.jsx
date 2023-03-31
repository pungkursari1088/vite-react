import React, { Component } from "react";
import { Fragment } from "react";
import { Post } from "./Post";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
  };

  getPostAPI = () => {
    axios
      .get("http://localhost:3000/posts")
      .then((result) => {
        this.setState({
          post: result.data,
        });
      })
      .catch((err) => console.log(err));
  };

  handleRemove = (data) => {
    console.log(data);
    axios.delete(`http://localhost:3000/posts/${data}`).then((res) => {
      console.log(res);
      this.getPostAPI();
    });
  };

  componentDidMount() {
    // fetch("http://localhost:3000/posts", {
    //   headers: {
    //     "Access-Control-Allow-Origin": "true",
    //     "Access-Control-Allow-Credentials": "true",
    //     "Access-Control-Allow-Methods": "GET,POST,OPTIONS,PUT,PATCH,DELETE",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //     this.setState({
    //       post: json,
    //     });
    //   });
    this.getPostAPI();
  }
  render() {
    return (
      <Fragment>
        <div>Blog Component</div>
        {this.state.post.map((post) => {
          return (
            <Post
              key={post.id}
              data={post}
              image="https://placeimg.com/1200/800/any"
              remove={this.handleRemove}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
