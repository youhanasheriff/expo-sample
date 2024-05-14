import { UserAction, UserForm } from "./actions";


const initialState:UserForm = {
  name: '',
  email: '',
  password: '',
};

export const userReducer = (state = initialState, action: UserAction): UserForm => {

  switch (action.type) {
    case 'SAVE_USER':
      return { ...state, ...action.payload };
    case 'DELETE_USER':
      return initialState;
    case 'UPDATE_USER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
