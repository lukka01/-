const nav =["მთავარი გვერდი" , "ჩვენ შესახებ", "გალერია" , "სერვისები" , "საკონტაქტო"];

const links =  ["index.html", "about.html", "gallery.html", "services.html", "contact.html"];

let navtext= '<ul class="flex">';

for(let i =0; i<nav.length; i++){
     navtext +='<li><a href="'+links[i] + '">'+ nav[i]  + "</a></li>"; 
}
navtext+="</ul>";
console.log(navtext);

document.getElementById("nav").innerHTML= navtext;




