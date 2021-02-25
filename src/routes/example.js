const exampleController = require("../controllers/exampleController.js");

module.exports = {
  name: "example",
  path: "/examples",
  controller: exampleController,
  endpoints: [
    {
      path: "/",
      verb: "get",
      method: "index"
    },
    {
      path: "/",
      verb: "post",
      method: "create"
    }
  ]
};
