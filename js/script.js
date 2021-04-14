/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//https://www.revolt.tv/2021/4/9/22376106/11-dmx-quotes
//https://www.lionworldtravel.com/news/8-nelson-mandela-quotes
const quotes = [

    {quote: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    source: 'Maya Angelou',
    citation: '',
    year: 0
    },
    {quote: "It always seems impossible until it's done.",
    source: 'Nelson Mandela',
    citation: '',
    year: 2001
    },
    {quote: "There can be no keener revelation of a society's soul than the way in which it treats its children.",
    source: 'Nelson Mandela',
    citation: "From speech Mandela gave when he launched the Children's Fund in South Africa",
    year: 1995
    },
    {quote: 'Education is the most powerful weapon you can use to change the world.',
    source: 'Nelson Mandela',
    citation: 'Speech delivered to the Nelson Mandela Foundation',
    year: 2003
    },
    {quote: "It's the tough things that we go through, hard things we go through, that get us to that point where we’re better and stronger than we've ever been.",
    source: 'DMX',
    citation: 'Wendy Williams Show',
    year: 2020
    },
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote(quotes){
    max = quotes.length
    rand_number = Math.floor(Math.random() * (max - 0) + 0)
    return quotes[rand_number]
}


/***
 * `printQuote` function
***/
function printQuote(){
    get_quote = getRandomQuote(quotes)
    html_string = `
    <p class="quote">${get_quote.quote}</p>
    <p class="source">${get_quote.source}`

    if(get_quote.citation){
        html_string += `\n\t <span class="citation">${get_quote.citation}</span>`
        }
    if(get_quote.year){
        html_string += `\n\t <span class="year">${get_quote.year} </span>`
    }
    html_string += `\n\t</p>`
    document.getElementById('quote-box').innerHTML = html_string;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);