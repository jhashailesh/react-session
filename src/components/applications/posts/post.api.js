import axios from "axios";

export const getPosts = async () => {
    const response =  await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data
}