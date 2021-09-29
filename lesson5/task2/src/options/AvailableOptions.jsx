import Options from './Options.jsx';
import { connect } from 'react-redux';
import { availableOptionsSelector } from './options.selectors';
import { toggleOption } from './options.actions';

const mapState = (state) => {
  return {
    options: availableOptionsSelector(state),
  };
};
const mapDispatch = {
  moveOption: toggleOption,
};

export default connect(mapState, mapDispatch)(Options);
