//Header

let head = document.createElement('header');
head.id = "top";
document.body.appendChild(head);

let orange = document.createElement('div');
orange.id = 'cart';
head.appendChild(orange);

let picOne = document.createElement('img');
picOne.id = 'shoppingCart';
orange.appendChild(picOne);
shoppingCart.src = '/images/cart.svg';

let logo = document.createElement('hi');
logo.id = 'title';
orange.appendChild(logo);
title.innerHTML = 'Shopping Cart';

//Body

//First Div

let divOne = document.createElement('div');
divOne.id = 'itemOne';
divOne.className = 'section';
document.body.appendChild(divOne);

let imgOne = document.createElement('img');
imgOne.id = 'finger';
imgOne.src = "https://static1.squarespace.com/static/54582f47e4b0c5d4c475079f/54586480e4b0c42e0d7b5e20/5705af75b09f954854631db9/1459990391148/toothbrush-silicone-finger.jpg?format=500w"
divOne.appendChild(imgOne);

let merchOne = document.createElement('div');
merchOne.className = 'mono';
divOne.appendChild(merchOne);

let ikuraOne = document.createElement('h2');
ikuraOne.className = 'price';
divOne.appendChild(ikuraOne);

let nani1 = document.createElement('p');
nani1.className = 'about';
nani1.id = 'oshiete';
divOne.appendChild(nani1);

// Second Div

let divTwo = document.createElement('div');
divTwo.id = 'itemTwo';
divTwo.className = 'section';
document.body.appendChild(divTwo);

let imgTwo = document.createElement('img');
imgTwo.id = 'manilow';
imgTwo.src = "https://images-na.ssl-images-amazon.com/images/I/81VSayP6lDL._SX355_.jpg"
divTwo.appendChild(imgTwo);

let merchTwo = document.createElement('div');
merchTwo.className = 'mono';
divTwo.appendChild(merchTwo);

let ikuraTwo = document.createElement('h2');
ikuraTwo.className = 'price';
divTwo.appendChild(ikuraTwo);

let nani2 = document.createElement('p');
nani2.className = 'about';
nani2.id = 'oshiete';
divTwo.appendChild(nani2);

// third Div

let divThree = document.createElement('div');
divThree.id = 'itemThree';
divThree.className = 'section';
document.body.appendChild(divThree);

let imgThree = document.createElement('img');
imgThree.id = 'ramen';
imgThree.src = "https://i.pinimg.com/originals/fc/6d/3a/fc6d3aa3bbd803b99fe17deba0d3f273.jpg"
divThree.appendChild(imgThree);

let merchThree = document.createElement('div');
merchThree.className = 'mono';
divThree.appendChild(merchThree);

let ikuraThree = document.createElement('h2');
ikuraThree.className = 'price';
divThree.appendChild(ikuraThree);

let nani3 = document.createElement('p');
nani3.className = 'about';
nani3.id = 'oshiete';
divThree.appendChild(nani3);

// Fourth Div

let divFour = document.createElement('div');
divFour.id = 'itemFour';
divFour.className = 'section';
document.body.appendChild(divFour);

let imgFour = document.createElement('img');
imgFour.id = 'woof';
imgFour.src = "http://pedget.com/includes/content/upload/woof-washer-hoop-dog-shower-7914.jpg";
divFour.appendChild(imgFour);

let merchFour = document.createElement('div');
merchFour.className = 'mono';
divFour.appendChild(merchFour);

let ikuraFour = document.createElement('h2');
ikuraFour.className = 'price';
divFour.appendChild(ikuraFour);

let nani4 = document.createElement('p');
nani4.className = 'about';
nani4.id = 'oshiete';
divFour.appendChild(nani4);

// Fifth Div

let divFive = document.createElement('div');
divFive.id = 'itemFive';
divFive.className = 'section';
document.body.appendChild(divFive);

let imgFive = document.createElement('img');
imgFive.id = 'sauna';
imgFive.src = "http://www.shoptv.com/img/product/resized/000/305/927/catl/00305927-183140_1500.jpg?k=4c9f414b&pid=305927&s=catl&sn=shoptv";
divFive.appendChild(imgFive);

let merchFive = document.createElement('div');
merchFive.className = 'mono';
divFive.appendChild(merchFive);

let ikuraFive = document.createElement('h2');
ikuraFive.className = 'price';
divFive.appendChild(ikuraFive);

let nani5 = document.createElement('p');
nani5.className = 'about';
nani5.id = 'oshiete';
divFive.appendChild(nani5);

// Sixth Div

let divSix = document.createElement('div');
divSix.id = 'itemSix';
divSix.className = 'section';
document.body.appendChild(divSix);

let imgSix = document.createElement('img');
imgSix.id = 'hug';
imgSix.src = "https://cf1.s3.souqcdn.com/item/2014/03/18/67/44/17/7/item_XL_6744177_4372398.jpg";
divSix.appendChild(imgSix);

let merchSix = document.createElement('div');
merchSix.className = 'mono';
divSix.appendChild(merchSix);

let ikuraSix = document.createElement('h2');
ikuraSix.className = 'price';
divSix.appendChild(ikuraSix);

let nani6 = document.createElement('p');
nani6.className = 'about';
nani6.id = 'oshiete';
divSix.appendChild(nani6);

//subtotal

let divSeven = document.createElement('div');
divSeven.id = "subtotal";
divSeven.innerHTML = "Subtotal:";
document.body.appendChild(divSeven);


// Data

let arr = [
    {product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", 
    price: 1.11}, 
    {product: "Barry Manilow's Greatest Hits Collection Vol 1", 
    description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", 
    price: 39.57}, 
    {product: "Ramen Oreos", 
    description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors </br> of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", 
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

let item = document.getElementsByClassName('mono');

let details = document.getElementsByClassName('about');

let money = document.getElementsByClassName('price');

for (i=0;i<arr.length;i++){
    item[i].innerHTML = arr[i].product;
    details[i].innerHTML = arr[i].description;
    money[i].innerHTML = "$" + arr[i].price;
}

let one = document.getElementsByClassName('section');

for(j=0;j<arr.length;j++){
    one[j].addEventListener('click', showMeOne)
}

function showMeOne (){
    var data = this.querySelectorAll('.about')[0];
        if(data.style.color === 'white'){
            data.style.color = 'lightgray';
        }else{
            data.style.color = 'white';
        }
    }

