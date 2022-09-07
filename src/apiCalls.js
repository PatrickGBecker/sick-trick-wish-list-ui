const getTrix = {
    fetchTrixData(url) {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Can't find the data, my dude")
                } else {
                    return response.json()
                }
            });
    }
}

export default getTrix;