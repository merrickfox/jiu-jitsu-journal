/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import Page from '../components/page'
import Button from 'grommet/components/Button';
import Edit from 'grommet/components/icons/base/Edit';

const styles = {
  root: {
  },
};

class Index extends Component {
  state = {
    open: false,
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    return (
      <div >
        <Button
          icon={<Edit />}
          label='Label'
          href='#' />
        <Page>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
        </Page>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Index;
