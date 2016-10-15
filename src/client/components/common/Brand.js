import React, { PropTypes } from 'react';
import { Paper } from 'material-ui';

const propTypes = {

};

const contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

function Brand(props, { muiTheme }) {
  const styles = {
    container: {
      backgroundColor: muiTheme.palette.primary1Color,
    },
    paper: {
      width: 100,
      height: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
      fontSize: '1.5em',
      backgroundColor: muiTheme.palette.primary2Color,
      color: 'rgba(255,255,255, 0.7)',
    },
  };

  return (
    <div style={styles.container}>
      <Paper style={styles.paper} zDepth={2}>
        MY<br/> BLOG
      </Paper>
    </div>
  );
}
Brand.propTypes = propTypes;
Brand.contextTypes = contextTypes;

export default Brand;
