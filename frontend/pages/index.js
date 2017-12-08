import React from 'react'
import Page from '../components/page'
import StartingOptions from '../components/starting-options'
import VideoGrid from '../components/video-grid'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'


class Index extends React.Component {
	render () {
		return(
			<Page>
				

				{ /*language=CSS*/ }
				<style jsx global>{`

          html {
            box-sizing: border-box;
            font-weight: 400;
            font-size: 1em;
          }

          *, *:before, *:after {
            box-sizing: inherit;
          }

          button {
            background: none;
            cursor: pointer;
            padding: 25px 12px;
            display: inline-block;
            margin: 15px 16px;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 700;
            outline: none;
            position: relative;
            transition: all 0.3s;
            border-radius: 50px;
            overflow: hidden;
            min-width: 135px;
          }

          .btn-primary {
            border: 3px solid #ffa436;
            color: #ffa436;
          }

          .btn-warn {
            border: 3px solid #ff5531;
            color: #ff5531;
          }


				`}</style>
			</Page>
		)
	}

}

export default withRedux(initStore, null, null)(Index)