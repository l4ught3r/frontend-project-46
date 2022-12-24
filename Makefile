lint : #npx eslint
	npx eslint .
fix : #eslint fix 
	npx eslint --fix .
test: # npm test
	npm test
test-coverage: # test coverage
	npm test -- --coverage --coverageProvider=v8
publish: # npm publish
	npm publish
install : # npm install
	npm ci