/**
 * Create by pirlo
 * Date: 2022/10/25 11:22 AM
 * Update: 2022/10/25 11:22 AM
 */

import PageList from './PageList/index.vue';

const components = {
    PageList,
};

function install(Vue) {
    const keys = Object.keys(components);
    keys.forEach((name) => {
        const component = components[name];
        Vue.component(component.name || name, component);
    });
}

export default {
    install,
    ...components,
};

