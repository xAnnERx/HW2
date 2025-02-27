const initState: State = {
  themeId: 1,
};

export type State = {
  themeId: number;
};

type ThemeAction = {
  type: "SET_THEME_ID";
  id: number;
};

export const themeReducer = (state = initState, action: ThemeAction): State => {
  // fix any
  switch (action.type) {
    // дописать
    case "SET_THEME_ID":
      return { ...state, themeId: action.id };

    default:
      return state;
  }
};

export const changeThemeId = (id: number): ThemeAction => ({
  type: "SET_THEME_ID",
  id,
}); // fix any
