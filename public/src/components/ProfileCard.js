import React from 'react';
import { Component } from 'react';

export default class ProfileCard extends Component {

  render() {
    let user = this.props.user.user;
    return (
        <ul className="collection">
            <li className="collection-item avatar">
                <i className="material-icons prefix">person</i>
                <h4>Name:</h4> {user && user.name}
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
            <li className="collection-item avatar">
                <i className="material-icons prefix">portrait</i>
                <h4>Username:</h4> {user && user.username}
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
            <li className="collection-item avatar">
                <i className="material-icons prefix">email</i>
                <h4>Email:</h4> {user && user.email}
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
        </ul>
    );
  }
}
