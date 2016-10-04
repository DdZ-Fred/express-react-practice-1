import React, { Component } from 'react';
// import { IndexLink, Link } from 'react-router';

import IndexLink from 'react-router/lib/IndexLink';
import Link from 'react-router/lib/Link';

// Can't use PureComponent as context changes' propagation is blocked
// by the shouldComponentUpdate which always returns false
class TopNavMenu extends Component {
  render() {
    return (
      <div className="blog-masthead">
          <div className="container">
              <nav className="nav blog-nav">
                  <IndexLink className="nav-link" activeClassName="active" to="/">Home</IndexLink>
                  <Link className="nav-link" activeClassName="active" to="/posts">All Posts</Link>
                  <Link className="nav-link" activeClassName="active" to="/press">Press</Link>
                  <Link className="nav-link" activeClassName="active" to="/hires">New hires</Link>
                  <Link className="nav-link" activeClassName="active" to="/about">About</Link>
              </nav>
          </div>
      </div>
    );
  }
}

export default TopNavMenu;
