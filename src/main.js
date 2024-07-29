import { logger } from "./application/logging.js";
import { web } from "./application/web.js";

web.listen(3000, () => {
  logger.info("App running on port 3000");
});
