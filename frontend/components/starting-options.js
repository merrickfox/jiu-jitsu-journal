import React from 'react'
import { connect } from 'react-redux'
import { setPosition, setDominance, setTechniqueType , setPositionStage} from '../actions/position'
import { autobind } from 'core-decorators';
import { techniqueMap } from '../config/technique-map';
import Router from 'next/router'

class StartingOptions extends React.Component {

	@autobind
	selectOption (option, setter) {
		setter(option);

		if (this.props.stage === 3) {
			this.props.setPositionStage(1)
			this.navigateToTechniques();
		} else {
			this.props.setPositionStage(this.props.stage + 1);
		}
	}

	@autobind
	navigateToTechniques () {
		const { position, dominance, technique_type } = this.props;
		console.log(technique_type, this.props)
		Router.push({
			pathname: '/techniques',
			query: {
				position,
				dominance,
				technique_type
			}
		})
	}

	@autobind
	goBack () {
		this.props.setPositionStage(this.props.stage - 1);
	}

	@autobind
	buttonOptions () {
		const {
			stage,
			setPosition,
			setDominance,
			setTechniqueType
		} = this.props;

		const ordering = {
			1: {name: 'position', dispacher_callback: setPosition},
			2: {name: 'dominance', dispacher_callback: setDominance},
			3: {name: 'technique_type', dispacher_callback: setTechniqueType}
		};

		if (stage <= 3) {
			return(
				<div className="option-set">
					<h2>{techniqueMap[`${ordering[stage].name}_question`]}</h2>
					<div className="buttons">
						{techniqueMap[ordering[stage].name].map(item => (
							<button
								className="btn-primary"
								onClick={() => {this.selectOption(item.option, ordering[stage].dispacher_callback)}}
								type="button"
								key={item.option}
							>
								{item.name}
							</button>
						))}
					</div>
					{stage > 1 &&
					<div>
						<button className="btn-warn" onClick={() => {
							this.goBack()
						}}>
							Back
						</button>
					</div>
					}
				</div>
			)
		}


	}

	render () {
		return(
			<div className="button-options">
				{this.buttonOptions()}

				{ /*language=SCSS*/ }
				<style jsx>{`

      		.button-options {
      			display: flex;
      			justify-content: center;
						min-height: 900px;
      		}

          .button-options :global(> .option-set .buttons) {
            display: flex;
            flex-direction: row;
          }

          .button-options :global(> .option-set h2) {
            margin: 16px;
          }

          .button-options :global(> .option-set) {
            display: flex;
            flex-direction: column;
						text-align: center;
          }
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
		stage: state.stage
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setPosition: (position) => dispatch(setPosition(position)),
		setDominance: (dominance) => dispatch(setDominance(dominance)),
		setTechniqueType: (type) => dispatch(setTechniqueType(type)),
		setPositionStage: (stage) => dispatch(setPositionStage(stage)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StartingOptions)
