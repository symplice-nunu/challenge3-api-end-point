import axios from "axios";
const checkAlbumAvailabity = async(req, res) => {
    let checker = await axios.get(`https://jsonplaceholder.typicode.com/albums/${req.params.id}/photos`)
    if (checker.data.length == 0) {
        res.status(400).json([{ "data": " Album not Found" }]);
    } else {
        let result = [];
        checker.data.map((data) => {
            result.push({ "title": data.title, "thumbnailUrl": data.thumbnailUrl })
        })
        res.status(200).json(result);
        // console.log(checker.data);
    }


}
export default checkAlbumAvailabity;