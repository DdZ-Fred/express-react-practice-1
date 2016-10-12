import React, { PropTypes } from 'react';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle,
} from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
// import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'react-router/lib/Link';
// import withRouter from 'react-router/lib/withRouter';


const style = {
  root: {
    backgroundColor: '#83b1d7',
    maxWidth: 700,
    margin: 'auto',
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: '0.7em',
  },
};

const propTypes = {
  resultsPerPageMenuItems: PropTypes.array.isRequired,
  currentResultsPerPage: PropTypes.number.isRequired,
  updateResultsPerPage: PropTypes.func.isRequired,
};

class PostToolbar extends React.Component {

  constructor(props) {
    super(props);
    this.handleRouteButton = this.handleRouteButton.bind(this);
  }

  renderResultsPerPageMenuItems() {
    return this.props.resultsPerPageMenuItems.map(item => (
      <MenuItem key={item.value} value={item.value} primaryText={`${item.value * 5} per page`}/>
    ));
  }

  handleRouteButton(e) {
    console.log('Button clicked', e.target);
  }

  render() {
    return (
      <Toolbar style={style.root}>
        <ToolbarGroup firstChild={true}>
          <RaisedButton
            label="Show Posts"
            primary={true}
            containerElement={<Link to="/posts"/>} />
            <DropDownMenu
              value={this.props.currentResultsPerPage}
              onChange={this.props.updateResultsPerPage}>
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
PostToolbar.propTypes = propTypes;
export default PostToolbar;
