
var data = [
    { a: 1, b: "北京" },
    { a: 2, b: "上海" },
    { a: 3, b: "深圳" },
]

function n2sDic(data) {
    return data.reduce((obj, item) => {
        obj[item.a] = item.b
        return obj
    }, {})
}
function s2nDic(data) {
    return data.reduce((obj, item) => {
        obj[item.b] = item.a
        return obj
    }, {})
}

n2sDic(data)
s2nDic(data)