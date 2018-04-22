const SET_BORDER_ACTIVE = "word/editor/setBorderActive";

const initialState = { borderActive: true };

/**
 * Editor reducer.
 * @param {*} state
 * @param {*} action
 */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_BORDER_ACTIVE: {
      state = { ...state, borderActive: action.value };
      break;
    }
    default:
      break;
  }

  return state;
}

/**
 * Sets border active.
 * @param {boolean} value New border active value.
 * @returns {Object} Action.
 */
export function setBorderActive(value) {
  return { type: SET_BORDER_ACTIVE, value };
}
