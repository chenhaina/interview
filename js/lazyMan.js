
/**
 * 实现一个LazyMan，可以按照以下方式调用:
LazyMan("Hank")输出:
Hi! This is Hank!
 
LazyMan("Hank").sleep(10).eat("dinner")输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~
 
LazyMan("Hank").eat("dinner").eat("supper")输出
Hi This is Hank!
Eat dinner~
Eat supper~
 
LazyMan("Hank").sleepFirst(5).eat("supper")输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper
 */



class LazyManFunc {
  constructor (manName) {
    let self = this
    this.manName = manName
    this.eventList = []

    this.surprisedAppear()
    setTimeout(() => {
      this._publish()
    }, 0)
    return this
  }

  static LazyMan (manName) {
    return new LazyManFunc(manName)
  }

  async _publish () {
    for (let i = 0; i < this.eventList.length; i++) {
      let event = this.eventList[i]
      await event.exec()
    }
    return this
  }

  _sleep (timeout) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, timeout)
    })
  }

  surprisedAppear () {
    this.eventList.push({
      exec: () => {
        return new Promise((resolve) => {
          console.log('Hi! This is !', this.manName)
          resolve()
        })
      },
      eventName: 'appear'
    })
    return this
  }

  sleep (timeout) {
    this.eventList.push({
      exec: () => {
        return this._sleep(timeout * 1000)
          .then(() => {
            console.log('Wake up after ', timeout)
          })
      },
      eventName: 'sleep'
    })
    return this
  }

  sleepFirst (timeout) {
    this.eventList.unshift({
      exec: () => {
        return this._sleep(timeout * 1000)
          .then(() => {
            console.log('Wake up after ', timeout)
          })
      },
      eventName: 'sleepFirst'
    })
    return this
  }

  eat (meal) {
    this.eventList.push({
      exec: () => {
        return new Promise((resolve) => {
          console.log('Eat ', meal)
          resolve()
        })
      },
      eventName: 'eat'
    })
    return this
  }
}

const LazyMan = LazyManFunc.LazyMan

LazyMan('Owen')
  .eat('lunch')
  .sleepFirst(2)
  .sleep(1)
  .eat('dinner')