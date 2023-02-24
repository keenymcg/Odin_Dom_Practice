const body = document.body
const div = document.createElement("div")
// const strong = document.createElement("strong")
// strong.innerText = "Hello World 2"
// div.append(strong)
body.append(div)

const para1 = document.createElement("p")
para1.innerText = "Hey I'm red"
para1.style.color = "red" 
div.append(para1)

const h3 = document.createElement("h3")
h3.innerText = "I'm a blue h3!"
h3.style.color = "blue"
div.append(h3)

const div2 = document.createElement("div")
div2.className = "moreInfo"
div2.style.backgroundColor = "pink"
div2.style.border = "solid"
// div2.innerText = "temp text"
div.append(div2)

const h1 = document.createElement("h1")
h1.innerText = "I'm in a div"
div2.append(h1)

const para2 = document.createElement("p")
para2.innerText = "ME TOO!"
div2.append(para2)


