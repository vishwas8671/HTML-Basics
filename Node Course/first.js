console.log("KG Coding is the best...")

const fs = require('fs');

fs.writeFile("Output.txt", "Writing File", (err) => {
    if(err) console.log("Error Occured");
    else console.log("file written successfully");
})
