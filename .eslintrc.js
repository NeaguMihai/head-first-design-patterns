module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint/eslint-plugin',
		'prettier',
		'unicorn',
		'import',
		'simple-import-sort',
    'sonarjs',
	],
	extends: [
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
		'plugin:import/recommended',
		'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',

	],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
    "unicorn/filename-case": [
      "error",
      {
        "cases": {
          "kebabCase": true,
          "pascalCase": true
        }
      }
    ],
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'no-array-constructor': 'error',
		'no-mixed-operators': 'error',
		'import/default': 'off',
		'class-methods-use-this': 'off',
    'sonarjs/no-duplicate-string': 'off',
    quotes: [
			'error',
			'single',
			{
				allowTemplateLiterals: true,
				avoidEscape: true,
			},
		],
		'no-console': [
			'error',
			{
				allow: ['warn', 'error', 'info','table'],
			},
		],
    'prefer-const': [
			'error',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: false,
			},
		],
    'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: ['const', 'let', 'var'],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var'],
			},
		],
    'newline-before-return': 'error',
    "import/no-unresolved": 'off',
    // clasic
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-argument': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
	},
};
