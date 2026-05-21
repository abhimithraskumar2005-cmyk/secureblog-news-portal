const app = require("./app");
const { env } = require("./config/env");

app.listen(env.port, () => {
  console.log(`SecureBlog API running on port ${env.port}`);
});
