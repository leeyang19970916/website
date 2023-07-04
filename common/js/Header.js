class HEADER {
    constructor(dom) {
      (this.dom = document.querySelector("header")),
        (this.list = ["預約掛號", "查詢掛號", "健康報", "商城", "APP下載"]),
        this.initRender();
    }
    initRender() {
      let navUI = this.navUI();
      let searchInput = this.searchInput();
      let btnLink = this.btnLink();
  
      let str = `   <div id='header-container'>
       <div class="header-left">
      <div><button class="btn btn-warning">title</button></div>
      <div class="header-nav">
        ${navUI}
      </div>
    </div>
    <div class="header-right">
          ${searchInput}${btnLink}
          
    </div>
    <div class='menuIcon' onclick='headerInstance.menuHandler()'>X</div>
    </div>`;
      this.dom.innerHTML = str;
    }
    navUI() {
      let str = "";
      this.list.forEach((item) => {
        str += `<div class="header-nav-item" onclick="redirectTo('reservation')" >${item}</div>`;
      });
      return str;
    }
    searchInput() {
      return `    <div class="search">
      <input type="text" class="form-control" placeholder="搜尋" aria-label="Dollar amount (with dot and two decimal places)">
  <button class="seacrh-icon">搜</button>
      </div>`;
    }
    btnLink() {
      return `      <button class="btn btnLink ">追蹤臉書</button>
      <button class="btn btnLink  ">加入LINE</button>`;
    }
    menuHandler(params) {
      console.log("gogogog")
    }
  }




  
  export default HEADER
  
