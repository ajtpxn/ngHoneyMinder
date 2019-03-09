export class User {
  id: number;
  email: string;
  username: string;
  password: string;
  enabled: boolean;
  role: string;
  firstName: string;
  lastName: string;


  constructor(
    id?: number,
    email?: string,
    username?: string,
    password?: string,
    enabled?: boolean,
    role?: string,
    firstName?: string,
    lastName?: string

  ) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.password = password;
    this.enabled = enabled;
    this.role = role;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
