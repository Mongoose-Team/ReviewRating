var axios = require('../apiService/connection');

const displayReview = async (req, res) => {
    let id = req.params.product_id
    try {
        let response = await axios.get(`/reviews/meta?product_id=${id}`)
        res.send(response.data)
    } catch (error) {
        console.error(error)
    }

}

module.exports = { displayReview }