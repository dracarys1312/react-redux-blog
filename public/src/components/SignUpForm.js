import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class SignUpForm extends Component {
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
  }

  render() {
    const {asyncValidating, fields: { name, username, email, password, confirmPassword }, handleSubmit, submitting } = this.props;

    return (
      <div className="container">
      <form style={{
          marginTop: '25px'
      }} className="col s8" onSubmit={handleSubmit(this.props.signUpUser.bind(this))}>
        <div className={`row ${name.touched && name.invalid ? 'has-error' : ''}`}>
          <div className="input-field col s12">
              <i className="material-icons prefix">person</i>
              <input id="name" type="text" className="validate" {...name} />
              <label for="name" className="control-label">Full Name*</label>
              <div className="help-block">
                {name.touched ? name.error : ''}
              </div>
          </div>
        </div>

        <div className={`row ${username.touched && username.invalid ? 'has-error' : ''}`}>
          <div className="input-field col s12">
              <i className="material-icons prefix">portrait</i>
              <input id="username" placeholder="@raja" type="text" className="validate" {...username} />
              <label for="username" className="control-label">@username*</label>
              <div className="help-block">
                {username.touched ? username.error : ''}
              </div>
              <div className="help-block">
              {asyncValidating === 'username' ? 'validating..': ''}
              </div>
          </div>
        </div>

        <div className={`row ${email.touched && email.invalid ? 'has-error' : ''}`}>
          <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input id="email" type="email" className="validate" {...email} />
              <label for="email" className="control-label">Email*</label>
              <div className="help-block">
                {email.touched ? email.error : ''}
              </div>
              <div className="help-block">
              {asyncValidating === 'email' ? 'validating..': ''}
              </div>
          </div>
        </div>

        <div className={`row ${password.touched && password.invalid ? 'has-error' : ''}`}>
          <div className="input-field col s12">
              <i className="material-icons prefix">lock</i>
              <input id="password" type="password" className="validate" {...password} />
              <label for="password" className="control-label">Password*</label>
              <div className="help-block">
                {password.touched ? password.error : ''}
              </div>
          </div>
        </div>
        <div className={`row ${confirmPassword.touched && confirmPassword.invalid ? 'has-error' : ''}`}>
         <div className="input-field col s12">
             <i className="material-icons prefix">lock</i>
             <input id="retypepass" type="password" className="validate" {...confirmPassword} />
             <label for="retypepass" className="control-label">Confirm Password*</label>
             <div className="help-block">
               {confirmPassword.touched ? confirmPassword.error : ''}
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

export default SignUpForm;
