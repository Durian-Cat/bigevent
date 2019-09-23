var category = {
    //显示文章类别
    show: function (callBack) {
        $.get(URLIST.category_show, function (res) {
            callBack(res);
        })
    },

    //删除文章类别
    del: function (id, callBack) {
        $.post(URLIST.category_del, {
            id: id
        }, function (res) {
            callBack(res);
        })
    },

    //新增文章类别
    add: function (name, slug, callBack) {
        $.post(URLIST.category_add, {
            name: name,
            slug: slug
        }, function (res) {
            callBack(res);
        })
    },

    //编辑文章类别
    edit: function (id, name, slug, callBack) {
        $.post(URLIST.category_edit, {
            id: id,
            name: name,
            slug: slug
        }, function (res) {
            callBack(res);
        })
    }
}