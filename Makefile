lint : #npx eslint
	npx eslint .
fix : #eslint fix 
	npx eslint --fix .
do : # file1.json file2.json
	gendiff __fixtures__/file1.json __fixtures__/file2.json
do1 : # file3.yaml file4.yaml
		gendiff __fixtures__/file3.yaml __fixtures__/file4.yaml
test: # npm test
	npm test
test-coverage: # test coverage
	npm test -- --coverage --coverageProvider=v8
publish: # npm publish
	npm publish
install : # npm install
	npm ci