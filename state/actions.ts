

export type UserForm = {
  name: string;
  email: string;
  password: string;
};

export type UserAction = {
  type: 'SAVE_USER' | 'DELETE_USER' | 'UPDATE_USER';
  payload?: UserForm;
};


export const saveUser =  (user: UserForm): UserAction => {
  return {
    type: 'SAVE_USER',
    payload: user,
  };
};

export const deleteUser =  (): UserAction => {
  return {
    type: 'DELETE_USER',
  };
};

export const updateUser =  (user: UserForm): UserAction => {
  return {
    type: 'UPDATE_USER',
    payload: user,
  };
};

