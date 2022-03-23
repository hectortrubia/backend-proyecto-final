import { MongoClient } from 'mongodb';


const URI = 'mongodb+srv://Hector:a8Wn31hS03kHi7cY@finalproject.hqvuz.mongodb.net/FinalProject?retryWrites=true&w=majority';
const client = new MongoClient(URI);
const DATABASE_NAME = 'FinalProject';
const COLLECTION_NAME = 'products';



export const createProduct = async (product) => {
    try{
        await client.connect(); // paso 6
        const db = client.db(DATABASE_NAME); // paso 7
        const productsCol = db.collection(COLLECTION_NAME); // paso 8
        // a partir de aqui ya puedo hacer operaciones con la collection
       return await productsCol.insertOne(product);// paso 9
    }catch(err){
        console.error('error', err);
    }finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
}
export const retrieveProducts = async () => {
    try{
        await client.connect(); // paso 6
        const db = client.db(DATABASE_NAME); // paso 7
        const beersCol = db.collection(COLLECTION_NAME); // paso 8
        const opt = {
            projection: { _id:0 }
        }
        // a partir de aqui ya puedo hacer operaciones con la collection
        const products = await productsCol.find({}, opt).toArray(); // paso 9 devuelve todos los documentos en formato Array de JS
        console.log(products)
        return products;
    }catch(err){
        console.error('error: ', err);
    }finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
};