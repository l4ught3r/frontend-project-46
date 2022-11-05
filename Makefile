eslint : #npx eslint
	npx eslint .
fix : #eslint fix 
	npx eslint --fix .
do : # file1.json file2.json
	gendiff files/file1.json files/file2.json