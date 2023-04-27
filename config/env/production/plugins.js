module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: "mailgun",
      providerOptions: {
        key: env("MAILGUN_API_KEY"),
        domain: env("MAILGUN_DOMAIN"),
        url: env("MAILGUN_URL", "https://api.mailgun.net"),
      },
      settings: {
        defaultFrom: env("MAILGUN_DEFAULT_FROM", "myemail@protonmail.com"),
        defaultReplyTo: env(
          "MAILGUN_DEFAULT_REPLY_TO",
          "myemail@protonmail.com"
        ),
      },
    },
  },
});
