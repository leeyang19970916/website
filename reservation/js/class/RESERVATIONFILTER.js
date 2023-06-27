class RESERVATIONFILTER{
    constructor(){
        this.keyword="",
        this.zone="",
        this.city="臺北市",
        this.district=[]
        this.department=[]
        this.condition=[]
        this.manager=new AREAMANAGER()
        // this.initUIRender()
        // initCityUIRender(this)
    }
    onKeyword(value){
        this.keyword=value
        return this
    }
    onCityChange(value){
        this.city=value
        this.district=[]
        // this.department=[]
        // console.log(this.manager,"mamamasm")
        // districtUIRender()
        return this
    }
    onDistrictChange(value,params){
        const existingDistrict = this[params].find(district => district.id === value.id);

        if (existingDistrict) {
          const index = this[params].indexOf(existingDistrict);
          this[params].splice(index, 1);
        } else {
          this[params].push(value);
        }
        this.activeControl("many",params)
        return this

    }
    onDepartmentChange(value,params){
        const existingDistrict = this[params].find(district => district.id === value.id);

        if (existingDistrict) {
          const index = this[params].indexOf(existingDistrict);
          this[params].splice(index, 1);
        } else {
          this[params].push(value);
        }
        this.activeControl("many",params)
        return this
    }
    onConditionChange(value,params){
        const existingDistrict = this[params].find(district => district.id === value.id);

        if (existingDistrict) {
          const index = this[params].indexOf(existingDistrict);
          this[params].splice(index, 1);
        } else {
          this[params].push(value);
        }
        this.activeControl("many",params)
        return this
    }
    activeControl(type,target){
        let e=event.target
        let targetState=this[target]
        if (type==="many") {
            let dom=document.querySelector(`#${target}`)
            let unlimitedDom=dom.querySelector(".unlimited_btn")
            if (!targetState.length) {
                unlimitedDom.classList.add("active")
            }else{
                unlimitedDom.classList.remove("active")
            }
            if (e.classList.contains("active")) {
                e.classList.remove("active")
            }else{
                e.classList.add("active")
            }
          }else{


          }
    }
    onReset(target){
        this[target]=[]
        let dom=document.querySelector(`#${target}`)
        let unlimitedDom=dom.querySelector(".unlimited_btn")

        unlimitedDom.classList.add("active")
        let listDOM=dom.querySelectorAll(".listItem.active")
        listDOM.forEach(item=> item.classList.remove("active"))
    }
}

// const districtUIRender=()=>{
//     items = items.slice(1);
//     console.log(items, "itemsss");
//     let districtDom = document.querySelector("#district-container");

//     return
// }
// const initCityUIRender = (e) => {
//     let {manager}=e

//     let dom = document.querySelector(".cardItem-container.city-container");
//     let str = "";
//     const entries = Object.entries(manager.data);
//     for (let i = 0; i < entries.length; i++) {
//       const zone = entries[i];
//       const city = Object.keys(zone[1]);
//       str += ` <div class="list-singleLine">
//                 <div class="listItem listItem-zone">${zone[0]}</div>
//                  ${city
//                    .map(
//                      (item, index) =>
//                        `<div data-id="${item}" onclick="cityChange('${ zone[0]}','${item}')" 
//                        class=" listItem listItem-city ${e.city===item && 'active'}">${item}</div>`
//                    ).join("")}
//                 </div>`;
//     }
//     dom.innerHTML = str;
//   };

//   function cityChange(zone,city){
//     dataOBJ.city=city
//     console.log("eqwerfqerq")
//     reservationFilter.onCityChange(city)
//   }