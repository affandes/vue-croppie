export const _use = (plugin) => {
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(plugin)
    }
};

export const _registerComponent = (Vue, component) => {
    Vue.component(component.name, component)
};

export const _registerComponentProgrammatic = (Vue, property, component) => {
    if (!Vue.prototype.$croppie) Vue.prototype.$croppie = {};
    Vue.prototype.$croppie[property] = component
};