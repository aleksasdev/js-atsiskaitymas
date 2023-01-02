/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

document.querySelector("#btn__element").addEventListener('click', e=>{
   let count = parseInt(document.querySelector("#btn__state").textContent);
   document.querySelector("#btn__state").textContent = count+=1;
})
