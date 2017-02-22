import { connect } from 'react-redux';
import Invite from '../components/invite';
import { getInvite } from '../store/actions/get_invite';
import { addToInvite } from '../store/actions/add_to_invite';

function mapStateToProps(state) {
  return {
    invite: state.invite
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetInvite: () => dispatch(getInvite()),
    onAddToInvite: (name) => dispatch(addToInvite(name))
  };
}

const inviteContainer = connect(mapStateToProps, mapDispatchToProps)(Invite);

export default inviteContainer;