import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Header extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillUnmount() {
        //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
        //always reset that global state back to null when you REMOUNT
        this.props.resetMe();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.deletedPost.error && nextProps.deletedPost.error.message) { //delete failure
            alert(nextProps.deletedPost.error.message || 'Could not delete. Please try again.');
        } else if (nextProps.deletedPost.post && !nextProps.deletedPost.error) { //delete success
            this.context.router.push('/');
        } else if (this.props.user.user && !nextProps.user.user) { //logout (had user(this.props.user.user) but no loger the case (!nextProps.user.user))
            this.context.router.push('/');
        }
    }

    renderSignInLinks(authenticatedUser) {
        if (authenticatedUser) {
            return (
                <ul>
                    <li role="presentation">
                        <Link role="presentation" to="/profile">
                            {authenticatedUser.name}
                        </Link>
                    </li>
                    <li role="presentation">
                        <a onClick={this.props.logout} href="javascript:void(0)">
                            Log out
                        </a>
                    </li>
                </ul>
            );
        }

        return (
            <ul className="right">
                <li role="presentation">
                    <Link role="presentation" to="/signup">
                        Sign up
                    </Link>
                </li>
                <li role="presentation">
                    <Link to="/signin">
                        Sign in
                    </Link>
                </li>
            </ul>
        );
    }

    renderLinks() {
        const {type, authenticatedUser} = this.props;
        if (type === 'posts_index') {
            return (
                <div>
                    <div role="presentation">
                        <Link to="/posts/new">
                            New Post
                        </Link>
                    </div>
                    {this.renderSignInLinks(authenticatedUser)}
                </div>
            );
        } else if (type === 'posts_new') {
            return (
                <div>
                    {this.renderSignInLinks(authenticatedUser)}
                    <ul className="left">
                        <li role="presentation">
                            <Link className="text-xs-right" to="/">Back To Index</Link>
                        </li>
                    </ul>
                </div>
            );
        } else if (type === 'posts_show') {
            return (
                <div>
                    <ul className="left">
                        <li style={{
                            paddingRight: '10px'
                        }} role="presentation">
                            <Link to="/">Back To Index</Link>
                        </li>
                        <li>
                            <button className="waves-effect waves-light btn blue pull-xs-right" onClick={() => {
                                this.props.onDeleteClick()
                            }}>Delete Post</button>
                        </li>
                    </ul>
                    {this.renderSignInLinks(authenticatedUser)}
                </div>
            );
        }
    };

    render() {
        return (
            <nav className="nav-wrapper">
                <a href="#!" className="brand-logo">Happy Today</a>
                <a href="#" data-activates="mobile-demo" className="button-collapse">
                    <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                    {this.renderLinks()}

                </ul>
                <ul className="side-nav" id="mobile-demo">
                    {this.renderLinks()}
                </ul>
            </nav>
        );
    }
}

export default Header
