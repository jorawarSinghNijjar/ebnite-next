import axios from "axios";
console.log("Environment: ",process.env.NODE_ENV)

export default axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    // baseURL: "http://localhost:8080/api/",
    // headers: {
    //     "Content-Type": "application/json"
    // }
})