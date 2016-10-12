import React, { PropTypes } from 'react';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle,
} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'react-router/lib/Link';
import withRouter from 'react-router/lib/withRouter';


const style = {
  root: {
    backgroundColor: '#83b1d7',
    maxWidth: 500,
    margin: 'auto',
    color: 'white',
  },
  title: {
    color: 'white',
  },
};

const propTypes = {

};

class PostToolbar extends React.Component {

  constructor(props) {
    super(props);
    this.handleRouteButton = this.handleRouteButton.bind(this);
  }

  handleRouteButton(e) {
    console.log('Button clicked', e.target);
  }

  render() {
    return (
      <Toolbar style={style.root}>
        <ToolbarGroup>
          <ToolbarTitle text="Filter:" style={style.title} />
          <FlatButton
            label="All Posts"
            containerElement={<Link to="/posts"/>} />
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
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
export default withRouter(PostToolbar);
