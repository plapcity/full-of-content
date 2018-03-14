import express from 'express';

import serverRenderer from './middleware/renderer';

const PORT = 3000;
const path = require('path');

const app = express();
const router = express.Router();

router.use('^/$', serverRenderer);

router.use(express.static(
	path.resolve(__dirname, '..', 'build'),
	{maxAge: '30d'},
));

app.use(router);
router.use('*', serverRenderer);

app.listen(PORT, (error) => {
	if (error) {
		return console.log('error occured', error);
	}
	console.log(`Listening on ${PORT}...`);
})