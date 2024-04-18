
let miseUrl = "http://spartacodingclub.shop/sparta_api/seoulair"
fetch(miseUrl).then(res => res.json()).then(data => {
    let mise = data['RealtimeCityAir']['row'][0]['IDEX_MVL']
    console.log(mise)
    let temp_html = ``;
    if (mise > 60) {
        temp_html = `<span style='color:red';>나쁨</span>`
    } else {
        mise_html = `<span style='color:white';>좋아요</span>`
    };

    $('#mise').append(mise_html);
})

let tempUrl = "http://spartacodingclub.shop/sparta_api/weather/seoul"
fetch(tempUrl).then((response) => response.json()).then((data) => {
    let temp = data['temp']
    console.log(temp)
    let temp_html = ``
    if (temp > 20) {
        temp_html = `<span style='color:orange'>${temp}</span>`
    } else {
        temp_html = `<span>${temp}</span>`
    };
    $('#temp').append(temp_html)
});


