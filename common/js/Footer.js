function Footer(params) {
    let dom=document.querySelector("footer")
    let str=`        <div class="list">
    <div class="footer-item">臉書粉絲團</div>
    <div class="footer-item">關於愛管家</div>
    <div class="footer-item">服務條款</div>
    <div class="footer-item">隱私權政策</div>
    <div class="footer-item">聯絡客服</div>
  </div>
  <div class="copyright">
    Copyright © 2023 Sprinf iCare Corporation. All rights reserved.
  </div>`
  dom.innerHTML=str
}

export default Footer