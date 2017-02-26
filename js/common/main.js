requirejs.config({
    baseUrl: '/',
    paths: {

        // ���������·������
        jquery: 'lib/jquery/jquery.min',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
        jqueryCookie: 'lib/jquery-cookie/jquery.cookie',

        // �Լ�д��·������
        userList: 'js/user/list',
        userProfile: 'js/user/profile',
        common: 'js/common/common'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});

// ���е�ҳ�涼��Ҫ������js���ȼ������ǡ�
require(['jquery', 'bootstrap', 'common']);

/*
 *�����ȡҳ���pathname��Ȼ���Ӧ�ļ���js��
 * */
(function(window) {

    var pathname = window.location.pathname;
    switch(pathname) {
        case '/html/user/list.html':
            require(['userList']);
            break;
        case '/html/user/profile.html':
            require(['userProfile']);
            break;
    }


})(window);
