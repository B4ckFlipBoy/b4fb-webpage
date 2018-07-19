let testdata = {
  a: 1
};
let vm = new Vue({
    data: testdata,
    beforeCreate: function () {
        // `this` points to the vm instance
        console.log('beforeCreate');
    },
    created: function () {
        console.log('created');
    },
    beforeMount: function () {
        console.log('beforeMount');
    },
    mounted: function () {
        console.log('mounted');
    },
    beforeUpdate: function () {
        console.log('beforeUpdate');
    },
    updated: function () {
        console.log('updated');
    },
    beforeDestroy: function () {
        console.log('beforeDestroy');
    },
    destroyed: function () {
        console.log('destroyed');
    }
});
let dev1 = new Vue({
    el: '#dev-1',
    data: {
        msg: 'Hello',
        rawHtml: '<span style="color: red">This should be red</span>',
        dynamicId: 'hundekuchen'
    }
});