import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as getComponentDataAction from '../actions'

// https://helloacm.com/api/random/?n=128

function mapStateToProps(state) {
  const {compReducer} = state
  console.log("state:::", state)
	return {
    data: compReducer.data
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			...getComponentDataAction,
		},
		dispatch
	)
}

export default connect(mapStateToProps, mapDispatchToProps)
