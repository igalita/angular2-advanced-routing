export class UsersService {

  private users = [
    {
      id: 1,
      username: 'max.payne',
      name: 'Max Payne',
      type: 'administrator',
      status: 'active'
    },
    {
      id: 2,
      username: 'the.real.donald.trump',
      name: 'Donald Trump',
      type: 'Guest',
      status: 'inactive'
    },
    {
      id: 3,
      username: 'chris.rock',
      name: 'Chris Rock',
      type: 'Normal User',
      status: 'inactive'
    }
  ];

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    const user = this.users.find(
      (s) => {
        return s.id === id;
      }
    );
    return user;
  }

}
