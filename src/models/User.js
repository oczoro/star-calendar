class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.icon = '⭐';
    this.balance = [0, 0, 0];
    this.items = [];
  }

  returnOBJ() {
    return {
      ...this,
    };
  }
}

export default User;
