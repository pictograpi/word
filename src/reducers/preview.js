const ACTIVATE = "word/preview/activate";
const DEACTIVATE = "word/preview/deactivate";

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
    case ACTIVATE: {
      state = { ...state, active: true };
      break;
    }
    case DEACTIVATE: {
      state = { ...state, active: false };
      break;
    }
    default:
      break;
  }
  return state;
}

/**
 * Activates the preview.
 * @returns {Object} Action.
 */
export function activatePreview() {
  return { type: ACTIVATE };
}

/**
 * Deactivates the preview.
 * @returns {Object} Action.
 */
export function deactivatePreview() {
  return { type: DEACTIVATE };
}
