# online-restaurant
Flow:
Open Mater.html file in your preferred browser and you will see the left side bar and all the restaurants provided by api. on clicking any of the restaurants, more details about that restaurant will be shown along with the menu details. There is a filter button on top right corner, if you click on it the filter light box will open.
 
 Details about individual files :

Master.html file provides container for everything that you see in this online restaurant. I have tried to keep things decoupled from each other. there is separate js file to dispaly individual things.
tree.js : Responsible for showing left side bar with all five options(home, order, notification, help & support and settings).
restaurents.js : Does api call to fecth the deta for all available restaurants and dispalys in the containter provided by Matser.html file.
restaurant.js : Does api call to fecth details about one restaurant and displays it in the container provided by Matser.html file.
menu.js : Does api call to fecth the menu details about one restaurant and displays it in the container provided by Matser.html file.
master.js : instantiates tree and home js files.
itemCatgeory.js : Displays all the category available for menu for single restaurant.
home.js : instantiate category, restaurant and filter js files.
filter.js : Displays filter light box.
category.js : Displays Restaurant cantegory.



![image](https://user-images.githubusercontent.com/50864824/135609068-896c910c-c847-4b01-8f11-e3d4a2483bab.png)

![image](https://user-images.githubusercontent.com/50864824/135609202-c52f7818-d4f4-4c0d-9dfc-4651ee9e19da.png)

![image](https://user-images.githubusercontent.com/50864824/135609302-10447044-5854-4883-a12f-91cd430c1c53.png)


