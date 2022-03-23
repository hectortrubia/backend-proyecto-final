import express from 'express';
import cors from 'cors';
import authRouter from './auth/auth.router.js';
import usersRouter from './users/users.router.js';
import router from './newproducts/products.router.js';
import { validateAuth } from './auth/auth.middleware.js';
import dotenv from "dotenv";
import scrapeIt from "scrape-it";



dotenv.config();
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get('/ping', (_req, res) => res.send('Pong'));
app.use('/auth', authRouter); // declaramos el router de autenticación
app.use('/users', validateAuth, usersRouter); // declaramos el router de users
app.use('/',router) // declaramos el router de products




// async function scrapeItExample() {
//     const scrapeResult = await scrapeIt('https://www.legeasport.es/102-chandals', {
//          objeto: {
//             listItem: 'div.product-price-and-shipping',
//             data: {
//                 precio: 'span.regular-price',
//                 descuento: 'span.price reduction',
//                 descripcion:'div.short-description',
//                 img: {
//                     selector: '.attachment-woocommerce_thumbnail ',
//                     attr: 'src'
//                 }
//             }
//         }
//     });
//     console.log(scrapeResult.data);

// }

// scrapeItExample();

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`));