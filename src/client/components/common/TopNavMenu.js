import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { withRouter } from 'react-router';
import IndexLink from 'react-router/lib/IndexLink';
import Link from 'react-router/lib/Link';

const style = {
  tabs: {
    root: {
      marginBottom: 20,
    },
    // InkBar: Moving Bar which underlines the active tab
    inkBar: {
      backgroundColor: '#0c65b1',
      height: 2,
    },
  },
  tab: {
    backgroundColor: '#64a5dd',
  },
};


// #TODO:0 Migrate Bootstrap navbar to MUI Tabs
// Can't use PureComponent as context changes' propagation is blocked
// by the shouldComponentUpdate which always returns false
class TopNavMenu extends Component {

  constructor(props) {
    super(props);
    this.renderTabs = this.renderTabs.bind(this);
  }

  renderTabs() {

  }

  render() {
    return (
      <Tabs
        style={style.tabs.root}
        inkBarStyle={style.tabs.inkBar}>
        <Tab label="Home" style={style.tab}></Tab>
        <Tab label="Posts" style={style.tab}></Tab>
        <Tab label="Press" style={style.tab}></Tab>
        <Tab label="New Hires" style={style.tab}></Tab>
        <Tab label="About" style={style.tab}></Tab>
        {/* <IndexLink className="nav-link" activeClassName="active" to="/">Home</IndexLink>
        <Link className="nav-link" activeClassName="active" to="/posts">All Posts</Link>
        <Link className="nav-link" activeClassName="active" to="/press">Press</Link>
        <Link className="nav-link" activeClassName="active" to="/hires">New hires</Link>
        <Link className="nav-link" activeClassName="active" to="/about">About</Link> */}
      </Tabs>
    );
  }
}

export default withRouter(TopNavMenu);
