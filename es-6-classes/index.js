class Element {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }

  hide() {
    this.$el.style.display = 'none'
  }

  show() {
    this.$el.style.display = 'block'
  }
}

class Box extends Element {
  constructor(options) {
    super(options.selector)
    this.$el.style.width = this.$el.style.height = options.size + 'px'
    this.$el.style.background = options.backgroundColor
  }
}

class Circle extends Box {
  constructor(options) {
    super(options)
    this.$el.style.borderRadius = '50%'
  }
}

let box1 = new Box({
  selector: '#box1',
  size: 100,
  backgroundColor: 'black'
})

let box2 = new Box({
  selector: '#box2',
  size: 120,
  backgroundColor: 'green'
})

let circle1 = new Circle({
  selector: '#circle1',
  size: 120,
  backgroundColor: 'yellow'
})