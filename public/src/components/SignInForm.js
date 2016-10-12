import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class SignInForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
     this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user.status === 'authenticated' && nextProps.user.user && !nextProps.user.error) {
      this.context.router.push('/');
    }

    //error
    //Throw error if it was not already thrown (check this.props.user.error to see if alert was already shown)
    //If u dont check this.props.user.error, u may throw error multiple times due to redux-form's validation errors
    if(nextProps.user.status === 'signin' && !nextProps.user.user && nextProps.user.error && !this.props.user.error) {
      alert(nextProps.user.error.message);
    }
  }

  render() {
    const {asyncValidating, fields: {username, password}, handleSubmit, submitting, user } = this.props;

    return (
      <div className="container">
      <form style={{marginTop:'25px'}} className="col s8" onSubmit={handleSubmit(this.props.signInUser.bind(this))}>
        <div className={`row ${username.touched && username.invalid ? 'has-error' : ''}`}>
          <div className="input-field col s12">
              <i className="material-icons prefix">person</i>
              <input  placeholder="@Pt" type="text" id="username" className="validate" {...username} />
              <label className="control-label" for="username">@username*</label>
              <div className="help-block">
                {username.touched ? username.error : ''}
              </div>
              <div className="help-block">
              {asyncValidating === 'username' ? 'validating..': ''}
              </div>
          </div>
        </div>
        <div className={`row ${password.touched && password.invalid ? 'has-error' : ''}`}>
          <div className="input-field col s12">
              <i className="material-icons prefix">lock</i>
              <input type="password" id="password" className="validate" {...password} />
              <label className="control-label" for="password">Password*</label>
              <div className="help-block">
                {password.touched ? password.error : ''}
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

export default SignInForm;
