"use strict"

let filter_list = (list) => list.filter(i => typeof i !== "string")

let first_non_repeating_letter = (str) => str[Array.from(str
    .toLowerCase()
    .split("")
    .map((x, i) => [x, [i]])
    .reduce((acc, [x, i]) => new Map([...acc, [x, (acc.get(x) || []).concat(i)]]), new Map())
    .values()).filter(i => i.length === 1).flat()[0]] || "";

let digital_root = (number) => {
    const buffer = Array.from(String(number), Number)
        .reduce((acc, x) => acc + x, 0)
    return buffer.toString().length === 1 ? buffer : digital_root(buffer)
}

let pair_count = (arr, target) => arr.flatMap(v => arr.map(e => v + e)).filter(e => e === target).length / 2

let name_sort = (data, main_delim, sec_delim) => Array.from(data
    .split(main_delim)
    .map(p => p.split(sec_delim).reverse())
    .reduce((acc, [k, v]) => new Map([...acc, [k, (acc.get(k) || []).concat(v).sort()]]), new Map()))
    .sort((l, r) => l[0] < r[0] ? -1 : 1)
    .flatMap(s => s[1].map(n => `(${s[0].toUpperCase()}, ${n.toUpperCase()})`))
    .reduce((acc, s) => acc + s)

let next_bigger = (number) => {
    const [ans, [_, to], [val, __]] = Array.from(String(number), Number)
        .reverse()
        .reduce((acc, n, ni) =>
                acc[2][0] !== -1 ? [acc[0].concat(n), acc[1], acc[2]] :
                    n < acc[1][0] ? [acc[0].concat(acc[1][0]), acc[1], [n, ni]] :
                        n > acc[1][0] ? [acc[0].concat(n), [n, ni], acc[2]] :
                            acc,
            [[], [-1, -1], [-1, -1]]
        );
    return val === -1 ? -1 : parseInt([...ans.slice(0, to), val, ...ans.slice(to + 1)].reverse().join(""))
}

let to_ip_string = (number) => Array(4).fill(number).map((n, i) => (n >> (i * 8)) & 255).reverse().join(".")

console.log("task 1 result: ", filter_list([1, '2', '3', 'asd', 4, 6]))
console.log("task 2 result: ", first_non_repeating_letter("sTreSS"))
console.log("task 3 result: ", digital_root(493193))
console.log("task 4 result: ", pair_count([1, 3, 6, 2, 2, 0, 4, 5], 5))
console.log("task 5 result: ", name_sort("Fred:Corwill;" +
    "Wilfred:Corwill;" +
    "Barney:Tornbull;" +
    "Betty:Tornbull;" +
    "Bjon:Tornbull;" +
    "Raphael:Corwill;" +
    "Alfred:Corwill", ";", ":"))
console.log("task 6 result: ", next_bigger(2017))
console.log("task 7 result: ", to_ip_string(2149583361))