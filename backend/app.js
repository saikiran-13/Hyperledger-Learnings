const express = require('express')
const cors = require('cors')
const {main} = require('./fabric-samples/asset-transfer-basic/application-javascript/app')
const app = express()
const PORT = 5000;
app.use(express.json())
app.use(cors())
app.get('/',async (req,res)=>{
    const output = await main()
    console.log("F  R OM ",output)
    res.status(200).json({output})
})
app.listen(PORT,()=>{
    console.log(`App is listening on server ${PORT}`)
})
module.exports = app