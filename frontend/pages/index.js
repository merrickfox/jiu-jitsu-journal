/* eslint-disable flowtype/require-valid-file-annotation */
import React, { Component } from 'react';
import Page from '../components/page'
import Heading from 'grommet/components/Heading';

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
      <div >
        <Page>
          <Heading strong={false}
                   uppercase={false}>
            Welcome!
          </Heading>
        </Page>

      </div>
    );
  }
}


export default Index;
