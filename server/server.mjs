import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import express from 'express';
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
  response.sendFile(path.join(publicPath, '/index.html'))
})



// TODO: 404 - not found



// 500 - Any server error
// app.use((err, req, res, next) => {
//   return res.status(500).json({ error: err });
// });

// start server on port
app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}/`);
});
