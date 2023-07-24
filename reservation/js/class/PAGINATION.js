class PAGINATION {
  constructor(totalPage) {
    (this.dom = document.querySelector("#pagination")),
      (this.totalPage = totalPage),
      (this.nowPage = 1),
      this.showsize = 5
    this.uiRender();
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
    return ` <i class="fa-solid fa-angles-left pagination_arrow   ${state === 1 ? 'v-hidden' : ""}"></i>`
  }
  angle_nextUI(state) {
    return `<i class="fa-solid fa-angles-right pagination_arrow   ${state === 'max' ? 'v-hidden' : ""}"></i>`
  }
  pageChange(action) {
    console.log("action", action)
    if (action === 'anglesPrev') {
      this.nowPage = 1
      this.uiRender();
      return
    }
    if (action === 'anglesNext') {
      this.nowPage = this.totalPage
      this.uiRender();
      return
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
    let pageUI = '';

    // 計算目前要顯示的頁數範圍
    let startPage = Math.max(1, this.nowPage - 2);
    let endPage = Math.min(this.totalPage, startPage + this.showsize - 1);
    // 若目前頁數在末尾，將頁數範圍往左偏移一頁
    if (endPage === this.totalPage) {
      startPage = endPage - this.showsize + 1
    }
    for (let i = startPage; i <= endPage; i++) {
      pageUI += `<li onclick="selectPage(${i})" class="page__numbers ${this.nowPage === i ? "active" : ""
        }">${i}</li> `;
    }
    return pageUI;
  }

  uiRender() {
    let str = "";
    let prevUI = '';
    let nextUI = '';
    let angle_prevUI = "";
    let angle_nextUI = "";

    // 若目前頁數在起始，將頁數範圍往右偏移一頁
    if (this.nowPage === 1) {
      prevUI = this.prevUI(1);
      angle_prevUI = this.angle_prevUI(1);
    } else {
      prevUI = this.prevUI();
      angle_prevUI = this.angle_prevUI();
    }

    // 若目前頁數在末尾，將頁數範圍往左偏移一頁
    if (this.nowPage === this.totalPage) {
      nextUI = this.nextUI('max');
      angle_nextUI = this.angle_nextUI('max');
    } else {
      nextUI = this.nextUI();
      angle_nextUI = this.angle_nextUI();
    }

    str = this.pageUIRender();

    this.dom.innerHTML = `${angle_prevUI}${prevUI}${str} ${nextUI}${angle_nextUI} `;
    this.eventBinding();
  }
}
function selectPage(p) {
  page.changePage(p)
}
