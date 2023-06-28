class CALENDAR {
  constructor() {
    (this.currentDate = new Date()),
      (this.monthNamesArr = [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ]);
    this.monthName = 0;
    this.year = 0;
    this.month = 0;
    this.currentDay = 0;
    this.lastDay = 0;
    this.today = {year:this.currentDate.getFullYear(),month:this.currentDate.getMonth() + 1,day:this.currentDate.getDate()};
    this.firstDayWeek = 0;
    this.weekends = [];
    this.calculateDays();
    this.initRender();
    document.querySelector(".prev").addEventListener("click", () => {
      this.monthChange("prev");
    });

    document.querySelector(".next").addEventListener("click", () => {
      this.monthChange("next");
    });
  }

  calculateDays() {
    this.year = this.currentDate.getFullYear();
    this.month = this.currentDate.getMonth() + 1;
    this.monthName = this.monthNamesArr[this.month - 1];
    this.currentDay = this.currentDate.getDate();

    this.lastDay = new Date(this.year, this.month, 0).getDate();
    this.firstDayWeek = new Date(
      this.year,
      this.currentDate.getMonth(),
      1
    ).getDay();

    this.getHoliday();
  }
  getHoliday() {
    this.weekends = [];
    for (let day = 1; day <= this.lastDay; day++) {
      const currentDate = new Date(this.year, this.month - 1, day);
      const currentDay = currentDate.getDay();
      if (currentDay === 6 || currentDay === 0) {
        this.weekends.push(currentDate.getDate());
      }
    }
  }
  onMonthName() {
    this.monthName = this.monthNamesArr[this.month - 1];
    return this;
  }
  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.currentDate.setDate(1);
    this.calculateDays();
    return this;
  }
  prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.currentDate.setDate(1);
    this.calculateDays();
    return this;
  }
  initRender() {
    this.monthUI();
    this.dayUI();
  }
  monthUI() {
    let monthDOM = document.querySelector("#calendar .option-container .month");
    monthDOM.innerHTML = `${this.year}年${this.monthName}`;
  }
  dayUI() {
    let dayDOM = document.querySelector(
      "#calendar .option-container .date-day"
    );
    let week = 0;
    let str = "";
    if (this.firstDayWeek > 0) {
      week = this.firstDayWeek;
      for (let i = 0; i < week; i++) {
        str += ` <div  class="dayItem none"></div>`;
      }
    }
    for (let i = 1; i <= this.lastDay; i++) {
      if (i === this.currentDay) {
        str += `<div class="dayItem" onclick='changeDay(event)'> <span class="active">${i}</span></div>`;
      } else if (i < this.currentDay) {
        str += `<div  class="dayItem disable"> <span class="">${i}</span> </div>`;
      } else {
        str += `<div  class="dayItem" onclick='changeDay(event)'> <span class="">${i}</span> </div>`;
      }
    }

    dayDOM.innerHTML = str;
  }
  monthChange(e) {
    if (e === "next") {
      this.nextMonth();
    } else {
      this.prevMonth();
    }
    this.initRender();
  }
}
function changeDay(event) {
  let dom = event.currentTarget
  let span=dom.querySelector('span')
  let oldActiveDom=document.querySelector('#calendar .date-day .dayItem .active')
  if (oldActiveDom.innerHTML===span.innerHTML) {
    return
  }
  reservation.initDate.currentDay = span.innerHTML;
  new CLASSHANDLER(span, "date-day");
  // reservation.initRender()
}
