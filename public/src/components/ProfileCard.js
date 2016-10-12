import React from 'react';
import { Component } from 'react';

export default class ProfileCard extends Component {

  render() {
    let user = this.props.user.user;
    return (
        <ul className="collection">
            <li className="collection-item avatar">
                <i className="material-icons circle prefix">person</i>
                <span className="title"> Name:</span>
                <p>{user && user.name}</p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
            <li className="collection-item avatar">
                <i className="material-icons circle prefix">portrait</i>
                <span className="title"> Username:</span>
                <p>{user && user.username}</p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
            <li className="collection-item avatar">
                <i className="material-icons circle prefix">email</i>
                <span className="title"> Email:</span>
                <p>{user && user.email}</p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
        </ul>
    );
  }
}
