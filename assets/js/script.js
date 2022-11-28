var li = document.querySelectorAll(".gallery ul li");
var span = document.querySelectorAll("span");
console.log(span);

li.forEach(function (list,index) {
    list.addEventListener("click", function () {
        for (var i = 0; i < li.length; i++) {
            li[i].style.flexBasis = "20%";
            span[i].classList.remove('show');
        }
        list.style.flex = "1 1 100%"; 
        span[index].classList.add('show');
    });
})
