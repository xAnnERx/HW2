import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      const sortedState = [...state].sort((a, b) => {
        if (action.payload === "down") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
      // by name

      return sortedState; // need to fix
    }
    case "check": {
      return state.filter((user) => user.age >= action.payload); // need to fix
    }
    default:
      return state;
  }
};
