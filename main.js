menu_list_array = ["chicken tandoori pizza",
                   "veg supreme pizza",
                   "panner tikka pizza",
                   "deluxe veggie pizza",
                   "veg extravanganza pizza ",
];


function getmenu(){
    var htmldata;
    htmldata="<ol=class='menulist'>";
    menu_list_array.sort();
    for (var i = 0;  i<menu_list_array.length; i++) {
        htmldata+="<li>" + menu_list_array[i]+"</li>";            
    }
    htmldata+=
        "</ol>";
        document.getElementById("display_menu").innerHTML=htmldata;
}
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class= 'cards'>";
    for (var i  = 0; i < menu_list_array.length; i++) {
        htmldata+="<div class= 'card'>" + "<img src='pizzaimg.png'/>" +menu_list_array[i] + '</div>';
    }
htmldata+="</section>";
document.getElementById("display_addedmenu").innerHTML=htmldata;

    }
 