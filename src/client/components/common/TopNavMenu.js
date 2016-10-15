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
    const tabStyle = {
      backgroundColor: this.context.muiTheme.palette.primary2Color,
    };

    return this.props.tabs.map((tab, idx) => (
      <Tab
        key={idx}
        label={tab.label}
        style={tabStyle}
        data-route={tab.route}
        onActive={this.handleOnActiveTab}/>
    ));
  }

  render() {
    const tabsStyles = {
      root: {
        marginBottom: 2,
      },
      // InkBar: Moving Bar which underlines the active tab
      inkBar: {
        backgroundColor: this.context.muiTheme.palette.primary3Color,
        height: 2,
      },
    };

    return (
      <Tabs
        style={tabsStyles.root}
        inkBarStyle={tabsStyles.inkBar}>
        {this.renderTabs()}
      </Tabs>
    );
  }
}

TopNavMenu.propTypes = propTypes;
TopNavMenu.contextTypes = contextTypes;
export default withRouter(TopNavMenu);
