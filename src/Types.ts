export type loginForm = {
  email: string;
  password: string;
  remember: boolean;
};

export type UserListTypes = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type UserDataTypes = {
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type FetchUserArgs = {
  per_page: number;
  page: number;
};

export type FetchUserPayload = {
  user: {
    data: UserListTypes[];
    total_pages: number;
  };
};

export type UpdateUserResponseTypes = {
  user: UserListTypes;
  userData: UserDataTypes;
  id: number;
};

export type UpdateUserArgs = {
  id: number;
  userData: UserDataTypes;
};

export type UserReducerState = {
  userList: UserListTypes[];
  per_page: number;
  totalPages: number;
  loader: boolean;
};

export type UserDialogProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  title: string;
  formValues?: {
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    id: number;
  };
};

export type DeleteConfirmDialogProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export type createUserResponseTypes = {
  user: UserListTypes;
};

export type createUserArgs = {
  userData: UserDataTypes;
};

export type LogoutProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export type UserListProps = {
  users: UserListTypes[];
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenDelete: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedUser: React.Dispatch<
    React.SetStateAction<UserListTypes | undefined>
  >;
};
