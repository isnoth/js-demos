const waitFor = (ms) => new Promise(r => setTimeout(r, ms));

// sequence
async function test() {
    await waitFor(1000)
    console.log('ok')

    for (i of Array(1,2,3)) {
        await waitFor(1000)
        console.log('ok')
    }
}
test()

