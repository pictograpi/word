const TOGGLE = "word/preview/toggle";

/**
 * Initial state.
 */
const initialState = {
  active: false
};

/**
 * Preview reducer.
 * @param {Object} state
 * @param {Object} action
 */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE: {
      state = { ...state, active: !state.active };
      break;
    }
    default:
      break;
  }
  return state;
}

/**
 * Toggles preview.
 * @returns {Object} Action.
 */
export function togglePreview() {
  return { type: TOGGLE };
}
