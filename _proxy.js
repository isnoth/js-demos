
const target = {
    foo: 'bar'
}

const proxy = new Proxy(target, {
    get (receiver, name) {
        return name in receiver ? receiver[name]: `not find, ${name}`
    }
})

console.log(proxy.foo)
console.log(proxy.hello)

