import React from "react";
import { Jumbotron } from "reactstrap";
import BlogArea from "../blog";

const Example = props => {
  return (
    <div>
      <Jumbotron>
        <BlogArea />
      </Jumbotron>
    </div>
  );
};

export default Example;
