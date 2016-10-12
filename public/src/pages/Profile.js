import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import UpdateEmailFormContainer from '../containers/UpdateEmailFormContainer.js';
import ProfileCardContainer from '../containers/ProfileCardContainer.js';

class Profile extends Component {
  render() {
    return (
      <div>
        <HeaderContainer type="posts_new"/>
        <div className="container">
        	<h2>Profile</h2>

        	<div className=''>
        		<ProfileCardContainer />
        	</div>
        	<div className=''>
        		<UpdateEmailFormContainer />
        	</div>

        </div>
      </div>
    );
  }
}


export default Profile;
