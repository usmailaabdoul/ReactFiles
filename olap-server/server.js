const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'postgres',
        database: 'OLAP_project'
    }
})

const app = express();
app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res) => {
    res.send('this is working');
})

app.post('/rullup', (req, res) => {
    const { country, time } = req.body;
    db
        .select(`country.${country}`, `times.${time}`).sum({ Mobile: 'items.mobile' }).sum({ Modem: 'items.modem' }).sum({ Phone: 'items.phone' }).sum({ Security: 'items.security' })
        .from('country')
        .join('items', 'country.country_id', '=', 'items.item_id')
        .join('times', 'country.country_id', '=', 'times.time_id')
        .groupBy(`country.${country}`, `times.${time}`)
        .then(response => {
            res.json(response)
        })
})

app.post('/drilldown', (req, res) => {
    const { country, time } = req.body;
    db
        .select(`country.${country}`, `times.${time}`).sum({ Mobile: 'items.mobile' }).sum({ Modem: 'items.modem' }).sum({ Phone: 'items.phone' }).sum({ Security: 'items.security' })
        .from('country')
        .join('items', 'country.country_id', '=', 'items.item_id')
        .join('times', 'country.country_id', '=', 'times.time_id')
        .groupBy(`country.${country}`, `times.${time}`)
        .then(response => {
            res.json(response)
        })
})

app.post('/slice', (req, res) => {
    const { country, quarter } = req.body;
    db
        .select('times.quarter', `country.${country}`).sum({ Mobile: 'items.mobile' }).sum({ Modem: 'items.modem' }).sum({ Phone: 'items.phone' }).sum({ Security: 'items.security' })
        .from('country')
        .join('items', 'country.country_id', '=', 'items.item_id')
        .join('times', 'country.country_id', '=', 'times.time_id')
        .where('quarter', `${quarter}`)
        .groupBy(`country.${country}`, 'times.quarter')
        .then(response => {
            res.json(response)
        })
})

app.post('/dice', (req, res) => {
    const { city1, city2, country, quarter1, quarter2 } = req.body;
    db
        .select('times.quarter', `country.${country}`).sum({ Mobile: 'items.mobile' }).sum({ Modem: 'items.modem' }).sum({ Phone: 'items.phone' }).sum({ Security: 'items.security' })
        .from('country')
        .join('items', 'country.country_id', '=', 'items.item_id')
        .join('times', 'country.country_id', '=', 'times.time_id')
        .where('quarter', 'in', [`${quarter1}`, `${quarter2}`])
        .andWhere('city', 'in', [`${city1}`, `${city2}`])
        .groupBy(`country.${country}`, 'times.quarter')
        .then(response => {
            res.json(response)
        })
})

app.post('/countries', (req, res) => {
    db
        .select({ value: 'city', label: 'city'}).from('country')
        .then(response => {
            res.json(response)
        })
})

app.listen(3000, () => {
    console.log('app is running on port 3000')
}) 