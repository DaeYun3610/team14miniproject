
    let url = "http://spartacodingclub.shop/sparta_api/seoulair"
    fetch(url).then(res => res.json()).then(data => {
        let mise = data['RealtimeCityAir']['row'][0]['IDEX_MVL']
        console.log(mise)
        let temp_html = ``;
        if (mise > 60) {
            temp_html = `<span style='color:red';>나쁨</span>`
        } else {
            temp_html = `<span style='color:white';>좋아요</span>`
        };

        $('#mise').append(temp_html);
    })


