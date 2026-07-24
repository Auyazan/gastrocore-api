import app from "./app";
import { env } from "./shared/config/env";

app.listen(env.port, () => {
  console.log(`🚀 Server running on port ${env.port}`);
});
