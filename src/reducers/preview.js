const TOGGLE = "word/preview/toggle";

/**
 * Initial state.
 */
const initialState = {
  active: false
};

/**
 * Preview reducer.
 *
 * @export
 * @param {any} [state=initialState]
 * @param {any} [action={}]
 * @returns {Object} New state.
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
 *
 * @export
 * @returns {Object} Action.
 */
export function togglePreview() {
  return { type: TOGGLE };
}
