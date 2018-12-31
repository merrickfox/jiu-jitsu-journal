/* eslint-disable flowtype/require-valid-file-annotation */
import React, { Component } from 'react';
import Page from '../components/page/page'
import Grommet from 'grommet/components/Grommet';
import "../styles/global.scss"

class Index extends Component {
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
      <Grommet >
        <Page title='Welcome'>
        </Page>

      </Grommet>
    );
  }
}


export default Index;
