
const LOCAL_STORAGE_KEY = 'products'

function saveProducts(data: string) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
}

function deleteProduct(productId: number) {
    if (confirm(`are you sure you want to delete product ${productId}?`)) {
        const data = getData()
        let index = 0;
        for (const product of data) {
            if (+product.catalogNumber === productId) {
                data.splice(index, 1)
                saveProducts(data)
                syncDataToDOM()
                return
            }
            index++
        }
    }
}

function getData() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? "[]")
}

function getPriceAverage() {
    let sum = 0
    for (const product of getData()) {
        // sum = sum + data.price
        // a shorter version to the line above with +=:
        sum += product.price
    }
    return getData().length ? sum / getData().length : 0
}

function syncDataToDOM() {
    let htmlString = ''
    let idx = 0
    for (const product of getData()) {

        const color = product.price < 200 ? 'green' : product.price < 700 ? 'red' : 'blue'

        htmlString += `
            <tr>
                <td>${product.catalogNumber}</td>
                <td>${product.title}</td>
                <td>${product.description}</td>
                <td style="color: ${color};">${product.price}</td>
                <td>${product.category}</td>
                <td style="background-color: ${product.color};">${product.color}</td>
                <td><img src="${product.imageURL}" /></td>
                <td><button onclick="deleteProduct(${idx})" class="deleteButton">delete</button></td>
            </tr>
    
        `

        idx += 1
    }
    document.getElementById('data')!.innerHTML = htmlString

    // set total
    document.getElementById('total')!.innerHTML = String(getData().length)

    // set average
    document.getElementById('averagePrice')!.innerHTML = String(getPriceAverage())


}

function isValidURL(url: string) {
    if (!url.startsWith('http')) {
        return false
    }

    if (url.includes(' ')) {
        return false
    }

    if (!url.includes('://')) {
        return false
    }

    return true
}

function addProduct(event: SubmitEvent) {

    // tell the browser: you are old and now is 2026 and not 1994
    // and i want to take control, so dont submit to any server...
    event.preventDefault()

    // input
    const catalogNumber = (document.getElementById('catalogNumber')! as HTMLInputElement).value
    const title = (document.getElementById('title')! as HTMLInputElement).value
    const description = (document.getElementById('description')! as HTMLInputElement).value
    const price = (document.getElementById('price')! as HTMLInputElement).value
    const category = (document.getElementById('category')! as HTMLInputElement).value
    const color = (document.getElementById('color')! as HTMLInputElement).value
    const imageURL = (document.getElementById('imageURL')! as HTMLInputElement).value

    // validation
    if (!isValidURL(imageURL)) {
        alert('please enter a valid url for image')
        // this return exits the function,
        // essentially prevents the DHTML stage to occur
        return
    }

    // process
    // data.push({
    //     catalogNumber: catalogNumber,
    //     title: title,
    //     description: description,
    //     price: price,
    //     category: category,
    //     color: color,
    //     imageURL: imageURL
    // })

    // if we have key-value pairs where the key name is identical
    // to a variable name, then we can omit the variable name 
    const data = getData()
    data.push({
        catalogNumber,
        title,
        description,
        price: +price,
        category,
        color,
        imageURL
    })
    saveProducts(data)


    // output
    syncDataToDOM();

    // reset the form for next product
    (document.getElementById('productForm')! as HTMLFormElement).reset()

}

syncDataToDOM()