import React from "react";
import BoxBlog from "./box";
const totalItemsBlog = [
  {
    title: "Placeholder0",
    thumbnail: "Thumbnail0"
  },
  {
    title: "Placeholder1",
    thumbnail: "Thumbnail1"
  },
  {
    title: "Placeholder2",
    thumbnail: "Thumbnail2"
  },
  {
    title: "Placeholder3",
    thumbnail: "Thumbnail3"
  },
  {
    title: "Placeholder4",
    thumbnail: "Thumbnail4"
  },
  {
    title: "Placeholder5",
    thumbnail: "Thumbnail5"
  }
];

class BlogArea extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      values: totalItemsBlog
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {this.state.values.map(function(item, i) {
                return <BoxBlog item={item}></BoxBlog>;
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BlogArea;
