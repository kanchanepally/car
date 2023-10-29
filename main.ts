input.onButtonPressed(Button.A, function () {
    RingbitCar.turnright()
})
input.onSound(DetectedSound.Loud, function () {
    RingbitCar.brake()
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.turnleft()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    RingbitCar.forward()
})
RingbitCar.init_wheel(AnalogPin.P0, AnalogPin.P1)
RingbitCar.forward()
