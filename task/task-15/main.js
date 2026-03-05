const quotesContent = [
  {
    Quotes: "Take up one idea. Make that one idea your life—think of it, dream of it, live on that idea...",
    Author: "Swami Vivekananda"
  },
  {
    Quotes: "There are two kinds of people: those who do the work and those who take the credit...",
    Author: "Indira Gandhi"
  },
  {
    Quotes: "Dream, dream, dream. Dreams transform into thoughts, and thoughts result in action.",
    Author: "APJ Abdul Kalam"
  },
  {
    Quotes: "I don't believe in taking the right decisions. I take decisions and then make them right.",
    Author: "Ratan Tata"
  },
  {
    Quotes: "Innovation distinguishes between a leader and a follower.",
    Author: "Steve Jobs"
  }
];

const btnEl = document.getElementById('btn');
const quotesEl = document.getElementById('quotes');
const authorEl = document.getElementById('author');

btnEl.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotesContent.length);

  quotesEl.innerText = `"${quotesContent[randomIndex].Quotes}"`;
  authorEl.innerText = `– ${quotesContent[randomIndex].Author}`;
});
