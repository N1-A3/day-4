/*

let names: string[] =["areeba","eisha","nimra","maryam"];
for(let i =1; i<names.length; i++){
    console.log(names[i]);
}
    */

let names: string[] =["areeba","eisha","nimra"];
for ( let name of names){
    console.log('hello ${name},would you like to learn some typescript today?');
}