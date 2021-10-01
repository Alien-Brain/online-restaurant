var restaurant=(function(){
    var $container=$("[name='restaurant']");
    var _restaurantDetailsUrl="https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/restaurantDetails";
    var _getRestaurantElement=function(iamgeUrl,description,name,openingHour,contactNumber,websiteUrl){
        return '<div class="uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>\
        <div style="border-radius:20px" class="uk-flex-last@s uk-card-media-right uk-cover-container">\
            <img src="'+iamgeUrl+'" alt="" uk-cover>\
            <canvas width="600" height="400"></canvas>\
        </div>\
        <div>\
            <div class="uk-card-body">\
                <h3 style="color: #000000c7; font-weight: 650; font-size: xx-large" class="uk-card-title">'+name+'</h3>\
                <span style="color: #000000c7; font-weight: 500;font-size:15px">\
                '+description+'\
                </span>\
                <div class="uk-margin-top">\
                <div>\
                <span uk-icon="clock" class="uk-margin-small-right">\
                </span>\
                '+openingHour+'\
                </div>\
                <div class="uk-margin-top">\
                <span uk-icon="receiver" class="uk-margin-small-right">\
                </span>\
                '+contactNumber+'\
                </div>\
                <div class="uk-margin-top">\
                <span uk-icon="world" class="uk-margin-small-right">\
                </span>\
                '+websiteUrl+'\
                </div>\
                </div>\
            </div>\
        </div>\
    </div>';
    };
    var _getMenuElement=function(){

    };
    var Restaurant = function(options){
      var _id=options.id;
      $.ajax({
          url:_restaurantDetailsUrl,
          method:'GET'
      }).then(function(data){
          var resData=data.restaurantDetails.find(function(res){return res.id===_id });
          if(resData){
            $container.append(_getRestaurantElement(
                resData.restaurantImage
                ,resData.restaurantDescription
                ,resData.restaurantName
                ,resData.openingHours
                ,resData.contactNumber
                ,resData.websiteUrl
                )); 
          }
      });
    };
    return Restaurant;
})();