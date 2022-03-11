module.exports = {
  extends: [
    "plugin:jsdoc/recommended",
  ],

  rules: {
    "jsdoc/match-description": [
      "warn",
      {
        matchDescription: "[\\s\\S]*\\S$",
      },
    ],

    // Just a random rule to show that ESLint is working
    "no-console": "warn",
  },
};
