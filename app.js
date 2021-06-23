const express = require('express')


const app = express()



app.get("/", (res, req)=>{
	res.send("<h2>Hello Fellas!</h2>")
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
	console.log(`listening on ${port}`)
})