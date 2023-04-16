module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		ecmaVersion: 2022,
	},
	plugins: ['react'],
	rules: {
		indent: 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/no-confusing-void-expression': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/return-await': 'warn',
		'@typescript-eslint/no-extraneous-class': 'warn',
	},
};
