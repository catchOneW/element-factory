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

isAge18('2000-09-20')
isAge18('2000-09-21')
isAge18('2000-09-22')