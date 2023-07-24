class PAGINATION {
  constructor(totalPage) {
    (this.dom = document.querySelector("#pagination")),
      (this.totalPage = totalPage),
      (this.nowPage = 1),
      this.showsize = 5
    this.uiRender();
    // this.eventBinding()
  }
  changePage(page) {
    if (page === this.nowPage) {
      return
    }
    this.nowPage = page
    this.uiRender();
  }
  eventBinding() {
    // 取得上一頁和下一頁的按鈕元素
    const prevButton = this.dom.querySelector(".prevIcon");
    const nextButton = this.dom.querySelector(".nextIcon");
    const anglesPrevButton = this.dom.querySelector(".fa-angles-left");
    const anglesNextButton = this.dom.querySelector(".fa-angles-right");

    // 綁定上一頁和下一頁的點擊事件處理函式
    prevButton.addEventListener("click", this.pageChange.bind(this, "prev"));
    nextButton.addEventListener("click", this.pageChange.bind(this, "next"));
    anglesPrevButton.addEventListener("click", this.pageChange.bind(this, "anglesPrev"));
    anglesNextButton.addEventListener("click", this.pageChange.bind(this, "anglesNext"));

  }
  prevUI(state) {
    return `<i class="fa-solid fa-chevron-left pagination_arrow prevIcon ${state === 1 ? 'disabled' : ""}"></i>`;
  }
  nextUI(state) {
    return `<i class="fa-solid fa-chevron-right pagination_arrow nextIcon  ${state === 'max' ? 'disabled' : ""} "></i>`;
  }

  angle_prevUI(state) {
    return ` <i class="fa-solid fa-angles-left pagination_arrow   ${state === 1 ? 'd-none' : ""}"></i>`
  }
  angle_nextUI(state) {
    return `<i class="fa-solid fa-angles-right pagination_arrow   ${state === 'max' ? 'd-none' : ""}"></i>`
  }
  pageChange(action) {
    if (action === 'anglesPrev') {
      this.nowPage = 1
    }
    if (action === 'anglesNext') {
      this.nowPage = this.totalPage
    }
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
  pageUIRender() {
    let pageUI = ''
    if (this.nowPage===1) {
      
    }
    for (let i = 1; i < this.totalPage+1; i++) {
      pageUI += `<li onclick="selectPage(${i})" class="page__numbers ${this.nowPage === i ? "active" : ""
        }">${i}</li> `;
    }
    return pageUI
  }
  uiRender() {
    let str = "";
    let prevUI = ''
    let nextUI = ''
    let angle_prevUI = ""
    let angle_nextUI = ""
    if (this.nowPage === 1) {
      prevUI = this.prevUI(1);
      angle_prevUI = this.angle_prevUI(1)
    } else {
      prevUI = this.prevUI();
      angle_prevUI = this.angle_prevUI()
    }

    if (this.nowPage === this.totalPage) {
      nextUI = this.nextUI('max');
      angle_nextUI = this.angle_nextUI('max')
    } else {
      nextUI = this.nextUI();
      angle_nextUI = this.angle_nextUI()

    }

    str = this.pageUIRender()

    this.dom.innerHTML = `${angle_prevUI}${prevUI}${str} ${nextUI}${angle_nextUI} `;
    this.eventBinding();
  }
}
function selectPage(p) {
  page.changePage(p)
}
