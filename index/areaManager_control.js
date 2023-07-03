class areaManager_control {
  constructor(dom) {
    this.dom=document.querySelector(`${dom}`)
    this.areaData = new AREAMANAGER();
    this.activeArea="",
    this.activeCity="",
    this.activeDistrict="",
    this.areaArray=[],
    this.cityArray=[],
    this.districtArray=[]
    this.init();
    this.areaRender();
    this.cityRender();
    this.districtRender()

  }
  init() {
    // console.log("dasd", this.areaData);
    this.areaData
      .onAreaChange((initial, items) => {
        this.activeArea=initial
        this.areaArray=items
      })
      .onCityChange((initial, items) => {
        this.activeCity=initial
        this.cityArray=items

      })
      .onDistrictChange((initial, items) => {
        this.activeDistrict=initial
        this.districtArray=items
      })
      .start();
      console.log(this,"this")
  }
  areaRender(){
    console.log(this.dom,"dommm")
    let vm=this.dom
    let areaDOM=vm.querySelector('.areaList')
    let str=''
    for (let i = 0; i < this.areaArray.length; i++) {
        const element = this.areaArray[i];
        console.log(element,"ele")
        str+=`<div class='areaItem ${this.activeArea===element ? 'active': ''}' >${element}</div>`
    }
    areaDOM.innerHTML=str
  }
  cityRender(){
    console.log(this.dom,"dommm")
    let vm=this.dom
    let cityDom=vm.querySelector('.cityList')
    let str=''
    for (let i = 0; i < this.cityArray.length; i++) {
        const element = this.cityArray[i];
        console.log(element,"ele")
        str+=`<div class='cityItem ${this.activeCity===element ? 'active': ''}' >${element}</div>`
    }
    cityDom.innerHTML=str
  }
  districtRender(){
    console.log(this.dom,"dommm")
    let vm=this.dom
    let districtDom=vm.querySelector('.districtList')
    let str=''
    let districtDOM_title=`<div class="areaItem  active">區域</div>`
    str+=districtDOM_title
    for (let i = 0; i < this.districtArray.length; i++) {
        const element = this.districtArray[i];
        console.log(element,"ele")
        str+=`<div class='districtItem ${this.activeDistrict.code===element.code ? 'active': ''}' >${element.text}</div>`
    }
    districtDom.innerHTML=str
  }
}
