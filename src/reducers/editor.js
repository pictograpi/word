const SET_BORDER_VISIBLE = "word/editor/setBorderVisible";
const SET_TEXT_VISIBLE = "word/editor/setTextVisible";

const initialState = { borderVisible: true, textVisible: true };

/**
 * Editor reducer.
 * @param {*} state
 * @param {*} action
 */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_BORDER_VISIBLE: {
      state = { ...state, borderVisible: action.value };
      break;
    }
    case SET_TEXT_VISIBLE: {
      state = { ...state, textVisible: action.value };
      break;
    }
    default:
      break;
  }

  return state;
}

/**
 * Sets border visible.
 * @param {boolean} value New border visible value.
 * @returns {Object} Action.
 */
export function setBorderVisible(value) {
  return { type: SET_BORDER_VISIBLE, value };
}

/**
 * Sets text visible.
 * @param {boolean} value New text visible value.
 * @returns {Object} Action.
 */
export function setTextVisible(value) {
  return { type: SET_TEXT_VISIBLE, value };
}
