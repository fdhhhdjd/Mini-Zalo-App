module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "./tsconfig.json"
	},
	env: {
		es6: true
	},
	extends: [
		"eslint:recommended",
		"plugin:jest/recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:eslint-comments/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:import/typescript"
	],
	plugins: ["react", "detox", "react-hooks", "import"],
	ignorePatterns: ["!.*", "dist", "node_modules"],
	rules: {
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "off",
		"react/jsx-filename-extension": ["error", { extensions: [".ts", ".tsx"] }],
		"react/display-name": "off",
		"react/jsx-props-no-spreading": "off",
		"react/state-in-constructor": "off",
		"react/static-property-placement": "off",
		"react/prop-types": "off",
		"react/require-default-props": "off",
		"react/jsx-curly-brace-presence": "error",
		"@typescript-eslint/indent": "off",
		"@typescript-eslint/no-shadow": "error",
		"@typescript-eslint/no-explicit-any": "off",
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"@typescript-eslint/prefer-enum-initializers": "error",
		"no-undef": "off",
		"no-unused-vars": "off",
		"no-case-declarations": "off",
		"@typescript-eslint/no-unused-vars": "error",
		"no-mixed-spaces-and-tabs": "off",
		"react-native/no-inline-styles": "off",
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "variable",
				format: ["camelCase", "UPPER_CASE"],
				types: ["string", "number", "array"],
				leadingUnderscore: "allow"
			},
			{
				selector: "variable",
				types: ["boolean"],
				format: ["PascalCase"],
				prefix: ["is", "should", "has", "can", "did", "will"]
			},
			{
				selector: "parameter",
				format: ["camelCase"],
				leadingUnderscore: "allow"
			},
			{
				selector: "memberLike",
				modifiers: ["private"],
				format: ["camelCase"],
				leadingUnderscore: "allow"
			},
			{
				selector: "typeLike",
				format: ["PascalCase"]
			}
		],
		"import/imports-first": "error",
		"@typescript-eslint/no-shadow": "off",
		"import/order": [
			"error",
			{
				groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
				"newlines-between": "always",
				alphabetize: {
					order: "asc",
					caseInsensitive: true
				},
				pathGroups: [
					{
						pattern: "@/common",
						group: "internal",
						position: "before"
					},
					{
						pattern: "@/redux",
						group: "internal",
						position: "before"
					},
					{
						pattern: "@/model",
						group: "internal",
						position: "before"
					},
					{
						pattern: "@/hooks",
						group: "internal",
						position: "before"
					},
					{
						pattern: "@/httpServices",
						group: "internal",
						position: "before"
					},
					{
						pattern: "@/helper",
						group: "internal",
						position: "before"
					},
					{
						pattern: "@/view",
						group: "internal",
						position: "before"
					},
					{
						pattern: "@/config",
						group: "internal",
						position: "before"
					}
				]
			}
		]
	},

	settings: {
		react: {
			version: "detect"
		}
	}
};
