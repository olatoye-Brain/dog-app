const express = require("express")
const app = express()
const routes = require('./routes/routes')
const port = process.env.PORT || 5000
const cors = require("cors")

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


//static folder for public files
app.use(express.static('public'))
app.use('/css', express.static('node_modules/bootstrap/dist/css'))


app.use(routes)

app.listen(port, ()=>{
    console.log(`App listening to ${port}`)
})
