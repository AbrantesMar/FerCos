runiOS:
	npx react-native run-ios --simulator='iPhone 14 (16.4)'

podInstall:
	cd ios
	pod podInstall
	cd ..

releaseiOS:
	npx react-native run-ios --configuration Release

setPrompt:
	export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin:$PATH"
	npx react-native start

start:
	npx react-native start

startMobile:
	npm install axios
	make podInstall 
	make start

startWeb
	brew services start mongodb-community@6.0
	cd ..
	cd Fercos.api
	npm install body-parser cors express helmet morgan
	npm start
	

db: 
	brew services stop mongodb-community@6.0