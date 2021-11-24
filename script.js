const dropBtn = document.querySelector(".dropMenuBtn");
const droppedMenuCon = document.querySelector(".droppedMenuCon")
dropBtn.addEventListener('click', function(){
    if(droppedMenuCon.style.display == "block"){
         droppedMenuCon.style.display = "none";
    } else {
        droppedMenuCon.style.display = "block"
    }
});