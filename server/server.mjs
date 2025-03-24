import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import express, { response } from 'express';
import cors from 'cors';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());


// path to the public folder
const publicPath = path.join(__dirname, 'public');

// TODO: GET /index.html
app.get('/index.html', (request, response) => {
  response.sendFile(path.join(publicPath, '/index.html')) // need to hard code /index.html if you want / and /index.html to point to the same thing
})

app.get('/styles/site.css', (req, res) =>{
  res.sendFile(path.join(publicPath, req.route.path))
})


app.get('/api/documents.json', (req, res) => {
  res.json([{
    name: "Apple",
    category: "fruit",
    price: 1.99,
    quantity: 150,
    supplier: "Organic Farms Inc",
    organic: true,
    country: "USA",
    expiration: new Date("2023-12-15")
  },
  {
    name: "Banana",
    category: "fruit",
    price: 0.59,
    quantity: 200,
    supplier: "Tropical Imports",
    organic: false,
    country: "Ecuador",
    expiration: new Date("2023-12-10")
  }]).status(200)
})




// TODO: 404 - not found
app.use((req, res, next) =>{
  return res.json({message: 'Not Found', status:404}).status(404)
})


// 500 - Any server error
// app.use((err, req, res, next) => {
//   return res.status(500).json({ error: err });
// });

// start server on port
app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}/`);
});
