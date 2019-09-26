var user = {
    login: function (name,pwd,callback) {
            $.post(urlList.loginUrl, {
                user_name: name,
                password: pwd
            }, function (res) {
                callback(res);
            });
        },
    logOut: function(callback) {
        $.post(urlList.logoutUrl,function() {
            callback();
        });
    },
    getUserInfo: function(callback) {
        $.get(urlList.getInfoUrl,function(res) {
            // $('#userName').html(res.data.nickname);
            // $('#userImg').prop('src',res.data.user_pic);
            callback(res);
        })
    }
    };