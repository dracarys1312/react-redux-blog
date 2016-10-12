import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class PostsForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
     this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost.post && !nextProps.newPost.error) {
      this.context.router.push('/');
    }
  }

  renderError(newPost) {
    if(newPost && newPost.error && newPost.error.message) {
      return (
        <div className="alert alert-danger">
          {newPost ? newPost.error.message : ''}
        </div>
      );
    } else {
      return <span></span>
    }
  }

  render() {
    const {asyncValidating, fields: { title, categories, content }, handleSubmit, submitting, newPost } = this.props;

    return (
      <div className="container">
      {this.renderError(newPost)}
      <form style={{
          marginTop: '25px'
      }} className="col s8" onSubmit={handleSubmit(this.props.createPost.bind(this))}>
        <div className={`row ${title.touched && title.invalid ? 'has-error' : ''}`}>
          <div className="input-field col s12">
              <i class="material-icons prefix">mode_edit</i>
              <input type="text" id="title" className="validate" {...title} />
              <label for="title" className="control-label">Title*</label>
              <div className="help-block">
                {title.touched ? title.error : ''}
              </div>
              <div className="help-block">
                {asyncValidating === 'title'? 'validating..': ''}
              </div>
          </div>
        </div>

        <div className={`row ${categories.touched && categories.invalid ? 'has-error' : ''}`}>
          <div className="input-field col s12">
              <i class="material-icons prefix">mode_edit</i>
              <input type="text" id="categories" className="validate" {...categories} />
              <label for="categories" className="control-label">Categories*</label>
                  <div className="help-block">
                    {categories.touched ? categories.error : ''}
                  </div>
          </div>
        </div>

        <div className={`row ${content.touched && content.invalid ? 'has-error' : ''}`}>
             <div className="input-field col s12">
                 <i class="material-icons prefix">mode_edit</i>
                 <textarea id="textarea1" className="materialize-textarea" {...content} />
                 <label for="textarea1" className="control-label">Content*</label>
                 <div className="help-block">
                   {content.touched ? content.error : ''}
                 </div>
             </div>
        </div>

        <button type="submit" className="waves-effect waves-light btn blue darken"  disabled={submitting} >Submit</button>
        <Link to="/" className="waves-effect waves-light btn red darken">Cancel</Link>
      </form>
      </div>
    );
  }
}

export default PostsForm;
