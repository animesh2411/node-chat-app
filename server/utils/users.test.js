const expect = require('expect');

const {Users} = require('./users');

describe('Users', () =>{

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Neelesh',
      room: 'SPAMS'
    }, {
      id: '2',
      name: 'Hamza',
      room: 'HAM'
    }, {
      id: '3',
      name: 'Mayank',
      room: 'HAM'
    }];
  });

  it('should add new user', () => {
    var users1 = new Users();
    var user1 = {
      id: '123',
      name: 'Ani',
      room: 'HAM'
    };
    var resUser = users1.addUser(user1.id, user1.name, user1.room);

    expect(users1.users).toEqual([user1]);
  });

  it('should remove the user', () => {
    var userId ='1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId ='99';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);
    expect(user).toNotExist();
  });

  it('should return names for HAM', () => {
    var userList = users.getuserList('HAM');
    expect(userList).toEqual(['Hamza', 'Mayank']);
  });

  it('should return names for SPAMS', () => {
    var userList = users.getuserList('SPAMS');
    expect(userList).toEqual(['Neelesh']);
  });
});
