//ship class that will take the blueprint to make the USS Assembly and the alien ship.//Create a human ship class that will take atributes form parent class. With these attributes(hull - 20, firepower - 5, accuracy - .7)
class Ship {
    constructor(hull,firepower,accuracy,name){
        this.vitals = true
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy  
        this.name = name
    }  
   
}
class Galactica extends Ship{
    constructor(hull,firepower,accuracy){
        super(hull,firepower,accuracy)
        this.hull = 20
        this.firepower = 5
        this.accuracy = .7
    }
    attack(){
        if(this.accuracy > Math.random() && (this.hull > 0)){
            cylonAttacker.hull -= this.firepower
            alert(`Galactica ${this.firepower} point hit`)
            }
            if(cylonAttacker.hull <= 0){
                cylonAttacker.vitals = false
                enemyFarm.pop()
                cylonAttacker = enemyFarm.pop()
                alert('killed')
                console.log(enemyFarm.length)
            }
            
            else{
                alert('enemy missed')
        } 
        
        alert(`Colony has ${enemyFarm.length} ships left.`)   
    }

}


//Create alien ship class that will take atributes form parent class. With these attributes (hull - between 3and 6, firepower - between 2 and 4, accuracy - between .6 and .8)
class Colony extends Ship{
    constructor(hull,firepower,accuracy){
        super(hull,firepower,accuracy)
        this.hull = Math.floor(Math.random() * (6 - 3)) + 3
        this.firepower = Math.floor(Math.random() * (4 - 2)) + 2 
        this.accuracy = Math.random() * (.8 -.6) + .6
    }
    attack(){
        if(this.accuracy > Math.random()){
            admiral.hull -= this.firepower
            alert(`Colony ${this.firepower} point hit`)
        }
        if(admiral.hull <= 0){
            admiral.vitals = false
            alert(`killed `)
        }
        else{
            alert('enemy missed')
        }
        alert(`Galactica has ${admiral.hull} life`) 
    }  
} 
 

const admiral = new Galactica()
const cylon = new Colony()




let cylonArmy = ['Raider','Heavy Raider','Basestar','Freighter','Resurrection Ship','Resurrection Hub']

let enemyFarm = []

const createShips = () =>{
   enemyFarm.push(new Ship(Math.floor(Math.random(6 - 3)+ 3), Math.floor(Math.random(2 - 4)+ 2), Math.random((.6 - .8)+ .6), cylonArmy[Math.floor(Math.random()* 6)]))
}

for(cy of cylonArmy){
    createShips(cy)
}

let cylonAttacker = enemyFarm.pop()
// console.log(enemyFarm)

const starter = () =>{
    alert('Welcome Battlestar Galactica')
    const response = prompt(`Enter 'p' to play or 'q' to exit.`)
    if(response.toLowerCase() === 'q'){
        alert(`Bye bye!`)
    }
    else if(response.toLowerCase() === 'p'){
        alert(`When an old enemy, the Cylons, resurface and obliterate the 12 colonies, the crew of the aged Galactica protect a small civilian fleet - the last of humanity - as they journey toward the fabled 13th colony, Earth.`)
    }
    else(`Huh, Try agian!`)
}
starter()

const vitalStatus = () => {
    alert(`Galactica ---> Hull: ${admiral.hull} | Firepower: ${admiral.firepower} | Accuracy: ${admiral.accuracy*100}%\n\nCylon Colony ${cylonAttacker.name} ---> Hull: ${cylon.hull} | Firepower: ${cylon.firepower} | Accuracy: ${cylon.accuracy*100}%`)
}

console.log(enemyFarm)
const preGame = () =>{
    vitalStatus()
    while(enemyFarm.length > 0){
        // if(cylon.hull < 0){
        //     enemyFarm.pop()
        //     alert(`Destroyed ${cylonAttacker}`)
        //     cylonAttacker = enemyFarm.pop
        //     return
        //     }
        // }
        if(admiral.hull > 0){
        admiral.attack()
            if(cylonAttacker.vitals === false){
                if(enemyFarm.length < 0){
                alert(`YOU BEAT ALL THE CYLONS!!`)
                return}
        }
        cylon.attack()
        if(admiral.vitals === false){
            alert(`YOU LOST!!`)
            return
        }
    }
}
}
preGame()


console.log(cylon,admiral)











//instance of each class





//function to start game






// function to check vitals






//function to retreat