import React, { PropTypes, Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import withRouter from 'react-router/lib/withRouter';
import IndexLink from 'react-router/lib/IndexLink';
import Link from 'react-router/lib/Link';
import tabShape from 'shapes/tabShape';


const propTypes = {
  tabs: PropTypes.arrayOf(tabShape).isRequired,
  router: PropTypes.object.isRequired,
};

const contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

const style = {
  tabs: {
    root: {
      marginBottom: 2,
    },
    // InkBar: Moving Bar which underlines the active tab
    inkBar: {
      backgroundColor: '#3479b5',
      height: 2,
    },
  },
  tab: {
    backgroundColor: '#64a5dd',
  },
};

class TopNavMenu extends Component {

  constructor(props) {
    super(props);
    this.handleOnActiveTab = this.handleOnActiveTab.bind(this);
  }

  handleOnActiveTab(tab) {
    console.log('Active tab:', tab);
    this.props.router.push(tab.props['data-route']);
  }

  renderTabs() {
    return this.props.tabs.map((tab, idx) => (
      <Tab
        key={idx}
        label={tab.label}
        style={style.tab}
        data-route={tab.route}
        onActive={this.handleOnActiveTab}/>
    ));
  }

  render() {
    return (
      <Tabs
        style={style.tabs.root}
        inkBarStyle={style.tabs.inkBar}>
        {this.renderTabs()}
      </Tabs>
    );
  }
}

TopNavMenu.propTypes = propTypes;
TopNavMenu.contextTypes = contextTypes;
export default withRouter(TopNavMenu);
