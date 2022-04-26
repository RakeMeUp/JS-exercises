const axios = require("axios")

fetchData = async (id) => {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    //console.log(results)
    return results;
}

fetchData(21)

module.exports = fetchData