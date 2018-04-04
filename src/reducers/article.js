const SET_TITLE = "word/article/setTitle";
const SET_TEXT = "word/article/setText";

/**
 * Initial state.
 */
const initialState = { title: "New article" };

/**
 * Title reducer.
 *
 * @export
 * @param {any} [state=initialState]
 * @param {any} [action={}]
 * @returns {Object} New state.
 */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_TITLE: {
      state = { ...state, title: action.title };
      break;
    }
    case SET_TEXT: {
      state = { ...state, text: action.text };
      break;
    }
    default:
      break;
  }

  return state;
}

/**
 * Sets new title.
 *
 * @export
 * @param {string} title New title.
 * @returns {Object} Action.
 */
export function setTitle(title) {
  return { type: SET_TITLE, title };
}

/**
 * Sets new text.
 *
 * @export
 * @param {string} text New text.
 * @returns {Object} Action.
 */
export function setText(text) {
  return { type: SET_TEXT, text };
}
