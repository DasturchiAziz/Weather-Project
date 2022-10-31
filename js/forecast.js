const KEY = '96b947a45d33d7dc1c49af3203966408'
// bu mening kalitim. Agar o'zingiz olsangiz va ishlamasa buni ishlating.
// Agar ishlamay qolsa unda 1 soatda so'rovlar soni limitdan oshib ketgan bo'ladi.
// Aloqa: Telegram => @akror_web


const getdate = async (city)=>{
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const quary = `?q=${city}&units=metric&appid=${KEY}`
        loder(true)
    const req = await fetch(base + quary)
    const date = await req.json()
        loder(false)

    return date
}
// getdate('London').then((date)=> {console.log(date);} )