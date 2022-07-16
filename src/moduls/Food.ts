// 定义一个食物类
class Food {
  element: HTMLElement
  constructor(){
    this.element = document.getElementById('food')!
  }
  // 获取事物位置
  get x(){
    return this.element.offsetLeft
  }
  get y(){
    return this.element.offsetTop
  }
  // 改变事物位置
  change(){
    let x = Math.round(Math.random()*29)*10
    let y = Math.round(Math.random()*29)*10
    this.element.style.left = x + 'px'
    this.element.style.top = y + 'px'
  }
}

export default Food