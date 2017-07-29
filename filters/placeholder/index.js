export default (Vue) => {
    Vue.filter('morph-placeholder', (value, placeholder) => {
        return replace(value, placeholder);
    });

    Vue.prototype.$morphPlaceholder = (value, placeholder) => {
        console.log(placeholder)
        return replace(value, placeholder);
    };

    function replace(value, placeholder) {
        return placeholder;
    }
};