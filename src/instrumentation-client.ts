import { initBotId } from "botid/client/core";

// Register the routes BotID should protect. The client attaches classification
// headers to requests to these paths; the server verifies them via checkBotId().
initBotId({
  protect: [
    {
      path: "/api/contact",
      method: "POST",
    },
  ],
});
