import { ADDTICKET } from "../actions";
import { REMOVETICKET } from "../actions";

const initialState = { tickets: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADDTICKET:
      console.log(state);
      return {
        tickets: [
          ...state.tickets,
          {
            id: action.id,
            title: action.title,
            detail: action.detail,
            name: action.name,
            start: action.start,
            end: action.end,
          },
        ],
      };
    case REMOVETICKET:
      const removeTicket = [...state.tickets];
      removeTicket.splice(action.index, 1);
      return { tickets: removeTicket };
    default:
      return state;
  }
};
