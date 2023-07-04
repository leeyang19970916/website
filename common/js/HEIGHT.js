class HEIGHT {
  constructor(domName) {
    this.dom = document.querySelector(`#${domName}`);
    this.oldHeight = this.dom.offsetHeight;
    this.height = 0;
    this.width = window.innerWidth;
    this.heightHandler();
    window.addEventListener("resize", () => {
      this.heightHandler();
    });
  }
  heightHandler() {
    this.width = window.innerWidth;
    if (this.width < 996) {
      console.log(this.width, "width");
    //   this.none();
      return;
    }else{
        this.height = window.innerHeight;
        this.addStyle();
        return;
    }
    if (this.oldHeight >= window.innerHeight) {
      console.log("原本的就比他高了 直接超出去 什麼都不用套");
      this.none();
      return;
    } else {
      console.log("原本得太窄了 所以要套 把她撐更高");
      this.height = window.innerHeight;
      this.addStyle();
      return;
    }
  }
  addStyle() {
    console.log(this.height, "height");
    this.dom.style.height = `${this.height}px`;
  }
  none() {
    this.dom.style.height = `auto`;
  }
}
