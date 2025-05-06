process.stdout.write('hello ')
process.stdout.write('world ')

// npm i prompt-sync (to use prompt on terminal rather than browser ) 

let prompt = require('prompt-sync')()

let ans = prompt('enter something')
process.stdout.write(ans)