import exress from 'express'
import data  from './data.js'

const app = exress()

app.get('/api/products', (req, res) => {
     res.send(data.products)
 })

app.get('/', (req, res) => {
    res.send('Server is ready')
})

const port = process.env.PORT || 5000;

app.listen(port, () =>{
    console.log(`Server at http://localhost:${port}`);
})