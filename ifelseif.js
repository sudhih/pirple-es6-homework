// ifelseif.js

// collection that proves whether given sentence is mortal
let mortal_array = ['man', 'men', 'socrates'];

// this function expects input sentence of 4 words and determines 
// either man, men or socrates is mortal
let isMortal = function(sentence){
    words = sentence.split(" ")
    if(words.length === 4 &&
        mortal_array.includes(words[0]) ||
        mortal_array.includes(words[1]) ||
        mortal_array.includes(words[2]) ||
        mortal_array.includes(words[3]) )
    {
            console.log('Mortal')
    }else if(words.length === 4){
        console.log("Don' know what they are!!")
    }else{
        console.log("Input contains either less or more 4 words!!!. Can't work on such sentence")
    }
}

// assumption, below sentences, if we split, would lead to an array of 
// length 4
isMortal('All men are mortal')
isMortal('Socrates is a man')
isMortal('Therefore, socrates is mortal.')
isMortal('All women are Socrates')
isMortal('Socrates is not a woman')
isMortal("Therefore, socrates isn't woman")
isMortal('afd')
isMortal("woman are mortal too, but..")
