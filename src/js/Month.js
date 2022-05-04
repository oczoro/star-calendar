const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

class Calendar {
  constructor(date, today) {
    this.year = date.getFullYear();
    this.month = date.toLocaleString('default', { month: 'long' });
    this.days = this.getDays(this.year, date.getMonth() + 1);
    this.today = today;
  }

  getDays(year, month) {
    let num_days = new Date(year, month, 0).getDate();
    return this.getArrayOfDays(num_days);
  }

  getArrayOfDays(limit) {
    let days = [];
    for (var i = 0; i < limit; i++) {
      days.push({
        day: i,
        star: '',
      });
    }
    return days;
  }

  getMonth(month) {
    return this.months.indexOf(month);
  }
}

export default Calendar;
