export const ACTIONS = {
    ADD_DIGIT: "add-digit",
    CHOOSE_OPERATION: "choose-operation",
    CLEAR: "clear",
    EVALUATE: "evaluate",
    ERROR: "error",
    CLEAR_ERROR: "clear-error",
  };
  
  export function reducer(state, { type, payload }) {
    switch (type) {
      case ACTIONS.ADD_DIGIT:
        if (state.overwrite) {
        return { ...state, currentValue: payload.digit, overwrite: false };
        }
        return { ...state, currentValue: `${state.currentValue || ""}${payload.digit}` };
        case ACTIONS.CHOOSE_OPERATION:
        if (state.currentValue == null) {
    return state;
  }

  if (state.previousValue == null) {
    return {
      ...state,
      operation: payload,
      previousValue: state.currentValue,
      currentValue: null,
    };
  }

  return {
    ...state,
    operation: payload,
  };
      case ACTIONS.CLEAR:
        return {};
      case ACTIONS.EVALUATE:
        if (state.operation == null || state.currentValue == null || state.previousValue == null) {
          return { ...state, error: "Incomplete operation" };
        }
        let result;
        const prev = parseFloat(state.previousValue);
        const current = parseFloat(state.currentValue);
        switch (state.operation) {
          case "+":
            result = prev + current;
            break;
          case "-":
            result = prev - current;
            break;
          case "×":
            result = prev * current;
            break;
          case "÷":
            if (current === 0) {
              return { ...state, error: "Cannot divide by zero" };
            }
            result = prev / current;
            break;
          default:
            return { ...state, error: "Unknown operation" };
        }
        return { currentValue: result.toString(), previousValue: null, operation: null, overwrite: true };
      case ACTIONS.ERROR:
        return { ...state, error: payload };
      case ACTIONS.CLEAR_ERROR:
        return { ...state, error: null };
      default:
        return state;
    }
  }
  