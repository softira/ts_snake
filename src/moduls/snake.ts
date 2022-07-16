// 定义一个蛇类
class Snake {
  snake: HTMLElement
  head: HTMLElement
  bodies: HTMLCollection
  constructor() {
    this.snake = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div')!
    this.bodies = this.snake.getElementsByTagName('div')!
  }
  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }
  set X(val: number) {
    if (this.X === val) {
      return
    }
    if (val < 0 || val > 290) {
      throw new Error('撞墙了')
    }
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === val) {
      if (val > this.X) {
        val = this.X - 10
      } else {
        val = this.X + 10
      }
    }
    this.bodyMove()
    this.head.style.left = val + 'px'
  }
  set Y(val: number) {
    if (this.Y === val) {
      return
    }
    if (val < 0 || val > 290) {
      throw new Error('撞墙了')
    }
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === val) {
      if (val > this.Y) {
        val = this.Y - 10
      } else {
        val = this.Y + 10
      }
    }
    this.bodyMove()
    this.head.style.top = val + 'px'
  }

  // 蛇增加身体
  addBody() {
    // 向element中添加一个div
    this.snake.insertAdjacentHTML("beforeend", "<div></div>");

  }

  bodyMove() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }
}

export default Snake