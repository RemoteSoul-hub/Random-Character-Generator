// local characters data
const charlist = [
    {
      id: 1,
      name: "Goku (Super Saiyan)",
      img:
        "img/gokuss.png",
      text: 
      ('<h4>Power</h4><progress value="80" max="100"></progress><h4>Speed</h4><progress value="40" max="100"></progress><h4>Reach</h4><progress value="60" max="100"></progress><h4>Technique</h4><progress value="60" max="100"></progress><h4>Energy</h4><progress value="60" max="100"></progress>'),
    },
      {
      id: 2,
      name: "Vegeta (Super Saiyan)",
      img:
      "img/vegetass.png",
      text:
      ('<h4>Power</h4><progress value="60" max="100"></progress><h4>Speed</h4><progress value="60" max="100"></progress><h4>Reach</h4><progress value="40" max="100"></progress><h4>Technique</h4><progress value="60" max="100"></progress><h4>Energy</h4><progress value="80" max="100"></progress>'),
    },
    {
      id: 3,
      name: "Piccolo",
      img:
      "img/piccolo.png",
      text:
      ('<h4>Power</h4><progress value="60" max="100"></progress><h4>Speed</h4><progress value="40" max="100"></progress><h4>Reach</h4><progress value="80" max="100"></progress><h4>Technique</h4><progress value="80" max="100"></progress><h4>Energy</h4><progress value="60" max="100"></progress>'),
    },
    {
      id: 4,
      name: "Frieza",
      img:
      "img/frieza.png",
      text:
      ('<h4>Power</h4><progress value="60" max="100"></progress><h4>Speed</h4><progress value="60" max="100"></progress><h4>Reach</h4><progress value="60" max="100"></progress><h4>Technique</h4><progress value="80" max="100"></progress><h4>Energy</h4><progress value="80" max="100"></progress>'),
    },
    {
      id: 5,
      name: "Cell",
      img:
      "img/cell.png",
      text:
      ('<h4>Power</h4><progress value="80" max="100"></progress><h4>Speed</h4><progress value="60" max="100"></progress><h4>Reach</h4><progress value="80" max="100"></progress><h4>Technique</h4><progress value="60" max="100"></progress><h4>Energy</h4><progress value="60" max="100"></progress>'),
    },
    {
      id: 6,
      name: "Android 16",
      img:
      "img/android16.png",
      text:
      ('<h4>Power</h4><progress value="80" max="100"></progress><h4>Speed</h4><progress value="20" max="100"></progress><h4>Reach</h4><progress value="80" max="100"></progress><h4>Technique</h4><progress value="40" max="100"></progress><h4>Energy</h4><progress value="60" max="100"></progress>'),
    },
    {
      id: 7,
      name: "Android 17",
      img:
      "img/a17.png",
      text:
      ('<h4>Power</h4><progress value="60" max="100"></progress><h4>Speed</h4><progress value="80" max="100"></progress><h4>Reach</h4><progress value="40" max="100"></progress><h4>Technique</h4><progress value="60" max="100"></progress><h4>Energy</h4><progress value="60" max="100"></progress>'),
    },
    {
      id: 8,
      name: "Android 18",
      img:
      "img/a18.png",
      text:
      ('<h4>Power</h4><progress value="60" max="100"></progress><h4>Speed</h4><progress value="60" max="100"></progress><h4>Reach</h4><progress value="40" max="100"></progress><h4>Technique</h4><progress value="60" max="100"></progress><h4>Energy</h4><progress value="60" max="100"></progress>'),
    },
    {
      id: 9,
      name: "Android 21",
      img:
      "img/a21.png",
      text:
      ('<h4>Power</h4><progress value="40" max="100"></progress><h4>Speed</h4><progress value="60" max="100"></progress><h4>Reach</h4><progress value="80" max="100"></progress><h4>Technique</h4><progress value="80" max="100"></progress><h4>Energy</h4><progress value="40" max="100"></progress>'),
    },
    {
      id: 10,
      name: "Bardock",
      img:
      "img/bardock.png",
      text:
      ('<h4>Power</h4><progress value="80" max="100"></progress><h4>Speed</h4><progress value="80" max="100"></progress><h4>Reach</h4><progress value="40" max="100"></progress><h4>Technique</h4><progress value="20" max="100"></progress><h4>Energy</h4><progress value="60" max="100"></progress>'),
    },
    {
      id: 11,
      name: "Beerus",
      img:
      "img/beerus.png",
      text:
      ('<h4>Power</h4><progress value="80" max="100"></progress><h4>Speed</h4><progress value="80" max="100"></progress><h4>Reach</h4><progress value="60" max="100"></progress><h4>Technique</h4><progress value="100" max="100"></progress><h4>Energy</h4><progress value="100" max="100"></progress>'),
    },
    {
      id: 12,
      name: "Broly",
      img:
      "img/broly.png",
      text:
      ('<h4>Power</h4><progress value="100" max="100"></progress><h4>Speed</h4><progress value="20" max="100"></progress><h4>Reach</h4><progress value="100" max="100"></progress><h4>Technique</h4><progress value="40" max="100"></progress><h4>Energy</h4><progress value="60" max="100"></progress>'),
    },
    {
      id: 13,
      name: "Broly (DBS)",
      img:
      "img/brolydbs.png",
      text:
      ('<h4>Power</h4><progress value="100" max="100"></progress><h4>Speed</h4><progress value="20" max="100"></progress><h4>Reach</h4><progress value="100" max="100"></progress><h4>Technique</h4><progress value="80" max="100"></progress><h4>Energy</h4><progress value="100" max="100"></progress>'),
    },
    {
      id: 14,
      name: "Captain Ginyu",
      img:
      "img/ginyu.png",
      text:
      ('<h4>Power</h4><progress value="80" max="100"></progress><h4>Speed</h4><progress value="40" max="100"></progress><h4>Reach</h4><progress value="60" max="100"></progress><h4>Technique</h4><progress value="80" max="100"></progress><h4>Energy</h4><progress value="40" max="100"></progress>'),
    },
    {
      id: 15,
      name: "Cooler",
      img:
      "img/cooler.png",
      text:
      ('<h4>Power</h4><progress value="80" max="100"></progress><h4>Speed</h4><progress value="60" max="100"></progress><h4>Reach</h4><progress value="80" max="100"></progress><h4>Technique</h4><progress value="40" max="100"></progress><h4>Energy</h4><progress value="40" max="100"></progress>'),
    },
    {
      id: 16,
      name: "Gohan (Adult)",
      img:
      "img/gohanadult.png",
      text:
      ('<h4>Power</h4><progress value="60" max="100"></progress><h4>Speed</h4><progress value="80" max="100"></progress><h4>Reach</h4><progress value="60" max="100"></progress><h4>Technique</h4><progress value="80" max="100"></progress><h4>Energy</h4><progress value="40" max="100"></progress>'),
    },
    {
      id: 17,
      name: "Gohan (Teen)",
      img:
      "img/gohanteen.png",
      text:
      ('<h4>Power</h4><progress value="100" max="100"></progress><h4>Speed</h4><progress value="80" max="100"></progress><h4>Reach</h4><progress value="20" max="100"></progress><h4>Technique</h4><progress value="40" max="100"></progress><h4>Energy</h4><progress value="60" max="100"></progress>'),
    },
    {
      id: 18,
      name: "Goku",
      img:
      "img/goku.png",
      text:
      ('<h4>Power</h4><progress value="40" max="100"></progress><h4>Speed</h4><progress value="60" max="100"></progress><h4>Reach</h4><progress value="60" max="100"></progress><h4>Technique</h4><progress value="60" max="100"></progress><h4>Energy</h4><progress value="60" max="100"></progress>'),
    },
    {
      id: 19,
      name: "Goku (GT)",
      img:
      "img/gokugt.png",
      text:
      ('<h4>Power</h4><progress value="60" max="100"></progress><h4>Speed</h4><progress value="80" max="100"></progress><h4>Reach</h4><progress value="60" max="100"></progress><h4>Technique</h4><progress value="80" max="100"></progress><h4>Energy</h4><progress value="60" max="100"></progress>'),
    },
    {
      id: 20,
      name: "Goku (SSGSS)",
      img:
      "img/gokublue.png",
      text:
      ('<h4>Power</h4><progress value="80" max="100"></progress><h4>Speed</h4><progress value="100" max="100"></progress><h4>Reach</h4><progress value="60" max="100"></progress><h4>Technique</h4><progress value="80" max="100"></progress><h4>Energy</h4><progress value="40" max="100"></progress>'),
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
  let currentItem = 0;

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