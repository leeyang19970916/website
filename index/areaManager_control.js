class areaManager_control {
  constructor(dom) {
    this.dom = document.querySelector(`${dom}`);
    this.areaData = new AREAMANAGER();
    (this.activeArea = ""),
      (this.activeCity = ""),
      (this.activeDistrict = ""),
      (this.areaArray = []),
      (this.cityArray = []),
      (this.districtArray = []);
    this.init();
    this.areaRender();
    this.cityRender();
    this.districtRender();
    console.log(this,"this")
  }
  init() {
    this.areaData
      .onAreaChange((initial, items) => {
        // console.log(initial,"initttt")
        this.activeArea = initial;
        this.areaArray = items;
        this.areaRender();
      })
      .onCityChange((initial, items) => {
        // console.log(initial,"initttt",'city')
        this.activeCity = initial;
        this.cityArray = items;
        this.cityRender();
      })
      .onDistrictChange((initial, items) => {
        // console.log(initial,"initttt",'district')
        this.activeDistrict = initial;
        this.districtArray = items;
        this.districtRender();
        this.selectDomRender();
      })
      .start();

  }
  selectDomRender(){
    let dom=document.querySelector('.addrInput-search .cityZoneSelect')
    dom.innerHTML=`<span>${this.activeCity} / ${this.activeDistrict}</span>`
  }
  areaRender() {
    let vm = this.dom;
    let areaDOM = vm.querySelector(".areaList");
    let str = "";
    for (let i = 0; i < this.areaArray.length; i++) {
      const element = this.areaArray[i];
      str += `<div onclick='areaChange(event)' class='areaItem ${
        this.activeArea === element ? "active" : ""
      }' >${element}</div>`;

    }
    areaDOM.innerHTML = str;
  }
  cityRender() {
    let vm = this.dom;
    let cityDom = vm.querySelector(".cityList");
    let str = "";
    for (let i = 0; i < this.cityArray.length; i++) {
      const element = this.cityArray[i];
      str += `<div onclick='cityChange(event)' class='cityItem ${
        this.activeCity === element ? "active" : ""
      }' >${element}</div>`;
    }
    cityDom.innerHTML = str;
  }
  districtRender() {
    let vm = this.dom;
    let districtDom = vm.querySelector(".district .districtList");
    let firstStr = ``;
    let otherStr = "";
    for (let i = 0; i < this.districtArray.length; i++) {
      const element = this.districtArray[i];
      if (i === 0) {
        firstStr += `<div onclick='districtChange(event)' class='districtItem ${
          this.activeDistrict === element.text ? "active" : ""
        }' >${element.text}</div>`;
      } else {
        otherStr += `<div onclick='districtChange(event)' class='districtItem ${
          this.activeDistrict === element.text ? "active" : ""
        }' >${element.text}</div>`;
      }
    }
    districtDom.innerHTML = `${firstStr}<div class='districtList-container'>${otherStr}</div>`;
  }
}
function areaChange(event) {
  let value=event.target.innerHTML
  new CLASSHANDLER(event.target,'areaList')
  areaManagerControl.areaData.selectArea(value)
}

function cityChange(event) {
  let value=event.target.innerHTML
  new CLASSHANDLER(event.target,'cityList')
  areaManagerControl.areaData.selectCity(value)
  
}
function districtChange(event) {
  let value=event.target.innerHTML
  new CLASSHANDLER(event.target,'districtList')
  areaManagerControl.areaData.selectDistrict(value)
  
  
}