class INPUT {
  constructor(dom) {
    this.dom = dom,
      this.value = '',
      // this.iconStyle = "hide",
      this.uiRender();
    this.inputElement = this.dom.querySelector(".keyword");
    this.iconElement = this.dom.querySelector(".cancelIcon");
    this.eventbinding()
  }
  inputUI() {
    return `<input
    type="text "
    placeholder="關鍵字搜尋..."
    class="form-control keyword"
  />`;
  }
  iconUI() {
    return `<i class="fa-solid fa-xmark cancelIcon"></i> `;
  }
  uiRender() {
    // let input
    this.dom.innerHTML = `${this.inputUI()}${this.iconUI()}`;
  }
  eventbinding() {
    this.inputElement.addEventListener("input", () => {
         this.value=event.target.value.trim();
         if (this.value) {
          this.iconElement.classList.add("show")
         }else{
          this.iconElement.classList.remove("show")

         }
      console.log('dfdsgdf',this.value)
    })
    this.iconElement.addEventListener("click", () => {
      this.reset()
    })
  }
  reset(){
    this.value=''
    this.iconElement.classList.remove("show")
    this.inputElement.value=''
    // this.uiRender()
  }
}
