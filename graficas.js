const firebaseConfig = {
    apiKey: "AIzaSyDjyAKpAW6s2OqBk6X91Db9a1AUdQE2RH0",
    authDomain: "primero-892eb.firebaseapp.com",
    databaseURL: "https://primero-892eb-default-rtdb.firebaseio.com",
    projectId: "primero-892eb",
    storageBucket: "primero-892eb.appspot.com",
    messagingSenderId: "68447092592",
    appId: "1:68447092592:web:739a95b4cff50882ea99b5",
    measurementId: "G-H4XSQ35XP0"
};

firebase.initializeApp(firebaseConfig);

var graf1= document.getElementById('chart1');
var graf2= document.getElementById('chart2');

var Llenado1=firebase.database().ref("PRUEBA/Gramos_calculados_Tanque_1");
var Llenado2=firebase.database().ref("PRUEBA/Gramos_calculados_Tanque_2");

var layout1 = {
    title:'Concentración tanque 1',
    height: 350,
    width: 500,
    font: {
      family: 'Lato',
      size: 16,
      color: 'rgb(0,0,255)'
    },
    //fondo
    plot_bgcolor: 'rgba(255,255,255,0.1)',
    margin: {
      pad: 10
    },
    //Eje X
    xaxis: {
      title: 'Tiempo',
      titlefont: {
        color: 'black',
        size: 12
      },
      rangemode: 'tozero'
    },
    //Eje Y
    yaxis: {
      title: 'Gramos 1',
      titlefont: {
        color: 'black',
        size: 12
      },
      rangemode: 'tozero'
    }
};

var layout2 = {
    title:'Concentración tanque 2',
    height: 350,
    width: 500,
    font: {
        family: 'Lato',
        size: 16,
        color: 'rgb(0,0,255)'
    },
    //fondo
    plot_bgcolor: 'rgba(255,255,255,0.1)',
    margin: {
        pad: 10
    },
    //Eje X
    xaxis: {
        title: 'Tiempo',
        titlefont: {
        color: 'black',
        size: 12
        },
        rangemode: 'tozero'
    },
    //Eje Y
    yaxis: {
        title: 'Gramos 2',
        titlefont: {
        color: 'black',
        size: 12
        },
        rangemode: 'tozero'
    }
};

Plotly.plot(graf1,[{y:[0],type:'line'}],layout1);
Plotly.plot(graf2,[{y:[0],type:'line'}],layout2);

Llenado1.on("value",function(snapshot){
    var Y =snapshot.val();
    Plotly.extendTraces(graf1,{y:[[Y]]}, [0]);
});

Llenado2.on("value",function(snapshot){
var Y =snapshot.val();
Plotly.extendTraces(graf2,{y:[[Y]]}, [0]);
});
