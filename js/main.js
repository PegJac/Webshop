 feature/produktsida
class Product {
    constructor(id, image, name, height, price, inCart) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.height = height;
        this.price = price;
        this.inCart = inCart;
    }
}



$(function() {
    
//    var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
//img.attr('src', responseObject.imgurl);
//img.appendTo('#imagediv');



    let p1 = new Product("elise", '../images/gran2.png', "Elise", "Toppengran verkligen", 500, 1);
    let p2 = new Product("kristoffer", '../images/gran6.png', "Kristoffer", "Toppengran verkligen", 150, 1);
    let p3 = new Product("ivan", '../images/gran3.png', "Ivan", "Toppengran verkligen", 650, 1);
    let p4 = new Product("lydia", '../images/gran5.png', "Lydia", "Toppengran verkligen", 350, 1);
    let p5 = new Product("vera", '../images/gran1.jpg', "Vera", "Toppengran verkligen", 200, 1);
    let p6 = new Product("jan", '../images/gran4.png', "Jan", "Toppengran verkligen", 800, 1);

    let products = [p1, p2, p3, p4, p5, p6];

    $.each(products, (i, product) => {
    console.log(product);

    let container = $("#productlist");
    let listitem = $("<li>")

    
   $("<img>").addClass("image").attr('src', product.image).appendTo(listitem);
   $("<p>").html(product.price + "kr").addClass("price").appendTo(listitem);
    $("<p>").html(product.name).addClass("name").appendTo(listitem);
    $("<div>").addClass("fas fa-shopping-cart").appendTo(listitem);


    listitem.appendTo(container);
    container.appendTo($(".main"));


})
})

$(function() {
    $(".toggle").on("click",openMobileNavbar);
});

/*Aktiverar klassen active i css som gör att navbar visas vertikalt i mobilt läge*/ 
function openMobileNavbar(){
    if ($(".item").hasClass("active")) {
        $(".item").removeClass("active");
    } 
    else {
        $(".item").addClass("active");
    }
}
 develop
