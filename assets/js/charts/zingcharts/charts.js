zingchart.THEME="classic";
var myConfig = {
    "graphset": [
        {
            "type": "line",
            "width": "100%",
            "y": "0",
            "x": "0",
            "background-color": "#00BAF0 #0C9BBC",
            "font-family": "Arial",
            "title": {
                "text": "2013 Total Sales",
                "background-color": "none",
                "font-color": "#ffffff",
                "font-size": "22px",
                "text-align": "left",
                "height": "70px",
                "padding-left": "25px",
                "font-weight": "normal",
                "font-family": "Arial"
            },
            "plotarea": {
                "background-color": "none",
                "margin-top": "40px",
                "margin-left": "30px",
                "margin-right": "30px",
                "margin-bottom": "5px"
            },
            "subtitle": {
                "text": "Sales shown by month",
                "font-color": "#ffffff",
                "alpha": 0.7,
                "font-size": "13px",
                "font-style": "italic",
                "height": "40px",
                "text-align": "left",
                "padding-top": "20px",
                "padding-left": "25px",
                "font-weight": "normal",
                "font-family": "Arial"
            },
            "scale-x": {
                "values": [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ],
                "visible": false,
                "guide": {
                    "visible": false
                }
            },
            "scale-y": {
                "visible": false,
                "guide": {
                    "visible": false
                }
            },
            "plot": {
                "tooltip": {
                    "text": "%k: %v",
                    "thousands-separator": ",",
                    "background-color": "#016B8B",
                    "border-radius": "6px",
                    "shadow": false,
                    "padding": "5px 10px"
                },
                "shadow": 0,
                "stacked": true,
                "alpha-area": 1,
                "hover-state": {
                    "visible": false
                },
                "line-width": "2px",
                "line-color": "#ffffff",
                "marker": {
                    "type": "circle",
                    "background-color": "#0C9BBC",
                    "border-width": 1,
                    "size": 5,
                    "shadow": 0,
                    "border-color": "#ffffff"
                },
                "hover-marker": {
                    "type": "circle",
                    "size": 6,
                    "background-color": "#016B8B",
                    "border-width": "1px"
                }
            },
            "series": [
                {
                    "values": [
                        1748,
                        1180,
                        1235,
                        958,
                        1089,
                        1658,
                        1822,
                        2174,
                        1543,
                        1702,
                        1498,
                        1016
                    ]
                }
            ]
        },
        {
            "type": "pie",
            "width": "50%",
            "height": "50%",
            "x": "0",
            "y": "50%",
            "background-color": "#F4F4F4 #EAEAEA",
            "plot": {
                "value-box": {
                    "alpha": 1,
                    "line-width": "10px",
                    "connected": false
                },
                "slice": 35,
                "tooltip": {
                    "visible": false
                }
            },
            "font-family": "Arial",
            "title": {
                "text": "Top Month",
                "background-color": "none",
                "font-color": "#505050",
                "font-size": "18px",
                "text-align": "left",
                "height": "70px",
                "padding-left": "25px",
                "font-weight": "normal",
                "font-family": "Arial"
            },
            "plotarea": {
                "background-color": "none",
                "margin-top": "5px",
                "margin-left": "10%",
                "margin-right": "5%",
                "margin-bottom": "0px"
            },
            "subtitle": {
                "text": "August",
                "font-color": "#505050",
                "alpha": 0.7,
                "font-size": "13px",
                "font-style": "italic",
                "height": "40px",
                "text-align": "left",
                "padding-top": "20px",
                "padding-left": "25px",
                "font-weight": "normal",
                "font-family": "Arial"
            },
            "scale-r": {
                "ref-angle": 40
            },
            "labels": [
                {
                    "text": "2,174",
                    "font-size": "20px",
                    "font-family": "arial",
                    "font-color": "#505050",
                    "x": "52.5%",
                    "y": "50%",
                    "anchor": "c"
                }
            ],
            "series": [
                {
                    "text": "Internet",
                    "values": [
                        64
                    ],
                    "background-color": "#ff9525 #fc6222",
                    "border-color": "#F4F4F4",
                    "shadow": false,
                    "value-box": {
                        "font-color": "#E25833",
                        "font-style": "italic",
                        "font-size": "11px",
                        "offset-x": "10px",
                        "offset-y": "0px"
                    }
                },
                {
                    "text": "Retail",
                    "values": [
                        36
                    ],
                    "background-color": "#9dc644 #608215",
                    "border-color": "#F4F4F4",
                    "shadow": false,
                    "value-box": {
                        "font-color": "#5D7F13",
                        "font-style": "italic",
                        "font-size": "11px",
                        "offset-x": "-10px",
                        "offset-y": "0px"
                    }
                }
            ]
        },
        {
            "type": "line",
            "width": "50%",
            "height": "50%",
            "x": "50%",
            "y": "50%",
            "background-color": "#F4F4F4 #EAEAEA",
            "font-family": "Arial",
            "title": {
                "text": "2013 Sales by Type",
                "background-color": "none",
                "font-color": "#505050",
                "font-size": "18px",
                "text-align": "left",
                "height": "70px",
                "padding-left": "25px",
                "font-weight": "normal",
                "font-family": "Arial"
            },
            "plotarea": {
                "background-color": "none",
                "margin-top": "80px",
                "margin-left": "30px",
                "margin-right": "30px",
                "margin-bottom": "40px"
            },
            "legend": {
                "layout": "float",
                "background-color": "none",
                "border-width": 0,
                "text-align": "left",
                "shadow": 0,
                "margin": "80% 10% auto auto",
                "item": {
                    "font-color": "#505050",
                    "alpha": "0.7"
                }
            },
            "subtitle": {
                "text": "Sales shown by month",
                "font-color": "#505050",
                "alpha": 0.7,
                "font-size": "13px",
                "font-style": "italic",
                "height": "40px",
                "text-align": "left",
                "padding-top": "20px",
                "padding-left": "25px",
                "font-weight": "normal",
                "font-family": "Arial"
            },
            "scale-x": {
                "values": [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ],
                "visible": false,
                "guide": {
                    "visible": false
                }
            },
            "scale-y": {
                "visible": false,
                "guide": {
                    "visible": false
                }
            },
            "plot": {
                "tooltip-text": "%t views: %v",
                "thousands-separator": ",",
                "shadow": 0,
                "alpha-area": 1,
                "hover-state": {
                    "visible": false
                }
            },
            "series": [
                {
                    "text": "Internet",
                    "values": [
                        1008,
                        755,
                        725,
                        556,
                        677,
                        1140,
                        1144,
                        1183,
                        822,
                        1006,
                        793,
                        584
                    ],
                    "line-width": "2px",
                    "line-color": "#E25833",
                    "tooltip": {
                        "text": "%k: %v",
                        "background-color": "#E25833",
                        "border-radius": "6px",
                        "shadow": false,
                        "padding": "5px 10px"
                    },
                    "marker": {
                        "type": "circle",
                        "background-color": "#F4F4F4",
                        "border-width": 1,
                        "size": 5,
                        "shadow": 0,
                        "border-color": "#E25833"
                    },
                    "hover-marker": {
                        "type": "circle",
                        "background-color": "#E25833",
                        "size": 6,
                        "border-width": "1px"
                    },
                    "legend-marker": {
                        "type": "circle",
                        "size": 5,
                        "shadow": 0,
                        "border-width": 1,
                        "background-color": "#F4F4F4",
                        "border-color": "#E25833"
                    }
                },
                {
                    "text": "Retail",
                    "values": [
                        740,
                        425,
                        510,
                        402,
                        412,
                        518,
                        678,
                        991,
                        721,
                        696,
                        705,
                        432
                    ],
                    "line-width": "2px",
                    "line-color": "#5D7F13",
                    "tooltip": {
                        "text": "%k: %v",
                        "background-color": "#5D7F13",
                        "border-radius": "6px",
                        "shadow": false,
                        "padding": "5px 10px"
                    },
                    "marker": {
                        "type": "circle",
                        "background-color": "#F4F4F4",
                        "border-width": 1,
                        "size": 5,
                        "shadow": 0,
                        "border-color": "#5D7F13"
                    },
                    "hover-marker": {
                        "type": "circle",
                        "background-color": "#5D7F13",
                        "size": 6,
                        "border-width": "1px"
                    },
                    "legend-marker": {
                        "type": "circle",
                        "size": 5,
                        "shadow": 0,
                        "border-width": 1,
                        "background-color": "#F4F4F4",
                        "border-color": "#5D7F13"
                    }
                }
            ]
        }
    ]
};
 
zingchart.render({ 
	id : 'myChart', 
	data : myConfig, 
	height: 500, 
	width: 725 
});