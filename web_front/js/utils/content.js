var content={
    show:function(callBack){
        $.get(URLIST.content_show,function(res){
            callBack(res);
        })

    }
}