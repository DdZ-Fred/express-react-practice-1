import React, { PureComponent } from 'react';

class Header extends PureComponent {
  render() {
    return (
      <div className="blog-header">
          <div className="container">
              <h1 className="blog-title">MUI Blog</h1>
              <p className="lead blog-description">
                  An example blog template built with Bootstrap.
              </p>
          </div>
      </div>
    );
  }
}

export default Header;
