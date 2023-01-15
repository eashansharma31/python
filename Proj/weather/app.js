function fetch_data(){
    var cityname=document.getElementById('city').value
    if(cityname===""){
        alert("enter city name")
    }
    console.log('HI')
    var url="https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=492ac9c5809a30780347397e338e8d00&units=metric"
    fetch(url)
    .then(response =>response.json())
    .then(data =>{
        var code=data['cod']
        if(code==='404'){
            alert('City not found')
        }
        else{
            var city_temp =data['main']['temp']
            var icon=data['weather']['0']['icon']
            var icon_url='http://openweathermap.org/img/wn/'+icon+'@2x.png'
            document.getElementById('result').innerHTML=
            `<img src=`+icon_url+`>`+`<br>`+`<h3>The Temperature is:`+city_temp+`&deg;C</h3>`
        }
    })
}