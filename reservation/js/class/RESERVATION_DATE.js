class RESERVATION_DATE {
  constructor(clinicId) {
    this.activeClinicId = clinicId;
    this.activeDoctor = {};
    this.activeDate = "";
    this.activeTime = "";

    this.initDate = new CALENDAR();
    this.doctorArr = [];
    this.date = [];
    this.time = [];
    this.apiDoctors();
    this.apiDoctorTime();
  }
  apiDoctors() {
    // this.activeClinicId
    // do api
    // get this.doctorArr
    let doctors = [
      { id: 1, name: "葛大為" },
      { id: 2, name: "拉拉拉布" },
      { id: 5, name: "橙橙橙橙" },
    ];
    this.activeDoctor = doctors[0];
    this.UIdoctors(doctors);
  }
  apiDoctorSchedule() {
    // this.activeClinicId/ this.activeDoctor.id/today
    // 龍哥會給我 該月 今天以後~月底的可上班日期
    // [28,29,30]
    // do api
    // get Date this.activeDate

    let calendarDay=[28,29,30]
    UIcalendar(calendarDay)
  }
  apiDoctorTime() {
    // this.activeClinicId/ this.activeDoctor/this.activeDate
    // do api
    // getTimeList
    let time = [
      { state: "早診", times: ["09:00", "12:00"] },
      { state: "午診", times: ["15:00", "17:00"] },
      { state: "晚診", times: ["20:00", "23:00"] },
    ];
    this.activeTime = time[0].times[0];
    this.UItime(time);
  }
  UIdoctors(doctors) {
    let dom = document.querySelector("#doctorList .option-container");
    let str = doctors
      .map(
        (doctor) =>
          `<div data-id="${doctor.id}" onclick="doctorChange(event)"
          class="doctorItem ${
            this.activeDoctor.id === doctor.id ? "active" : ""
          }">${doctor.name}醫師</div>`
      )
      .join("");

    //   return
    dom.innerHTML = str;
  }
  UIcalendar(dateDay){
    let dom=document.querySelector('#calendar .date-day')
  }
  UItime(dataTime) {
    let dom = document.querySelector("#time .option-container");
    let str = "";
    for (let i = 0; i < dataTime.length; i++) {
      const e = dataTime[i];
      let { state, times } = e;
      let timeItemStr = "";
      times.forEach((time) => {
        timeItemStr += `<div onclick='timeChange(event)' class="timeItem ${
          this.activeTime === time ? "active" : ""
        }">${time}</div>`;
      });
      str += ` <div class="time-container">
        <div class="time-title">${state}</div>
        <div class="time-list">
        ${timeItemStr}
        </div>
      </div>`;
    }
    dom.innerHTML = str;
  }
}
function doctorChange(event) {
  let dom = event.target;
  let doctor = {
    id: dom.getAttribute("data-id"),
    name: dom.innerHTML,
  };
  reservation.activeDoctor = doctor;

  new CLASSHANDLER(dom, "option-container");
}
function timeChange(event) {
  let dom = event.target;
  reservation.activeTime = dom.innerHTML;

  new CLASSHANDLER(dom, "option-container");
}
