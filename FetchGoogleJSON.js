class FetchGoogleJSON {
    constructor(url, callback){
        fetch(url).then(e=>e.json()).then(d=>{
            callback(new PrettifyGoogleJSON(d).get())
        })
    }
}