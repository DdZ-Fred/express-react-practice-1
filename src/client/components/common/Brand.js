import React from 'react';
import { Paper } from 'material-ui';

const propTypes = {

};

const containerStyle = {
  backgroundColor: '#428BCA',
};

const style = {
  width: 100,
  height: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  fontSize: '1.5em',
  backgroundColor: '#6fb0e8',
  color: '#b5dbf0',
};

function Brand() {
  return (
    <div style={containerStyle}>
      <Paper style={style} zDepth={2}>
        MY<br/> BLOG
      </Paper>
    </div>
  );
}
Brand.propTypes = propTypes;

export default Brand;
