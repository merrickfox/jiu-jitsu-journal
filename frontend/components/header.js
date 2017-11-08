import Nav from './nav'
import Link from 'next/link'
import React from 'react'
import { connect } from 'react-redux'
import { autobind } from 'core-decorators';
import Auth from '../services/auth';


export default class Header extends React.Component {

	constructor(props) {
		super(props);
		this.auth = new Auth();
	}
	
	@autobind
	login () {
		this.auth.login();
	}

	render () {
		return(
			<header>
				<div className="left">
					<Link prefetch href="/">
						<a>
         <span className="logo">
         </span>
							<span className="title">Gripipedia</span>
						</a>
					</Link>
					<div className="nav">
						<Nav />
					</div>
				</div>
				<div className="right">
					<a className="login" onClick={this.login}>login</a>
				</div>
				{ /*language=SCSS*/ }
				<style jsx>{`
      header {
        background: #57a5bf;
        display: flex;
        font-size: 14px;
      }

      .logo {
        margin: 4px 5px 2px 4px;
        display: inline-block;
      }

      .left {
        flex: 9;
      }

      .right {
        flex: 1;
        text-align: right;
      }

      .title {
        font-weight: bold;
        display: inline-block;
        font-size: 14px;
        text-decoration: none;
        padding: 8px 10px 8px 4px;
        color: #000;
        vertical-align: top;
      }

      a.login {
        padding: 10px;
        display: inline-block;
        font-size: 11px;
        text-transform: uppercase;
        text-decoration: none;
        color: #000;
      }

      .login:hover {
        color: #fff;
      }

      .nav {
        display: inline-block;
        vertical-align: top;
      }

      @media (max-width: 750px) {
        .title {
          font-size: 16px;
          padding-bottom: 0;
        }

        a.login {
          padding: 24px 10px 23px;
        }

        .nav {
          display: block;
        }
      }
    `}</style>
			</header>
		)
	}
}

// const mapStateToProps = state => {
// 	return {
// 		position: state.position,
// 		dominance: state.dominance,
// 		technique_type: state.technique_type,
// 		stage: state.stage
// 	};
// };
//
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		setPosition: (position) => dispatch(setPosition(position)),
// 		setDominance: (dominance) => dispatch(setDominance(dominance)),
// 		setTechniqueType: (type) => dispatch(setTechniqueType(type)),
// 		setPositionStage: (stage) => dispatch(setPositionStage(stage)),
// 	}
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Header)
// export default () => (
//
// )
