console.log('start');

var sphere = {
    id: 5,
    name: 'This is sphere', // string
    radius: 34, // number
    isAlive: true, // boolean
    sphereChild: { //obj
        manyChildren: new Array("true", 1, 5), // array
    },
    gender: null, // nullable
    color: "red",
    size: 11
};

var planet = {
    id: 4,
    name: 'planet',
    paws: {
        name_of_planet: 'Mercury',
        distance_from_the_Sun: 57.9,
        obliquity: 7.005,
        period_around_its_axis: 58.6
    },
    presence_of_satellite: false,
    color: "green",
    size: 200
};

var ship = {
    id: 3,
    name: 'ship',
    sails: {
        count: 2,
        color: 'black'
    },
    equipment: {
        firearms: ["missles", "guns", "muskets"],
        armors: 'light'
    },
    color: "white",
    size: 33
};


var ananas = {
    id: 2,
    name: 'pineapple',
    color: {
        colorHead: 'green'
    },
    color2: {
        colorBody: 'yellow'
    },
    properties: {
        skin: 'inedible',
        insides: 'edible'
    },
    materials: {
        aroundTheBody: 'skin',
        head1: 'leaves',
        heaobjd2: 'inedible'
    },
    edible: true,
    fruit: true,
    vegetable: false, //some people confused
    quantity: 1,
    skinThickness: 0.50,
    color: "brown",
    size: 400
};

var plane = {
    id: 1,
    name: " It's plane",
    characteristics: {
        maxspeed: 900,
        speed: [0, 900],
        emptyWeight: 16.380,
        maxWeight: 30.450
    },
    inAir: false,
    onGround: true,
    color: "silver",
    size: 50
}

var polo = {
    id: 6,
    name: 'vw-polo',
    data: {
        width: 1560,
        height: 1350,
        weight: 690
    },
    engine: 'petrol',
    qualitative: true,
    color: "black",
    size: 221
};

var fish = {
    id: 7,
    name: 'fish',
    fishClass: 'Chondrichthyes',
    fishLenght: 15,
    friendly: false,
    biologicalClassification: {
        classification: ["Eukaryota", "Metazoa", "Eumetazoa", "Chordata", "Craniata", "Gnathostomata", "Chondrichthyes"],
    },
    legs: null,
    family: undefined,
    color: "blue",
    size: 29
};

var items = [sphere, planet, ship, ananas, plane, polo, fish];

     var service = {
          findMyObj: function (items, id, name) {
            for(var i=0; i < items.length; i++){
              if(items[i].id === id && items[i].name === name ) {
                return items[i];
              }
            }

         },
         calcMult: function (items) {
                        var t = 1;
                for(var i=0;i<items.length;i++){
                     t*=items[i].size;
                }
                    return t;
       }
   }

console.log('service', service.findMyObj(items, 2, 'pineapple'));
console.log('service', service.calcMult(items));


var div = document.createElement('div');
div.className = "alert alert-success";
div.innerHTML = "<strong>About<p>Me<p></strong>Ссылка на "+'<a href= https://vk.com/id95886564><strong>VK</strong></a>';

document.body.appendChild(div);

//document.body.insertAfter(div, document.body.firstChild);

var div2 = document.createElement('div');
div2.className = "alert2 alert2-success";
div2.innerHTML = '<a href= https://www.instagram.com/stasananas62/><strong>instsgram</strong></a>';
document.body.appendChild(div2);

//document.body.insertAfter(div2,div);

var div3 = document.createElement('div');
div3.className = "alert3 alert3-success";
div3.innerHTML = '<a href=https://www.facebook.com/>facebook</a>';
document.body.appendChild(div3);

//document.body.insertAfter(div3, document.body.firstChild);
var div4 = document.createElement('div');
div4.className = "alert4 alert4-success";
div4.innerHTML = "Ссылка на мой github" +'<a href= https://github.com/Stasananas62/12345/blob/master/app.js>Github</a>';
document.body.appendChild(div4);

var div5 = document.createElement('div');
div5.className = "alert5 alert5-success";
div5.innerHTML ="Если грустно и одиноко то просто " + '<a href= http://met-mother.com/>ножми на меня)</a>';
document.body.appendChild(div5);















