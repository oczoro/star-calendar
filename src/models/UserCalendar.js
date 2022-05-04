class UserCalendar {
  constructor(month, year) {
    this.month = month;
    this.year = year;
    this.days = [];
  }

  returnOBJ() {
    return {
      ...this,
    };
  }
}

export default UserCalendar;
