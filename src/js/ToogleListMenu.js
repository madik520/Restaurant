const list1 = document.querySelector("#list-1");
const list2 = document.querySelector("#list-2");
const list3 = document.querySelector("#list-3");
const list4 = document.querySelector("#list-4");

const changeClass = (id) => {
    if(id.className === "close-block"){
        id.classList.remove("close-block");
        id.classList.add("open-block");
    }else if(id.className === "open-block"){
        id.classList.remove("open-block");
        id.classList.add("close-block");
    }
}

list1.addEventListener("click", () => changeClass(list1));
list2.addEventListener("click", () => changeClass(list2));
list3.addEventListener("click", () => changeClass(list3));
list4.addEventListener("click", () => changeClass(list4));

