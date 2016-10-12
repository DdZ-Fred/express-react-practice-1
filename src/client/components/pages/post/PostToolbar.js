import React, { PropTypes } from 'react';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle,
} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

const style = {

};

const propTypes = {

};

class PostToolbar extends React.Component {
  render() {
    return (
      <Toolbar style={style}>
        <ToolbarGroup firstChild={true}>
          <ToolbarTitle text="All posts"/>
        </ToolbarGroup>
        <ToolbarGroup>
          <FlatButton label="Create new"></FlatButton>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
PostToolbar.propTypes = propTypes;
export default PostToolbar;
