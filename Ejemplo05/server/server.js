const path = require('path'),
      publicPath = path.join(__dirname, '../public'),
      express = require('express'),
      app = express(),
      port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
