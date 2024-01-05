/*
This function itreate over a string 
and define a new variable to hold the 
new string. the first if statement will
check if it hit an empty string then it will
add it to the new string and the next 
upperCase string, else if it hit 
in the next iteration the same letter
that it become upper then doen't add it
and contui to the next iteration, else 
add the string.
*/

function titleCase(string) {
    let newTitle = string[0].toUpperCase()
    for(let i=1; i< string.length; i++){
       if(string[i] === " "){
         newTitle += string[i] + string[i+1].toUpperCase()
       }
       else if(string[i-1] === " ") {
        continue;

       }else {
        newTitle += string[i]
       }
    }
    return newTitle
}

module.exports = titleCase;

