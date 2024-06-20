import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://cda7a1e238cc06e7e226e9a49e418291@o4507441818501120.ingest.us.sentry.io/4507441823350784",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
      isNameRequired: true,
      isEmailRequired: true,
    }),
    Sentry.feedbackIntegration({
      colorScheme: "dark",
    }),
  ],
});
