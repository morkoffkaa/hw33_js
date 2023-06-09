const myArray = [1, 2, [34, 56, 78, 6, 55], 3, true, 78, 55, `olena`, 89, 45];

const generateList = (array) => {
    const ul = document.createElement("ul");
    array.forEach(item => {
        let li = document.createElement("li");
        if (Array.isArray(item)) {
            li.append(generateList(item));
        } else {
            li.textContent = item;
        }
        ul.append(li)
    });
    return ul;
}

document.body.prepend(generateList(myArray));