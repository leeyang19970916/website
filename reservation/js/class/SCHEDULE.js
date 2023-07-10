class SCHEDULE {
    constructor(data = []) {
      (this.dom = document.querySelector(".schedule .clinic-week")),
      (this.data = data);
      this.week = ["日", "一", "二", "三", "四", "五", "六"];
      this.mediaScreen="pc"
      this.initUIRender();

    }
    changeDom(newDom){
      this.dom=newDom;
      this.initUIRender();
    }
    changeMediaScreen(){
      if (this.mediaScreen==="pc") {
        this.mediaScreen="pd"
      }else{
        this.mediaScreen="pc"
      }
      return this

    }
    initUIRender() {
      let initField = this.initField();
      let initWeek = this.initWeek();
      this.dom.innerHTML = `${initField}${initWeek}`;
      this.initDataUIRender()
    }
    initField() {
      return `    <div class="clinic-week-col">
          <div class="item state">門診表</div>
          <div class="item state">
            <div class="stateName">早診</div>
            <div class="range">09:00-13:00</div>
          </div>
          <div class="item state">
            <div class="stateName">午診</div>
            <div class="range">09:00-13:00</div>
          </div>
          <div class="item state">
            <div class="stateName">晚診</div>
            <div class="range">09:00-13:00</div>
          </div>
        </div>`;
    }
    initWeek() {
      let str = "";
      for (let i = 0; i < this.week.length; i++) {
        let isWeekend = false;
        if (i === 0 || i === 6) {
          isWeekend = true;
        }
        const element = this.week[i];
        str += `<div class="clinic-week-col">
          <div class="item ${isWeekend ? "isWeekend" : ""}">${element}</div>
          <div data-id="${i}1" class="item  ${isWeekend ? "isWeekend" : ""}">
           <span class="active ${isWeekend ? "isWeekend" : ""}"></span>
          </div>
          <div data-id="${i}2" class="item ${isWeekend ? "isWeekend" : ""}">
           <span class="active ${isWeekend ? "isWeekend" : ""}"></span>
          </div>
          <div data-id="${i}3" class="item ${isWeekend ? "isWeekend" : ""}">
            <span class="active ${isWeekend ? "isWeekend" : ""}"></span>
          </div>
        </div>`;
      }
      return str;
    }
    initDataUIRender(){
      if (this.mediaScreen==="pd") {
        for (let i = 0; i < this.data.length; i++) {
          const element = this.data[i];
          let dom=document.querySelector(`#schedule-pd .clinic-week [data-id="${element}"]`)
          dom.innerHTML=`<span class="">休</span>`
      }
        return
      }
      for (let i = 0; i < this.data.length; i++) {
          const element = this.data[i];
          let dom=document.querySelector(`[data-id="${element}"]`)
          dom.innerHTML=`<span class="">休</span>`
      }

    }
  }
  