import React from 'react'
import Page from '../components/page'
import DrawerMenu from '../components/drawer'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Slider from 'react-slick';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


class Dashboard extends React.Component {

	constructor () {
		super();
		 this.settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 7,
			slidesToScroll: 1
		};
	}

	render () {
		const classes = 'ok'
		return(
			<div>
				<Page>
					<Slider {...this.settings}>
						<div>
							<Card className={classes.card}>
								<CardMedia
									className={classes.media}
									image="https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg"
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography type="headline" component="h2">
										Lizard
									</Typography>
									<Typography component="p">
										Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
										across all continents except Antarctica
									</Typography>
								</CardContent>
								<CardActions>
									<Button dense color="primary">
										Share
									</Button>
									<Button dense color="primary">
										Learn More
									</Button>
								</CardActions>
							</Card>
						</div>
						<div><h3>2</h3></div>
						<div><h3>3</h3></div>
						<div><h3>4</h3></div>
						<div><h3>5</h3></div>
						<div><h3>6</h3></div>
						<div><h3>1</h3></div>
						<div><h3>2</h3></div>
						<div><h3>3</h3></div>
						<div><h3>4</h3></div>
						<div><h3>5</h3></div>
						<div><h3>6</h3></div>
					</Slider>
				</Page>

				<style jsx>{`

				`}</style>
			</div>
		)
	}

}


const mapStateToProps = state => {
	return {
		position: state.position,
		dominance: state.dominance,
		technique_type: state.technique_type,
	};
};

export default withRedux(initStore, mapStateToProps, null)(Dashboard)