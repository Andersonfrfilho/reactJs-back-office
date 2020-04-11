import produce from 'immer';

const INITIAL_STATE = {
  name: '',
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@contacts/DEFINE_INFORMATION_USER':
      return produce(state, draft => {
        draft.name = action.payload.name;
      });

    default:
      return state;
  }
}
