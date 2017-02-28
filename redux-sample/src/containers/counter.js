import { connect } from 'react-redux';
import Counter from '../components/counter';
import { incrementCounter } from '../store/actions/incrementCounter';
import { decrementCounter } from '../store/actions/decrementCounter';
import { loadInitialState } from '../store/actions/loadInitialState';

function mapStateToProps(state) {
  //here we are mapping the redux state to props so we can use it in our components
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  //Those will be the actions we will be Triggerening from Components
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
    incrementCounterNow : () => dispatch(incrementCounter()),
    decrementCounterNow : () => dispatch(decrementCounter())
  };
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;