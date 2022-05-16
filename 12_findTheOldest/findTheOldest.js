const findTheOldest = function(people) {
    let oldestPerson = people[0];
    let oldestAge;
    if(oldestPerson.yearOfDeath == undefined){
        oldestAge = 2022 - people[0].yearOfBirth;
    }
    else{
        oldestAge = people[0].yearOfDeath - people[0].yearOfBirth;
    }
    for(let i = 1; i < people.length; i++){
        isLiving = people[i].yearOfDeath == undefined;
        let age;
        if(isLiving){
            age = 2022 - people[i].yearOfBirth;
        }
        else{
            age = people[i].yearOfDeath - people[i].yearOfBirth
        }
        
        if(age > oldestAge){
            oldestAge = age;
            oldestPerson = people[i];
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
