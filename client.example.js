const axios = require("axios")

// your process.env.TOKEN_SECRET
const key = "";
    
axios
    .get("http://localhost:8080/posts", { headers: { 'Authorization': `Bearer ${key}` }})
    .then(res => {
        console.log(res.data);
    })
    .catch(error => {
        console.log(error.response);
    });