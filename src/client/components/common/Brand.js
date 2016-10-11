import React from 'react';
import { Paper } from 'material-ui';

const propTypes = {

};

const style = {
  width: 100,
  height: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

function Brand() {
  return (
    <div>
      <Paper style={style} zDepth={2} />
    </div>
  );
}
Brand.propTypes = propTypes;

export default Brand;
