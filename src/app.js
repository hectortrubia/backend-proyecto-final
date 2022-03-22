import express from 'express';
import cors from 'cors';
import authRouter from './auth/auth.router.js';
import usersRouter from './users/users.router.js';
import { validateAuth } from './auth/auth.middleware.js';
import dotenv from "dotenv";
// import scrapeIt from "scrape-it" // este import es para cuando quiera hacer scrape-it



dotenv.config();
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get('/ping', (_req, res) => res.send('Pong'));
app.use('/auth', authRouter); // declaramos el router de autenticación
app.use('/users', validateAuth, usersRouter);



// const scrapeIt = require("scrape-it");

// async function scrapeItExample() {
//     const scrapeResult = await scrapeIt('https://www.legeasport.es/103-chaquetas', {
//         presentations: {
//             listItem: 'img.js-qv-product-cover',
//             data: {
//                 title: 'h1.h1',
//                 description: 'div.product.information',
//                 img: {
//                     selector: 'img.js-qv-product-cover',
//                     attr: 'href'
//                 }
//             }
//         }
//     });
//     console.log(scrapeResult.data);
// }

// scrapeItExample();

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`));