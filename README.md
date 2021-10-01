# online-restaurant
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
