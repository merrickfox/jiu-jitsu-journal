import React from 'react';
import autobind from 'autobind-decorator';
import Auth from '../lib/auth0';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import User from 'grommet/components/icons/base/User';


class SideBar extends React.Component {


	@autobind
	login () {
		const auth = new Auth();
		auth.login();
	}

	render() {

		return (
			<Sidebar
							 fixed={true}
							 colorIndex='brand'
			>
				<Box pad={{ horizontal: 'medium' }}>
					<Header justify='between'>
						<Title>JiuJitsu Journal</Title>
					</Header>
					<Menu inline={true} pad={{ vertical: 'medium', between: 'medium' }}>
						<Anchor href="#" label='Test' />
						<Anchor href="#" label='Test' />
						<Anchor href="#" label='Test' />
					</Menu>
				</Box>
			</Sidebar>
		);
	}
}


export default SideBar;