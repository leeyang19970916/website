class HEADER {
  constructor(dom) {
    this.dom = document.querySelector("header");
    this.list = ["預約掛號", "查詢掛號", "健康報", "商城", "APP下載"];
    this.now_title="預約掛號"
    this.initRender();

  }

  initRender() {
    let navUI = this.navUI();
    let searchInput = this.searchInput();
    let btnLink = this.btnLink();

    let str = `
      <div id='header-container'>
        <div class="header-left">
          <img class='img-logo' src="/common/icon/iCare_Logo.svg">
        </div>
        <div class="header-right">
          <div class="header-nav">
            ${navUI}
          </div>
          <div class='header-link'>
            ${btnLink}
          </div>
        </div>
        <div class='menuIcon'><img src="/common/icon/menu.svg"></div>
      </div>
    `;
    this.dom.innerHTML = str;
    let menuIcon = this.dom.querySelector(".menuIcon");
    menuIcon.addEventListener("click", this.menuHandler.bind(this));
  }

  navUI() {
    let str = "";
    this.list.forEach((item) => {
      str += `<div class="header-nav-item ${item===this.now_title ? 'activing' :""}" onclick="redirectTo('reservation')">${item}</div>`;
    });
    return str;
  }

  searchInput() {
    return `
      <div class="search">
        <input type="text" class="form-control" placeholder="搜尋" aria-label="Dollar amount (with dot and two decimal places)">
        <button class="search-icon">搜</button>
      </div>
    `;
  }

  btnLink() {
    return `
      <button class=" btnLink-item"> <span>追蹤臉書</span>  <img class='img-link' src='/common/icon/facebook.svg' ></button>
      <button class=" btnLink-item"> <span>加入LINE</span> <img class='img-link' src='/common/icon/line.svg' ></button>
    `;
  }
  menuHandler() {
    let menuDom = this.dom.querySelector(".header-right");
    menuDom.classList.toggle("show");
  }
}

export default HEADER;
