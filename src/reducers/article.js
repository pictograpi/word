const SET = "word/article/set";

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
    case SET: {
      state = { ...state, title: action.title };
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
 * @returns {Object} Action
 */
export function setTitle(title) {
  return { type: SET, title };
}
