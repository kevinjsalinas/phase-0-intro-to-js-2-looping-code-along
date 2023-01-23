// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
     }

    return gifts;
}

wrapGifts(gifts);


const messageArray = []     // remember that array = [] and object is {} with key values
                            //solution solved: moving the emptyMessage Array outside of the loop helped continue to stack the messages
                            //also, using the debugger; HELPED A TON!!! in following the order of the loop, super educational :-)

function writeCards(name, event) {
    let i = 0;
    while(i < gifts.length) {

        debugger;

        messageArray[i] = `Thank you, ${name[i]}, for the wonderful ${event} gift!`

        debugger;

        i ++;
    }
        return messageArray;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

//NOTE: adding to empty arrays, you need to declare the index before adding
//emptyArray[0] = "i loveyou"
//emptyArray[1] = "i loveyoutwo"
//emptyArray; => ["i loveyou", "i loveyoutwo"]

function countDown(number) {
    let count = 0
    while(count < 11) {
        console.log(number)
        number --
        debugger;
        count ++
    }
}

countDown(10)

