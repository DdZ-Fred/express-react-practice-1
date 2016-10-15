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
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
// import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import Link from 'react-router/lib/Link';
import {
  setResultsPerPage,
  toggleResultsFilter,
  setResultsFilterValue,
  toggleFiltersDrawer,
} from 'actions/postToolbarActions';


const propTypes = {
  resultsPerPageMenuItems: PropTypes.array.isRequired,
  currentResultsPerPage: PropTypes.number.isRequired,
  setResultsPerPage: PropTypes.func.isRequired,
  currentResultsFilters: PropTypes.object.isRequired,
  toggleResultsFilter: PropTypes.func.isRequired,
  setResultsFilterValue: PropTypes.func.isRequired,
  isFiltersDrawerOpen: PropTypes.bool.isRequired,
  toggleFiltersDrawer: PropTypes.func.isRequired,
};

const contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

class PostToolbar extends React.Component {

  constructor(props) {
    super(props);
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

  renderResultsFilterItems() {
    const filtersNames = Object.getOwnPropertyNames(this.props.currentResultsFilters);

    return filtersNames.map(filterName => (
      <MenuItem
        key={filterName}>
        <Checkbox
          checked={this.props.currentResultsFilters[filterName].active}/>
        <TextField
          floatingLabelText={filterName.toUpperCase()} />
      </MenuItem>
    ));
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
            <FlatButton
              label="Filters"
              secondary={true}
              hoverColor={this.context.muiTheme.palette.primary2Color}
              onTouchTap={this.props.toggleFiltersDrawer} />
            <Drawer
              open={this.props.isFiltersDrawerOpen}>

            </Drawer>
              {/* {this.renderResultsFilterItems()} */}

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
    currentResultsFilters: postToolbar.currentResultsFilters,
    isFiltersDrawerOpen: postToolbar.isFiltersDrawerOpen,
  };
}


PostToolbar.propTypes = propTypes;
PostToolbar.contextTypes = contextTypes;
export default connect(
mapStateToProps,
{ setResultsPerPage, toggleResultsFilter, setResultsFilterValue, toggleFiltersDrawer }
)(PostToolbar);
