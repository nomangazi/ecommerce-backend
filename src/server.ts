import { configs } from "./config/config";
import app from "./app";

/* eslint-disable no-console */

const main = async () => {
  try {
    app.listen(configs.port, () => {
      console.log(`Server is running on http://localhost:${configs.port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

main();
