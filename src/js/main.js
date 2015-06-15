requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app'
    }
});

requirejs(['jquery'], function ($) {
        console.log('Welcome to hell!');
});
