build:
	@rm -rf dist
	@mkdir -p dist
	@cp ./src/types/output.d.ts dist/schemaValidator.d.ts
	@tsc && node ./js/index.js
	@rm -rf js

publish:
	@npm login --scope=@block-wallet --registry=https://npm.pkg.github.com
	@npm publish