```javascript
// npm install babel-loader @babel/core @babel/preset-env -D 
// npm install @babel/plugin-proposal-class-properties -D
// npm install @babel/plugin-proposal-decorators -D

module: {
	rules: [
		{
			test: /\.js/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
					plugins: [
						// ['@babel/plugin-proposal-decorators', {legacy: true}],
						['@babel/plugin-proposal-class-properties', {loose: true}],
					],
				},
			},
		},
	]
}
```
