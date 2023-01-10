For installation of dependencies frontend React  App
Go to root folder of app [extracted]
run this command
 <!--  -->
 npm i
 <!--  -->
 if error thrown 
 <!--  -->
 npm i --legacy-peer-deps

 to run the react app 
 run this command 
 <!--  -->
 npm run start

 if error shows unsupported ssl
 run this code in terminal 
 <!--  -->
 $env:NODE_OPTIONS = "--openssl-legacy-provider"
<!-- Note :- this is for powershell terminal only  -->
 after it run this command again to start the app
 <!--  -->
 npm run start