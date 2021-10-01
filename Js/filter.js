var filter=(function(){
    var _cushine=["All","Fast food","American food", "Pizza","Asian","Desert","Mexican","Breakfst"];
    var _getCushineElement=function(){
        var $flexParent=$('<div class="uk-flex"></div>');
        _cushine.forEach(function(cus){
            $flexParent.append('<button class="uk-button uk-button-default uk-margin-left uk-margin-top uk-border-rounded" style="color:#ff6933 !important;background-color:#ffb9b924;font-weight:700"><span>'+cus+'</span></button>');
        });
        return $flexParent[0].innerHTML;
    };
    var $container=$("[name='filter']");
    var _element='<div name="filterModal" uk-modal>\
    <div class="uk-modal-dialog uk-modal-body" style="border-radius:20px;width:400px">\
    <button class="uk-modal-close-default" type="button" uk-close></button>\
        <h2 style="font-size:x-large;font-weight:700">Search filters</h2>\
        <h2 style="font-size:x-large;font-weight:700">Sort by</h2>\
        <div class="uk-flex uk-flex-middle">\
            <div>\
                <span>\
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" id="SvgjsSvg1001" width="50" height="50" version="1.1"><defs id="SvgjsDefs1002"></defs><g id="SvgjsG1008" transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M14.719 17.625q-0.234 0.234-0.586 0.422t-0.633 0.281q-0.844 0.281-1.664 0.023t-1.383-0.727q-0.094-0.094-0.070-0.188t0.117-0.141q0.891-0.281 1.406-0.891t0.703-1.313q0.141-0.656-0.047-1.266t-0.281-1.266q-0.094-0.516-0.070-1.008t0.211-0.961q0-0.094 0.094-0.094t0.141 0.047q0.281 0.609 0.727 1.078t0.938 0.891 0.891 0.914 0.492 1.148q0.047 0.281 0.047 0.516 0.047 0.703-0.234 1.406t-0.797 1.125zM17.531 9.609q-0.563-0.516-1.172-0.938t-1.172-0.984q-1.125-1.125-1.477-2.625t0.117-3.047q0.094-0.234-0.070-0.398t-0.398-0.070q-0.563 0.234-1.055 0.563t-0.961 0.656q-1.453 1.219-2.297 2.883t-0.961 3.563 0.586 3.727q0 0.094 0.023 0.188t0.023 0.188q0 0.422-0.375 0.609t-0.75-0.141q-0.094-0.141-0.141-0.234-0.75-0.938-1.008-2.133t-0.070-2.367q0.047-0.281-0.211-0.422t-0.445 0.094q-0.938 1.219-1.359 2.695t-0.328 2.977q0 0.422 0.070 0.867t0.211 0.867q0.328 1.125 0.891 2.063 0.891 1.5 2.391 2.508t3.234 1.242q1.828 0.234 3.68-0.188t3.258-1.688q1.031-0.984 1.617-2.273t0.633-2.695-0.516-2.719q-0.047-0.094-0.070-0.164t-0.070-0.164q-0.422-0.797-0.938-1.453-0.188-0.281-0.398-0.516t-0.492-0.469z" fill="#ff6933" class="color000 svgShape"></path></svg></g></svg>\
                </span>\
            </div>\
            <div class="uk-margin-left">\
            <div style="color:#ff6933;font-weight:500">Open</div>\
            </div>\
        </div>\
        <h2 style="font-size:x-large;font-weight:700">Cusine</h2>\
        <div>\
        '+_getCushineElement()+'\
        </div>\
        <div class="uk-margin-top" style="color:#ff6933">See more</div>\
        <p class="uk-text-center">\
            <button class="uk-button uk-button-ultra-primary uk-border-rounded uk-text-capitalize" style="width:300px" type="button">Apply filters</button>\
        </p>\
    </div>\
</div>';
    var Filter=function(){
        var $element=$(_element);
        $container.append($element);
        $container.on('mousedown',function(){
            UIkit.modal($element).show();
        });
    };
    return Filter;
})();