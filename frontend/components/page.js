import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import withRoot from './withRoot';
import SideBar from './side-bar'
import TopToolbar from './top-toolbar'
import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';


class Page extends Component {

	render() {
		const { children, title } = this.props;

		return (
			<div className='app-container'>
				<App centered={false}>
					<Split flex='right' priority='right' fixed={true}>

						<SideBar/>

						<Box colorIndex='light-2' full={true} pad='medium' className='main-box'>
							<Heading strong={false}
											 uppercase={false}>
								{title}
							</Heading>
							{children}

						</Box>


					</Split>
				</App>

				{ /*language=CSS*/ }
				<style jsx global >{`
          body {
						font-family: 'Work Sans', sans-serif;
            font-size: 16px;
          }

					.main-box {
						padding-bottom: 100px;
					}
      `}</style>
			</div>
		);
	}
}



export default Page;