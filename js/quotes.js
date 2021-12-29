const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
  },
  {
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Yesterday is history, tomorrow is a mystery, todat is a gift of God. Which is why we call it the present.",
    author: "Bill Keane",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    quote: "마음의 문을 여는 손잡이는 바깥쪽이 아닌 안쪽에 있다.",
    author: "헤겔",
  },
  {
    quote:
      "우리는 자신을 앞으로 할 수 있는 것으로 판단하지만, 다른 사람은 우리를 우리가 이미 한 것으로 판단한다.",
    author: "헨리 워즈워스 롱펠로",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
