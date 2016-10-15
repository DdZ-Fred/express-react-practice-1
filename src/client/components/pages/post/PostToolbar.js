import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  lightWhite,
  darkWhite,
} from 'material-ui/styles/colors';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
} from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'react-router/lib/Link';
import { setResultsPerPage } from 'actions/postToolbarActions';


const propTypes = {
  resultsPerPageMenuItems: PropTypes.array.isRequired,
  currentResultsPerPage: PropTypes.number.isRequired,
  setResultsPerPage: PropTypes.func.isRequired,
  currentResultsFilter: PropTypes.object.isRequired,
};

const contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

class PostToolbar extends React.Component {

  constructor(props) {
    super(props);
    this.handleRouteButton = this.handleRouteButton.bind(this);
  }

  renderResultsPerPageMenuItems() {
    const menuItemStyles = {
      root: {
        backgroundColor: this.context.muiTheme.palette.primary1Color,
        color: lightWhite,
        // spacing: 5,
      },
      innerDivStyle: {
      },
    };

    return this.props.resultsPerPageMenuItems.map(item => (
      <MenuItem
        style={menuItemStyles.root}
        innerDivStyle={menuItemStyles.innerDivStyle}
        key={item.value}
        value={item.value}
        primaryText={`${item.value * 5} per page`}/>
    ));
  }

  handleRouteButton(e) {
    console.log('Button clicked', e.target);
  }

  render() {
    const toolbarStyle = {
      backgroundColor: this.context.muiTheme.palette.primary1Color,
      maxWidth: 700,
      margin: 'auto',
    };
    const resultsPerPageDropDownMenuStyles = {
      style: {
        // color: darkWhite,
      },
      labelStyle: {
        color: darkWhite,
      },
      iconStyle: {

      },
      listStyle: {
        // color: darkWhite,
      },
      menuStyle: {
        backgroundColor: this.context.muiTheme.palette.primary1Color,
      },
    };

    return (
      <Toolbar style={toolbarStyle}>
        <ToolbarGroup firstChild={true}>
          <RaisedButton
            label="Show Posts"
            primary={true}
            containerElement={<Link to="/posts"/>} />
            <DropDownMenu
              style={resultsPerPageDropDownMenuStyles.style}
              labelStyle={resultsPerPageDropDownMenuStyles.labelStyle}
              iconStyle={resultsPerPageDropDownMenuStyles.iconStyle}
              listStyle={resultsPerPageDropDownMenuStyles.listStyle}
              menuStyle={resultsPerPageDropDownMenuStyles.menuStyle}
              value={this.props.currentResultsPerPage}
              onChange={this.props.setResultsPerPage}>
              {this.renderResultsPerPageMenuItems()}
            </DropDownMenu>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup lastChild={true}>
          <RaisedButton
            label="Create new"
            primary={true}
            containerElement={<Link to="/posts/new"/>} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

function mapStateToProps({ postToolbar }) {
  return {
    currentResultsPerPage: postToolbar.currentResultsPerPage,
    currentResultsFilter: postToolbar.currentResultsFilter,
  };
}


PostToolbar.propTypes = propTypes;
PostToolbar.contextTypes = contextTypes;
export default connect(
mapStateToProps,
{ setResultsPerPage }
)(PostToolbar);
