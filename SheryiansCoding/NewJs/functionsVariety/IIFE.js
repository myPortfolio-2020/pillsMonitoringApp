// IIFE
// Immediate Invoked Function execution
// dont forget ; semicolon in the end

(function(){
    console.log('IIFE')
})();

(function() {
    var name = 'ChatGPT';
    console.log('Hello, ' + name);
})();

// Arrow Function
(() => {
    console.log('Arrow IIFE');
})();