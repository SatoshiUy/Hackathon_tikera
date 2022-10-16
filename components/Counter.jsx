import { connect } from 'react-redux'

const Counter = ({
  count,
  increment,
  incrementAsync
}) => {


  return (
      <div>
          The count is {count}
          <button onClick={increment}>increment</button>
          <button onClick={incrementAsync}>incrementAsync</button>
      </div>
  )
}

const mapState = (state) => ({
	count: state.count,
})

const mapDispatch = (dispatch) => ({
	increment: () => dispatch.count.increment(1),
	asyncIncrement: dispatch.count.asyncIncrement,
})

export default connect(mapState, mapDispatch)(Counter)