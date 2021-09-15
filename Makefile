build:
	@rm -rf dist
	@mkdir -p dist
	@cp ./src/types/output.d.ts dist/schemaValidator.d.ts
	@tsc && node ./js/index.js
	@rm -rf js
