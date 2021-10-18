import { gameParams } from "../constants/gameParams";
import {
  ADD_TO_HISTORY,
  MOVE_TO,
  WINNER,
  NEW_GAME,
  WHO_START,
  GIVE_UP,
  LIST_OF_WINNERS,
} from "../actions";

export const initialState = {
  isXTurn: true,
  history: [
    {
      squares: new Array(Math.pow(gameParams.size, 2)).fill(null),
    },
  ],
  stepNumber: 0,
  winner: null,
  winnerList: [],
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return {
        ...state,
        history: [...state.history, action.payload],
        stepNumber: state.history.length,
        isXTurn: !state.isXTurn,
      };
    case MOVE_TO:
      return {
        ...state,
        history: [...state.history.slice(0, action.payload + 1)],
        stepNumber: action.payload.step,
        isXTurn: action.payload.isX,
      };

    case WINNER:
      return {
        ...state,
        winner: action.payload,
        winnerList: [
          ...state.winnerList,
          `${new Date().toLocaleString().split(",")[0]} : ${action.payload}`,
        ],
      };
    case NEW_GAME:
      return {
        ...state,
        isXTurn: true,
        history: [
          {
            squares: new Array(Math.pow(gameParams.size, 2)).fill(null),
          },
        ],
        stepNumber: 0,
        winner: null,
      };
    case WHO_START:
      return {
        ...state,
        isXTurn: !state.isXTurn,
      };
    case GIVE_UP:
      return {
        ...state,
        winner: state.isXTurn ? "O" : "X",
        winnerList: [
          ...state.winnerList,
          `${new Date().toLocaleString().split(",")[0]} : ${
            state.isXTurn ? "O" : "X"
          }`,
        ],
      };
    case LIST_OF_WINNERS:
      return {
        ...state,
        winnerList: [...action.payload],
      };
    default:
      return state;
  }
};
