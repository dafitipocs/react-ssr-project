const middleware = (request, response, next) => {
  try {
    const { hash } = require("../hash");
    request.hash = hash;
  } finally {
    return next();
  }
};

export default middleware;
