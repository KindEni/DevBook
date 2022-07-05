require("@babel/register")({
    "plugins": [
        "@storybook/babel-plugin-require-context-hook"
    ],
    "presets": ["@babel/env","babel/react"]
});