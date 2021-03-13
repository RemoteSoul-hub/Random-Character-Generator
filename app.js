// local characters data
const charlist = [
    {
      id: 1,
      name: "Goku (Super Saiyan)",
      img:
        "img/gokuss.png",
      text:
        "Name's Kakarot",
    },
    {
      id: 2,
      name: "Vegeta (Super Saiyan)",
      img:
        "img/vegetass.png",
      text:
        "Prince of All Saiyans",
    },
    {
      id: 3,
      name: "Piccolo",
      img:
        "img/piccolo.png",
      text:
        "Cool, Calm and Collected",
    },
    {
      id: 4,
      name: "Frieza",
      img:
        "img/frieza.png",
      text:
        "Emperor of the Universe",
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