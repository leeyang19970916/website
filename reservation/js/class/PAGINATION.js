class PAGINATION {
    constructor(totalPage) {
      (this.dom = document.querySelector("#pagination")),
        (this.totalPage = totalPage),
        (this.nowPage = 1),
        this.uiRender();
        // this.eventBinding()
    }
    eventBinding(){
      // 取得上一頁和下一頁的按鈕元素
      const prevButton = this.dom.querySelector(".prevIcon");
      const nextButton = this.dom.querySelector(".nextIcon");
  
      // 綁定上一頁和下一頁的點擊事件處理函式
      prevButton.addEventListener("click", this.pageChange.bind(this, "prev"));
      nextButton.addEventListener("click", this.pageChange.bind(this, "next"));
    }
    prevUI(d) {
      // let disabled=false
      if (this.nowPage===1) {
          // disabled=true
          console.log("start")
      }
      console.log(d,"ddd prev")
      return `<i class="fa-solid fa-chevron-left pagination_arrow prevIcon ${d==='disabled' ? 'disabled' :''}"></i>`
    }
    nextUI(d) {
      // let disabled=false
      // if (this.nowPage===this.totalPage) {
      //     disabled=true
      // }
      console.log(d,"ddd next")
      return `<i class="fa-solid fa-chevron-right pagination_arrow nextIcon ${d==='disabled' ? 'disabled' :''}"></i>`
    }
    pageChange(action) {
      if (action === "prev") {
        if (this.nowPage === 1) {

        }else{
          this.nowPage--;
        }
      } else {
        if (this.nowPage === this.totalPage) {
          this.nextUI("disabled");
        }else{
          this.nowPage++;
        }
      }
      this.uiRender();
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
      this.eventBinding()
    }
  }
  