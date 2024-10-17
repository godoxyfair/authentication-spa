import express from 'express';
import { users, SECRET_KEY } from './const.js';
import { corsMiddleware, authenticateJWT } from './middleware.js';

const app = express();
const port = 8080;
const protectedRouter = express.Router();

app.use(corsMiddleware);
protectedRouter.use(authenticateJWT);

app.post('api/auth/login', async (req, res) => {
    const { username, password } = req.body;

    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        res.status(200).json({ message: 'Succsess!', username: user.username });
    } else {
        res.status(401).json({ message: 'Fail auth' });
    }

    // const user = users.find(u => u.username === username);
    // if (!user) {
    //   return res.status(401).json({ message: 'Неверное имя пользователя или пароль.' });
    // }

    // const match = await bcrypt.compare(password, user.password);
    // if (!match) {
    //   return res.status(401).json({ message: 'Неверное имя пользователя или пароль.' });
    // }

    // const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
    // res.json({ message: 'Succsess!', username: user.username, token });
});

protectedRouter.get('/mainpage', (req, res) => {
    // res.send(require('./data.json'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
