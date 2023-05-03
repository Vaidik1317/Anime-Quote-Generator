

let btn = document.querySelector('.new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"The future belongs to those who believe in the beauty of their dreams"`,
    person: `Shoyo Hinata`
}, 
{
    quote: `"It is not wise to judge others based on your own perceptions and by their appearances."`,
    person: `Itachi Uchiha` 
},
{
    quote: `"Those who cannot acknowledge themselves will eventually fail."`,
    person: `Itachi Uchiha` 
},
{
    quote: `"He who forgives and acknowledges himself, that is what it truly means to be strong!"`,
    person: `Itachi Uchiha` 
},
{
    quote: `"Only A Failure Abandons His Principles And Pride."`,
    person: `Vegeta` 
},
{
    quote: `"Humans aren’t made perfectly. Everyone lies."`,
    person: `Light Yagami`
},
{
    quote: `"In this world, there are very few people who actually trust each other."`,
    person: `Light Yagami` 
},
{
    quote:`"From where I stand, I’d say society is certainly not equal. Not a bit"`,
    person:` Chabashira Sae`
},
{
    quote:`"Being alone is not synonymous with being lonely."`,
    person:`Suzune Horikita`
},
{
    quote:`"Power isn’t determined by your size, but the size of your heart and dreams!"`,
    person: `Monkey D Luffy`
},
/*{
    quote:`"If I give up now, I’m going to regret it."`,
    person:`Monkey D Luffy`
},*/];

btn.addEventListener('click', function()
{
    let random = Math.floor(Math.random() * quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})