const getValue = document.querySelector("#getValue");
const getClick = document.querySelector("#getClick");
const newUl = document.querySelector("#newUl");
const footLeft = document.querySelector(".footLeft")
const footRight = document.querySelector(".footRight")


getClick.addEventListener("click", addNewTask)



function addNewTask(){
    /* div ve li etiketi yapımı ve bağlanması */

    const newDiv = document.createElement("div");

    newUl.appendChild(newDiv)

    var newli= document.createElement("li");
    newli.textContent = getValue.value

    newDiv.appendChild(newli)

    /* i etiketi yapımı ve bağlanması */

    var check = document.createElement("i");
    var xMark = document.createElement("i");

    check.className = "fa-solid fa-check";
    xMark.className = "fa-solid fa-xmark";
    
    newDiv.appendChild(check)
    newDiv.appendChild(xMark)

    check.onclick = ekle;
    xMark.onclick = sil;

    /* Value yazısını temizle */

    getValue.value = "";


    /* Button İşlemleri */
   
    function sil(){
         newDiv.remove();
    }

    function ekle(){
        footRight.appendChild(newDiv)
        check.remove()
    } 
}



