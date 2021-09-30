var menu=(function(){
var $container=$("[name='menu']");
var _url="https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/menu";
var onlyUnique = function(value, index, self) {
    return self.indexOf(value) === index;
  }  
var _getElement=function(imageUrl,name,price){
    return  '<div class="uk-margin-left uk-margin-top" style="width:400px;height:400px">\
    <div class="uk-card-media-top" >\
        <img  src="'+imageUrl+'" style="max-width:400px;max-height:250px;min-width:400px;min-height:250px;border-radius:20px">\
    </div>\
    <div class="uk-card-body uk-flex uk-flex-between">\
    <div>\
    <h3 style="color: #000000c7; font-weight: 700;font-size:20px">'+name+'</h3>\
    </div>\
    <div>\
    <h2 style="color: #8400e6; font-weight: 450;font-size:18px">'+price+'</h3>\
    </div>\
    </div>\
  </div>';
}; 
var Menu=function(options){
    var _resId=options.Id;
    var _resName=options.name;
    var _menuItems=[];
    var itemCategories=["All"];
  $.ajax({
   url:_url,
   method:'GET'
  }).then(function(data){
      var _menu=data.menu;
    for(var i=0;i< _menu.length;i++){
        var _menuItem=_menu[i];
        if(_menuItem){
            var _resNames=JSON.parse(_menuItem.restaurantName);
            if(_resNames && _resNames.some){
                if(_resNames.some(function(name){return name===_resName;})){
                    _menuItems.push(_menuItem);
                }
            }
        }
    }
    _menuItems.forEach(function(_menuItem){
        if(_menuItem.itemCategory){
            var _category = JSON.parse(_menuItem.itemCategory);
            itemCategories=itemCategories.concat(_category);
        }
        $container.append(_getElement(_menuItem.itemPhoto,_menuItem.itemName,_menuItem.itemCost));
    });
   
    var _uniqueueCategories=itemCategories.filter(onlyUnique);
    var ItemCategory= new itemCategory({categories:_uniqueueCategories});
  });
};
return Menu;

})();