export const initialState = {
  status: "processing",
  url: "",
};

export default function statusReducer(state, { type, payload }) {
  switch (type) {
    case "notification": {
      return {
        ...state,
        status: payload,
      };
    }
    case "url": {
      return {
        ...state,
        url: payload,
      };
    }
    default: {
      return state;
    }
  }
}
