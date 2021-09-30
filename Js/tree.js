var tree=(function(){
var $container=$("[name='tree']"); 
var getLI=function(name,icon,count){
  if(count==0)
  {
    return  '<li class="uk-background-ultra-primary uk-border-rounded" style="height: 40px;">\
    <div style="padding-top: 5px;"> \
        <span uk-icon="'+icon+'" style="margin-right: 10px;"></span>\
        <span class="uk-text-white">'+name+'</span>\
    </div>\
    </li>'
  }
  return  '<li class="uk-border-rounded" style="height: 40px;">\
  <div style="padding-top: 5px;"> \
      <span uk-icon="'+icon+'" style="margin-right: 10px;"></span>\
      <span>'+name+'</span>\
  </div>\
</li>'
  
;}   
var Tree=function(){
  var elements=[
      {"name":"Home","icon":"home"},
      {"name":"Order","icon":"file-text"},
      {"name":"Notification","icon":"mail"},
      {"name":"Help & Support","icon":"question"},
      {"name":"Settings","icon":"cog"}];
      var promo='<span style="font-weight:700;font-size:15px;color:black">Promo & Co</span>';
      var ul=' <ul class="uk-list"></ul>';
     
     $container.append(promo);
     $container.append(ul); 
     var $ul=$container.find('ul');
     var  count=0;
  elements.forEach(function(element){
    $ul.append(getLI(element.name,element.icon,count));
    count++;
  });
};
return Tree;
})();