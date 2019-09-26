var article = {
    search:function(param,callBack){
        $.get(URLIST.article_search,param,function(res){
            callBack(res);
        })
    },
}