category = {
    queryArtical: function (callback) {
        $.get(urlList.queryArticalUrl, function (res) {
            callback(res);
        })
    },
    addArtical: function (name, slug, callback) {
        $.post(urlList.addArticalUrl, {
            name: name,
            slug: slug
        }, function (res) {
            callback(res);
        })
    },
    deleteArtical: function (id, callback) {
        $.post(urlList.deleteAtiUrl, {
            id: id
        }, function (res) {
            callback(res);
        });
    },
    editArtical: function (id, name, slug, callback) {
        $.post(urlList.editArtiUrl, {
            id: id,
            name: name,
            slug: slug
        }, function (res) {
            callback(res);
        });

    }

}