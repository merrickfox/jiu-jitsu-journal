import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default () => (
	<div>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<link rel="shortcut icon" href="/static/favicon.ico" />
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
		</Head>
		{ /*language=SCSS*/ }
		<style jsx global>{`
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        background: #eee;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      /* loading progress bar styles */
      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: #57a5bf;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #57a5bf, 0 0 5px #57a5bf;
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}</style>
	</div>
)
