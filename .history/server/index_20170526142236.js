const path = require('path');
const express = require('express');

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// API endpoints go here!

app.get('/api', (req, res)=>{
  const response = [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue",
    "Cheshire Blue",
    "Devon Blue",
    "Dorset Blue Vinney",
    "Dovedale",
    "Exmoor Blue",
    "Harbourne Blue",
    "Lanark Blue",
    "Lymeswold",
    "Oxford Blue",
    "Shropshire Blue",
    "Stichelton",
    "Stilton",
    "Blue Wensleydale",
    "Yorkshire Blue"
]

  res.json(response);
});

// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
  const index = path.resolve(__dirname, '../client/build', 'index.html');
  res.sendFile(index);
});

let server;
function runServer(port=3001) {
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      resolve();
    }).on('error', reject);
  });
}

function closeServer() {
  return new Promise((resolve, reject) => {
    server.close(err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

if (require.main === module) {
  runServer();
}

module.exports = {
  app, runServer, closeServer
};
