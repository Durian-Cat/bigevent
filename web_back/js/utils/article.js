var article = {
    show:function(){
        $.get(URLIST.article_show,{key:key,type:type,state:state,page:page,perpage:perpage,id:id},function(res){
            callBack(res);
        })
    }
}