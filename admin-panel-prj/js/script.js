$(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $('#sidebar').on('hidden.bs.collapse', function (e) {
        if (e.target == this) {
            $('#main-content').toggleClass('col-md-10');
        }
    });

    $('#sidebar').on('show.bs.collapse', function (e) {
        if (e.target == this) {
            $('#main-content').toggleClass('col-md-10');
        }
    });

    // -------------------------------------------------

    var ch1 = $("#chart1");
    var chart1 = new Chart(ch1, {
        type: 'line',
        data: {
            labels: ['شنبه', ' یک شنبه', ' دو شنبه', ' سه شنبه', ' چهار شنبه', ' پنج شنبه', 'جمعه'],

            datasets: [{
                data: [2400, 2100, 2800, 3400, 3900, 4600, 5300],
                backgroundColor: '#3ac55a',
                borderColor: '#fff',
                pointBackgroundColor: '#fff'

            }]
        },
        options: {
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    display: false
                }]
            },
            legend: {
                display: false
            },
            layout: {
                padding: {
                    left: 5,
                    right: 8,
                    top: 5,
                    bottom: 5
                }
            }
        }
    });
    // chart 1

    var ch2 = $("#chart2");
    var chart2 = new Chart(ch2, {
        type: 'bar',
        data: {
            labels: ['شنبه', ' یک شنبه', ' دو شنبه', ' سه شنبه', ' چهار شنبه', ' پنج شنبه', 'جمعه'],

            datasets: [{
                data: [1100, 900, 2000, 2400, 2100, 3500, 4200],
                backgroundColor: '#3f9cff',
                borderColor: '#fff',
                pointBackgroundColor: '#fff'

            }]
        },
        options: {
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    display: false
                }]
            },
            legend: {
                display: false
            },
            layout: {
                padding: {
                    left: 5,
                    right: 8,
                    top: 5,
                    bottom: 5
                }
            }
        }
    });
    // chart 2

    var ch3 = $("#chart3");
    var chart3 = new Chart(ch3, {
        type: 'bar',
        data: {
            labels: ['شنبه', ' یک شنبه', ' دو شنبه', ' سه شنبه', ' چهار شنبه', ' پنج شنبه', 'جمعه'],

            datasets: [{
                data: [41000, 24000, 19000, 31000, 24000, 29000, 36000],
                backgroundColor: '#e4717c',
                borderColor: '#fff',
                pointBackgroundColor: '#fff'

            }]
        },
        options: {
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    display: false
                }]
            },
            legend: {
                display: false
            },
            layout: {
                padding: {
                    left: 5,
                    right: 8,
                    top: 5,
                    bottom: 5
                }
            }
        }
    });
    // chart 3

    var ch4 = $("#chart4");
    var chart4 = new Chart(ch4, {
        type: 'line',
        data: {
            labels: ['شنبه', ' یک شنبه', ' دو شنبه', ' سه شنبه', ' چهار شنبه', ' پنج شنبه', 'جمعه'],

            datasets: [{
                data: [25000, 24000, 25000, 26000, 22000, 19000, 30000],
                backgroundColor: '#ffd65c',
                borderColor: '#fff',
                pointBackgroundColor: '#fff'

            }]
        },
        options: {
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    display: false
                }]
            },
            legend: {
                display: false
            },
            layout: {
                padding: {
                    left: 5,
                    right: 8,
                    top: 5,
                    bottom: 5
                }
            }
        }
    });
    // chart 4


    var vs = $("#visit");
    var visit = new Chart(vs, {
        type: 'line',
        data: {
            labels: ['شنبه', ' یک شنبه', ' دو شنبه', ' سه شنبه', ' چهار شنبه', ' پنج شنبه', 'جمعه'],

            datasets: [{
                    data: [210000, 260000, 240000, 380000, 480000, 550000, 603000],
                    backgroundColor: '',
                    borderColor: '#17a2b8',
                    pointBackgroundColor: '#fff'

                },
                {
                    data: [62000, 72000, 86000, 78000, 69000, 65000, 80000],
                    backgroundColor: '',
                    borderColor: '#ffc107',
                    pointBackgroundColor: '#fff'

                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    display: true
                }],
                xAxes: [{
                    display: true
                }]
            },
            legend: {
                display: false
            },
            layout: {
                padding: {
                    left: 5,
                    right: 8,
                    top: 5,
                    bottom: 5
                }
            }
        }
    });
    // visit chart
})