//ship class that will take the blueprint to make the USS Assembly and the alien ship.//Create a human ship class that will take atributes form parent class. With these attributes(hull - 20, firepower - 5, accuracy - .7)
class Ship {
    constructor(hull,firepower,accuracy){
        this.vitals = true
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy  
    }  
   
}
class Galactica extends Ship{
    constructor(hull,firepower,accuracy){
        super(hull,firepower,accuracy)
        this.hull = 20
        this.firepower = 5
        this.accuracy = .7
    }
    adAttack(enemy){
        if(this.accuracy > Math.random() && (this.hull > 0)){
            enemy.hull -= this.firepower
            console.log('hit')
            }
            if(enemy.hull <= 0){
                enemy.vitals = false
                console.log('killed')
            }
            else{
                console.log('missed')
        } 
        console.log(`Galactica has ${enemy.hull} life`)   
    }
}


//Create alien ship class that will take atributes form parent class. With these attributes (hull - between 3and 6, firepower - between 2 and 4, accuracy - between .6 and .8)
class Raider extends Ship{
    constructor(hull,firepower,accuracy){
        super(hull,firepower,accuracy)
        this.hull = Math.floor(Math.random() * (6 - 3)) + 3
        this.firepower = Math.floor(Math.random() * (4 - 2)) + 2 
        this.accuracy = Math.random() * (.8 -.6) + .6
    }
    cyAttack(human){
        if(this.accuracy > Math.random()){
            human.hull -= this.firepower
            console.log(`hit for: ${this.firepower} points`)
        }
        if(human.hull <= 0){
            human.vitals = false
            console.log(`killed `)
        }
        else{
            console.log('enemy missed')
        }
        console.log(`Raider has ${human.hull} life`) 
    }  
} 
 

let admiral = new Galactica()
let cylon = new Raider()
// console.log(cylon,admiral)
cylon.cyAttack(admiral)





//instance of each class





//function to start game






// function to check vitals






//function to retreat 