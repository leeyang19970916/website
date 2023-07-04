class CLASSHANDLER {
  constructor(targetDom, fatherClassName) {
    this.targetDom = targetDom;
    this.fatherClassName = fatherClassName;
    (this.fatherDom = ""), (this.dynamicClass = "active");
    this.findAncestorWithClass(this.targetDom, this.fatherClassName);
  }
  changeDynamicClass(newClassName) {
    this.dynamicClass = newClassName;
  }
  findAncestorWithClass(element, className) {
    let ancestor = element.closest(`.${className}`);
    this.fatherDom = ancestor;
    let isActiveDomExist = this.fatherDom.querySelector(".active") || false;
    if (!isActiveDomExist) {
      this.addClass(`${this.dynamicClass}`);
      return;
    }
    this.removeClass(`${this.dynamicClass}`);
    this.addClass(`${this.dynamicClass}`);
  }
  removeClass(className) {
    this.fatherDom
      .querySelector(`.${className}`)
      .classList.remove(`${className}`);
  }
  addClass(className) {
    this.targetDom.classList.add(`${className}`);
  }
}

class singleClassControl{
  constructor (targetDom,className='active'){
    this.targetDom=targetDom,
    this.className=className
    this.judge()
  }
  judge(){
    let isExist=this.targetDom.classList.contains(`${this.className}`)
    if(isExist){
      this.remove()
    }else{
      this.add()
    }
  }
  add(){
    this.targetDom.classList.add(`${this.className}`)
  }
  remove(){
    this.targetDom.classList.remove(`${this.className}`)

  }


}