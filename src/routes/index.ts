import express from 'express';
import images from './api/images';

const routes: express.Router = express.Router();

routes.use('/api/images', images);

routes.get(
  '/',
  (request: express.Request, response: express.Response): void => {
    response.send(
      `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>image-processing-api</title>
    <style>
    body{margin: 50px auto;width: 80%;}
    h1{text-align:center;}
    li a{color:black;
      margin: 5px;
      padding: 5px;
      line-height: 25px;}
    </style>
</head>
<body>
<h1>Welcome to image-processing-api</h1>
<p>Listening at <code><a href="/api/images?filename=">/api/images</a></code> for queries containing at least a valid filename. Optionally use both width and height to set the size...</p>
<p>Examples:
<ul>
<li>Original Image: <a href="/api/images?filename=one"> One </a></li> 
<ul>
<li><a href="/api/images?filename=one&width=100&height=100">one 100*100</a></li>
<li><a href="/api/images?filename=one&width=200&height=200">one 200*200</a></li>
<li><a href="/api/images?filename=one&width=300&height=300">one 300*300</a></li>
</ul> </ul>
<ul>
<li>Original Image :<a href="/api/images?filename=two"> two </a></li>
<ul>
<li><a href="/api/images?filename=two&width=200&height=200">two 200*200</a></li>
<li><a href="/api/images?filename=two&width=400&height=400">two 400*400</a></li>
<li><a href="/api/images?filename=two&width=500&height=500">two 500*500</a></li>
</ul> </ul>
</p>
</body>
</html>
      `
    );
  }
);

export default routes;
