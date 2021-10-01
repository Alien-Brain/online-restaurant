var itemCategory=(function(){
    var $container=$("[name='itemCategories']");
    var _getElement=function(name){
      return '<div class="uk-margin-right" style="cursor:pointer">\
      <span style="\
        background-color: #9d00ff33;\
         display: inline-block;\
         padding: 0 10px;\
         line-height: 2;\
         font-size: 15px;\
         vertical-align: middle;\
         white-space: nowrap;\
         border-radius: 5px;\
      ">'+name+'\
      </span>\
      </div>';  
    };
 var ItemCategory =function(options){
     var _categories = options.categories;
     _categories.forEach(function(itemCategory){
        $container.append(_getElement(itemCategory));
     });
     $container.children(':first').find('span').css({'color':"white",'background-color':"#4e00e6d6"});
 };
  
 return ItemCategory;
})();