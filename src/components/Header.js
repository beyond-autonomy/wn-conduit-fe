import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutView = React.memo(props => {
  if (!props.currentUser) {
    return (
      <div>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/solution" className="nav-link">
              Solution
            </Link>
          </li>
        </ul>
        <ul className="nav navbar-nav pull-xs-right">

          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Sign in
            </Link>
          </li>

        </ul>
      </div>
    );
  }
  return null;
});

const LoggedInView = React.memo(props => {
  if (props.currentUser) {
    return (
      <div>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/solution" className="nav-link">
              Solution
            </Link>
          </li>
        </ul>
        <ul className="nav navbar-nav pull-xs-right">

          <li className="nav-item">
            <Link to="/editor" className="nav-link">
              <i className="ion-compose"></i>&nbsp;New Post
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/settings" className="nav-link">
              <i className="ion-gear-a"></i>&nbsp;Settings
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to={`/@${props.currentUser.username}`}
              className="nav-link">
              <img src={props.currentUser.image || 'https://static.productionready.io/images/smiley-cyrus.jpg'} className="user-pic" alt={props.currentUser.username} />
              {props.currentUser.username}
            </Link>
          </li>

        </ul>
      </div>
    );
  }

  return null;
});

class Header extends React.PureComponent {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">

          <Link to="/" className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
