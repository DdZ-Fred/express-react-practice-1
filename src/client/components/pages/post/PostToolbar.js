import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
} from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
// import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'react-router/lib/Link';
// import withRouter from 'react-router/lib/withRouter';
import { setResultsPerPage } from 'actions/postToolbarActions';


const style = {
  root: {
    backgroundColor: '#5da4e0',
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
  setResultsPerPage: PropTypes.func.isRequired,
  currentResultsFilter: PropTypes.object.isRequired,
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
export default connect(
mapStateToProps,
{ setResultsPerPage }
)(PostToolbar);
