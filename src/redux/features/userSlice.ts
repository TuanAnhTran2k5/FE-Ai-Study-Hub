type UserState = unknown;

type UserAction =
  | { type: "user/login"; payload: UserState }
  | { type: "user/logout" };

export function login(payload: UserState): UserAction {
  return { type: "user/login", payload };
}

export function logout(): UserAction {
  return { type: "user/logout" };
}

export default function userReducer(state: UserState = null, action: UserAction): UserState {
  if (action.type === "user/login") {
    return action.payload;
  }

  if (action.type === "user/logout") {
    return null;
  }

  return state;
}
