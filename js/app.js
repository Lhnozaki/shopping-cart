//console.log('Hello World');

shoppingCart.src = '/images/cart.svg';

title.innerHTML = 'Shopping Cart';

let arr = [
    {product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", 
    price: 1.11}, 
    {product: "Barry Manilow's Greatest Hits Collection Vol 1", 
    description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", 
    price: 39.57}, 
    {product: "Ramen Oreos", 
    description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", 
    price: 8.88}, 
    {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , 
    price: 9.29}, 
    {product: "Sauna Pants", 
    description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", 
    price: 2.33}, 
    {product: "Hug Me Pillow", 
    description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", 
    price: 599.99}
];

let item = document.getElementsByClassName('product');

let details = document.getElementsByClassName('about');

let money = document.getElementsByClassName('price');

for (i=0;i<item.length;i++){
    item[i].innerHTML = arr[i].product;
    details[i].innerHTML = arr[i].description;
    money[i].innerHTML = "$" + arr[i].price;
    item[i].addEventListener('click', showMe)
}

function showMe (){
    var info = this.querySelectorAll('.about')[0];
    if (info.style.display === 'block'){
        console.log('ok!');
    }
}

// let one = document.getElementById('itemOne');
// one.addEventListener('click', showMeOne)
// function showMeOne(){
//     var data = this.querySelectorAll('.about')[0];
//     if(data.style.display === 'none'){
//         data.style.display = 'block';
//     }else{
//         data.style.display = 'none';
//     }
// }

// let two = document.getElementById('itemTwo');
// two.addEventListener('click', showMeTwo)
// function showMeTwo(){
//     var data = this.querySelectorAll('.about')[0];
//     if(data.style.display === 'none'){
//         data.style.display = 'block';
//     }else{
//         data.style.display = 'none';
//     }
// }

// let three = document.getElementById('itemThree');
// three.addEventListener('click', showMeThree)
// function showMeThree(){
//     var data = this.querySelectorAll('.about')[0];
//     if(data.style.display === 'none'){
//         data.style.display = 'block';
//     }else{
//         data.style.display = 'none';
//     }
// }

// let four = document.getElementById('itemFour');
// four.addEventListener('click', showMeFour)
// function showMeFour(){
//     var data = this.querySelectorAll('.about')[0];
//     if(data.style.display === 'none'){
//         data.style.display = 'block';
//     }else{
//         data.style.display = 'none';
//     }
// }

// let five = document.getElementById('itemFive');
// five.addEventListener('click', showMeFive)
// function showMeFive(){
//     var data = this.querySelectorAll('.about')[0];
//     if(data.style.display === 'none'){
//         data.style.display = 'block';
//     }else{
//         data.style.display = 'none';
//     }
// }

// let six = document.getElementById('itemSix');
// six.addEventListener('click', showMeSix)
// function showMeSix(){
//     var data = this.querySelectorAll('.about')[0];
//     if(data.style.display === 'none'){
//         data.style.display = 'block';
//     }else{
//         data.style.display = 'none';
//     }
// }