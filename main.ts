let running = false
let time = 0
let start = 0
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (running) {
        basic.showNumber(time / 1000)
    }
})
input.onButtonPressed(Button.A, function () {
    running = true
    start = input.runningTime()
})
input.onGesture(Gesture.Shake, function () {
    if (running) {
        time = 0
    }
    time = 0
})
input.onButtonPressed(Button.B, function () {
    if (running) {
        time += input.runningTime() - start
    }
    running = false
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (!(running)) {
        basic.showNumber(time / 1000)
    }
})
basic.forever(function () {
    if (running) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
