const axios = require("axios")
 
axios
    .get("http://localhost:8080/posts")
    .then(res => {
        console.log(res.data);
    })
    .catch(error => {
        console.log(error.response);
    });
