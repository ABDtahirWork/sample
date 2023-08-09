const customTimer = async (time) => {
    await new Promise((resolve ,reject) => {
        setTimeout(()=>{
            console.log(`This is custom timer of ${time} mili secs`)
            resolve()
        } , time)
    })
}


async function runLoop () {
    console.log("A")
    await customTimer(2000)
    console.log("B")
    await customTimer(3000)
    console.log("C")
}

runLoop()