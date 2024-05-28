const postProduct = async(body) => {
    try {
        const request = await fetch('https://class-store-c5155-default-rtdb.firebaseio.com/products.json', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const response = await request.json()

        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

export const data = {postProduct}