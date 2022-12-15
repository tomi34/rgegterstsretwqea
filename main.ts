function saf () {
    if (0 == zd) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        basic.pause(8000)
        if (0 == zd) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . # . # .
                # # . # #
                `)
        }
        basic.pause(6000)
        if (0 == zd) {
            for (let index = 0; index < 3; index++) {
                if (0 == zd) {
                    basic.clearScreen()
                    basic.pause(500)
                    basic.showLeds(`
                        . . # . .
                        . . # . .
                        . . # . .
                        . # . # .
                        # # . # #
                        `)
                    basic.pause(500)
                }
            }
            saf()
        }
    }
}
input.onButtonPressed(Button.A, function () {
    zd += 1
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . # . # .
        # # . # #
        `)
    basic.pause(6000)
    for (let index = 0; index < 3; index++) {
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # . # .
            # # . # #
            `)
        basic.pause(500)
    }
    zd = 0
    saf()
})
let zd = 0
zd = 0
saf()
