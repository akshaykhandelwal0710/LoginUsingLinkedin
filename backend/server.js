import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 9000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.status(200).send('hello world'));

const fet = async (code) => {
    const response = await fetch("https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code="+code+"&client_id=777wrznuz9eit6&client_secret=u654qmO5YXQEXzN9&redirect_uri=http://localhost:3000/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const data = await response.json();
    return JSON.stringify(data);
};

app.post("/fetchCode", async(req, res) => {
    res.status(201).send(await fet(req.query.code));
});

app.post("/fetchInfo", async(req, res) => {
    //console.log(req.query.token);
    const response = await fetch('https://api.linkedin.com/v2/me', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + req.query.token
        }
    });
    const data = await response.json();
    //console.log(data);
    res.status(201).send(data);
});

app.listen(port, () => console.log('Listening on localhost: ' + port));