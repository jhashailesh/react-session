import { getPosts } from "./post.api";
import axios from 'axios';
import { cleanup } from "@testing-library/react";

jest.mock('axios');
const postData = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }
];

// global.fetch = jest.fn(() => Promise.resolve("dasdasd"));

describe('postApi', () => {

  afterEach(cleanup);


  it('should return tolal number of post', async () => {
    axios.get.mockImplementationOnce(
      (url) => {
        if(url === "https://jsonplaceholder.typicode.com/posts"){
          return Promise.resolve({status: 200, data: postData});
        }else {
          return Promise.resolve({status: 400, data: {}})
        }

      }
    );
    const data  = await getPosts();
    expect(data.length).toEqual(2)
    expect(data[0].title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
    expect(data[1].title).toBe("qui est esse");

  });

})