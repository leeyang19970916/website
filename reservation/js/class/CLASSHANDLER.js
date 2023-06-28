class CLASSHANDLER {
    constructor(targetDom,className){
      this.targetDom=targetDom
      this.className=className
      this.fatherDom='',
      this.dynamicClass='active'
      this.findAncestorWithClass(targetDom,className)
      
    }
    changeDynamicClass(newClassName){
        this.dynamicClass=newClassName
    }
    findAncestorWithClass(element, className) {
        console.log(element,className)
      let ancestor = element.closest(`.${className}`);
      this.fatherDom=ancestor
      this.removeClass(`${ this.dynamicClass}`)
      this.addClass(`${ this.dynamicClass}`)
    }
    removeClass(className){
      this.fatherDom.querySelector(`.${className}`).classList.remove(`${className}`)
    }
    addClass(className){
      this.targetDom.classList.add(`${className}`)
    }
  }