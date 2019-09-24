var article = {
   /**
    * 
    * @param {*} param 传入的是对象{key:key,state:state}
    * @param {*} callBack  回调函数
    */
    show:function(param,callBack){
        $.get(URLIST.article_show,param,function(res){
            callBack(res);
        })
    },
    del:function(id,callBack){
        $.get(URLIST.article_del,{id:id},function(res){
            callBack(res);
        })
    },
    add:function(fd,callBack){
        $.ajax({
            url:URLIST.article_add,
            type:'post',
            data:fd,
            processData:false,
            contentType:false,
            success:function(res){
                callBack(res);
            }
        })
    },
    edit:function(callBack){
        $.post(URLIST.article_edit,function(res){
            callBack(res);
        })
    }
    

}