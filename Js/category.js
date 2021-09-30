var category=(function(){
    var $container=$("[name='category']");
    var create=function(name,src){
        return '<span style="min-width:160px;color: #000000c7; font-weight: 650;">\
        <img src="'+src+'" width="30px">\
            <span class="uk-text-bold uk-margin-small-left">'+name+'</span>\
        </span>'
    };
    var Category= function(){
        var options=[
            {"name":"Baked","image":"Img/carrows.png"},
            {"name":"Sweet","image":"Img/sweet.png"},
            {"name":"Hot Dish","image":"Img/hotdish.png"},
            {"name":"Fast Food","image":"Img/mcd.png"},
            {"name":"Salads","image":"Img/mcd.png"}
        ];
        options.forEach(function(option){
            $container.append(create(option.name,option.image));
        });
    };
    
    return Category;
})();