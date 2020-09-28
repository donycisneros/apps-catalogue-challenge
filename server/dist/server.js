"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startServer = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = 4444;
const app = (0, _express.default)();
app.disable('x-powered-by');
app.use((0, _cors.default)());
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to apps catalogue API'
  });
});

const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

exports.startServer = startServer;