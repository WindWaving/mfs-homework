window.onload = function () {
    var ph1 = document.getElementById('ph1');
    var ph2 = document.getElementById('ph2');
    var ph3 = document.getElementById('ph3');

    ph1.addEventListener("click", function () {
        alert("点击图片一");
    })
    ph2.addEventListener("click", function () {
        alert("点击图片二");
    })
    ph3.addEventListener("click", function () {
        alert("点击图片三");
    })
}
