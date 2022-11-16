var li = document.querySelectorAll(".gallery ul li");
console.log(li);

li.forEach(function(list){

    list.addEventListener("click",function(){
        // for(var i=0; i<li.length; i++){
        //     li[i].style.flexBasis = "20%";
        // }
        list.style.flex = "1 1 100%";
    });
})
