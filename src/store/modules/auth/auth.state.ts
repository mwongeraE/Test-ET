export interface IAuthState {
  isAuthed: boolean;
  token: string | null;
  user: {
    id: string
    uid: string
    phone: string
    email: string
    username: string
  } | null;
}
