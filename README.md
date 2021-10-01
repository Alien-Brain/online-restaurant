# online-restaurant
Flow:
Open Mater.html file in your preferred browser and you will see the left side bar and all the restaurants provided by api. on clicking any of the restaurants, more details about that restaurant will be shown along with the menu details. there is a filter button on top left conrner, if you click on it the filter light box will be shown.
 
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
