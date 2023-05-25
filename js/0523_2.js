var content = document.getElementById('content')
var content2 = document.getElementById('content2')
var content3 = document.getElementById('content3')
var content4 = document.getElementById('content4')

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
        var output = "<table border='1'>"
        output += "<tr><th>순번<th>이름<th>전화번호<th>이메일"
        data.forEach((ele, i) => {
            output += "<tr>"
            output += "<td><a href='#' onclick='detail(" + (i + 1) + ")'>" + (i + 1)
            output += "<td>" + ele.username
            output += "<td>" + ele.phone
            output += "<td>" + ele.email
        });
        content.innerHTML = output
    });

function detail(id) {
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then((response) => response.json())
        .then((data) => {
            var output = "<table border='1'>"
            output += "<tr><th>순번<th>이름<th>전화번호<th>이메일"
            output += "<tr>"
            output += "<td>" + data.id
            output += "<td>" + data.username
            output += "<td>" + data.phone
            output += "<td>" + data.email
            content2.innerHTML = output
        });
}


fetch('https://jsonplaceholder.typicode.com/albums/')
    .then((response) => response.json())
    .then((data) => {
        var output = "<table border='1'>"
        output += "<tr>"
        output += "<th>Index"
        output += "<th>userID"
        output += "<th>ID"
        output += "<th>Title"
        data.forEach((ele, i) => {
            output += "<tr>"
            output += "<td><a href='#' onclick='detail2(" + (i + 1) + ")'>" + (i + 1)
            output += "<td>" + ele.userId
            output += "<td>" + ele.id
            output += "<td>" + ele.title
        });
        content3.innerHTML = output
    });

function detail2(id) {
    fetch('https://jsonplaceholder.typicode.com/albums/' + id)
        .then((response) => response.json())
        .then((data) => {
            var output = "<table border='1'>"
            output += "<tr>"
            output += "<th>Index"
            output += "<th>userID"
            output += "<th>ID"
            output += "<th>Title"
            output += "<tr>"
            output += "<td>" + data.userId
            output += "<td>" + data.id
            output += "<td>" + data.title
            content4.innerHTML = output
        });
}


am5.ready(function () {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
        am5themes_Animated.new(root)
    ]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart = root.container.children.push(
        am5percent.PieChart.new(root, {
            endAngle: 270
        })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var series = chart.series.push(
        am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category",
            endAngle: 270
        })
    );

    series.states.create("hidden", {
        endAngle: -90
    });

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data

    var data = [
        {
            category: "Lithuania",
            value: 501.9
        }, {
            category: "Czechia",
            value: 301.9
        }, {
            category: "Ireland",
            value: 201.1
        }, {
            category: "Germany",
            value: 165.8
        }, {
            category: "Australia",
            value: 139.9
        }, {
            category: "Austria",
            value: 128.3
        }, {
            category: "UK",
            value: 99
        }
    ]
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            for (var i = 0; i < data.length; i++) {
                data[i].category = json[i].title
            }
            series.data.setAll(data)
            series.appear(1000, 100);
        })


}); // end am5.ready()





