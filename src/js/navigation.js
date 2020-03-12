//navigation items
const item1 = document.getElementById("menu-item-1");
const item2 = document.getElementById("menu-item-2");
const item3 = document.getElementById("menu-item-3");
const item4 = document.getElementById("menu-item-4");
const item5 = document.getElementById("menu-item-5");
const item6 = document.getElementById("menu-item-6");
const item7 = document.getElementById("menu-item-7");

//find blocks
const about = document.getElementById("about");
const delivary = document.getElementById("home-delivary");
const dish = document.getElementById("main-dish");
const stuff = document.getElementById("our-stuff");
const blog = document.getElementById("latest-blog");
const contact = document.getElementById("contact");

function findBlock(elem, option){
   return elem.scrollIntoView({block: option, behavior: "smooth"});
};

//initial search
item1.addEventListener("click", () => findBlock(about, "start"));
item2.addEventListener("click", () => findBlock(delivary, "center"));
item3.addEventListener("click", () => findBlock(dish, "start"));
item4.addEventListener("click", () => findBlock(stuff, "center"));
item5.addEventListener("click", () => findBlock(blog, "center"));
item6.addEventListener("click", () => alert("no shops, its template :)"));
item7.addEventListener("click", () => findBlock(contact, "end"));