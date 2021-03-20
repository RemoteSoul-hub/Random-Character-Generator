// local characters data
const charlist = [
    {
      id: 1,
      name: "Goku (Super Saiyan)",
      img:
        "img/gogetablue.png",
      text: 
      "“I am a warrior, pure of heart, awakened by rage. I am the legendary Super Saiyan, Goku!” <div class="container">
      <div class="row">
          <div class="col-md-6">
              <h3 class="progress-title">HTML5</h3>
              <div class="progress-outer">
                  <div class="progress">
                      <div class="progress-bar progress-bar-striped progress-bar-danger" style="width:50%;"></div>
                      <div class="progress-value"><span>3</span>%</div>
                  </div>
              </div>
              <h3 class="progress-title">CSS3</h3>
              <div class="progress-outer">
                  <div class="progress">
                      <div class="progress-bar progress-bar-striped progress-bar-info" style="width:75%;"></div>
                      <div class="progress-value"><span>4</span>%</div>
                  </div>
              </div>
          </div>
      </div>"
    },
      {
      id: 2,
      name: "Vegeta (Super Saiyan)",
      img:
      "img/gogetablue.png",
      text:
        "“I'll beat anyone, no matter how strong they are!”",
    },
    {
      id: 3,
      name: "Piccolo",
      img:
      "img/gogetablue.png",
      text:
        "“I'm neither Kami nor Piccolo. I'm simply a Namekian who has forgotten his own name.”",
    },
    {
      id: 4,
      name: "Frieza",
      img:
      "img/gogetablue.png",
      text:
        "“I made you a promise, remember? I said I'd make you wish for death.”",
    },
    {
      id: 5,
      name: "Cell",
      img:
      "img/gogetablue.png",
      text:
        "“At last... I can finally test the power of my Perfect Form.”",
    },
    {
      id: 6,
      name: "Android 16",
      img:
      "img/gogetablue.png",
      text:
        "“The time has come to fight. Even before I meet Goku.”",
    },
    {
      id: 7,
      name: "Android 17",
      img:
      "img/gogetablue.png",
      text:
        "“Show some respect for nature.”",
    },
    {
      id: 8,
      name: "Android 18",
      img:
      "img/gogetablue.png",
      text:
        "“A smart choice, as always.”",
    },
    {
      id: 9,
      name: "Android 21",
      img:
      "img/gogetablue.png",
      text:
        "“My appetite...is insatiable!”",
    },
    {
      id: 10,
      name: "Bardock",
      img:
      "img/gogetablue.png",
      text:
        "“It's up to me... I'm... I'm gonna change the future!”",
    },
    {
      id: 11,
      name: "Beerus",
      img:
      "img/gogetablue.png",
      text:
        "“Before creation comes destruction.”",
    },
    {
      id: 12,
      name: "Broly",
      img:
      "img/gogetablue.png",
      text:
        "“A monster, you say? No, I am a demon!”",
    },
    {
      id: 13,
      name: "Broly (DBS)",
      img:
      "img/gogetablue.png",
      text:
        "No speech",
    },
    {
      id: 14,
      name: "Captain Ginyu",
      img:
      "img/gogetablue.png",
      text:
        "“Captain Ginyu, of the Ginyu Force, has arrived!”",
    },
    {
      id: 15,
      name: "Cooler",
      img:
      "img/gogetablue.png",
      text:
        "“I'm not short-sighted like my brother. I will be sure to exterminate every last one of you!”",
    },
    {
      id: 16,
      name: "Gohan (Adult)",
      img:
      "img/gogetablue.png",
      text:
        "“I wonder if you have what it takes to fight me...”",
    },
    {
      id: 17,
      name: "Gohan (Teen)",
      img:
      "img/gogetablue.png",
      text:
        "“Please... I... I don't want to fight... I don't want to kill... no matter how evil you are.”",
    },
    {
      id: 18,
      name: "Goku",
      img:
      "img/gogetablue.png",
      text:
        "“Hi! I'm Goku!”",
    },
    {
      id: 19,
      name: "Goku (GT)",
      img:
      "img/gogetablue.png",
      text:
        "“I'm Goku, Son Goku!”",
    },
    {
      id: 20,
      name: "Goku (SSGSS)",
      img:
      "img/gogetablue.png",
      text:
        "“This is what it looks like to go beyond Super Saiyan God!”",
    },
  ];

  // Select Items

  const img = document.getElementById('char');
  const char = document.getElementById('name');
  const desc = document.getElementById('desc');

  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');

  // set starting item 
  let currentItem = 1;

  // Load initial item
  window.addEventListener('DOMContentLoaded', function() {
 showCharacter(currentItem);
  });


  // Show Character Based on item

  function showCharacter(){
    const item = charlist[currentItem];
    img.src = item.img;
    char.textContent = item.name;
    desc.innerHTML = item.text;
  }

  // Show next character 
nextBtn.addEventListener('click', function()
{
    currentItem++;
    if(currentItem > charlist.length-1){
        currentItem = 0;
    }
    showCharacter();
});
  // Show previous character
  prevBtn.addEventListener('click', function()
{
    currentItem--;
    if(currentItem < 0){
        currentItem = charlist.length-1;
    }
    showCharacter();
});

// Random Button 
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * charlist.length);
    showCharacter();
});