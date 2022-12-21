lint : #npx eslint
	npx eslint .
fix : #eslint fix 
	npx eslint --fix .
do : # json
	gendiff __fixtures__/flat-structures1.json __fixtures__/flat-structures2.json
do1 : # yaml
	gendiff __fixtures__/flat-structures1.yaml __fixtures__/flat-structures2.yaml
do2 : # nested structures stylish json
	gendiff __fixtures__/nested-structures1.json __fixtures__/nested-structures2.json 
do3 : # nested structures stylish yaml
	gendiff __fixtures__/nested-structures1.yaml __fixtures__/nested-structures2.yaml
do4 : # plain json
	gendiff --format plain __fixtures__/nested-structures1.json __fixtures__/nested-structures2.json 
do5 : # plain yaml
	gendiff --format plain __fixtures__/nested-structures1.yaml __fixtures__/nested-structures2.yaml
test: # npm test
	npm test
test-coverage: # test coverage
	npm test -- --coverage --coverageProvider=v8
publish: # npm publish
	npm publish
install : # npm install
	npm ci