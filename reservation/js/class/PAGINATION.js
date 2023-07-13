class PAGINATION {
    constructor(totalPage) {
      (this.dom = document.querySelector("#pagination")),
        (this.totalPage = totalPage),
        (this.nowPage = 1),
        this.uiRender();
    }
    prevUI() {
      let disabled=false
      if (this.nowPage===1) {
          disabled=true
      }
      return `<i class="fa-solid fa-chevron-left pagination_arrow prevIcon"></i>`
      // return `<span> <i class="fa-solid fa-chevron-left"></i></span>`
      // return `<li class="prevIcon ${disabled ? 'dis': ''}"  > < </li>`;
    }
    nextUI() {
      let disabled=false
      if (this.nowPage===this.totalPage) {
          disabled=true
      }
      return `<i class="fa-solid fa-chevron-right pagination_arrow nextIcon"></i>`
      return `<li class="nextIcon  ${disabled ? 'dis': ''}" >></li>`;
    }
    pageChange(action) {
      if (action === "prev") {
        if (this.nowPage === 1) {
          // this.prevUI("disabled");
          return;
        }
        this.nowPage--;
        this.uiRender();
      } else {
        if (this.nowPage === this.totalPage) {
          // this.nextUI("disabled");
          return;
        }
        this.nowPage++;
        this.uiRender();
      }
    }
    uiRender() {
      let str = "";
      let prevUI = this.prevUI();
      let nextUI = this.nextUI();
      for (let i = 1; i < this.totalPage + 1; i++) {
        str += `<li class="page__numbers ${
          this.nowPage === i ? "active" : ""
        }">${i}</li> `;
      }
      this.dom.innerHTML = `${prevUI}${str} ${nextUI} `;
  
      // 取得上一頁和下一頁的按鈕元素
      const prevButton = this.dom.querySelector(".prevIcon");
      const nextButton = this.dom.querySelector(".nextIcon");
  
      // 綁定上一頁和下一頁的點擊事件處理函式
      prevButton.addEventListener("click", this.pageChange.bind(this, "prev"));
      nextButton.addEventListener("click", this.pageChange.bind(this, "next"));
    }
  }
  