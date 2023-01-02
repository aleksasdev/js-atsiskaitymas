/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
import UserCard from "./UserCard.js";


const ENDPOINT = 'https://api.github.com/users';
const OUTPUT_CONTAINER = document.querySelector("#output");

let displayUsers = async()=>{
   let data = await fetch(ENDPOINT)
      .then(res=>res.json())
      .then(data=>data);

   data.forEach(entry=>{
      new UserCard({username: entry.login, avatarUrl: entry.avatar_url}).render();
   })
}

document.querySelector('#btn').addEventListener('click', e=>{
   if(e.target.textContent === "Show Users"){
      e.target.textContent = "Hide";
      document.querySelector("#message").style.display = "none";
      displayUsers();
      return true;
   }

   e.target.textContent = "Show Users";
   let info = document.querySelector("#message");
   info.style.display = "block";
   while(OUTPUT_CONTAINER.firstChild){
      OUTPUT_CONTAINER.removeChild(OUTPUT_CONTAINER.firstChild)
   };
   OUTPUT_CONTAINER.append(info);
})