const buyClay = () => {
    const clayObject= {    }
    //Reminder: When a function returns a value, you should store that 
    //value in a variable
    return clayObject
}

let pot = buyClay()

// console.log(pot)

// Define a function named makePottery. You need to give it the empty 
//object that buyClay produced, so it needs a single parameter to 
//capture that value and use it.
// The function should perform the task of adding a new property 
//named shape, and its value should be "Bowl". The function should 
//then return the object after the new property was added.

const makePottery = (clayObject) => {
    clayObject.shape = "Bowl"

    return clayObject
}

pot = makePottery(pot)

// console.log(pot)

const bisqueFire = (anyName) => {
    anyName.readyForGlazing = true

    return anyName
}

pot = bisqueFire(pot)
console.log(pot)

const glazePottery = (justAnotherPropertyParamater) => {
    //I'm confused as to which name to use here, justAnotherPropertyParamater
    //or justAnotherPropertyParamater... or pot?
    if (justAnotherPropertyParamater.readyForGlazing === true) {
        //This is where I need help from instructor or classmates
        //
       justAnotherPropertyParamater.glazing = "Midnight Blue"

       return justAnotherPropertyParamater
    } else {
       console.log("Make sure you bisque fire the pottery before you glaze it.")
    }
}

pot = glazePottery(pot)

// console.log(pot)

const finalFiring = (objectCatcherOfclayObject, kilnTemperature) => {
    if (kilnTemperature > 1200) {
    objectCatcherOfclayObject.cracked = true
    } else {
    objectCatcherOfclayObject.cracked = false
    }
    return objectCatcherOfclayObject
}



let firedPot = finalFiring(pot , 1100 )

console.log(firedPot)