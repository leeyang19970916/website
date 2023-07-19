class PAGINATION {
  constructor(totalPage) {
    (this.dom = document.querySelector("#pagination")),
      (this.totalPage = totalPage),
      (this.nowPage = 1),
      this.uiRender();
    // this.eventBinding()
  }
  changePage(page){
    if (page===this.nowPage) {
      return
    }
    this.nowPage=page
    this.uiRender();
  }
  eventBinding() {
    // 取得上一頁和下一頁的按鈕元素
    const prevButton = this.dom.querySelector(".prevIcon");
    const nextButton = this.dom.querySelector(".nextIcon");

    // 綁定上一頁和下一頁的點擊事件處理函式
    prevButton.addEventListener("click", this.pageChange.bind(this, "prev"));
    nextButton.addEventListener("click", this.pageChange.bind(this, "next"));
  }
  prevUI(state) {
    return `<i class="fa-solid fa-chevron-left pagination_arrow prevIcon ${state===1 ?'disabled' : ""}"></i>`;
  }
  nextUI(state) {
    return `<i class="fa-solid fa-chevron-right pagination_arrow nextIcon  ${state==='max' ?'disabled' : ""} "></i>`;
  }
  pageChange(action) {
    if (action === "prev") {
      if (this.nowPage === 1) {
        return;
      } else {
        this.nowPage--;
      }
    } else {
      if (this.nowPage === this.totalPage) {
        return;
      } else {
        this.nowPage++;
      }
    }
    this.uiRender();
  }
  uiRender() {
    let str = "";
    let prevUI=''
    let nextUI=''
    if (this.nowPage===1) {
      prevUI=this.prevUI(1);
    }else{
      prevUI=this.prevUI();
    }

    if (this.nowPage===this.totalPage) {
      nextUI=this.nextUI('max');
    }else{
      nextUI=this.nextUI();
    }
    for (let i = 1; i < this.totalPage + 1; i++) {
      str += `<li onclick="selectPage(${i})" class="page__numbers ${
        this.nowPage === i ? "active" : ""
      }">${i}</li> `;
    }
    this.dom.innerHTML = `${prevUI}${str} ${nextUI} `;
    this.eventBinding();
  }
}
function selectPage(p) {
  page.changePage(p)
}
