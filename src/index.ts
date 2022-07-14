// 引入样式
import './style/index.less'

// 定义一个食物类
class Food {
  element: HTMLElement
  constructor(){
    this.element = document.getElementById('food')!
  }
  get x(){
    return this.element.offsetLeft
  }
  get y(){
    return this.element.offsetHeight
  }
  change(){
    let x = Math.round(Math.random()*29)*10
    let y = Math.round(Math.random()*29)*10
    this.element.style.left = x + 'px'
    this.element.style.top = y + 'px'
  }
}
let food = new Food()
food.change()
