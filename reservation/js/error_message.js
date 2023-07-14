function error_message(dom) {
    let image=`<img class='icon' src='/reservation/image/icon/notice_icon.svg'>`
    let str=`輸入資料格式或內容錯誤，請重新輸入`
  dom.innerHTML=`${image}${str}`
}
