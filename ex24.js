fetch('https://v2.jokeapi.dev/joke/Any')
.then(res => {
 if(res.ok) 
 return res.json()}
)
.then(jok => {
 console.log('The Joke')
 console.log(jok.setup)
 console.log('The answer')
 console.log(jok.delivery)
})
.catch(err => console.log(err));
