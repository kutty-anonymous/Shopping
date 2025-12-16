var product = document.getElementById("products")
var search = document.getElementById("product-search")
var productlist = product.querySelectorAll("div")


search.addEventListener("keyup", function () {
    var enterValue = event.target.value.toUpperCase()
    console.log(productlist[0].querySelector("p").textContent)
    for (count = 0; count < productlist.length; count = count + 1) {
        // .textContent)
        var productName = productlist[count].querySelector("p").textContent
        if (productName.toUpperCase().indexOf(enterValue) < 0) {

            productlist[count].style.display = "none"
        } else {
            productlist[count].style.display = "block"
        }
    }

})
var sidenav = document.querySelector(".side-navbar")

function navbarClose() {
    sidenav.style.left = "-60%"
}
function navbarOpen() {
    sidenav.style.left = "0"
}