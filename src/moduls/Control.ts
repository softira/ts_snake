//
import Food from './Food'
import Scorecard from './Scorecard'
import Snake from './snake'

class Control {
  food: Food
  scorecard: Scorecard
  snake: Snake
  direction = ''
  isLive = true
  constructor() {
    this.food = new Food()
    this.scorecard = new Scorecard()
    this.snake = new Snake()
    this.init()
  }
  // 初始化
  init() {
    // 绑定键盘按下的事件
    document.addEventListener('keydown', this.keydownHandle.bind(this))
    this.mobile()
  }
  // 创建一个键盘按下的响应函数
  keydownHandle(event: KeyboardEvent) {
    this.direction = event.key
  }
  // 创建一个蛇移动的方法
  mobile() {
    let X = this.snake.X
    let Y = this.snake.Y
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
    }

    this.checkEat(X, Y)

    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (e) {
      alert(e + 'GAME OVER')
      this.isLive = false
    }

    this.isLive && setTimeout(this.mobile.bind(this), 300 - this.scorecard.level * 28)
  }

  // 判断蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if (X === this.food.x && Y === this.food.y) {
      this.food.change()
      this.scorecard.scoreIncrease()
      this.snake.addBody()
    }
  }
}

export default Control