import React from 'react';

const DefaultOnSSR = () => null;

class NoSSR extends React.Component {
	state = {
		mounted: false,
	};

	componentDidMount() {
		this.setState({ mounted: true }); // eslint-disable-line react/no-did-mount-set-state
	}

	render() {
		return this.state.mounted ? this.props.children : <DefaultOnSSR />;
	}
}

export default NoSSR;