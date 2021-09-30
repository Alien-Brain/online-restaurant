var restaurents=(function(){
    var $container=$("[name='restaurents']");
    var $containerToHide=$("[name='category&restaurents']");
    var $containerToShow=$("[name='restaurent&menu']");
    var _url= "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/allRestaurants";
    var _getElement=function(imageUrl,description,name,isOpen){
       return  '<div class="uk-margin-left uk-margin-top" style="max-width:400px">\
        <div class="uk-card-media-top">\
         <img style="height:250px;width:400px;border-radius:20px" src="'+imageUrl+'">\
        </div>\
        <div class="uk-card-body">\
        <div class="uk-flex uk-flex-between">\
        <h2 style="color: #000000c7; font-weight: 700;font-size:20px">'+name+'</h2>\
        <div>\
        <span style="\
        '+(isOpen?"\
         color:#8400e6;\
         background-color: #9d00ff33;\
         display: inline-block;\
         padding: 0 10px;\
         line-height: 2;\
         font-size: 15px;\
         vertical-align: middle;\
         white-space: nowrap;\
         border-radius: 2px;\
         ":"\
         color:#ff6933;\
         background-color: #ffb9b963;\
         display: inline-block;\
         padding: 0 10px;\
         line-height: 2;\
         font-size: 15px;\
         vertical-align: middle;\
         white-space: nowrap;\
         border-radius: 2px;\
         ")+'"\>'+(isOpen?"Open Now":"Closed")+'</span>\
        </div>\
        </div>\
         <span style="color: #000000c7; font-weight: 500;font-size:15px">\
        '+description+'\
        </span>\
        </div>\
      </div>';
    };
 var Restaurents=function(){
    var _onClick=function(id,name){
      $containerToHide.addClass("uk-hidden"); 
      $containerToShow.removeClass("uk-hidden");
      var _restaurent = new restaurent({id:id});
      var _menu= new menu({name:name});
      
    };
    $.ajax({
       url:_url,
       method:"GET" 
    }).then(function(data){
        data.allRestaurants.forEach(function(resData){
           var _element=$(_getElement(resData.restaurantImage,resData.restaurantDescription,resData.restaurantName,resData.isOpen));
           _element.on('mousedown',()=>_onClick(resData.id,resData.restaurantName));
           $container.append(_element); 
        });

    });
 };
 return Restaurents;
})();