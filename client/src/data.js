import Thumbnail1 from "./images/blog1.jpg";
import Thumbnail2 from "./images/blog2.jpg";
import Thumbnail3 from "./images/blog3.jpg";
import Thumbnail4 from "./images/blog4.jpg";

// Function to generate a createdAt timestamp for each post
const generateCreatedAt = () => {
 // Create a new Date object for the current date and time
 const now = new Date();

 // Format the date as a string in the format "YYYY-MM-DD HH:mm:ss"
 const formattedDate = now.toISOString().replace(/T/, ' ').replace(/\..+/, '');

 return formattedDate;
};

export const DUMMY_POSTS = [
 {
    id: "1",
    thumbnail: Thumbnail1,
    category: "education",
    title: "This is the title of the very first blog post",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis et veritatis laudantium esse! Corporis, at? Aliquid voluptate, earum error eveniet esse illo repellat possimus voluptas ad officia doloribus obcaecati ut!",
    authorID: 3,
    createdAt: generateCreatedAt(), // Add createdAt field
 },
 {
    id: "2",
    thumbnail: Thumbnail2,
    category: "science",
    title: "This is the title of the second blog post",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis et veritatis laudantium esse! Corporis, at? Aliquid voluptate, earum error eveniet esse illo repellat possimus voluptas ad officia doloribus obcaecati ut!",
    authorID: 1,
    createdAt: generateCreatedAt(), // Add createdAt field
 },
 {
    id: "3",
    thumbnail: Thumbnail3,
    category: "weather",
    title: "This is the title of the third blog post",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis et veritatis laudantium esse! Corporis, at? Aliquid voluptate, earum error eveniet esse illo repellat possimus voluptas ad officia doloribus obcaecati ut!",
    authorID: 13,
    createdAt: generateCreatedAt(), // Add createdAt field
 },
 {
    id: "4",
    thumbnail: Thumbnail4,
    category: "farming",
    title: "This is the title of the fourth blog post",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis et veritatis laudantium esse! Corporis, at? Aliquid voluptate, earum error eveniet esse illo repellat possimus voluptas ad officia doloribus obcaecati ut!",
    authorID: 11,
    createdAt: generateCreatedAt(), // Add createdAt field
 },
];
