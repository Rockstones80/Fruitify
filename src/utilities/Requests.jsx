const postProduct = async(image, name, price) => {
    let formData = new FormData()
    formData.append('file', image)
    formData.append('name', name)
    formData.append('price', price)
    try {
        const request = await fetch('https://class-store-c5155-default-rtdb.firebaseio.com/products.json', {
            
        
            method: 'POST',
            body: JSON.stringify(formData)
        })

        const response = await request.json()

        console.log('Resposnsibky', response)
     } catch (error) {
        console.log(error)
    }
}

export const data = {postProduct}