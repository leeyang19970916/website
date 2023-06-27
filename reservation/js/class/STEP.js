class STEP{
    constructor(stepState=1){
        this.dom=document.querySelector("#step-container .step"),
        this.data=['預約日期','資料填寫','預約完成']
        this.stepState=stepState
        this.stepUIRender()
    }
    stepUIRender(){
        let str=""
        for (let i = 0; i < this.data.length; i++) {
            const e = this.data[i];
            str+=`<div class="stepItem
            ${this.stepState=== (i+1) ? 'active' : ''}"> 
            <span class="stepItem-num">${i+1}</span> 
            <span class='stepItem-name'>${e}</span>
            </div>`
            
        }
        this.dom.innerHTML=`${str}<div class="line"></div>`
    }
}
