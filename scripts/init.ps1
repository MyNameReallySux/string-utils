git init
hub create

$parent = (get-item . ).parent.FullName
$parts = $parent -split '-'

$TextInfo = (Get-Culture).TextInfo
for($i = 0; $i -lt $parts.Count; $i++){
	$parts.Item($i) = $TextInfo.ToTitleCase($parts.Item($i))
}

$title = $parts -join ' '
"#$title" >> README.md

npm init -y

npm install webpack babel-core babel-loader babel-preset-env babel-preset-es2015 babel-preset-es2015-native-generators eslint eslint-loader mocha --save-dev
npm install babel-polyfill --save

touch .gitignore
touch .npmignore

"./node_modules" > .gitignore
"./node_modules" > .npmignore

git add *
git commit -m "First Commit"

git push origin master --set-upstream

echo "run 'npm init' to override current settings and customize."
echo "make sure to customize your '.gitignore' file."