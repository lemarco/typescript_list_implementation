
import List from './src/List'

const list = new  List<string>()

console.log("___list.push()___")
list.push("masha")
list.showList()
console.log("___list.push()___")
list.push("baklaha")
list.showList()
console.log("___list.push()___")
list.push("gogo")
list.showList()
console.log("___list.push()___")
list.push("yyyy")
list.showList()
console.log("___list.pop()___")
list.pop()
list.showList()
console.log("___list.shift()___")
list.shift()
list.showList()