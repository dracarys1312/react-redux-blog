import React, { Component } from 'react';
import { Link } from 'react-router';

class PostsList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderCategories(categories) {
     return categories.map((c) => {
        c = c.trim();
        return (
          <Link style={{color:'black', textDecoration: 'none'}} to={"filter/" + c} key={c} className="list-group-item-text">{" " + c + " "}</Link>
        );
     });
  }

  renderPosts(posts) {
    return posts.map((post) => {
      return (
        <li className="list-group-item" key={post._id}>
          <Link style={{color:'black', textDecoration: 'none'}} to={"posts/" + post._id}>
            <h3 className="list-group-item-heading">{post.title}</h3>
          </Link>
          <div className="chip">  
	   {this.renderCategories(post.categories)}
	  </div>
          <p className="text-limited">{post.content}</p>
        </li>
      );
    });
  }

  render() {
    const { posts, loading, error } = this.props.postsList;

    if(loading) {
      return <div className="container"><h1>Posts</h1><h3>Loading...</h3></div>
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return (
      <div className="container">
        <h1>Posts</h1>
        <ul className="list-group">
          {this.renderPosts(posts)}
        </ul>
      </div>
    );
  }
}


export default PostsList;
