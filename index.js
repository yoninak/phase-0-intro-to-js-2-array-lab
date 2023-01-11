
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat (name) {
cats.push (name)
}
function destructivelyPrependCat(name) {
    cats.unshift (name)
}
function destructivelyRemoveLastCat(name) {
 cats.pop(name)
}
function destructivelyRemoveFirstCat(name) {
 cats.shift(name)
}
function appendCat(name) {
const copyOfCats = [...cats, name];
return copyOfCats
}
function prependCat(name) {
    const copyOfCats = [name, ...cats];
    return copyOfCats
    }
function removeLastCat(name) {
    const copyOfcats = cats.slice (0, cats.length - 1);
    return copyOfcats
}
function removeFirstCat(name) {
    const copyOfcats = cats.slice (1);
    return copyOfcats
}