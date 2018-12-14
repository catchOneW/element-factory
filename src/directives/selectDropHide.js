export let selectDropHide = {
    bind(el, binding, vnode, oldVnode) {
        window.onscroll = e => {
            let dropUl = document.querySelector('.el-select-dropdown.el-popper')
            if (dropUl) {
                dropUl.style.display = 'none'
                console.log(dropUl.style);
            }
        }
    },
    inserted(el, binding, vnode, oldVnode) { },
    update(el, binding, vnode, oldVnode) { },
    componentUpdated(el, binding, vnode, oldVnode) { },
    unbind(el, binding, vnode, oldVnode) { },
}