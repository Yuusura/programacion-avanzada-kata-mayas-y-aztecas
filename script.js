//1
class Warrior { //Crear clase
    constructor(life, power) {
        this.life = life
        this.power = power
    }
    attack() {
        return this.power
    }
    defend(damage) {
        this.life -= damage
        console.log(this.life)
    }
}

class Maya extends Warrior { //Crear clase heredada
    constructor(life, power) {
    super(life, power)
    }
    drinkColaCao(){
        this.power += 10
    }
}

class Aztec extends Warrior {
    constructor(life, power) {
    super(life, power)
    }
    drinkNesquik() {
        this.life += 10
    }
}


//2

let aztec = new Aztec(100, 200) //Crear objeto
let maya = new Maya(200, 100)


aztec.drinkNesquik()

maya.drinkColaCao()

aztec.defend(maya.attack())

maya.defend(aztec.attack())



