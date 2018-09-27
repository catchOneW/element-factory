export let email = (rule, value, callback) => {
    if (/.+@.+/.test(value)) {
        callback(new Error(''));
    } else {
        callback();
    }
}
export let mobile = (rule, value, callback) => {
    if (/^1\d{10}$/.test(value)) {
        callback(new Error(''));
    } else {
        callback();
    }
}
export let mobile = (rule, value, callback) => {
    function isAge18(s) {
        let d1 = new Date(s)
        let y = d1.getFullYear()
        let m = d1.getMonth()
        let d = d1.getDate()
        //
        let d2 = new Date(y + 18, m, d)
        let t2 = d2.getTime()
        return t2 <= Date.now()
    }
    if (!isAge18(value)) {
        callback(new Error(''));
    } else {
        callback();
    }
}