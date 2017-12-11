/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import Page from '../components/page'
import Week from '../components/week-picker'
import Grid from 'material-ui/Grid';

const styles = {
  root: {
  },
};

class Dashboard extends Component {

  render() {
    return (
      <div className={this.props.classes.root}>
        <Page>
          <div>
            <Week/>
          </div>
        </Page>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Dashboard));
