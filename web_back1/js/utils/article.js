var article = {
    //搜索文章
    search_arti: function (param, callback) {
        $.get(urlList.searchArtiUrl, param, function (res) {
            callback(res);
        })
    },
    //删除文章
    delete_arti: function (param, callback) {
        $.get(urlList.deleteWenUrl, param, function (res) {
            callback(res);
        })
    },
    //发布文章
    release_arti: function (param, callback) {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('post', urlList.releaseArtiUrl);
            xhr.onload = function() {
                callback(xhr.response);
            };
            xhr.send(param);
    },
    //注意用post提交表单时，用下边的方法，而不是$.post
    edit_arti: function (fd,callback) {
        $.ajax({
            url: urlList.editUrl,
            type: 'post',
            data: fd,
            processData: false,
            contentType: false,
            success: function(res) {
                callback(res);
            }
        })
    }
}
