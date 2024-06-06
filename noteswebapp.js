
document.getElementById("new-user").addEventListener("click",adddata);

const userPasswordMap = {};


function signUp(){
    const username = document.getElementById("username");
    const password = document.getElementById("password");
        
    indexCell.textContent = x;
    usernameCell.textContent = username;
    passwordCell.textContent = password;

    if(userPasswordMap[username] == undefined){
        userPasswordMap[username] = password;
    }else if(userPasswordMap[username] !== undefined){
        alert("re-enter the username, this is already taken.");
    }

}

function signIn(){
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const index = newRow.insertCell(y);
    const usernamecell = newRow.insertCell(y+1);
    const passwordcell = newRow.insertCell(y+2);
    
    indexCell.textContent = x;
    usernameCell.textContent = username;
    passwordCell.textContent = password;

    if(userPasswordMap[username] == undefined){
        userPasswordMap[username] = password;
    }else if(userPasswordMap[username] !== undefined){
        alert("re-enter the username, this is already taken.");
    }

}
function Login(){

}