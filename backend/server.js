import dotenv from 'dotenv';
import path from 'path';
import express from 'express';

dotenv.config();

const app = express();
const __dirname = process.cwd();

export const PORT = process.env.PORT || 3000;

//For deployment
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});