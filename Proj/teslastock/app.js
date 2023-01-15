function fetchdata(){
    var sharetime=[]
    var sharevolume=[]
    var low=[]
    var high=[]
    const url='https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=TSLA&interval=5min&apikey=Q74FJRWIV44AW15Q'
    fetch(url)
    .then(response => response.json())
    .then( data =>{
      // console.log(data['Time Series (5min)'])
        var mydata=data['Time Series (5min)']
        var key,count=0
        document.getElementById('card1').style.visibility='visible'
        for(key in mydata){
            if(mydata.hasOwnProperty(key)){
                var mykey=key.split(" ")
                //console.log(mykey[1])
                sharetime[count]=mykey[1]
                sharevolume[count]=Number(mydata[key]['5. volume'])
                high[count]=Number(mydata[key]['2. high'])
                low[count]=Number(mydata[key]['3. low'])
                //console.log(low[count])
                document.getElementById('cdate').innerHTML=
                `<h3>Date: `+mykey[0]+`</h3>`
                count=count+1

            }
        }
        var max_share= Math.max(...high)
        console.log(max_share)
        var min= Math.min(...low)
        console.log(min)
        document.getElementById('max_min').style.visibility='visible'
        document.getElementById('max').innerHTML=
                `<h3>Max: `+max_share+`$</h3>`
        document.getElementById('min').innerHTML=
                `<h3>Min: `+min+`$</h3>`
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      var datarows=[['Time','Volume Traded']]
      for (var i=0;i<count;i++){
        datarows.push([sharetime[i],sharevolume[i]])
      }

      function drawChart() {
        var data = google.visualization.arrayToDataTable(datarows);

        var options = {
          title: 'Share Performance',
          curveType: 'function',
          legend: { position: 'bottom' },
          backgroundColor:{fill:'#212529'},
          hAxis:{
            textStyle:{color:'#FFF'}
          },
          vAxis:{
            textStyle:{color:'#FFF'}
          },
          titleTextStyle:{color:'#FFF'},
          legendTextStyle:{color:'#FFF'},
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
    })
}