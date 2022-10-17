const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json()); //middleware

app.listen(PORT, () => console.log('Project is live!'));

app.post('/calculator', (request, response) => {
  console.log('Request Body: ', request.body);
  response.header('Access-Control-Allow-Origin', '*');
  const { firstValue, secondValue, operation } = request.body;

  switch (operation) {
    case 'Add': {
      let output = parseInt(parseInt(firstValue) + parseInt(secondValue));
      response.status(200).send({ output });
      break;
    }
    case 'Subtract': {
      let output = parseInt(parseInt(firstValue) - parseInt(secondValue));
      response.status(200).send({ output });
      break;
    }
    case 'Multiply': {
      let output = parseInt(parseInt(firstValue) * parseInt(secondValue));
      response.status(200).send({ output });
      break;
    }
    default: {
      let output = "User didn't select any operator";
      response.status(200).send({ output });
    }
  }
  if (!(firstValue && secondValue && operation))
    response.status(418).send({ message: `Values are missing ${secondValue}` });
});
