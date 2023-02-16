const cats = ["Milo", "Otis", "Garfield"];



function destructivelyAppendCat(name){
    cats.push(name);
}




// console.log (cats)

function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}

function appendCat(name){
    const copyofcats = [...cats];
    copyofcats.push(name)
    return copyofcats
}
function prependCat(name){
    const copyofcats = [...cats];
    copyofcats.unshift(name)
    return copyofcats

}

function removeLastCat(name){
    const copyofcats = [...cats]
    copyofcats.pop()
    return copyofcats


}
function removeFirstCat(name) {
const copyofcats = [...cats]
copyofcats.shift()
return copyofcats
}