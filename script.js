let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];



document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const mainTitle = document.querySelector('#main-title');
  mainTitle.innerHTML = `<h1> DOM Toretto Website </h1>`

  // Part 2
  const body = document.getElementsByTagName('body');
  this.body.style.backgroundColor = 'lightgreen';
  
  // Part 3
  const favThings = document.getElementById('favorite-things');
  favThings.removeChild(favThings.lastElementChild);

  // Part 4
  const specialTitle = document.querySelectorAll('.special-title');

  for (let i of specialTitle) {
    i.style.fontSize = '2rem'
  }

  // Part 5

  const updatedRaces = document.querySelectorAll('#past-races li')
 
  for (let i of updatedRaces) {
    if (i.textContent === 'Chicago') {
      i.remove();
    }
  }
 
  // Part 6

  const newRace = document.createElement('li')
  newRace.textContent = "Paris"; 

  const pastRacesList = document.querySelector('#past-races');
  pastRacesList.appendChild(newRace);

  // Part 7
  const newBlogPost = document.createElement('div');
  newBlogPost.classList.add('blog-post');
  newBlogPost.style.backgroundColor = 'rebeccapurple';

  const blogPostTitle = document.createElement('h1');
  blogPostTitle.textContent = "Paris"

  const blogPostContent = document.createElement('p');
  blogPostContent.textContent = "I crossed 3 red lights on the famous Avenue Montaigne"

  newBlogPost.appendChild(blogPostTitle);
  newBlogPost.appendChild(blogPostContent);

  const blogContainer = document.querySelector('.main');
  blogContainer.appendChild(newBlogPost);

  // Part 8
  const quote = document.querySelector('#quote-title');
  quote.addEventListener('click', randomQuote)

  // Part 9




});
