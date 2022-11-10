lint : #npx eslint
	npx eslint .
fix : #eslint fix 
	npx eslint --fix .
do : # json
	gendiff __fixtures__/file1.json __fixtures__/file2.json
do1 : # yaml
	gendiff __fixtures__/file3.yaml __fixtures__/file4.yaml
do2 : # nested structures
	gendiff __fixtures__/nested-structures1.json __fixtures__/nested-structures2.json 
test: # npm test
	npm test
test-coverage: # test coverage
	npm test -- --coverage --coverageProvider=v8
publish: # npm publish
	npm publish
install : # npm install
	npm ci