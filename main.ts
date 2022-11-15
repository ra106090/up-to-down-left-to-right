let light2 = 0
basic.forever(function () {
    for (let y_light = 0; y_light <= 4; y_light++) {
        for (let light3 = 0; light3 <= 4; light3++) {
            led.plot(light3, y_light)
            led.unplot(light3 - 1, y_light)
            basic.pause(100)
        }
        light2 = 0
        led.unplot(4, y_light)
    }
})
