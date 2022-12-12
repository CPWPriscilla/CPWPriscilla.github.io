am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_myTheme1);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdivccl", am4charts.XYChart);
    
    am4core.options.onlyShowOnViewport = true;

    // Add data
    chart.data = 
    [
        {
          "Period": "2022/10/10 - 2022/10/16",
          "CCL": 168.49,
          "CCL (Small/Medium units)": 166.87
        },
        {
          "Period": "2022/10/03 - 2022/10/09",
          "CCL": 170,
          "CCL (Small/Medium units)": 168.35
        },
        {
          "Period": "2022/09/26 - 2022/10/02",
          "CCL": 170.62,
          "CCL (Small/Medium units)": 169
        },
        {
          "Period": "2022/09/19 - 2022/09/25",
          "CCL": 169.35,
          "CCL (Small/Medium units)": 168.14
        },
        {
          "Period": "2022/09/12 - 2022/09/18",
          "CCL": 169.93,
          "CCL (Small/Medium units)": 168.83
        },
        {
          "Period": "2022/09/05 - 2022/09/11",
          "CCL": 171.27,
          "CCL (Small/Medium units)": 170.39
        },
        {
          "Period": "2022/08/29 - 2022/09/04",
          "CCL": 171.83,
          "CCL (Small/Medium units)": 171.02
        },
        {
          "Period": "2022/08/22 - 2022/08/28",
          "CCL": 173.22,
          "CCL (Small/Medium units)": 172.51
        },
        {
          "Period": "2022/08/15 - 2022/08/21",
          "CCL": 174.62,
          "CCL (Small/Medium units)": 174.24
        },
        {
          "Period": "2022/08/08 - 2022/08/14",
          "CCL": 175.65,
          "CCL (Small/Medium units)": 174.74
        },
        {
          "Period": "2022/08/01 - 2022/08/07",
          "CCL": 177.1,
          "CCL (Small/Medium units)": 176.37
        },
        {
          "Period": "2022/07/25 - 2022/07/31",
          "CCL": 177.43,
          "CCL (Small/Medium units)": 176.54
        },
        {
          "Period": "2022/07/18 - 2022/07/24",
          "CCL": 179.53,
          "CCL (Small/Medium units)": 178.74
        },
        {
          "Period": "2022/07/11 - 2022/07/17",
          "CCL": 179.85,
          "CCL (Small/Medium units)": 179.05
        },
        {
          "Period": "2022/07/04 - 2022/07/10",
          "CCL": 181.05,
          "CCL (Small/Medium units)": 180.36
        },
        {
          "Period": "2022/06/27 - 2022/07/03",
          "CCL": 180.22,
          "CCL (Small/Medium units)": 179.64
        },
        {
          "Period": "2022/06/20 - 2022/06/26",
          "CCL": 181.35,
          "CCL (Small/Medium units)": 180.62
        },
        {
          "Period": "2022/06/13 - 2022/06/19",
          "CCL": 179.32,
          "CCL (Small/Medium units)": 178.47
        },
        {
          "Period": "2022/06/06 - 2022/06/12",
          "CCL": 180.78,
          "CCL (Small/Medium units)": 180.08
        },
        {
          "Period": "2022/05/30 - 2022/06/05",
          "CCL": 182.52,
          "CCL (Small/Medium units)": 182
        },
        {
          "Period": "2022/05/23 - 2022/05/29",
          "CCL": 180.97,
          "CCL (Small/Medium units)": 180.21
        },
        {
          "Period": "2022/05/16 - 2022/05/22",
          "CCL": 181.15,
          "CCL (Small/Medium units)": 180.38
        },
        {
          "Period": "2022/05/09 - 2022/05/15",
          "CCL": 181.84,
          "CCL (Small/Medium units)": 181.25
        },
        {
          "Period": "2022/05/02 - 2022/05/08",
          "CCL": 181.25,
          "CCL (Small/Medium units)": 180.56
        },
        {
          "Period": "2022/04/25 - 2022/05/01",
          "CCL": 182.74,
          "CCL (Small/Medium units)": 182.69
        },
        {
          "Period": "2022/04/18 - 2022/04/24",
          "CCL": 181.06,
          "CCL (Small/Medium units)": 180.9
        },
        {
          "Period": "2022/04/11 - 2022/04/17",
          "CCL": 179.36,
          "CCL (Small/Medium units)": 178.98
        },
        {
          "Period": "2022/04/04 - 2022/04/10",
          "CCL": 179.65,
          "CCL (Small/Medium units)": 178.97
        },
        {
          "Period": "2022/03/28 - 2022/04/03",
          "CCL": 179.36,
          "CCL (Small/Medium units)": 179.23
        },
        {
          "Period": "2022/03/21 - 2022/03/27",
          "CCL": 177.34,
          "CCL (Small/Medium units)": 177.13
        },
        {
          "Period": "2022/03/14 - 2022/03/20",
          "CCL": 178.72,
          "CCL (Small/Medium units)": 178.72
        },
        {
          "Period": "2022/03/07 - 2022/03/13",
          "CCL": 180.75,
          "CCL (Small/Medium units)": 180.38
        },
        {
          "Period": "2022/02/28 - 2022/03/06",
          "CCL": 179.87,
          "CCL (Small/Medium units)": 179.35
        },
        {
          "Period": "2022/02/21 - 2022/02/27",
          "CCL": 179.1,
          "CCL (Small/Medium units)": 178.73
        },
        {
          "Period": "2022/02/14 - 2022/02/20",
          "CCL": 181.76,
          "CCL (Small/Medium units)": 181.19
        },
        {
          "Period": "2022/02/07 - 2022/02/13",
          "CCL": 183.06,
          "CCL (Small/Medium units)": 182.66
        },
        {
          "Period": "2022/01/31 - 2022/02/06",
          "CCL": 184.49,
          "CCL (Small/Medium units)": 184.12
        },
        {
          "Period": "2022/01/24 - 2022/01/30",
          "CCL": 185.93,
          "CCL (Small/Medium units)": 185.5
        },
        {
          "Period": "2022/01/17 - 2022/01/23",
          "CCL": 185.93,
          "CCL (Small/Medium units)": 185.5
        },
        {
          "Period": "2022/01/10 - 2022/01/16",
          "CCL": 185.25,
          "CCL (Small/Medium units)": 184.84
        },
        {
          "Period": "2022/01/03 - 2022/01/09",
          "CCL": 185.19,
          "CCL (Small/Medium units)": 184.82
        },
        {
          "Period": "2021/12/27 - 2022/01/02",
          "CCL": 186.19,
          "CCL (Small/Medium units)": 185.94
        },
        {
          "Period": "2021/12/20 - 2021/12/26",
          "CCL": 184.55,
          "CCL (Small/Medium units)": 184.19
        },
        {
          "Period": "2021/12/13 - 2021/12/19",
          "CCL": 186.09,
          "CCL (Small/Medium units)": 185.69
        },
        {
          "Period": "2021/12/06 - 2021/12/12",
          "CCL": 186.1,
          "CCL (Small/Medium units)": 186.45
        },
        {
          "Period": "2021/11/29 - 2021/12/05",
          "CCL": 187.75,
          "CCL (Small/Medium units)": 187.49
        },
        {
          "Period": "2021/11/22 - 2021/11/28",
          "CCL": 188.34,
          "CCL (Small/Medium units)": 188.17
        },
        {
          "Period": "2021/11/15 - 2021/11/21",
          "CCL": 186.9,
          "CCL (Small/Medium units)": 186.59
        },
        {
          "Period": "2021/11/08 - 2021/11/14",
          "CCL": 188.34,
          "CCL (Small/Medium units)": 188.29
        },
        {
          "Period": "2021/11/01 - 2021/11/07",
          "CCL": 186.06,
          "CCL (Small/Medium units)": 186.27
        },
        {
          "Period": "2021/10/25 - 2021/10/31",
          "CCL": 186.27,
          "CCL (Small/Medium units)": 186.54
        },
        {
          "Period": "2021/10/18 - 2021/10/24",
          "CCL": 186.17,
          "CCL (Small/Medium units)": 186.81
        },
        {
          "Period": "2021/10/11 - 2021/10/17",
          "CCL": 186.51,
          "CCL (Small/Medium units)": 186.97
        },
        {
          "Period": "2021/10/04 - 2021/10/10",
          "CCL": 187.15,
          "CCL (Small/Medium units)": 187.67
        },
        {
          "Period": "2021/09/27 - 2021/10/03",
          "CCL": 188.93,
          "CCL (Small/Medium units)": 189.58
        },
        {
          "Period": "2021/09/20 - 2021/09/26",
          "CCL": 189.61,
          "CCL (Small/Medium units)": 190
        },
        {
          "Period": "2021/09/13 - 2021/09/19",
          "CCL": 190.55,
          "CCL (Small/Medium units)": 190.82
        },
        {
          "Period": "2021/09/06 - 2021/09/12",
          "CCL": 189.14,
          "CCL (Small/Medium units)": 189.7
        },
        {
          "Period": "2021/08/30 - 2021/09/05",
          "CCL": 189.77,
          "CCL (Small/Medium units)": 190.41
        },
        {
          "Period": "2021/08/23 - 2021/08/29",
          "CCL": 189.75,
          "CCL (Small/Medium units)": 190.32
        },
        {
          "Period": "2021/08/16 - 2021/08/22",
          "CCL": 189.52,
          "CCL (Small/Medium units)": 190.28
        },
        {
          "Period": "2021/08/09 - 2021/08/15",
          "CCL": 190.39,
          "CCL (Small/Medium units)": 190.3
        },
        {
          "Period": "2021/08/02 - 2021/08/08",
          "CCL": 191.34,
          "CCL (Small/Medium units)": 191.21
        },
        {
          "Period": "2021/07/26 - 2021/08/01",
          "CCL": 190.1,
          "CCL (Small/Medium units)": 190.44
        },
        {
          "Period": "2021/07/19 - 2021/07/25",
          "CCL": 188.77,
          "CCL (Small/Medium units)": 189.27
        },
        {
          "Period": "2021/07/12 - 2021/07/18",
          "CCL": 186.89,
          "CCL (Small/Medium units)": 187.08
        },
        {
          "Period": "2021/07/05 - 2021/07/11",
          "CCL": 187.87,
          "CCL (Small/Medium units)": 188.32
        },
        {
          "Period": "2021/06/28 - 2021/07/04",
          "CCL": 186.68,
          "CCL (Small/Medium units)": 187.11
        },
        {
          "Period": "2021/06/21 - 2021/06/27",
          "CCL": 188.38,
          "CCL (Small/Medium units)": 188.51
        },
        {
          "Period": "2021/06/14 - 2021/06/20",
          "CCL": 188.1,
          "CCL (Small/Medium units)": 188.43
        },
        {
          "Period": "2021/06/07 - 2021/06/13",
          "CCL": 186.58,
          "CCL (Small/Medium units)": 186.8
        },
        {
          "Period": "2021/05/31 - 2021/06/06",
          "CCL": 185.68,
          "CCL (Small/Medium units)": 185.93
        },
        {
          "Period": "2021/05/24 - 2021/05/30",
          "CCL": 185.16,
          "CCL (Small/Medium units)": 185.4
        },
        {
          "Period": "2021/05/17 - 2021/05/23",
          "CCL": 184.49,
          "CCL (Small/Medium units)": 184.2
        },
        {
          "Period": "2021/05/10 - 2021/05/16",
          "CCL": 184.65,
          "CCL (Small/Medium units)": 184.85
        },
        {
          "Period": "2021/05/03 - 2021/05/09",
          "CCL": 183.68,
          "CCL (Small/Medium units)": 184.4
        },
        {
          "Period": "2021/04/26 - 2021/05/02",
          "CCL": 183.25,
          "CCL (Small/Medium units)": 183.51
        },
        {
          "Period": "2021/04/19 - 2021/04/25",
          "CCL": 183.16,
          "CCL (Small/Medium units)": 183.2
        },
        {
          "Period": "2021/04/12 - 2021/04/18",
          "CCL": 180.19,
          "CCL (Small/Medium units)": 180.6
        },
        {
          "Period": "2021/04/05 - 2021/04/11",
          "CCL": 179.95,
          "CCL (Small/Medium units)": 180.12
        },
        {
          "Period": "2021/03/29 - 2021/04/04",
          "CCL": 181.31,
          "CCL (Small/Medium units)": 181.41
        },
        {
          "Period": "2021/03/22 - 2021/03/28",
          "CCL": 180.33,
          "CCL (Small/Medium units)": 180.5
        },
        {
          "Period": "2021/03/15 - 2021/03/21",
          "CCL": 180.93,
          "CCL (Small/Medium units)": 181.11
        },
        {
          "Period": "2021/03/08 - 2021/03/14",
          "CCL": 178.59,
          "CCL (Small/Medium units)": 179.05
        },
        {
          "Period": "2021/03/01 - 2021/03/07",
          "CCL": 178.89,
          "CCL (Small/Medium units)": 179.12
        },
        {
          "Period": "2021/02/22 - 2021/02/28",
          "CCL": 177.17,
          "CCL (Small/Medium units)": 177.86
        },
        {
          "Period": "2021/02/15 - 2021/02/21",
          "CCL": 176.58,
          "CCL (Small/Medium units)": 177.31
        },
        {
          "Period": "2021/02/08 - 2021/02/14",
          "CCL": 176.11,
          "CCL (Small/Medium units)": 176.2
        },
        {
          "Period": "2021/02/01 - 2021/02/07",
          "CCL": 176.53,
          "CCL (Small/Medium units)": 176.72
        },
        {
          "Period": "2021/01/25 - 2021/01/31",
          "CCL": 176.21,
          "CCL (Small/Medium units)": 176.27
        },
        {
          "Period": "2021/01/18 - 2021/01/24",
          "CCL": 175.04,
          "CCL (Small/Medium units)": 175.16
        },
        {
          "Period": "2021/01/11 - 2021/01/17",
          "CCL": 176.16,
          "CCL (Small/Medium units)": 176.19
        },
        {
          "Period": "2021/01/04 - 2021/01/10",
          "CCL": 176.52,
          "CCL (Small/Medium units)": 176.47
        },
        {
          "Period": "2020/12/28 - 2021/01/03",
          "CCL": 178.13,
          "CCL (Small/Medium units)": 177.99
        },
        {
          "Period": "2020/12/21 - 2020/12/27",
          "CCL": 176.22,
          "CCL (Small/Medium units)": 176.69
        },
        {
          "Period": "2020/12/14 - 2020/12/20",
          "CCL": 175.88,
          "CCL (Small/Medium units)": 176.49
        },
        {
          "Period": "2020/12/07 - 2020/12/13",
          "CCL": 176.54,
          "CCL (Small/Medium units)": 177.36
        },
        {
          "Period": "2020/11/30 - 2020/12/06",
          "CCL": 177.75,
          "CCL (Small/Medium units)": 178.84
        },
        {
          "Period": "2020/11/23 - 2020/11/29",
          "CCL": 175.54,
          "CCL (Small/Medium units)": 176.33
        },
        {
          "Period": "2020/11/16 - 2020/11/22",
          "CCL": 175.68,
          "CCL (Small/Medium units)": 176.4
        },
        {
          "Period": "2020/11/09 - 2020/11/15",
          "CCL": 177.57,
          "CCL (Small/Medium units)": 178.67
        },
        {
          "Period": "2020/11/02 - 2020/11/08",
          "CCL": 176.69,
          "CCL (Small/Medium units)": 177.73
        },
        {
          "Period": "2020/10/26 - 2020/11/01",
          "CCL": 177.66,
          "CCL (Small/Medium units)": 178.84
        },
        {
          "Period": "2020/10/19 - 2020/10/25",
          "CCL": 176.84,
          "CCL (Small/Medium units)": 178.04
        },
        {
          "Period": "2020/10/12 - 2020/10/18",
          "CCL": 176.85,
          "CCL (Small/Medium units)": 177.58
        },
        {
          "Period": "2020/10/05 - 2020/10/11",
          "CCL": 175.83,
          "CCL (Small/Medium units)": 176.65
        },
        {
          "Period": "2020/09/28 - 2020/10/04",
          "CCL": 178.05,
          "CCL (Small/Medium units)": 178.14
        },
        {
          "Period": "2020/09/21 - 2020/09/27",
          "CCL": 176.74,
          "CCL (Small/Medium units)": 177.24
        },
        {
          "Period": "2020/09/14 - 2020/09/20",
          "CCL": 176.59,
          "CCL (Small/Medium units)": 177.31
        },
        {
          "Period": "2020/09/07 - 2020/09/13",
          "CCL": 176.76,
          "CCL (Small/Medium units)": 177.32
        },
        {
          "Period": "2020/08/31 - 2020/09/06",
          "CCL": 177.85,
          "CCL (Small/Medium units)": 178.3
        },
        {
          "Period": "2020/08/24 - 2020/08/30",
          "CCL": 177.43,
          "CCL (Small/Medium units)": 177.79
        },
        {
          "Period": "2020/08/17 - 2020/08/23",
          "CCL": 178.71,
          "CCL (Small/Medium units)": 179.42
        },
        {
          "Period": "2020/08/10 - 2020/08/16",
          "CCL": 180.9,
          "CCL (Small/Medium units)": 181.49
        },
        {
          "Period": "2020/08/03 - 2020/08/09",
          "CCL": 180.57,
          "CCL (Small/Medium units)": 181.24
        },
        {
          "Period": "2020/07/27 - 2020/08/02",
          "CCL": 180.74,
          "CCL (Small/Medium units)": 181.03
        },
        {
          "Period": "2020/07/20 - 2020/07/26",
          "CCL": 181.69,
          "CCL (Small/Medium units)": 182.33
        },
        {
          "Period": "2020/07/13 - 2020/07/19",
          "CCL": 181.77,
          "CCL (Small/Medium units)": 182.49
        },
        {
          "Period": "2020/07/06 - 2020/07/12",
          "CCL": 180.81,
          "CCL (Small/Medium units)": 181.33
        },
        {
          "Period": "2020/06/29 - 2020/07/05",
          "CCL": 178.95,
          "CCL (Small/Medium units)": 179.49
        },
        {
          "Period": "2020/06/22 - 2020/06/28",
          "CCL": 178.48,
          "CCL (Small/Medium units)": 179.33
        },
        {
          "Period": "2020/06/15 - 2020/06/21",
          "CCL": 181.12,
          "CCL (Small/Medium units)": 182.33
        },
        {
          "Period": "2020/06/08 - 2020/06/14",
          "CCL": 180.74,
          "CCL (Small/Medium units)": 182.08
        },
        {
          "Period": "2020/06/01 - 2020/06/07",
          "CCL": 178.64,
          "CCL (Small/Medium units)": 179.84
        },
        {
          "Period": "2020/05/25 - 2020/05/31",
          "CCL": 180.26,
          "CCL (Small/Medium units)": 181.33
        },
        {
          "Period": "2020/05/18 - 2020/05/24",
          "CCL": 178.54,
          "CCL (Small/Medium units)": 179.46
        },
        {
          "Period": "2020/05/11 - 2020/05/17",
          "CCL": 177.54,
          "CCL (Small/Medium units)": 178.61
        },
        {
          "Period": "2020/05/04 - 2020/05/10",
          "CCL": 175.94,
          "CCL (Small/Medium units)": 176.67
        },
        {
          "Period": "2020/04/27 - 2020/05/03",
          "CCL": 175,
          "CCL (Small/Medium units)": 175.65
        },
        {
          "Period": "2020/04/20 - 2020/04/26",
          "CCL": 175.9,
          "CCL (Small/Medium units)": 176.63
        },
        {
          "Period": "2020/04/13 - 2020/04/19",
          "CCL": 175.68,
          "CCL (Small/Medium units)": 176.3
        },
        {
          "Period": "2020/04/06 - 2020/04/12",
          "CCL": 174.86,
          "CCL (Small/Medium units)": 175.35
        },
        {
          "Period": "2020/03/30 - 2020/04/05",
          "CCL": 175.43,
          "CCL (Small/Medium units)": 175.84
        },
        {
          "Period": "2020/03/23 - 2020/03/29",
          "CCL": 175.51,
          "CCL (Small/Medium units)": 176.13
        },
        {
          "Period": "2020/03/16 - 2020/03/22",
          "CCL": 175.56,
          "CCL (Small/Medium units)": 176.22
        },
        {
          "Period": "2020/03/09 - 2020/03/15",
          "CCL": 175.41,
          "CCL (Small/Medium units)": 175.88
        },
        {
          "Period": "2020/03/02 - 2020/03/08",
          "CCL": 174.03,
          "CCL (Small/Medium units)": 174.33
        },
        {
          "Period": "2020/02/24 - 2020/03/01",
          "CCL": 174.94,
          "CCL (Small/Medium units)": 175.47
        },
        {
          "Period": "2020/02/17 - 2020/02/23",
          "CCL": 178.11,
          "CCL (Small/Medium units)": 178.05
        },
        {
          "Period": "2020/02/10 - 2020/02/16",
          "CCL": 178.8,
          "CCL (Small/Medium units)": 178.87
        },
        {
          "Period": "2020/02/03 - 2020/02/09",
          "CCL": 178.84,
          "CCL (Small/Medium units)": 178.86
        },
        {
          "Period": "2020/01/27 - 2020/02/02",
          "CCL": 178.58,
          "CCL (Small/Medium units)": 178.48
        },
        {
          "Period": "2020/01/20 - 2020/01/26",
          "CCL": 177.58,
          "CCL (Small/Medium units)": 177.84
        },
        {
          "Period": "2020/01/13 - 2020/01/19",
          "CCL": 177.09,
          "CCL (Small/Medium units)": 177.38
        },
        {
          "Period": "2020/01/06 - 2020/01/12",
          "CCL": 175.88,
          "CCL (Small/Medium units)": 176.01
        },
        {
          "Period": "2019/12/30 - 2020/01/05",
          "CCL": 176.98,
          "CCL (Small/Medium units)": 177.28
        },
        {
          "Period": "2019/12/23 - 2019/12/29",
          "CCL": 178.13,
          "CCL (Small/Medium units)": 178.68
        },
        {
          "Period": "2019/12/16 - 2019/12/22",
          "CCL": 177.71,
          "CCL (Small/Medium units)": 178.15
        },
        {
          "Period": "2019/12/09 - 2019/12/15",
          "CCL": 179.18,
          "CCL (Small/Medium units)": 179.66
        },
        {
          "Period": "2019/12/02 - 2019/12/08",
          "CCL": 179.11,
          "CCL (Small/Medium units)": 179.41
        },
        {
          "Period": "2019/11/25 - 2019/12/01",
          "CCL": 179.88,
          "CCL (Small/Medium units)": 180.15
        },
        {
          "Period": "2019/11/18 - 2019/11/24",
          "CCL": 181.36,
          "CCL (Small/Medium units)": 181.57
        },
        {
          "Period": "2019/11/11 - 2019/11/17",
          "CCL": 181.09,
          "CCL (Small/Medium units)": 181
        },
        {
          "Period": "2019/11/04 - 2019/11/10",
          "CCL": 182.1,
          "CCL (Small/Medium units)": 182.28
        },
        {
          "Period": "2019/10/28 - 2019/11/03",
          "CCL": 179.4,
          "CCL (Small/Medium units)": 179.11
        },
        {
          "Period": "2019/10/21 - 2019/10/27",
          "CCL": 179.01,
          "CCL (Small/Medium units)": 178.63
        },
        {
          "Period": "2019/10/14 - 2019/10/20",
          "CCL": 180.07,
          "CCL (Small/Medium units)": 179.84
        },
        {
          "Period": "2019/10/07 - 2019/10/13",
          "CCL": 180.32,
          "CCL (Small/Medium units)": 180.26
        },
        {
          "Period": "2019/09/30 - 2019/10/06",
          "CCL": 180.98,
          "CCL (Small/Medium units)": 180.92
        },
        {
          "Period": "2019/09/23 - 2019/09/29",
          "CCL": 182.24,
          "CCL (Small/Medium units)": 182.36
        },
        {
          "Period": "2019/09/16 - 2019/09/22",
          "CCL": 182.66,
          "CCL (Small/Medium units)": 182.83
        },
        {
          "Period": "2019/09/09 - 2019/09/15",
          "CCL": 183.28,
          "CCL (Small/Medium units)": 183.4
        },
        {
          "Period": "2019/09/02 - 2019/09/08",
          "CCL": 184.96,
          "CCL (Small/Medium units)": 185.26
        },
        {
          "Period": "2019/08/26 - 2019/09/01",
          "CCL": 185.45,
          "CCL (Small/Medium units)": 185.82
        },
        {
          "Period": "2019/08/19 - 2019/08/25",
          "CCL": 187.97,
          "CCL (Small/Medium units)": 188.35
        },
        {
          "Period": "2019/08/12 - 2019/08/18",
          "CCL": 188.39,
          "CCL (Small/Medium units)": 188.83
        },
        {
          "Period": "2019/08/05 - 2019/08/11",
          "CCL": 188.22,
          "CCL (Small/Medium units)": 188.59
        },
        {
          "Period": "2019/07/29 - 2019/08/04",
          "CCL": 188.43,
          "CCL (Small/Medium units)": 188.85
        },
        {
          "Period": "2019/07/22 - 2019/07/28",
          "CCL": 188.76,
          "CCL (Small/Medium units)": 189.29
        },
        {
          "Period": "2019/07/15 - 2019/07/21",
          "CCL": 189.43,
          "CCL (Small/Medium units)": 189.47
        },
        {
          "Period": "2019/07/08 - 2019/07/14",
          "CCL": 188.94,
          "CCL (Small/Medium units)": 188.95
        },
        {
          "Period": "2019/07/01 - 2019/07/07",
          "CCL": 189.77,
          "CCL (Small/Medium units)": 189.53
        },
        {
          "Period": "2019/06/24 - 2019/06/30",
          "CCL": 190.48,
          "CCL (Small/Medium units)": 190.19
        },
        {
          "Period": "2019/06/17 - 2019/06/23",
          "CCL": 187.83,
          "CCL (Small/Medium units)": 187.43
        },
        {
          "Period": "2019/06/10 - 2019/06/16",
          "CCL": 187.02,
          "CCL (Small/Medium units)": 186.37
        },
        {
          "Period": "2019/06/03 - 2019/06/09",
          "CCL": 186.26,
          "CCL (Small/Medium units)": 185.91
        },
        {
          "Period": "2019/05/27 - 2019/06/02",
          "CCL": 188.95,
          "CCL (Small/Medium units)": 188.49
        },
        {
          "Period": "2019/05/20 - 2019/05/26",
          "CCL": 189.42,
          "CCL (Small/Medium units)": 189.57
        },
        {
          "Period": "2019/05/13 - 2019/05/19",
          "CCL": 188.62,
          "CCL (Small/Medium units)": 188.63
        },
        {
          "Period": "2019/05/06 - 2019/05/12",
          "CCL": 187.41,
          "CCL (Small/Medium units)": 187.5
        },
        {
          "Period": "2019/04/29 - 2019/05/05",
          "CCL": 186.07,
          "CCL (Small/Medium units)": 186.66
        },
        {
          "Period": "2019/04/22 - 2019/04/28",
          "CCL": 183.92,
          "CCL (Small/Medium units)": 184.58
        },
        {
          "Period": "2019/04/15 - 2019/04/21",
          "CCL": 183.19,
          "CCL (Small/Medium units)": 183.14
        },
        {
          "Period": "2019/04/08 - 2019/04/14",
          "CCL": 180.37,
          "CCL (Small/Medium units)": 180.99
        },
        {
          "Period": "2019/04/01 - 2019/04/07",
          "CCL": 180.16,
          "CCL (Small/Medium units)": 180.12
        },
        {
          "Period": "2019/03/25 - 2019/03/31",
          "CCL": 179.5,
          "CCL (Small/Medium units)": 179.34
        },
        {
          "Period": "2019/03/18 - 2019/03/24",
          "CCL": 177.41,
          "CCL (Small/Medium units)": 177.48
        },
        {
          "Period": "2019/03/11 - 2019/03/17",
          "CCL": 174.76,
          "CCL (Small/Medium units)": 174.77
        },
        {
          "Period": "2019/03/04 - 2019/03/10",
          "CCL": 173.47,
          "CCL (Small/Medium units)": 173.32
        },
        {
          "Period": "2019/02/25 - 2019/03/03",
          "CCL": 172.24,
          "CCL (Small/Medium units)": 172.01
        },
        {
          "Period": "2019/02/18 - 2019/02/24",
          "CCL": 171.91,
          "CCL (Small/Medium units)": 171.82
        },
        {
          "Period": "2019/02/11 - 2019/02/17",
          "CCL": 170.87,
          "CCL (Small/Medium units)": 170.78
        },
        {
          "Period": "2019/02/04 - 2019/02/10",
          "CCL": 170.39,
          "CCL (Small/Medium units)": 170.13
        },
        {
          "Period": "2019/01/28 - 2019/02/03",
          "CCL": 169.95,
          "CCL (Small/Medium units)": 169.45
        },
        {
          "Period": "2019/01/21 - 2019/01/27",
          "CCL": 170.86,
          "CCL (Small/Medium units)": 170.5
        },
        {
          "Period": "2019/01/14 - 2019/01/20",
          "CCL": 170.64,
          "CCL (Small/Medium units)": 170.19
        },
        {
          "Period": "2019/01/07 - 2019/01/13",
          "CCL": 170.19,
          "CCL (Small/Medium units)": 169.73
        },
        {
          "Period": "2018/12/31 - 2019/01/06",
          "CCL": 171.92,
          "CCL (Small/Medium units)": 171.69
        },
        {
          "Period": "2018/12/24 - 2018/12/30",
          "CCL": 174.49,
          "CCL (Small/Medium units)": 174.22
        },
        {
          "Period": "2018/12/17 - 2018/12/23",
          "CCL": 174.37,
          "CCL (Small/Medium units)": 174.05
        },
        {
          "Period": "2018/12/10 - 2018/12/16",
          "CCL": 174.74,
          "CCL (Small/Medium units)": 174.36
        },
        {
          "Period": "2018/12/03 - 2018/12/09",
          "CCL": 175.59,
          "CCL (Small/Medium units)": 175.35
        },
        {
          "Period": "2018/11/26 - 2018/12/02",
          "CCL": 176.81,
          "CCL (Small/Medium units)": 176.66
        },
        {
          "Period": "2018/11/19 - 2018/11/25",
          "CCL": 177.39,
          "CCL (Small/Medium units)": 177.52
        },
        {
          "Period": "2018/11/12 - 2018/11/18",
          "CCL": 179.18,
          "CCL (Small/Medium units)": 179.41
        },
        {
          "Period": "2018/11/05 - 2018/11/11",
          "CCL": 180.4,
          "CCL (Small/Medium units)": 180.78
        },
        {
          "Period": "2018/10/29 - 2018/11/04",
          "CCL": 182.73,
          "CCL (Small/Medium units)": 183.32
        },
        {
          "Period": "2018/10/22 - 2018/10/28",
          "CCL": 183.7,
          "CCL (Small/Medium units)": 184.49
        },
        {
          "Period": "2018/10/15 - 2018/10/21",
          "CCL": 184.77,
          "CCL (Small/Medium units)": 185.66
        },
        {
          "Period": "2018/10/08 - 2018/10/14",
          "CCL": 185.07,
          "CCL (Small/Medium units)": 186
        },
        {
          "Period": "2018/10/01 - 2018/10/07",
          "CCL": 185.25,
          "CCL (Small/Medium units)": 186.17
        },
        {
          "Period": "2018/09/24 - 2018/09/30",
          "CCL": 185.51,
          "CCL (Small/Medium units)": 186.31
        },
        {
          "Period": "2018/09/17 - 2018/09/23",
          "CCL": 186.6,
          "CCL (Small/Medium units)": 186.97
        },
        {
          "Period": "2018/09/10 - 2018/09/16",
          "CCL": 186.6,
          "CCL (Small/Medium units)": 187.05
        },
        {
          "Period": "2018/09/03 - 2018/09/09",
          "CCL": 187.03,
          "CCL (Small/Medium units)": 187.48
        },
        {
          "Period": "2018/08/27 - 2018/09/02",
          "CCL": 188.44,
          "CCL (Small/Medium units)": 189.09
        },
        {
          "Period": "2018/08/20 - 2018/08/26",
          "CCL": 188.44,
          "CCL (Small/Medium units)": 189.18
        },
        {
          "Period": "2018/08/13 - 2018/08/19",
          "CCL": 187.56,
          "CCL (Small/Medium units)": 187.98
        },
        {
          "Period": "2018/08/06 - 2018/08/12",
          "CCL": 188.64,
          "CCL (Small/Medium units)": 189.02
        },
        {
          "Period": "2018/07/30 - 2018/08/05",
          "CCL": 188.36,
          "CCL (Small/Medium units)": 188.54
        },
        {
          "Period": "2018/07/23 - 2018/07/29",
          "CCL": 188.61,
          "CCL (Small/Medium units)": 189.44
        },
        {
          "Period": "2018/07/16 - 2018/07/22",
          "CCL": 187.76,
          "CCL (Small/Medium units)": 188.47
        },
        {
          "Period": "2018/07/09 - 2018/07/15",
          "CCL": 187.31,
          "CCL (Small/Medium units)": 187.94
        },
        {
          "Period": "2018/07/02 - 2018/07/08",
          "CCL": 187.71,
          "CCL (Small/Medium units)": 188.47
        },
        {
          "Period": "2018/06/25 - 2018/07/01",
          "CCL": 186.81,
          "CCL (Small/Medium units)": 187.52
        },
        {
          "Period": "2018/06/18 - 2018/06/24",
          "CCL": 186.33,
          "CCL (Small/Medium units)": 186.67
        },
        {
          "Period": "2018/06/11 - 2018/06/17",
          "CCL": 184.43,
          "CCL (Small/Medium units)": 184.78
        },
        {
          "Period": "2018/06/04 - 2018/06/10",
          "CCL": 182.64,
          "CCL (Small/Medium units)": 183.07
        },
        {
          "Period": "2018/05/28 - 2018/06/03",
          "CCL": 181.6,
          "CCL (Small/Medium units)": 182.13
        },
        {
          "Period": "2018/05/21 - 2018/05/27",
          "CCL": 181.58,
          "CCL (Small/Medium units)": 181.6
        },
        {
          "Period": "2018/05/14 - 2018/05/20",
          "CCL": 180.96,
          "CCL (Small/Medium units)": 180.72
        },
        {
          "Period": "2018/05/07 - 2018/05/13",
          "CCL": 183.23,
          "CCL (Small/Medium units)": 182.22
        },
        {
          "Period": "2018/04/30 - 2018/05/06",
          "CCL": 183.14,
          "CCL (Small/Medium units)": 182.14
        },
        {
          "Period": "2018/04/23 - 2018/04/29",
          "CCL": 182.17,
          "CCL (Small/Medium units)": 181.07
        },
        {
          "Period": "2018/04/16 - 2018/04/22",
          "CCL": 180,
          "CCL (Small/Medium units)": 178.76
        },
        {
          "Period": "2018/04/09 - 2018/04/15",
          "CCL": 179.9,
          "CCL (Small/Medium units)": 178.85
        },
        {
          "Period": "2018/04/02 - 2018/04/08",
          "CCL": 177.42,
          "CCL (Small/Medium units)": 176.18
        },
        {
          "Period": "2018/03/26 - 2018/04/01",
          "CCL": 177.61,
          "CCL (Small/Medium units)": 176.58
        },
        {
          "Period": "2018/03/19 - 2018/03/25",
          "CCL": 174.94,
          "CCL (Small/Medium units)": 173.29
        },
        {
          "Period": "2018/03/12 - 2018/03/18",
          "CCL": 174,
          "CCL (Small/Medium units)": 173.9
        },
        {
          "Period": "2018/03/05 - 2018/03/11",
          "CCL": 170.82,
          "CCL (Small/Medium units)": 170.88
        },
        {
          "Period": "2018/02/26 - 2018/03/04",
          "CCL": 171.67,
          "CCL (Small/Medium units)": 171.93
        },
        {
          "Period": "2018/02/19 - 2018/02/25",
          "CCL": 170.85,
          "CCL (Small/Medium units)": 170.88
        },
        {
          "Period": "2018/02/12 - 2018/02/18",
          "CCL": 171.59,
          "CCL (Small/Medium units)": 171.59
        },
        {
          "Period": "2018/02/05 - 2018/02/11",
          "CCL": 168.6,
          "CCL (Small/Medium units)": 169.06
        },
        {
          "Period": "2018/01/29 - 2018/02/04",
          "CCL": 167.89,
          "CCL (Small/Medium units)": 168.03
        },
        {
          "Period": "2018/01/22 - 2018/01/28",
          "CCL": 167.96,
          "CCL (Small/Medium units)": 167.93
        },
        {
          "Period": "2018/01/15 - 2018/01/21",
          "CCL": 167.63,
          "CCL (Small/Medium units)": 167.6
        },
        {
          "Period": "2018/01/08 - 2018/01/14",
          "CCL": 167.51,
          "CCL (Small/Medium units)": 167.47
        },
        {
          "Period": "2018/01/01 - 2018/01/07",
          "CCL": 165.59,
          "CCL (Small/Medium units)": 165.5
        },
        {
          "Period": "2017/12/25 - 2017/12/31",
          "CCL": 165.02,
          "CCL (Small/Medium units)": 165.07
        },
        {
          "Period": "2017/12/18 - 2017/12/24",
          "CCL": 165.62,
          "CCL (Small/Medium units)": 165.99
        },
        {
          "Period": "2017/12/11 - 2017/12/17",
          "CCL": 165.3,
          "CCL (Small/Medium units)": 165.8
        },
        {
          "Period": "2017/12/04 - 2017/12/10",
          "CCL": 164.46,
          "CCL (Small/Medium units)": 164.9
        },
        {
          "Period": "2017/11/27 - 2017/12/03",
          "CCL": 163.29,
          "CCL (Small/Medium units)": 164
        },
        {
          "Period": "2017/11/20 - 2017/11/26",
          "CCL": 163.34,
          "CCL (Small/Medium units)": 163.86
        },
        {
          "Period": "2017/11/13 - 2017/11/19",
          "CCL": 162.34,
          "CCL (Small/Medium units)": 162.82
        },
        {
          "Period": "2017/11/06 - 2017/11/12",
          "CCL": 162.6,
          "CCL (Small/Medium units)": 163.12
        },
        {
          "Period": "2017/10/30 - 2017/11/05",
          "CCL": 161.83,
          "CCL (Small/Medium units)": 162.26
        },
        {
          "Period": "2017/10/23 - 2017/10/29",
          "CCL": 158.72,
          "CCL (Small/Medium units)": 158.99
        },
        {
          "Period": "2017/10/16 - 2017/10/22",
          "CCL": 159.84,
          "CCL (Small/Medium units)": 160.28
        },
        {
          "Period": "2017/10/09 - 2017/10/15",
          "CCL": 160.57,
          "CCL (Small/Medium units)": 160.77
        },
        {
          "Period": "2017/10/02 - 2017/10/08",
          "CCL": 159.89,
          "CCL (Small/Medium units)": 160.16
        },
        {
          "Period": "2017/09/25 - 2017/10/01",
          "CCL": 160.02,
          "CCL (Small/Medium units)": 160.48
        },
        {
          "Period": "2017/09/18 - 2017/09/24",
          "CCL": 160.93,
          "CCL (Small/Medium units)": 160.81
        },
        {
          "Period": "2017/09/11 - 2017/09/17",
          "CCL": 160.75,
          "CCL (Small/Medium units)": 159.95
        },
        {
          "Period": "2017/09/04 - 2017/09/10",
          "CCL": 160.95,
          "CCL (Small/Medium units)": 160.79
        },
        {
          "Period": "2017/08/28 - 2017/09/03",
          "CCL": 160.61,
          "CCL (Small/Medium units)": 160.94
        },
        {
          "Period": "2017/08/21 - 2017/08/27",
          "CCL": 161.36,
          "CCL (Small/Medium units)": 161.4
        },
        {
          "Period": "2017/08/14 - 2017/08/20",
          "CCL": 160.8,
          "CCL (Small/Medium units)": 160.89
        },
        {
          "Period": "2017/08/07 - 2017/08/13",
          "CCL": 160.14,
          "CCL (Small/Medium units)": 160.15
        },
        {
          "Period": "2017/07/31 - 2017/08/06",
          "CCL": 159.84,
          "CCL (Small/Medium units)": 159.8
        },
        {
          "Period": "2017/07/24 - 2017/07/30",
          "CCL": 160.3,
          "CCL (Small/Medium units)": 160.42
        },
        {
          "Period": "2017/07/17 - 2017/07/23",
          "CCL": 159.88,
          "CCL (Small/Medium units)": 160.01
        },
        {
          "Period": "2017/07/10 - 2017/07/16",
          "CCL": 159.15,
          "CCL (Small/Medium units)": 159.28
        },
        {
          "Period": "2017/07/03 - 2017/07/09",
          "CCL": 159.56,
          "CCL (Small/Medium units)": 159.73
        },
        {
          "Period": "2017/06/26 - 2017/07/02",
          "CCL": 160.05,
          "CCL (Small/Medium units)": 160.08
        },
        {
          "Period": "2017/06/19 - 2017/06/25",
          "CCL": 160.26,
          "CCL (Small/Medium units)": 160.53
        },
        {
          "Period": "2017/06/12 - 2017/06/18",
          "CCL": 159.12,
          "CCL (Small/Medium units)": 159.27
        },
        {
          "Period": "2017/06/05 - 2017/06/11",
          "CCL": 159.88,
          "CCL (Small/Medium units)": 160.19
        },
        {
          "Period": "2017/05/29 - 2017/06/04",
          "CCL": 158.92,
          "CCL (Small/Medium units)": 159.22
        },
        {
          "Period": "2017/05/22 - 2017/05/28",
          "CCL": 158.78,
          "CCL (Small/Medium units)": 159.35
        },
        {
          "Period": "2017/05/15 - 2017/05/21",
          "CCL": 158.26,
          "CCL (Small/Medium units)": 158.7
        },
        {
          "Period": "2017/05/08 - 2017/05/14",
          "CCL": 156.44,
          "CCL (Small/Medium units)": 157.28
        },
        {
          "Period": "2017/05/01 - 2017/05/07",
          "CCL": 156.27,
          "CCL (Small/Medium units)": 157.2
        },
        {
          "Period": "2017/04/24 - 2017/04/30",
          "CCL": 155.45,
          "CCL (Small/Medium units)": 155.97
        },
        {
          "Period": "2017/04/17 - 2017/04/23",
          "CCL": 154.57,
          "CCL (Small/Medium units)": 154.99
        },
        {
          "Period": "2017/04/10 - 2017/04/16",
          "CCL": 152.77,
          "CCL (Small/Medium units)": 152.96
        },
        {
          "Period": "2017/04/03 - 2017/04/09",
          "CCL": 152.57,
          "CCL (Small/Medium units)": 152.78
        },
        {
          "Period": "2017/03/27 - 2017/04/02",
          "CCL": 152.18,
          "CCL (Small/Medium units)": 152.6
        },
        {
          "Period": "2017/03/20 - 2017/03/26",
          "CCL": 150.89,
          "CCL (Small/Medium units)": 151.35
        },
        {
          "Period": "2017/03/13 - 2017/03/19",
          "CCL": 150.55,
          "CCL (Small/Medium units)": 151.11
        },
        {
          "Period": "2017/03/06 - 2017/03/12",
          "CCL": 149.38,
          "CCL (Small/Medium units)": 149.62
        },
        {
          "Period": "2017/02/27 - 2017/03/05",
          "CCL": 148.67,
          "CCL (Small/Medium units)": 148.71
        },
        {
          "Period": "2017/02/20 - 2017/02/26",
          "CCL": 148.22,
          "CCL (Small/Medium units)": 148.13
        },
        {
          "Period": "2017/02/13 - 2017/02/19",
          "CCL": 147.74,
          "CCL (Small/Medium units)": 147.72
        },
        {
          "Period": "2017/02/06 - 2017/02/12",
          "CCL": 146.83,
          "CCL (Small/Medium units)": 146.79
        },
        {
          "Period": "2017/01/30 - 2017/02/05",
          "CCL": 146.59,
          "CCL (Small/Medium units)": 146.71
        },
        {
          "Period": "2017/01/23 - 2017/01/29",
          "CCL": 145.89,
          "CCL (Small/Medium units)": 145.98
        },
        {
          "Period": "2017/01/16 - 2017/01/22",
          "CCL": 146.8,
          "CCL (Small/Medium units)": 147
        },
        {
          "Period": "2017/01/09 - 2017/01/15",
          "CCL": 144.16,
          "CCL (Small/Medium units)": 144.5
        },
        {
          "Period": "2017/01/02 - 2017/01/08",
          "CCL": 144.28,
          "CCL (Small/Medium units)": 144.14
        },
        {
          "Period": "2016/12/26 - 2017/01/01",
          "CCL": 144.72,
          "CCL (Small/Medium units)": 144.3
        },
        {
          "Period": "2016/12/19 - 2016/12/25",
          "CCL": 146.3,
          "CCL (Small/Medium units)": 145.91
        },
        {
          "Period": "2016/12/12 - 2016/12/18",
          "CCL": 145.44,
          "CCL (Small/Medium units)": 144.93
        },
        {
          "Period": "2016/12/05 - 2016/12/11",
          "CCL": 145.17,
          "CCL (Small/Medium units)": 144.67
        },
        {
          "Period": "2016/11/28 - 2016/12/04",
          "CCL": 144.91,
          "CCL (Small/Medium units)": 144.42
        },
        {
          "Period": "2016/11/21 - 2016/11/27",
          "CCL": 144.47,
          "CCL (Small/Medium units)": 144.42
        },
        {
          "Period": "2016/11/14 - 2016/11/20",
          "CCL": 144.08,
          "CCL (Small/Medium units)": 143.96
        },
        {
          "Period": "2016/11/07 - 2016/11/13",
          "CCL": 143.95,
          "CCL (Small/Medium units)": 144.08
        },
        {
          "Period": "2016/10/31 - 2016/11/06",
          "CCL": 143.49,
          "CCL (Small/Medium units)": 143.59
        },
        {
          "Period": "2016/10/24 - 2016/10/30",
          "CCL": 143.68,
          "CCL (Small/Medium units)": 143.11
        },
        {
          "Period": "2016/10/17 - 2016/10/23",
          "CCL": 144.09,
          "CCL (Small/Medium units)": 143.58
        },
        {
          "Period": "2016/10/10 - 2016/10/16",
          "CCL": 141.53,
          "CCL (Small/Medium units)": 141.24
        },
        {
          "Period": "2016/10/03 - 2016/10/09",
          "CCL": 141.77,
          "CCL (Small/Medium units)": 141.34
        },
        {
          "Period": "2016/09/26 - 2016/10/02",
          "CCL": 141.04,
          "CCL (Small/Medium units)": 140.38
        },
        {
          "Period": "2016/09/19 - 2016/09/25",
          "CCL": 137.62,
          "CCL (Small/Medium units)": 137.38
        },
        {
          "Period": "2016/09/12 - 2016/09/18",
          "CCL": 138.7,
          "CCL (Small/Medium units)": 138.33
        },
        {
          "Period": "2016/09/05 - 2016/09/11",
          "CCL": 136.57,
          "CCL (Small/Medium units)": 136.26
        },
        {
          "Period": "2016/08/29 - 2016/09/04",
          "CCL": 137.5,
          "CCL (Small/Medium units)": 137.16
        },
        {
          "Period": "2016/08/22 - 2016/08/28",
          "CCL": 136.21,
          "CCL (Small/Medium units)": 136.35
        },
        {
          "Period": "2016/08/15 - 2016/08/21",
          "CCL": 133.13,
          "CCL (Small/Medium units)": 133.22
        },
        {
          "Period": "2016/08/08 - 2016/08/14",
          "CCL": 133.41,
          "CCL (Small/Medium units)": 133.25
        },
        {
          "Period": "2016/08/01 - 2016/08/07",
          "CCL": 131.28,
          "CCL (Small/Medium units)": 131.03
        },
        {
          "Period": "2016/07/25 - 2016/07/31",
          "CCL": 131.34,
          "CCL (Small/Medium units)": 131.07
        },
        {
          "Period": "2016/07/18 - 2016/07/24",
          "CCL": 130.47,
          "CCL (Small/Medium units)": 130.06
        },
        {
          "Period": "2016/07/11 - 2016/07/17",
          "CCL": 130.5,
          "CCL (Small/Medium units)": 130.12
        },
        {
          "Period": "2016/07/04 - 2016/07/10",
          "CCL": 129.84,
          "CCL (Small/Medium units)": 129.54
        },
        {
          "Period": "2016/06/27 - 2016/07/03",
          "CCL": 128.85,
          "CCL (Small/Medium units)": 128.42
        },
        {
          "Period": "2016/06/20 - 2016/06/26",
          "CCL": 129.44,
          "CCL (Small/Medium units)": 129.02
        },
        {
          "Period": "2016/06/13 - 2016/06/19",
          "CCL": 129.38,
          "CCL (Small/Medium units)": 128.83
        },
        {
          "Period": "2016/06/06 - 2016/06/12",
          "CCL": 129.2,
          "CCL (Small/Medium units)": 128.61
        },
        {
          "Period": "2016/05/30 - 2016/06/05",
          "CCL": 128.75,
          "CCL (Small/Medium units)": 128.04
        },
        {
          "Period": "2016/05/23 - 2016/05/29",
          "CCL": 128.37,
          "CCL (Small/Medium units)": 127.6
        },
        {
          "Period": "2016/05/16 - 2016/05/22",
          "CCL": 128.51,
          "CCL (Small/Medium units)": 127.73
        },
        {
          "Period": "2016/05/09 - 2016/05/15",
          "CCL": 128.41,
          "CCL (Small/Medium units)": 127.74
        },
        {
          "Period": "2016/05/02 - 2016/05/08",
          "CCL": 128.63,
          "CCL (Small/Medium units)": 127.87
        },
        {
          "Period": "2016/04/25 - 2016/05/01",
          "CCL": 128.48,
          "CCL (Small/Medium units)": 127.87
        },
        {
          "Period": "2016/04/18 - 2016/04/24",
          "CCL": 129.87,
          "CCL (Small/Medium units)": 128.56
        },
        {
          "Period": "2016/04/11 - 2016/04/17",
          "CCL": 127.96,
          "CCL (Small/Medium units)": 126.92
        },
        {
          "Period": "2016/04/04 - 2016/04/10",
          "CCL": 128.34,
          "CCL (Small/Medium units)": 127.46
        },
        {
          "Period": "2016/03/28 - 2016/04/03",
          "CCL": 127.84,
          "CCL (Small/Medium units)": 127.02
        },
        {
          "Period": "2016/03/21 - 2016/03/27",
          "CCL": 127.46,
          "CCL (Small/Medium units)": 126.4
        },
        {
          "Period": "2016/03/14 - 2016/03/20",
          "CCL": 128.4,
          "CCL (Small/Medium units)": 127.43
        },
        {
          "Period": "2016/03/07 - 2016/03/13",
          "CCL": 127.5,
          "CCL (Small/Medium units)": 126.47
        },
        {
          "Period": "2016/02/29 - 2016/03/06",
          "CCL": 130.3,
          "CCL (Small/Medium units)": 128.83
        },
        {
          "Period": "2016/02/22 - 2016/02/28",
          "CCL": 131.76,
          "CCL (Small/Medium units)": 130.4
        },
        {
          "Period": "2016/02/15 - 2016/02/21",
          "CCL": 130.77,
          "CCL (Small/Medium units)": 129.42
        },
        {
          "Period": "2016/02/08 - 2016/02/14",
          "CCL": 130.58,
          "CCL (Small/Medium units)": 129.24
        },
        {
          "Period": "2016/02/01 - 2016/02/07",
          "CCL": 131.01,
          "CCL (Small/Medium units)": 129.73
        },
        {
          "Period": "2016/01/25 - 2016/01/31",
          "CCL": 131.95,
          "CCL (Small/Medium units)": 130.61
        },
        {
          "Period": "2016/01/18 - 2016/01/24",
          "CCL": 132.9,
          "CCL (Small/Medium units)": 132.26
        },
        {
          "Period": "2016/01/11 - 2016/01/17",
          "CCL": 134.95,
          "CCL (Small/Medium units)": 134.41
        },
        {
          "Period": "2016/01/04 - 2016/01/10",
          "CCL": 134.41,
          "CCL (Small/Medium units)": 133.9
        },
        {
          "Period": "2015/12/28 - 2016/01/03",
          "CCL": 135.83,
          "CCL (Small/Medium units)": 134.85
        },
        {
          "Period": "2015/12/21 - 2015/12/27",
          "CCL": 135.89,
          "CCL (Small/Medium units)": 134.99
        },
        {
          "Period": "2015/12/14 - 2015/12/20",
          "CCL": 136.86,
          "CCL (Small/Medium units)": 136.05
        },
        {
          "Period": "2015/12/07 - 2015/12/13",
          "CCL": 137.3,
          "CCL (Small/Medium units)": 137.15
        },
        {
          "Period": "2015/11/30 - 2015/12/06",
          "CCL": 138.22,
          "CCL (Small/Medium units)": 138.1
        },
        {
          "Period": "2015/11/23 - 2015/11/29",
          "CCL": 139.82,
          "CCL (Small/Medium units)": 139.65
        },
        {
          "Period": "2015/11/16 - 2015/11/22",
          "CCL": 140.27,
          "CCL (Small/Medium units)": 139.97
        },
        {
          "Period": "2015/11/09 - 2015/11/15",
          "CCL": 141.13,
          "CCL (Small/Medium units)": 140.84
        },
        {
          "Period": "2015/11/02 - 2015/11/08",
          "CCL": 142.14,
          "CCL (Small/Medium units)": 141.68
        },
        {
          "Period": "2015/10/26 - 2015/11/01",
          "CCL": 141.76,
          "CCL (Small/Medium units)": 141.15
        },
        {
          "Period": "2015/10/19 - 2015/10/25",
          "CCL": 142.98,
          "CCL (Small/Medium units)": 142.35
        },
        {
          "Period": "2015/10/12 - 2015/10/18",
          "CCL": 144.33,
          "CCL (Small/Medium units)": 143.72
        },
        {
          "Period": "2015/10/05 - 2015/10/11",
          "CCL": 144.61,
          "CCL (Small/Medium units)": 144.28
        },
        {
          "Period": "2015/09/28 - 2015/10/04",
          "CCL": 146.45,
          "CCL (Small/Medium units)": 146.27
        },
        {
          "Period": "2015/09/21 - 2015/09/27",
          "CCL": 146.01,
          "CCL (Small/Medium units)": 145.67
        },
        {
          "Period": "2015/09/14 - 2015/09/20",
          "CCL": 146.67,
          "CCL (Small/Medium units)": 146.42
        },
        {
          "Period": "2015/09/07 - 2015/09/13",
          "CCL": 146.92,
          "CCL (Small/Medium units)": 146.7
        },
        {
          "Period": "2015/08/31 - 2015/09/06",
          "CCL": 146.76,
          "CCL (Small/Medium units)": 146.41
        },
        {
          "Period": "2015/08/24 - 2015/08/30",
          "CCL": 146.78,
          "CCL (Small/Medium units)": 146.55
        },
        {
          "Period": "2015/08/17 - 2015/08/23",
          "CCL": 145.45,
          "CCL (Small/Medium units)": 145.13
        },
        {
          "Period": "2015/08/10 - 2015/08/16",
          "CCL": 144.84,
          "CCL (Small/Medium units)": 145.24
        },
        {
          "Period": "2015/08/03 - 2015/08/09",
          "CCL": 144.29,
          "CCL (Small/Medium units)": 144.56
        },
        {
          "Period": "2015/07/27 - 2015/08/02",
          "CCL": 146.07,
          "CCL (Small/Medium units)": 146.08
        },
        {
          "Period": "2015/07/20 - 2015/07/26",
          "CCL": 145.48,
          "CCL (Small/Medium units)": 145.58
        },
        {
          "Period": "2015/07/13 - 2015/07/19",
          "CCL": 143.32,
          "CCL (Small/Medium units)": 143.3
        },
        {
          "Period": "2015/07/06 - 2015/07/12",
          "CCL": 142.62,
          "CCL (Small/Medium units)": 142.87
        },
        {
          "Period": "2015/06/29 - 2015/07/05",
          "CCL": 143.15,
          "CCL (Small/Medium units)": 143.34
        },
        {
          "Period": "2015/06/22 - 2015/06/28",
          "CCL": 143.56,
          "CCL (Small/Medium units)": 143.73
        },
        {
          "Period": "2015/06/15 - 2015/06/21",
          "CCL": 141.87,
          "CCL (Small/Medium units)": 141.26
        },
        {
          "Period": "2015/06/08 - 2015/06/14",
          "CCL": 142.26,
          "CCL (Small/Medium units)": 141.79
        },
        {
          "Period": "2015/06/01 - 2015/06/07",
          "CCL": 143.31,
          "CCL (Small/Medium units)": 142.47
        },
        {
          "Period": "2015/05/25 - 2015/05/31",
          "CCL": 141.96,
          "CCL (Small/Medium units)": 141.47
        },
        {
          "Period": "2015/05/18 - 2015/05/24",
          "CCL": 140.33,
          "CCL (Small/Medium units)": 139.94
        },
        {
          "Period": "2015/05/11 - 2015/05/17",
          "CCL": 141.3,
          "CCL (Small/Medium units)": 140.53
        },
        {
          "Period": "2015/05/04 - 2015/05/10",
          "CCL": 141.37,
          "CCL (Small/Medium units)": 140.73
        },
        {
          "Period": "2015/04/27 - 2015/05/03",
          "CCL": 141.46,
          "CCL (Small/Medium units)": 141.3
        },
        {
          "Period": "2015/04/20 - 2015/04/26",
          "CCL": 141.22,
          "CCL (Small/Medium units)": 140.53
        },
        {
          "Period": "2015/04/13 - 2015/04/19",
          "CCL": 140.04,
          "CCL (Small/Medium units)": 139.39
        },
        {
          "Period": "2015/04/06 - 2015/04/12",
          "CCL": 141.6,
          "CCL (Small/Medium units)": 141.06
        },
        {
          "Period": "2015/03/30 - 2015/04/05",
          "CCL": 142.36,
          "CCL (Small/Medium units)": 141.76
        },
        {
          "Period": "2015/03/23 - 2015/03/29",
          "CCL": 139.7,
          "CCL (Small/Medium units)": 139.01
        },
        {
          "Period": "2015/03/16 - 2015/03/22",
          "CCL": 140.05,
          "CCL (Small/Medium units)": 139.79
        },
        {
          "Period": "2015/03/09 - 2015/03/15",
          "CCL": 139.03,
          "CCL (Small/Medium units)": 138.73
        },
        {
          "Period": "2015/03/02 - 2015/03/08",
          "CCL": 138.8,
          "CCL (Small/Medium units)": 138.48
        },
        {
          "Period": "2015/02/23 - 2015/03/01",
          "CCL": 137.12,
          "CCL (Small/Medium units)": 136.57
        },
        {
          "Period": "2015/02/16 - 2015/02/22",
          "CCL": 136.2,
          "CCL (Small/Medium units)": 135.45
        },
        {
          "Period": "2015/02/09 - 2015/02/15",
          "CCL": 137.2,
          "CCL (Small/Medium units)": 136.56
        },
        {
          "Period": "2015/02/02 - 2015/02/08",
          "CCL": 136.64,
          "CCL (Small/Medium units)": 135.61
        },
        {
          "Period": "2015/01/26 - 2015/02/01",
          "CCL": 136.35,
          "CCL (Small/Medium units)": 135.81
        },
        {
          "Period": "2015/01/19 - 2015/01/25",
          "CCL": 134.03,
          "CCL (Small/Medium units)": 133.24
        },
        {
          "Period": "2015/01/12 - 2015/01/18",
          "CCL": 134.64,
          "CCL (Small/Medium units)": 133.75
        },
        {
          "Period": "2015/01/05 - 2015/01/11",
          "CCL": 133.64,
          "CCL (Small/Medium units)": 132.64
        },
        {
          "Period": "2014/12/29 - 2015/01/04",
          "CCL": 133.34,
          "CCL (Small/Medium units)": 132.37
        },
        {
          "Period": "2014/12/22 - 2014/12/28",
          "CCL": 132.45,
          "CCL (Small/Medium units)": 131.37
        },
        {
          "Period": "2014/12/15 - 2014/12/21",
          "CCL": 132.69,
          "CCL (Small/Medium units)": 131.57
        },
        {
          "Period": "2014/12/08 - 2014/12/14",
          "CCL": 132.81,
          "CCL (Small/Medium units)": 131.85
        },
        {
          "Period": "2014/12/01 - 2014/12/07",
          "CCL": 131.61,
          "CCL (Small/Medium units)": 130.67
        },
        {
          "Period": "2014/11/24 - 2014/11/30",
          "CCL": 130.46,
          "CCL (Small/Medium units)": 129.53
        },
        {
          "Period": "2014/11/17 - 2014/11/23",
          "CCL": 130.16,
          "CCL (Small/Medium units)": 129.55
        },
        {
          "Period": "2014/11/10 - 2014/11/16",
          "CCL": 129.61,
          "CCL (Small/Medium units)": 129.02
        },
        {
          "Period": "2014/11/03 - 2014/11/09",
          "CCL": 129.69,
          "CCL (Small/Medium units)": 128.66
        },
        {
          "Period": "2014/10/27 - 2014/11/02",
          "CCL": 129.4,
          "CCL (Small/Medium units)": 128.3
        },
        {
          "Period": "2014/10/20 - 2014/10/26",
          "CCL": 129.39,
          "CCL (Small/Medium units)": 128.27
        },
        {
          "Period": "2014/10/13 - 2014/10/19",
          "CCL": 129.38,
          "CCL (Small/Medium units)": 128.26
        },
        {
          "Period": "2014/10/06 - 2014/10/12",
          "CCL": 129.83,
          "CCL (Small/Medium units)": 128.51
        },
        {
          "Period": "2014/09/29 - 2014/10/05",
          "CCL": 127.65,
          "CCL (Small/Medium units)": 126.52
        },
        {
          "Period": "2014/09/22 - 2014/09/28",
          "CCL": 128.14,
          "CCL (Small/Medium units)": 126.64
        },
        {
          "Period": "2014/09/15 - 2014/09/21",
          "CCL": 127.46,
          "CCL (Small/Medium units)": 126.2
        },
        {
          "Period": "2014/09/08 - 2014/09/14",
          "CCL": 126.8,
          "CCL (Small/Medium units)": 125.5
        },
        {
          "Period": "2014/09/01 - 2014/09/07",
          "CCL": 126.14,
          "CCL (Small/Medium units)": 124.78
        },
        {
          "Period": "2014/08/25 - 2014/08/31",
          "CCL": 126.94,
          "CCL (Small/Medium units)": 125.53
        },
        {
          "Period": "2014/08/18 - 2014/08/24",
          "CCL": 126.2,
          "CCL (Small/Medium units)": 124.78
        },
        {
          "Period": "2014/08/11 - 2014/08/17",
          "CCL": 125.31,
          "CCL (Small/Medium units)": 123.8
        },
        {
          "Period": "2014/08/04 - 2014/08/10",
          "CCL": 125.66,
          "CCL (Small/Medium units)": 124.01
        },
        {
          "Period": "2014/07/28 - 2014/08/03",
          "CCL": 124,
          "CCL (Small/Medium units)": 122.53
        },
        {
          "Period": "2014/07/21 - 2014/07/27",
          "CCL": 123.54,
          "CCL (Small/Medium units)": 122.37
        },
        {
          "Period": "2014/07/14 - 2014/07/20",
          "CCL": 123.2,
          "CCL (Small/Medium units)": 121.95
        },
        {
          "Period": "2014/07/07 - 2014/07/13",
          "CCL": 123.36,
          "CCL (Small/Medium units)": 122.12
        },
        {
          "Period": "2014/06/30 - 2014/07/06",
          "CCL": 123.35,
          "CCL (Small/Medium units)": 121.89
        },
        {
          "Period": "2014/06/23 - 2014/06/29",
          "CCL": 121.19,
          "CCL (Small/Medium units)": 119.69
        },
        {
          "Period": "2014/06/16 - 2014/06/22",
          "CCL": 121.16,
          "CCL (Small/Medium units)": 119.44
        },
        {
          "Period": "2014/06/09 - 2014/06/15",
          "CCL": 119.89,
          "CCL (Small/Medium units)": 118.15
        },
        {
          "Period": "2014/06/02 - 2014/06/08",
          "CCL": 119.23,
          "CCL (Small/Medium units)": 117.42
        },
        {
          "Period": "2014/05/26 - 2014/06/01",
          "CCL": 118.37,
          "CCL (Small/Medium units)": 116.51
        },
        {
          "Period": "2014/05/19 - 2014/05/25",
          "CCL": 119.07,
          "CCL (Small/Medium units)": 117.04
        },
        {
          "Period": "2014/05/12 - 2014/05/18",
          "CCL": 118.56,
          "CCL (Small/Medium units)": 116.46
        },
        {
          "Period": "2014/05/05 - 2014/05/11",
          "CCL": 118.86,
          "CCL (Small/Medium units)": 116.66
        },
        {
          "Period": "2014/04/28 - 2014/05/04",
          "CCL": 118.12,
          "CCL (Small/Medium units)": 115.99
        },
        {
          "Period": "2014/04/21 - 2014/04/27",
          "CCL": 118.4,
          "CCL (Small/Medium units)": 116.32
        },
        {
          "Period": "2014/04/14 - 2014/04/20",
          "CCL": 118.31,
          "CCL (Small/Medium units)": 116.16
        },
        {
          "Period": "2014/04/07 - 2014/04/13",
          "CCL": 119.04,
          "CCL (Small/Medium units)": 116.78
        },
        {
          "Period": "2014/03/31 - 2014/04/06",
          "CCL": 118.82,
          "CCL (Small/Medium units)": 116.72
        },
        {
          "Period": "2014/03/24 - 2014/03/30",
          "CCL": 117.22,
          "CCL (Small/Medium units)": 115.21
        },
        {
          "Period": "2014/03/17 - 2014/03/23",
          "CCL": 118.42,
          "CCL (Small/Medium units)": 116.36
        },
        {
          "Period": "2014/03/10 - 2014/03/16",
          "CCL": 118.25,
          "CCL (Small/Medium units)": 116.21
        },
        {
          "Period": "2014/03/03 - 2014/03/09",
          "CCL": 117.18,
          "CCL (Small/Medium units)": 115.03
        },
        {
          "Period": "2014/02/24 - 2014/03/02",
          "CCL": 118.02,
          "CCL (Small/Medium units)": 115.88
        },
        {
          "Period": "2014/02/17 - 2014/02/23",
          "CCL": 117.77,
          "CCL (Small/Medium units)": 115.62
        },
        {
          "Period": "2014/02/10 - 2014/02/16",
          "CCL": 117.41,
          "CCL (Small/Medium units)": 115.41
        },
        {
          "Period": "2014/02/03 - 2014/02/09",
          "CCL": 118.08,
          "CCL (Small/Medium units)": 116.08
        },
        {
          "Period": "2014/01/27 - 2014/02/02",
          "CCL": 118.31,
          "CCL (Small/Medium units)": 116.28
        },
        {
          "Period": "2014/01/20 - 2014/01/26",
          "CCL": 117.56,
          "CCL (Small/Medium units)": 115.48
        },
        {
          "Period": "2014/01/13 - 2014/01/19",
          "CCL": 118.2,
          "CCL (Small/Medium units)": 116.19
        },
        {
          "Period": "2014/01/06 - 2014/01/12",
          "CCL": 117.71,
          "CCL (Small/Medium units)": 115.66
        },
        {
          "Period": "2013/12/30 - 2014/01/05",
          "CCL": 118.96,
          "CCL (Small/Medium units)": 116.9
        },
        {
          "Period": "2013/12/23 - 2013/12/29",
          "CCL": 119.07,
          "CCL (Small/Medium units)": 117
        },
        {
          "Period": "2013/12/16 - 2013/12/22",
          "CCL": 118.95,
          "CCL (Small/Medium units)": 116.72
        },
        {
          "Period": "2013/12/09 - 2013/12/15",
          "CCL": 118.61,
          "CCL (Small/Medium units)": 116.39
        },
        {
          "Period": "2013/12/02 - 2013/12/08",
          "CCL": 118.96,
          "CCL (Small/Medium units)": 116.85
        },
        {
          "Period": "2013/11/25 - 2013/12/01",
          "CCL": 119.53,
          "CCL (Small/Medium units)": 117.32
        },
        {
          "Period": "2013/11/18 - 2013/11/24",
          "CCL": 120.39,
          "CCL (Small/Medium units)": 118.23
        },
        {
          "Period": "2013/11/11 - 2013/11/17",
          "CCL": 120.13,
          "CCL (Small/Medium units)": 117.96
        },
        {
          "Period": "2013/11/04 - 2013/11/10",
          "CCL": 119.93,
          "CCL (Small/Medium units)": 117.76
        },
        {
          "Period": "2013/10/28 - 2013/11/03",
          "CCL": 120.72,
          "CCL (Small/Medium units)": 118.68
        },
        {
          "Period": "2013/10/21 - 2013/10/27",
          "CCL": 119.5,
          "CCL (Small/Medium units)": 117.39
        },
        {
          "Period": "2013/10/14 - 2013/10/20",
          "CCL": 120.08,
          "CCL (Small/Medium units)": 118.02
        },
        {
          "Period": "2013/10/07 - 2013/10/13",
          "CCL": 119.87,
          "CCL (Small/Medium units)": 117.75
        },
        {
          "Period": "2013/09/30 - 2013/10/06",
          "CCL": 119.83,
          "CCL (Small/Medium units)": 117.71
        },
        {
          "Period": "2013/09/23 - 2013/09/29",
          "CCL": 120,
          "CCL (Small/Medium units)": 118.01
        },
        {
          "Period": "2013/09/16 - 2013/09/22",
          "CCL": 121.08,
          "CCL (Small/Medium units)": 119.09
        },
        {
          "Period": "2013/09/09 - 2013/09/15",
          "CCL": 120.84,
          "CCL (Small/Medium units)": 118.87
        },
        {
          "Period": "2013/09/02 - 2013/09/08",
          "CCL": 121.94,
          "CCL (Small/Medium units)": 119.94
        },
        {
          "Period": "2013/08/26 - 2013/09/01",
          "CCL": 120.86,
          "CCL (Small/Medium units)": 119.02
        },
        {
          "Period": "2013/08/19 - 2013/08/25",
          "CCL": 119.85,
          "CCL (Small/Medium units)": 117.86
        },
        {
          "Period": "2013/08/12 - 2013/08/18",
          "CCL": 119.79,
          "CCL (Small/Medium units)": 118.01
        },
        {
          "Period": "2013/08/05 - 2013/08/11",
          "CCL": 119.3,
          "CCL (Small/Medium units)": 117.27
        },
        {
          "Period": "2013/07/29 - 2013/08/04",
          "CCL": 120.41,
          "CCL (Small/Medium units)": 118.37
        },
        {
          "Period": "2013/07/22 - 2013/07/28",
          "CCL": 120.95,
          "CCL (Small/Medium units)": 118.88
        },
        {
          "Period": "2013/07/15 - 2013/07/21",
          "CCL": 120.61,
          "CCL (Small/Medium units)": 118.8
        },
        {
          "Period": "2013/07/08 - 2013/07/14",
          "CCL": 120.14,
          "CCL (Small/Medium units)": 118.23
        },
        {
          "Period": "2013/07/01 - 2013/07/07",
          "CCL": 119.69,
          "CCL (Small/Medium units)": 117.72
        },
        {
          "Period": "2013/06/24 - 2013/06/30",
          "CCL": 121.88,
          "CCL (Small/Medium units)": 120
        },
        {
          "Period": "2013/06/17 - 2013/06/23",
          "CCL": 121.22,
          "CCL (Small/Medium units)": 119.19
        },
        {
          "Period": "2013/06/10 - 2013/06/16",
          "CCL": 119.96,
          "CCL (Small/Medium units)": 117.44
        },
        {
          "Period": "2013/06/03 - 2013/06/09",
          "CCL": 120.74,
          "CCL (Small/Medium units)": 118.31
        },
        {
          "Period": "2013/05/27 - 2013/06/02",
          "CCL": 120.14,
          "CCL (Small/Medium units)": 117.68
        },
        {
          "Period": "2013/05/20 - 2013/05/26",
          "CCL": 119.06,
          "CCL (Small/Medium units)": 116.93
        },
        {
          "Period": "2013/05/13 - 2013/05/19",
          "CCL": 118.79,
          "CCL (Small/Medium units)": 116.52
        },
        {
          "Period": "2013/05/06 - 2013/05/12",
          "CCL": 118.58,
          "CCL (Small/Medium units)": 116.28
        },
        {
          "Period": "2013/04/29 - 2013/05/05",
          "CCL": 118.51,
          "CCL (Small/Medium units)": 116.3
        },
        {
          "Period": "2013/04/22 - 2013/04/28",
          "CCL": 118.84,
          "CCL (Small/Medium units)": 116.68
        },
        {
          "Period": "2013/04/15 - 2013/04/21",
          "CCL": 118.71,
          "CCL (Small/Medium units)": 116.41
        },
        {
          "Period": "2013/04/08 - 2013/04/14",
          "CCL": 120.12,
          "CCL (Small/Medium units)": 117.99
        },
        {
          "Period": "2013/04/01 - 2013/04/07",
          "CCL": 121.83,
          "CCL (Small/Medium units)": 119.85
        },
        {
          "Period": "2013/03/25 - 2013/03/31",
          "CCL": 123.01,
          "CCL (Small/Medium units)": 120.84
        },
        {
          "Period": "2013/03/18 - 2013/03/24",
          "CCL": 123.45,
          "CCL (Small/Medium units)": 121.31
        },
        {
          "Period": "2013/03/11 - 2013/03/17",
          "CCL": 123.66,
          "CCL (Small/Medium units)": 121.57
        },
        {
          "Period": "2013/03/04 - 2013/03/10",
          "CCL": 122.09,
          "CCL (Small/Medium units)": 120.16
        },
        {
          "Period": "2013/02/25 - 2013/03/03",
          "CCL": 121.95,
          "CCL (Small/Medium units)": 119.94
        },
        {
          "Period": "2013/02/18 - 2013/02/24",
          "CCL": 121.64,
          "CCL (Small/Medium units)": 119.58
        },
        {
          "Period": "2013/02/11 - 2013/02/17",
          "CCL": 121.58,
          "CCL (Small/Medium units)": 119.24
        },
        {
          "Period": "2013/02/04 - 2013/02/10",
          "CCL": 121.73,
          "CCL (Small/Medium units)": 119.41
        },
        {
          "Period": "2013/01/28 - 2013/02/03",
          "CCL": 120.66,
          "CCL (Small/Medium units)": 118.28
        },
        {
          "Period": "2013/01/21 - 2013/01/27",
          "CCL": 119.13,
          "CCL (Small/Medium units)": 116.77
        },
        {
          "Period": "2013/01/14 - 2013/01/20",
          "CCL": 118.38,
          "CCL (Small/Medium units)": 115.78
        },
        {
          "Period": "2013/01/07 - 2013/01/13",
          "CCL": 115.93,
          "CCL (Small/Medium units)": 113.51
        },
        {
          "Period": "2012/12/31 - 2013/01/06",
          "CCL": 115.6,
          "CCL (Small/Medium units)": 113.18
        },
        {
          "Period": "2012/12/24 - 2012/12/30",
          "CCL": 115.78,
          "CCL (Small/Medium units)": 113.39
        },
        {
          "Period": "2012/12/17 - 2012/12/23",
          "CCL": 115.18,
          "CCL (Small/Medium units)": 112.76
        },
        {
          "Period": "2012/12/10 - 2012/12/16",
          "CCL": 114.97,
          "CCL (Small/Medium units)": 112.62
        },
        {
          "Period": "2012/12/03 - 2012/12/09",
          "CCL": 114.57,
          "CCL (Small/Medium units)": 112.25
        },
        {
          "Period": "2012/11/26 - 2012/12/02",
          "CCL": 114.38,
          "CCL (Small/Medium units)": 111.83
        },
        {
          "Period": "2012/11/19 - 2012/11/25",
          "CCL": 115.05,
          "CCL (Small/Medium units)": 112.49
        },
        {
          "Period": "2012/11/12 - 2012/11/18",
          "CCL": 116.17,
          "CCL (Small/Medium units)": 113.68
        },
        {
          "Period": "2012/11/05 - 2012/11/11",
          "CCL": 116.81,
          "CCL (Small/Medium units)": 113.64
        },
        {
          "Period": "2012/10/29 - 2012/11/04",
          "CCL": 116.07,
          "CCL (Small/Medium units)": 113.12
        },
        {
          "Period": "2012/10/22 - 2012/10/28",
          "CCL": 114.35,
          "CCL (Small/Medium units)": 111.64
        },
        {
          "Period": "2012/10/15 - 2012/10/21",
          "CCL": 112.25,
          "CCL (Small/Medium units)": 109.65
        },
        {
          "Period": "2012/10/08 - 2012/10/14",
          "CCL": 111.19,
          "CCL (Small/Medium units)": 108.54
        },
        {
          "Period": "2012/10/01 - 2012/10/07",
          "CCL": 111.11,
          "CCL (Small/Medium units)": 108.45
        },
        {
          "Period": "2012/09/24 - 2012/09/30",
          "CCL": 110.14,
          "CCL (Small/Medium units)": 107.52
        },
        {
          "Period": "2012/09/17 - 2012/09/23",
          "CCL": 109.81,
          "CCL (Small/Medium units)": 107.1
        },
        {
          "Period": "2012/09/10 - 2012/09/16",
          "CCL": 108.17,
          "CCL (Small/Medium units)": 105.39
        },
        {
          "Period": "2012/09/03 - 2012/09/09",
          "CCL": 108.8,
          "CCL (Small/Medium units)": 106.2
        },
        {
          "Period": "2012/08/27 - 2012/09/02",
          "CCL": 107.99,
          "CCL (Small/Medium units)": 105.14
        },
        {
          "Period": "2012/08/20 - 2012/08/26",
          "CCL": 106.89,
          "CCL (Small/Medium units)": 104.47
        },
        {
          "Period": "2012/08/13 - 2012/08/19",
          "CCL": 107.18,
          "CCL (Small/Medium units)": 104.44
        },
        {
          "Period": "2012/08/06 - 2012/08/12",
          "CCL": 106.85,
          "CCL (Small/Medium units)": 104.14
        },
        {
          "Period": "2012/07/30 - 2012/08/05",
          "CCL": 105.78,
          "CCL (Small/Medium units)": 102.86
        },
        {
          "Period": "2012/07/23 - 2012/07/29",
          "CCL": 106.54,
          "CCL (Small/Medium units)": 103.21
        },
        {
          "Period": "2012/07/16 - 2012/07/22",
          "CCL": 104.93,
          "CCL (Small/Medium units)": 101.53
        },
        {
          "Period": "2012/07/09 - 2012/07/15",
          "CCL": 104.25,
          "CCL (Small/Medium units)": 100.89
        },
        {
          "Period": "2012/07/02 - 2012/07/08",
          "CCL": 105.01,
          "CCL (Small/Medium units)": 101.74
        },
        {
          "Period": "2012/06/25 - 2012/07/01",
          "CCL": 105.46,
          "CCL (Small/Medium units)": 102.37
        },
        {
          "Period": "2012/06/18 - 2012/06/24",
          "CCL": 104.6,
          "CCL (Small/Medium units)": 101.68
        },
        {
          "Period": "2012/06/11 - 2012/06/17",
          "CCL": 104.14,
          "CCL (Small/Medium units)": 101.33
        },
        {
          "Period": "2012/06/04 - 2012/06/10",
          "CCL": 103.82,
          "CCL (Small/Medium units)": 100.77
        },
        {
          "Period": "2012/05/28 - 2012/06/03",
          "CCL": 104.01,
          "CCL (Small/Medium units)": 101.15
        },
        {
          "Period": "2012/05/21 - 2012/05/27",
          "CCL": 104,
          "CCL (Small/Medium units)": 101.14
        },
        {
          "Period": "2012/05/14 - 2012/05/20",
          "CCL": 103.94,
          "CCL (Small/Medium units)": 101.02
        },
        {
          "Period": "2012/05/07 - 2012/05/13",
          "CCL": 103.35,
          "CCL (Small/Medium units)": 100.51
        },
        {
          "Period": "2012/04/30 - 2012/05/06",
          "CCL": 102.89,
          "CCL (Small/Medium units)": 100.29
        },
        {
          "Period": "2012/04/23 - 2012/04/29",
          "CCL": 101.12,
          "CCL (Small/Medium units)": 98.2
        },
        {
          "Period": "2012/04/16 - 2012/04/22",
          "CCL": 102.17,
          "CCL (Small/Medium units)": 99.28
        },
        {
          "Period": "2012/04/09 - 2012/04/15",
          "CCL": 102.5,
          "CCL (Small/Medium units)": 99.74
        },
        {
          "Period": "2012/04/02 - 2012/04/08",
          "CCL": 101.79,
          "CCL (Small/Medium units)": 98.95
        },
        {
          "Period": "2012/03/26 - 2012/04/01",
          "CCL": 101.17,
          "CCL (Small/Medium units)": 98.33
        },
        {
          "Period": "2012/03/19 - 2012/03/25",
          "CCL": 100.06,
          "CCL (Small/Medium units)": 97.22
        },
        {
          "Period": "2012/03/12 - 2012/03/18",
          "CCL": 99.17,
          "CCL (Small/Medium units)": 96.01
        },
        {
          "Period": "2012/03/05 - 2012/03/11",
          "CCL": 98.41,
          "CCL (Small/Medium units)": 95.22
        },
        {
          "Period": "2012/02/27 - 2012/03/04",
          "CCL": 96.69,
          "CCL (Small/Medium units)": 93.75
        },
        {
          "Period": "2012/02/20 - 2012/02/26",
          "CCL": 95.15,
          "CCL (Small/Medium units)": 92.47
        },
        {
          "Period": "2012/02/13 - 2012/02/19",
          "CCL": 94.38,
          "CCL (Small/Medium units)": 91.33
        },
        {
          "Period": "2012/02/06 - 2012/02/12",
          "CCL": 95.01,
          "CCL (Small/Medium units)": 91.97
        },
        {
          "Period": "2012/01/30 - 2012/02/05",
          "CCL": 95.04,
          "CCL (Small/Medium units)": 91.94
        },
        {
          "Period": "2012/01/23 - 2012/01/29",
          "CCL": 94.47,
          "CCL (Small/Medium units)": 91.28
        },
        {
          "Period": "2012/01/16 - 2012/01/22",
          "CCL": 94.75,
          "CCL (Small/Medium units)": 91.56
        },
        {
          "Period": "2012/01/09 - 2012/01/15",
          "CCL": 94.31,
          "CCL (Small/Medium units)": 91.08
        },
        {
          "Period": "2012/01/02 - 2012/01/08",
          "CCL": 94.16,
          "CCL (Small/Medium units)": 90.85
        },
        {
          "Period": "2011/12/26 - 2012/01/01",
          "CCL": 95.47,
          "CCL (Small/Medium units)": 91.97
        },
        {
          "Period": "2011/12/19 - 2011/12/25",
          "CCL": 96.68,
          "CCL (Small/Medium units)": 93.25
        },
        {
          "Period": "2011/12/12 - 2011/12/18",
          "CCL": 96.81,
          "CCL (Small/Medium units)": 93.37
        },
        {
          "Period": "2011/12/05 - 2011/12/11",
          "CCL": 97.1,
          "CCL (Small/Medium units)": 93.7
        },
        {
          "Period": "2011/11/28 - 2011/12/04",
          "CCL": 98.13,
          "CCL (Small/Medium units)": 94.67
        },
        {
          "Period": "2011/11/21 - 2011/11/27",
          "CCL": 97.24,
          "CCL (Small/Medium units)": 93.77
        },
        {
          "Period": "2011/11/14 - 2011/11/20",
          "CCL": 97.09,
          "CCL (Small/Medium units)": 93.88
        },
        {
          "Period": "2011/11/07 - 2011/11/13",
          "CCL": 97.29,
          "CCL (Small/Medium units)": 93.94
        },
        {
          "Period": "2011/10/31 - 2011/11/06",
          "CCL": 96.91,
          "CCL (Small/Medium units)": 93.68
        },
        {
          "Period": "2011/10/24 - 2011/10/30",
          "CCL": 97.94,
          "CCL (Small/Medium units)": 94.62
        },
        {
          "Period": "2011/10/17 - 2011/10/23",
          "CCL": 98.16,
          "CCL (Small/Medium units)": 94.57
        },
        {
          "Period": "2011/10/10 - 2011/10/16",
          "CCL": 98.52,
          "CCL (Small/Medium units)": 94.99
        },
        {
          "Period": "2011/10/03 - 2011/10/09",
          "CCL": 99.07,
          "CCL (Small/Medium units)": 95.58
        },
        {
          "Period": "2011/09/26 - 2011/10/02",
          "CCL": 99.8,
          "CCL (Small/Medium units)": 96.39
        },
        {
          "Period": "2011/09/19 - 2011/09/25",
          "CCL": 99.21,
          "CCL (Small/Medium units)": 95.69
        },
        {
          "Period": "2011/09/12 - 2011/09/18",
          "CCL": 98.18,
          "CCL (Small/Medium units)": 94.65
        },
        {
          "Period": "2011/09/05 - 2011/09/11",
          "CCL": 98.24,
          "CCL (Small/Medium units)": 94.8
        },
        {
          "Period": "2011/08/29 - 2011/09/04",
          "CCL": 98.6,
          "CCL (Small/Medium units)": 94.85
        },
        {
          "Period": "2011/08/22 - 2011/08/28",
          "CCL": 99.41,
          "CCL (Small/Medium units)": 95.51
        },
        {
          "Period": "2011/08/15 - 2011/08/21",
          "CCL": 99.15,
          "CCL (Small/Medium units)": 95.24
        },
        {
          "Period": "2011/08/08 - 2011/08/14",
          "CCL": 99.31,
          "CCL (Small/Medium units)": 95.48
        },
        {
          "Period": "2011/08/01 - 2011/08/07",
          "CCL": 99.53,
          "CCL (Small/Medium units)": 95.77
        },
        {
          "Period": "2011/07/25 - 2011/07/31",
          "CCL": 99.11,
          "CCL (Small/Medium units)": 95.36
        },
        {
          "Period": "2011/07/18 - 2011/07/24",
          "CCL": 99,
          "CCL (Small/Medium units)": 95.81
        },
        {
          "Period": "2011/07/11 - 2011/07/17",
          "CCL": 99.08,
          "CCL (Small/Medium units)": 95.97
        },
        {
          "Period": "2011/07/04 - 2011/07/10",
          "CCL": 98.89,
          "CCL (Small/Medium units)": 95.42
        },
        {
          "Period": "2011/06/27 - 2011/07/03",
          "CCL": 100.29,
          "CCL (Small/Medium units)": 96.87
        },
        {
          "Period": "2011/06/20 - 2011/06/26",
          "CCL": 99.23,
          "CCL (Small/Medium units)": 96.01
        },
        {
          "Period": "2011/06/13 - 2011/06/19",
          "CCL": 98.73,
          "CCL (Small/Medium units)": 95.54
        },
        {
          "Period": "2011/06/06 - 2011/06/12",
          "CCL": 99.7,
          "CCL (Small/Medium units)": 96.37
        },
        {
          "Period": "2011/05/30 - 2011/06/05",
          "CCL": 100.72,
          "CCL (Small/Medium units)": 97.48
        },
        {
          "Period": "2011/05/23 - 2011/05/29",
          "CCL": 99.43,
          "CCL (Small/Medium units)": 96.24
        },
        {
          "Period": "2011/05/16 - 2011/05/22",
          "CCL": 98.16,
          "CCL (Small/Medium units)": 94.79
        },
        {
          "Period": "2011/05/09 - 2011/05/15",
          "CCL": 97.44,
          "CCL (Small/Medium units)": 94.01
        },
        {
          "Period": "2011/05/02 - 2011/05/08",
          "CCL": 97.45,
          "CCL (Small/Medium units)": 94.23
        },
        {
          "Period": "2011/04/25 - 2011/05/01",
          "CCL": 97.59,
          "CCL (Small/Medium units)": 94.44
        },
        {
          "Period": "2011/04/18 - 2011/04/24",
          "CCL": 97.6,
          "CCL (Small/Medium units)": 94.45
        },
        {
          "Period": "2011/04/11 - 2011/04/17",
          "CCL": 97.13,
          "CCL (Small/Medium units)": 93.94
        },
        {
          "Period": "2011/04/04 - 2011/04/10",
          "CCL": 96.55,
          "CCL (Small/Medium units)": 93.07
        },
        {
          "Period": "2011/03/28 - 2011/04/03",
          "CCL": 96.98,
          "CCL (Small/Medium units)": 93.65
        },
        {
          "Period": "2011/03/21 - 2011/03/27",
          "CCL": 97.41,
          "CCL (Small/Medium units)": 94.13
        },
        {
          "Period": "2011/03/14 - 2011/03/20",
          "CCL": 98.15,
          "CCL (Small/Medium units)": 95.05
        },
        {
          "Period": "2011/03/07 - 2011/03/13",
          "CCL": 96.51,
          "CCL (Small/Medium units)": 93.29
        },
        {
          "Period": "2011/02/28 - 2011/03/06",
          "CCL": 96.44,
          "CCL (Small/Medium units)": 93.08
        },
        {
          "Period": "2011/02/21 - 2011/02/27",
          "CCL": 94.81,
          "CCL (Small/Medium units)": 91.69
        },
        {
          "Period": "2011/02/14 - 2011/02/20",
          "CCL": 93.99,
          "CCL (Small/Medium units)": 90.8
        },
        {
          "Period": "2011/02/07 - 2011/02/13",
          "CCL": 93.41,
          "CCL (Small/Medium units)": 90.21
        },
        {
          "Period": "2011/01/31 - 2011/02/06",
          "CCL": 91.45,
          "CCL (Small/Medium units)": 88.33
        },
        {
          "Period": "2011/01/24 - 2011/01/30",
          "CCL": 90.83,
          "CCL (Small/Medium units)": 87.52
        },
        {
          "Period": "2011/01/17 - 2011/01/23",
          "CCL": 91.21,
          "CCL (Small/Medium units)": 87.9
        },
        {
          "Period": "2011/01/10 - 2011/01/16",
          "CCL": 90.01,
          "CCL (Small/Medium units)": 86.71
        },
        {
          "Period": "2011/01/03 - 2011/01/09",
          "CCL": 90.05,
          "CCL (Small/Medium units)": 86.8
        },
        {
          "Period": "2010/12/27 - 2011/01/02",
          "CCL": 88.38,
          "CCL (Small/Medium units)": 85.04
        },
        {
          "Period": "2010/12/20 - 2010/12/26",
          "CCL": 88.4,
          "CCL (Small/Medium units)": 85.1
        },
        {
          "Period": "2010/12/13 - 2010/12/19",
          "CCL": 87.48,
          "CCL (Small/Medium units)": 84.18
        },
        {
          "Period": "2010/12/06 - 2010/12/12",
          "CCL": 88.27,
          "CCL (Small/Medium units)": 84.93
        },
        {
          "Period": "2010/11/29 - 2010/12/05",
          "CCL": 89.41,
          "CCL (Small/Medium units)": 86.24
        },
        {
          "Period": "2010/11/22 - 2010/11/28",
          "CCL": 88.58,
          "CCL (Small/Medium units)": 85.51
        },
        {
          "Period": "2010/11/15 - 2010/11/21",
          "CCL": 88.24,
          "CCL (Small/Medium units)": 85.18
        },
        {
          "Period": "2010/11/08 - 2010/11/14",
          "CCL": 87.41,
          "CCL (Small/Medium units)": 84.42
        },
        {
          "Period": "2010/11/01 - 2010/11/07",
          "CCL": 87.55,
          "CCL (Small/Medium units)": 84.28
        },
        {
          "Period": "2010/10/25 - 2010/10/31",
          "CCL": 86.87,
          "CCL (Small/Medium units)": 83.75
        },
        {
          "Period": "2010/10/18 - 2010/10/24",
          "CCL": 85.62,
          "CCL (Small/Medium units)": 82.48
        },
        {
          "Period": "2010/10/11 - 2010/10/17",
          "CCL": 85.13,
          "CCL (Small/Medium units)": 81.89
        },
        {
          "Period": "2010/10/04 - 2010/10/10",
          "CCL": 85.09,
          "CCL (Small/Medium units)": 81.9
        },
        {
          "Period": "2010/09/27 - 2010/10/03",
          "CCL": 84.85,
          "CCL (Small/Medium units)": 81.48
        },
        {
          "Period": "2010/09/20 - 2010/09/26",
          "CCL": 85.34,
          "CCL (Small/Medium units)": 82.02
        },
        {
          "Period": "2010/09/13 - 2010/09/19",
          "CCL": 83.99,
          "CCL (Small/Medium units)": 80.71
        },
        {
          "Period": "2010/09/06 - 2010/09/12",
          "CCL": 84.16,
          "CCL (Small/Medium units)": 80.89
        },
        {
          "Period": "2010/08/30 - 2010/09/05",
          "CCL": 84.54,
          "CCL (Small/Medium units)": 81.36
        },
        {
          "Period": "2010/08/23 - 2010/08/29",
          "CCL": 83.61,
          "CCL (Small/Medium units)": 80.42
        },
        {
          "Period": "2010/08/16 - 2010/08/22",
          "CCL": 83.57,
          "CCL (Small/Medium units)": 80.46
        },
        {
          "Period": "2010/08/09 - 2010/08/15",
          "CCL": 83.36,
          "CCL (Small/Medium units)": 80.27
        },
        {
          "Period": "2010/08/02 - 2010/08/08",
          "CCL": 83.51,
          "CCL (Small/Medium units)": 80.44
        },
        {
          "Period": "2010/07/26 - 2010/08/01",
          "CCL": 82.14,
          "CCL (Small/Medium units)": 79.13
        },
        {
          "Period": "2010/07/19 - 2010/07/25",
          "CCL": 81.88,
          "CCL (Small/Medium units)": 78.92
        },
        {
          "Period": "2010/07/12 - 2010/07/18",
          "CCL": 81.18,
          "CCL (Small/Medium units)": 78.11
        },
        {
          "Period": "2010/07/05 - 2010/07/11",
          "CCL": 80.9,
          "CCL (Small/Medium units)": 78
        },
        {
          "Period": "2010/06/28 - 2010/07/04",
          "CCL": 80.15,
          "CCL (Small/Medium units)": 77.19
        },
        {
          "Period": "2010/06/21 - 2010/06/27",
          "CCL": 80.12,
          "CCL (Small/Medium units)": 77.22
        },
        {
          "Period": "2010/06/14 - 2010/06/20",
          "CCL": 79.12,
          "CCL (Small/Medium units)": 76.11
        },
        {
          "Period": "2010/06/07 - 2010/06/13",
          "CCL": 79.68,
          "CCL (Small/Medium units)": 76.67
        },
        {
          "Period": "2010/05/31 - 2010/06/06",
          "CCL": 79.48,
          "CCL (Small/Medium units)": 76.49
        },
        {
          "Period": "2010/05/24 - 2010/05/30",
          "CCL": 79.16,
          "CCL (Small/Medium units)": 76.26
        },
        {
          "Period": "2010/05/17 - 2010/05/23",
          "CCL": 80.32,
          "CCL (Small/Medium units)": 77.37
        },
        {
          "Period": "2010/05/10 - 2010/05/16",
          "CCL": 80.06,
          "CCL (Small/Medium units)": 77.29
        },
        {
          "Period": "2010/05/03 - 2010/05/09",
          "CCL": 79.86,
          "CCL (Small/Medium units)": 77.16
        },
        {
          "Period": "2010/04/26 - 2010/05/02",
          "CCL": 80.68,
          "CCL (Small/Medium units)": 78.07
        },
        {
          "Period": "2010/04/19 - 2010/04/25",
          "CCL": 78.77,
          "CCL (Small/Medium units)": 76.3
        },
        {
          "Period": "2010/04/12 - 2010/04/18",
          "CCL": 79.39,
          "CCL (Small/Medium units)": 76.88
        },
        {
          "Period": "2010/04/05 - 2010/04/11",
          "CCL": 78.48,
          "CCL (Small/Medium units)": 75.87
        },
        {
          "Period": "2010/03/29 - 2010/04/04",
          "CCL": 78.64,
          "CCL (Small/Medium units)": 75.91
        },
        {
          "Period": "2010/03/22 - 2010/03/28",
          "CCL": 78.69,
          "CCL (Small/Medium units)": 75.99
        },
        {
          "Period": "2010/03/15 - 2010/03/21",
          "CCL": 78.63,
          "CCL (Small/Medium units)": 76.02
        },
        {
          "Period": "2010/03/08 - 2010/03/14",
          "CCL": 77.24,
          "CCL (Small/Medium units)": 74.53
        },
        {
          "Period": "2010/03/01 - 2010/03/07",
          "CCL": 77.01,
          "CCL (Small/Medium units)": 74.3
        },
        {
          "Period": "2010/02/22 - 2010/02/28",
          "CCL": 77.96,
          "CCL (Small/Medium units)": 75.24
        },
        {
          "Period": "2010/02/15 - 2010/02/21",
          "CCL": 77.26,
          "CCL (Small/Medium units)": 74.52
        },
        {
          "Period": "2010/02/08 - 2010/02/14",
          "CCL": 77.03,
          "CCL (Small/Medium units)": 74.31
        },
        {
          "Period": "2010/02/01 - 2010/02/07",
          "CCL": 76.67,
          "CCL (Small/Medium units)": 73.93
        },
        {
          "Period": "2010/01/25 - 2010/01/31",
          "CCL": 76.05,
          "CCL (Small/Medium units)": 73.2
        },
        {
          "Period": "2010/01/18 - 2010/01/24",
          "CCL": 76.17,
          "CCL (Small/Medium units)": 73.58
        },
        {
          "Period": "2010/01/11 - 2010/01/17",
          "CCL": 75.08,
          "CCL (Small/Medium units)": 72.51
        },
        {
          "Period": "2010/01/04 - 2010/01/10",
          "CCL": 74.87,
          "CCL (Small/Medium units)": 72.31
        },
        {
          "Period": "2009/12/28 - 2010/01/03",
          "CCL": 74.07,
          "CCL (Small/Medium units)": 71.5
        },
        {
          "Period": "2009/12/21 - 2009/12/27",
          "CCL": 73.23,
          "CCL (Small/Medium units)": 70.67
        },
        {
          "Period": "2009/12/14 - 2009/12/20",
          "CCL": 73.08,
          "CCL (Small/Medium units)": 70.51
        },
        {
          "Period": "2009/12/07 - 2009/12/13",
          "CCL": 72.79,
          "CCL (Small/Medium units)": 70.24
        },
        {
          "Period": "2009/11/30 - 2009/12/06",
          "CCL": 73.03,
          "CCL (Small/Medium units)": 70.15
        },
        {
          "Period": "2009/11/23 - 2009/11/29",
          "CCL": 72.61,
          "CCL (Small/Medium units)": 69.72
        },
        {
          "Period": "2009/11/16 - 2009/11/22",
          "CCL": 73.56,
          "CCL (Small/Medium units)": 70.79
        },
        {
          "Period": "2009/11/09 - 2009/11/15",
          "CCL": 73.91,
          "CCL (Small/Medium units)": 71.1
        },
        {
          "Period": "2009/11/02 - 2009/11/08",
          "CCL": 73.52,
          "CCL (Small/Medium units)": 70.74
        },
        {
          "Period": "2009/10/26 - 2009/11/01",
          "CCL": 73.74,
          "CCL (Small/Medium units)": 70.91
        },
        {
          "Period": "2009/10/19 - 2009/10/25",
          "CCL": 73.39,
          "CCL (Small/Medium units)": 70.73
        },
        {
          "Period": "2009/10/12 - 2009/10/18",
          "CCL": 73.37,
          "CCL (Small/Medium units)": 70.82
        },
        {
          "Period": "2009/10/05 - 2009/10/11",
          "CCL": 73.8,
          "CCL (Small/Medium units)": 71.25
        },
        {
          "Period": "2009/09/28 - 2009/10/04",
          "CCL": 72.7,
          "CCL (Small/Medium units)": 70.31
        },
        {
          "Period": "2009/09/21 - 2009/09/27",
          "CCL": 72.92,
          "CCL (Small/Medium units)": 70.65
        },
        {
          "Period": "2009/09/14 - 2009/09/20",
          "CCL": 72.18,
          "CCL (Small/Medium units)": 69.79
        },
        {
          "Period": "2009/09/07 - 2009/09/13",
          "CCL": 72.06,
          "CCL (Small/Medium units)": 69.67
        },
        {
          "Period": "2009/08/31 - 2009/09/06",
          "CCL": 72.65,
          "CCL (Small/Medium units)": 70.08
        },
        {
          "Period": "2009/08/24 - 2009/08/30",
          "CCL": 70.72,
          "CCL (Small/Medium units)": 68.32
        },
        {
          "Period": "2009/08/17 - 2009/08/23",
          "CCL": 70.79,
          "CCL (Small/Medium units)": 68.43
        },
        {
          "Period": "2009/08/10 - 2009/08/16",
          "CCL": 70.12,
          "CCL (Small/Medium units)": 67.56
        },
        {
          "Period": "2009/08/03 - 2009/08/09",
          "CCL": 69.51,
          "CCL (Small/Medium units)": 67.08
        },
        {
          "Period": "2009/07/27 - 2009/08/02",
          "CCL": 69.44,
          "CCL (Small/Medium units)": 67.02
        },
        {
          "Period": "2009/07/20 - 2009/07/26",
          "CCL": 68.71,
          "CCL (Small/Medium units)": 66.4
        },
        {
          "Period": "2009/07/13 - 2009/07/19",
          "CCL": 68.62,
          "CCL (Small/Medium units)": 66.39
        },
        {
          "Period": "2009/07/06 - 2009/07/12",
          "CCL": 68.46,
          "CCL (Small/Medium units)": 66.31
        },
        {
          "Period": "2009/06/29 - 2009/07/05",
          "CCL": 67.59,
          "CCL (Small/Medium units)": 65.4
        },
        {
          "Period": "2009/06/22 - 2009/06/28",
          "CCL": 68.42,
          "CCL (Small/Medium units)": 66.39
        },
        {
          "Period": "2009/06/15 - 2009/06/21",
          "CCL": 67.11,
          "CCL (Small/Medium units)": 65.02
        },
        {
          "Period": "2009/06/08 - 2009/06/14",
          "CCL": 65.82,
          "CCL (Small/Medium units)": 63.64
        },
        {
          "Period": "2009/06/01 - 2009/06/07",
          "CCL": 65,
          "CCL (Small/Medium units)": 62.85
        },
        {
          "Period": "2009/05/25 - 2009/05/31",
          "CCL": 65.49,
          "CCL (Small/Medium units)": 63.33
        },
        {
          "Period": "2009/05/18 - 2009/05/24",
          "CCL": 64.35,
          "CCL (Small/Medium units)": 62.33
        },
        {
          "Period": "2009/05/11 - 2009/05/17",
          "CCL": 64.3,
          "CCL (Small/Medium units)": 62.19
        },
        {
          "Period": "2009/05/04 - 2009/05/10",
          "CCL": 64.34,
          "CCL (Small/Medium units)": 62.17
        },
        {
          "Period": "2009/04/27 - 2009/05/03",
          "CCL": 63.08,
          "CCL (Small/Medium units)": 60.95
        },
        {
          "Period": "2009/04/20 - 2009/04/26",
          "CCL": 62.83,
          "CCL (Small/Medium units)": 60.89
        },
        {
          "Period": "2009/04/13 - 2009/04/19",
          "CCL": 61.5,
          "CCL (Small/Medium units)": 59.56
        },
        {
          "Period": "2009/04/06 - 2009/04/12",
          "CCL": 60.66,
          "CCL (Small/Medium units)": 58.69
        },
        {
          "Period": "2009/03/30 - 2009/04/05",
          "CCL": 60.1,
          "CCL (Small/Medium units)": 58.04
        },
        {
          "Period": "2009/03/23 - 2009/03/29",
          "CCL": 60.2,
          "CCL (Small/Medium units)": 58.25
        },
        {
          "Period": "2009/03/16 - 2009/03/22",
          "CCL": 59.43,
          "CCL (Small/Medium units)": 57.49
        },
        {
          "Period": "2009/03/09 - 2009/03/15",
          "CCL": 59.74,
          "CCL (Small/Medium units)": 57.82
        },
        {
          "Period": "2009/03/02 - 2009/03/08",
          "CCL": 59.47,
          "CCL (Small/Medium units)": 57.42
        },
        {
          "Period": "2009/02/23 - 2009/03/01",
          "CCL": 59.45,
          "CCL (Small/Medium units)": 57.34
        },
        {
          "Period": "2009/02/16 - 2009/02/22",
          "CCL": 58.62,
          "CCL (Small/Medium units)": 56.55
        },
        {
          "Period": "2009/02/09 - 2009/02/15",
          "CCL": 58.7,
          "CCL (Small/Medium units)": 56.71
        },
        {
          "Period": "2009/02/02 - 2009/02/08",
          "CCL": 58.35,
          "CCL (Small/Medium units)": 56.29
        },
        {
          "Period": "2009/01/26 - 2009/02/01",
          "CCL": 58.53,
          "CCL (Small/Medium units)": 56.51
        },
        {
          "Period": "2009/01/19 - 2009/01/25",
          "CCL": 58.38,
          "CCL (Small/Medium units)": 56.37
        },
        {
          "Period": "2009/01/12 - 2009/01/18",
          "CCL": 57.99,
          "CCL (Small/Medium units)": 55.96
        },
        {
          "Period": "2009/01/05 - 2009/01/11",
          "CCL": 57.51,
          "CCL (Small/Medium units)": 55.47
        },
        {
          "Period": "2008/12/29 - 2009/01/04",
          "CCL": 57.52,
          "CCL (Small/Medium units)": 55.35
        },
        {
          "Period": "2008/12/22 - 2008/12/28",
          "CCL": 56.78,
          "CCL (Small/Medium units)": 54.53
        },
        {
          "Period": "2008/12/15 - 2008/12/21",
          "CCL": 56.93,
          "CCL (Small/Medium units)": 54.63
        },
        {
          "Period": "2008/12/08 - 2008/12/14",
          "CCL": 56.71,
          "CCL (Small/Medium units)": 54.37
        },
        {
          "Period": "2008/12/01 - 2008/12/07",
          "CCL": 57.15,
          "CCL (Small/Medium units)": 54.71
        },
        {
          "Period": "2008/11/24 - 2008/11/30",
          "CCL": 56.92,
          "CCL (Small/Medium units)": 54.58
        },
        {
          "Period": "2008/11/17 - 2008/11/23",
          "CCL": 57,
          "CCL (Small/Medium units)": 54.7
        },
        {
          "Period": "2008/11/10 - 2008/11/16",
          "CCL": 57.43,
          "CCL (Small/Medium units)": 55.09
        },
        {
          "Period": "2008/11/03 - 2008/11/09",
          "CCL": 59.93,
          "CCL (Small/Medium units)": 57.47
        },
        {
          "Period": "2008/10/27 - 2008/11/02",
          "CCL": 61.61,
          "CCL (Small/Medium units)": 58.89
        },
        {
          "Period": "2008/10/20 - 2008/10/26",
          "CCL": 63.45,
          "CCL (Small/Medium units)": 60.74
        },
        {
          "Period": "2008/10/13 - 2008/10/19",
          "CCL": 64.64,
          "CCL (Small/Medium units)": 61.89
        },
        {
          "Period": "2008/10/06 - 2008/10/12",
          "CCL": 66.27,
          "CCL (Small/Medium units)": 63.63
        },
        {
          "Period": "2008/09/29 - 2008/10/05",
          "CCL": 67.44,
          "CCL (Small/Medium units)": 64.57
        },
        {
          "Period": "2008/09/22 - 2008/09/28",
          "CCL": 67.52,
          "CCL (Small/Medium units)": 64.55
        },
        {
          "Period": "2008/09/15 - 2008/09/21",
          "CCL": 68.26,
          "CCL (Small/Medium units)": 65.31
        },
        {
          "Period": "2008/09/08 - 2008/09/14",
          "CCL": 68.4,
          "CCL (Small/Medium units)": 65.45
        },
        {
          "Period": "2008/09/01 - 2008/09/07",
          "CCL": 68.93,
          "CCL (Small/Medium units)": 65.91
        },
        {
          "Period": "2008/08/25 - 2008/08/31",
          "CCL": 69.94,
          "CCL (Small/Medium units)": 66.82
        },
        {
          "Period": "2008/08/18 - 2008/08/24",
          "CCL": 70.13,
          "CCL (Small/Medium units)": 66.93
        },
        {
          "Period": "2008/08/11 - 2008/08/17",
          "CCL": 70.49,
          "CCL (Small/Medium units)": 67.28
        },
        {
          "Period": "2008/08/04 - 2008/08/10",
          "CCL": 70.46,
          "CCL (Small/Medium units)": 67.25
        },
        {
          "Period": "2008/07/28 - 2008/08/03",
          "CCL": 70.81,
          "CCL (Small/Medium units)": 67.63
        },
        {
          "Period": "2008/07/21 - 2008/07/27",
          "CCL": 71.55,
          "CCL (Small/Medium units)": 68.44
        },
        {
          "Period": "2008/07/14 - 2008/07/20",
          "CCL": 71.84,
          "CCL (Small/Medium units)": 68.7
        },
        {
          "Period": "2008/07/07 - 2008/07/13",
          "CCL": 72.38,
          "CCL (Small/Medium units)": 69.28
        },
        {
          "Period": "2008/06/30 - 2008/07/06",
          "CCL": 72.77,
          "CCL (Small/Medium units)": 69.68
        },
        {
          "Period": "2008/06/23 - 2008/06/29",
          "CCL": 73.38,
          "CCL (Small/Medium units)": 70.25
        },
        {
          "Period": "2008/06/16 - 2008/06/22",
          "CCL": 72.62,
          "CCL (Small/Medium units)": 69.44
        },
        {
          "Period": "2008/06/09 - 2008/06/15",
          "CCL": 73.24,
          "CCL (Small/Medium units)": 69.96
        },
        {
          "Period": "2008/06/02 - 2008/06/08",
          "CCL": 73.23,
          "CCL (Small/Medium units)": 70.15
        },
        {
          "Period": "2008/05/26 - 2008/06/01",
          "CCL": 72.16,
          "CCL (Small/Medium units)": 69.09
        },
        {
          "Period": "2008/05/19 - 2008/05/25",
          "CCL": 72.67,
          "CCL (Small/Medium units)": 69.58
        },
        {
          "Period": "2008/05/12 - 2008/05/18",
          "CCL": 71.86,
          "CCL (Small/Medium units)": 68.79
        },
        {
          "Period": "2008/05/05 - 2008/05/11",
          "CCL": 71.51,
          "CCL (Small/Medium units)": 68.43
        },
        {
          "Period": "2008/04/28 - 2008/05/04",
          "CCL": 71.44,
          "CCL (Small/Medium units)": 68.57
        },
        {
          "Period": "2008/04/21 - 2008/04/27",
          "CCL": 71.46,
          "CCL (Small/Medium units)": 68.55
        },
        {
          "Period": "2008/04/14 - 2008/04/20",
          "CCL": 72.57,
          "CCL (Small/Medium units)": 69.64
        },
        {
          "Period": "2008/04/07 - 2008/04/13",
          "CCL": 71.93,
          "CCL (Small/Medium units)": 69
        },
        {
          "Period": "2008/03/31 - 2008/04/06",
          "CCL": 73.75,
          "CCL (Small/Medium units)": 70.85
        },
        {
          "Period": "2008/03/24 - 2008/03/30",
          "CCL": 72.89,
          "CCL (Small/Medium units)": 69.99
        },
        {
          "Period": "2008/03/17 - 2008/03/23",
          "CCL": 72.79,
          "CCL (Small/Medium units)": 69.76
        },
        {
          "Period": "2008/03/10 - 2008/03/16",
          "CCL": 73.01,
          "CCL (Small/Medium units)": 70.03
        },
        {
          "Period": "2008/03/03 - 2008/03/09",
          "CCL": 73.98,
          "CCL (Small/Medium units)": 70.89
        },
        {
          "Period": "2008/02/25 - 2008/03/02",
          "CCL": 73.98,
          "CCL (Small/Medium units)": 70.88
        },
        {
          "Period": "2008/02/18 - 2008/02/24",
          "CCL": 73.28,
          "CCL (Small/Medium units)": 70.3
        },
        {
          "Period": "2008/02/11 - 2008/02/17",
          "CCL": 73.81,
          "CCL (Small/Medium units)": 70.84
        },
        {
          "Period": "2008/02/04 - 2008/02/10",
          "CCL": 72.08,
          "CCL (Small/Medium units)": 69.03
        },
        {
          "Period": "2008/01/28 - 2008/02/03",
          "CCL": 71.03,
          "CCL (Small/Medium units)": 68.08
        },
        {
          "Period": "2008/01/21 - 2008/01/27",
          "CCL": 70.59,
          "CCL (Small/Medium units)": 67.79
        },
        {
          "Period": "2008/01/14 - 2008/01/20",
          "CCL": 69.36,
          "CCL (Small/Medium units)": 66.65
        },
        {
          "Period": "2008/01/07 - 2008/01/13",
          "CCL": 68.48,
          "CCL (Small/Medium units)": 65.85
        },
        {
          "Period": "2007/12/31 - 2008/01/06",
          "CCL": 67.59,
          "CCL (Small/Medium units)": 64.92
        },
        {
          "Period": "2007/12/24 - 2007/12/30",
          "CCL": 66.98,
          "CCL (Small/Medium units)": 64.37
        },
        {
          "Period": "2007/12/17 - 2007/12/23",
          "CCL": 66.39,
          "CCL (Small/Medium units)": 63.67
        },
        {
          "Period": "2007/12/10 - 2007/12/16",
          "CCL": 66.36,
          "CCL (Small/Medium units)": 63.63
        },
        {
          "Period": "2007/12/03 - 2007/12/09",
          "CCL": 65.55,
          "CCL (Small/Medium units)": 62.69
        },
        {
          "Period": "2007/11/26 - 2007/12/02",
          "CCL": 63.81,
          "CCL (Small/Medium units)": 61.2
        },
        {
          "Period": "2007/11/19 - 2007/11/25",
          "CCL": 63.33,
          "CCL (Small/Medium units)": 60.8
        },
        {
          "Period": "2007/11/12 - 2007/11/18",
          "CCL": 62.1,
          "CCL (Small/Medium units)": 59.67
        },
        {
          "Period": "2007/11/05 - 2007/11/11",
          "CCL": 61.31,
          "CCL (Small/Medium units)": 58.78
        },
        {
          "Period": "2007/10/29 - 2007/11/04",
          "CCL": 60.45,
          "CCL (Small/Medium units)": 57.96
        },
        {
          "Period": "2007/10/22 - 2007/10/28",
          "CCL": 59.36,
          "CCL (Small/Medium units)": 57.05
        },
        {
          "Period": "2007/10/15 - 2007/10/21",
          "CCL": 58.79,
          "CCL (Small/Medium units)": 56.56
        },
        {
          "Period": "2007/10/08 - 2007/10/14",
          "CCL": 58.69,
          "CCL (Small/Medium units)": 56.46
        },
        {
          "Period": "2007/10/01 - 2007/10/07",
          "CCL": 58.41,
          "CCL (Small/Medium units)": 56.3
        },
        {
          "Period": "2007/09/24 - 2007/09/30",
          "CCL": 58.23,
          "CCL (Small/Medium units)": 55.95
        },
        {
          "Period": "2007/09/17 - 2007/09/23",
          "CCL": 57.64,
          "CCL (Small/Medium units)": 55.51
        },
        {
          "Period": "2007/09/10 - 2007/09/16",
          "CCL": 58.14,
          "CCL (Small/Medium units)": 55.96
        },
        {
          "Period": "2007/09/03 - 2007/09/09",
          "CCL": 57.51,
          "CCL (Small/Medium units)": 55.33
        },
        {
          "Period": "2007/08/27 - 2007/09/02",
          "CCL": 57.3,
          "CCL (Small/Medium units)": 55.29
        },
        {
          "Period": "2007/08/20 - 2007/08/26",
          "CCL": 57.3,
          "CCL (Small/Medium units)": 55.21
        },
        {
          "Period": "2007/08/13 - 2007/08/19",
          "CCL": 57.47,
          "CCL (Small/Medium units)": 55.49
        },
        {
          "Period": "2007/08/06 - 2007/08/12",
          "CCL": 57.03,
          "CCL (Small/Medium units)": 55.02
        },
        {
          "Period": "2007/07/30 - 2007/08/05",
          "CCL": 56.84,
          "CCL (Small/Medium units)": 54.81
        },
        {
          "Period": "2007/07/23 - 2007/07/29",
          "CCL": 56.98,
          "CCL (Small/Medium units)": 54.92
        },
        {
          "Period": "2007/07/16 - 2007/07/22",
          "CCL": 56.57,
          "CCL (Small/Medium units)": 54.51
        },
        {
          "Period": "2007/07/09 - 2007/07/15",
          "CCL": 56.41,
          "CCL (Small/Medium units)": 54.32
        },
        {
          "Period": "2007/07/02 - 2007/07/08",
          "CCL": 56.24,
          "CCL (Small/Medium units)": 54.02
        },
        {
          "Period": "2007/06/25 - 2007/07/01",
          "CCL": 56.21,
          "CCL (Small/Medium units)": 54.07
        },
        {
          "Period": "2007/06/18 - 2007/06/24",
          "CCL": 56.71,
          "CCL (Small/Medium units)": 54.61
        },
        {
          "Period": "2007/06/11 - 2007/06/17",
          "CCL": 56.46,
          "CCL (Small/Medium units)": 54.23
        },
        {
          "Period": "2007/06/04 - 2007/06/10",
          "CCL": 55.93,
          "CCL (Small/Medium units)": 53.81
        },
        {
          "Period": "2007/05/28 - 2007/06/03",
          "CCL": 55.43,
          "CCL (Small/Medium units)": 53.3
        },
        {
          "Period": "2007/05/21 - 2007/05/27",
          "CCL": 55.21,
          "CCL (Small/Medium units)": 53.24
        },
        {
          "Period": "2007/05/14 - 2007/05/20",
          "CCL": 54.87,
          "CCL (Small/Medium units)": 52.86
        },
        {
          "Period": "2007/05/07 - 2007/05/13",
          "CCL": 55.35,
          "CCL (Small/Medium units)": 53.42
        },
        {
          "Period": "2007/04/30 - 2007/05/06",
          "CCL": 55.46,
          "CCL (Small/Medium units)": 53.5
        },
        {
          "Period": "2007/04/23 - 2007/04/29",
          "CCL": 55.39,
          "CCL (Small/Medium units)": 53.47
        },
        {
          "Period": "2007/04/16 - 2007/04/22",
          "CCL": 55.82,
          "CCL (Small/Medium units)": 53.93
        },
        {
          "Period": "2007/04/09 - 2007/04/15",
          "CCL": 55.07,
          "CCL (Small/Medium units)": 53.16
        },
        {
          "Period": "2007/04/02 - 2007/04/08",
          "CCL": 54.39,
          "CCL (Small/Medium units)": 52.49
        },
        {
          "Period": "2007/03/26 - 2007/04/01",
          "CCL": 54.86,
          "CCL (Small/Medium units)": 52.99
        },
        {
          "Period": "2007/03/19 - 2007/03/25",
          "CCL": 55.03,
          "CCL (Small/Medium units)": 53.15
        },
        {
          "Period": "2007/03/12 - 2007/03/18",
          "CCL": 54.61,
          "CCL (Small/Medium units)": 52.73
        },
        {
          "Period": "2007/03/05 - 2007/03/11",
          "CCL": 54.39,
          "CCL (Small/Medium units)": 52.46
        },
        {
          "Period": "2007/02/26 - 2007/03/04",
          "CCL": 54.23,
          "CCL (Small/Medium units)": 52.25
        },
        {
          "Period": "2007/02/19 - 2007/02/25",
          "CCL": 54.03,
          "CCL (Small/Medium units)": 51.99
        },
        {
          "Period": "2007/02/12 - 2007/02/18",
          "CCL": 54.07,
          "CCL (Small/Medium units)": 52.07
        },
        {
          "Period": "2007/02/05 - 2007/02/11",
          "CCL": 53.27,
          "CCL (Small/Medium units)": 51.29
        },
        {
          "Period": "2007/01/29 - 2007/02/04",
          "CCL": 53.62,
          "CCL (Small/Medium units)": 51.78
        },
        {
          "Period": "2007/01/22 - 2007/01/28",
          "CCL": 52.93,
          "CCL (Small/Medium units)": 51.13
        },
        {
          "Period": "2007/01/15 - 2007/01/21",
          "CCL": 53.17,
          "CCL (Small/Medium units)": 51.34
        },
        {
          "Period": "2007/01/08 - 2007/01/14",
          "CCL": 53.51,
          "CCL (Small/Medium units)": 51.64
        },
        {
          "Period": "2007/01/01 - 2007/01/07",
          "CCL": 53.48,
          "CCL (Small/Medium units)": 51.65
        },
        {
          "Period": "2006/12/25 - 2006/12/31",
          "CCL": 53.93,
          "CCL (Small/Medium units)": 52.07
        },
        {
          "Period": "2006/12/18 - 2006/12/24",
          "CCL": 53.94,
          "CCL (Small/Medium units)": 52.11
        },
        {
          "Period": "2006/12/11 - 2006/12/17",
          "CCL": 53.1,
          "CCL (Small/Medium units)": 51.25
        },
        {
          "Period": "2006/12/04 - 2006/12/10",
          "CCL": 53.34,
          "CCL (Small/Medium units)": 51.47
        },
        {
          "Period": "2006/11/27 - 2006/12/03",
          "CCL": 52.27,
          "CCL (Small/Medium units)": 50.5
        },
        {
          "Period": "2006/11/20 - 2006/11/26",
          "CCL": 53.04,
          "CCL (Small/Medium units)": 51.3
        },
        {
          "Period": "2006/11/13 - 2006/11/19",
          "CCL": 53.13,
          "CCL (Small/Medium units)": 51.47
        },
        {
          "Period": "2006/11/06 - 2006/11/12",
          "CCL": 54.79,
          "CCL (Small/Medium units)": 53.15
        },
        {
          "Period": "2006/10/30 - 2006/11/05",
          "CCL": 55.16,
          "CCL (Small/Medium units)": 53.55
        },
        {
          "Period": "2006/10/23 - 2006/10/29",
          "CCL": 53.8,
          "CCL (Small/Medium units)": 52.21
        },
        {
          "Period": "2006/10/16 - 2006/10/22",
          "CCL": 52.71,
          "CCL (Small/Medium units)": 51.06
        },
        {
          "Period": "2006/10/09 - 2006/10/15",
          "CCL": 52.52,
          "CCL (Small/Medium units)": 50.86
        },
        {
          "Period": "2006/10/02 - 2006/10/08",
          "CCL": 52.79,
          "CCL (Small/Medium units)": 51.15
        },
        {
          "Period": "2006/09/25 - 2006/10/01",
          "CCL": 52.78,
          "CCL (Small/Medium units)": 51.14
        },
        {
          "Period": "2006/09/18 - 2006/09/24",
          "CCL": 52.22,
          "CCL (Small/Medium units)": 50.54
        },
        {
          "Period": "2006/09/11 - 2006/09/17",
          "CCL": 51.86,
          "CCL (Small/Medium units)": 50.2
        },
        {
          "Period": "2006/09/04 - 2006/09/10",
          "CCL": 52.06,
          "CCL (Small/Medium units)": 50.4
        },
        {
          "Period": "2006/08/28 - 2006/09/03",
          "CCL": 53.11,
          "CCL (Small/Medium units)": 51.52
        },
        {
          "Period": "2006/08/21 - 2006/08/27",
          "CCL": 53.17,
          "CCL (Small/Medium units)": 51.58
        },
        {
          "Period": "2006/08/14 - 2006/08/20",
          "CCL": 53.61,
          "CCL (Small/Medium units)": 51.98
        },
        {
          "Period": "2006/08/07 - 2006/08/13",
          "CCL": 53.07,
          "CCL (Small/Medium units)": 51.41
        },
        {
          "Period": "2006/07/31 - 2006/08/06",
          "CCL": 53.3,
          "CCL (Small/Medium units)": 51.65
        },
        {
          "Period": "2006/07/24 - 2006/07/30",
          "CCL": 53.74,
          "CCL (Small/Medium units)": 52.13
        },
        {
          "Period": "2006/07/17 - 2006/07/23",
          "CCL": 53.56,
          "CCL (Small/Medium units)": 52
        },
        {
          "Period": "2006/07/10 - 2006/07/16",
          "CCL": 53.71,
          "CCL (Small/Medium units)": 52.05
        },
        {
          "Period": "2006/07/03 - 2006/07/09",
          "CCL": 53.05,
          "CCL (Small/Medium units)": 51.37
        },
        {
          "Period": "2006/06/26 - 2006/07/02",
          "CCL": 52.99,
          "CCL (Small/Medium units)": 51.31
        },
        {
          "Period": "2006/06/19 - 2006/06/25",
          "CCL": 53.4,
          "CCL (Small/Medium units)": 51.8
        },
        {
          "Period": "2006/06/12 - 2006/06/18",
          "CCL": 54.11,
          "CCL (Small/Medium units)": 52.53
        },
        {
          "Period": "2006/06/05 - 2006/06/11",
          "CCL": 53.69,
          "CCL (Small/Medium units)": 52.08
        },
        {
          "Period": "2006/05/29 - 2006/06/04",
          "CCL": 54.56,
          "CCL (Small/Medium units)": 52.98
        },
        {
          "Period": "2006/05/22 - 2006/05/28",
          "CCL": 53.82,
          "CCL (Small/Medium units)": 52.24
        },
        {
          "Period": "2006/05/15 - 2006/05/21",
          "CCL": 54.12,
          "CCL (Small/Medium units)": 52.61
        },
        {
          "Period": "2006/05/08 - 2006/05/14",
          "CCL": 54,
          "CCL (Small/Medium units)": 52.39
        },
        {
          "Period": "2006/05/01 - 2006/05/07",
          "CCL": 53.5,
          "CCL (Small/Medium units)": 51.84
        },
        {
          "Period": "2006/04/24 - 2006/04/30",
          "CCL": 54.13,
          "CCL (Small/Medium units)": 52.48
        },
        {
          "Period": "2006/04/17 - 2006/04/23",
          "CCL": 54.31,
          "CCL (Small/Medium units)": 52.63
        },
        {
          "Period": "2006/04/10 - 2006/04/16",
          "CCL": 54.63,
          "CCL (Small/Medium units)": 53.02
        },
        {
          "Period": "2006/04/03 - 2006/04/09",
          "CCL": 54.3,
          "CCL (Small/Medium units)": 52.75
        },
        {
          "Period": "2006/03/27 - 2006/04/02",
          "CCL": 54.24,
          "CCL (Small/Medium units)": 52.66
        },
        {
          "Period": "2006/03/20 - 2006/03/26",
          "CCL": 54.07,
          "CCL (Small/Medium units)": 52.53
        },
        {
          "Period": "2006/03/13 - 2006/03/19",
          "CCL": 54.16,
          "CCL (Small/Medium units)": 52.67
        },
        {
          "Period": "2006/03/06 - 2006/03/12",
          "CCL": 53.92,
          "CCL (Small/Medium units)": 52.3
        },
        {
          "Period": "2006/02/27 - 2006/03/05",
          "CCL": 53.95,
          "CCL (Small/Medium units)": 52.32
        },
        {
          "Period": "2006/02/20 - 2006/02/26",
          "CCL": 53.57,
          "CCL (Small/Medium units)": 51.97
        },
        {
          "Period": "2006/02/13 - 2006/02/19",
          "CCL": 53.77,
          "CCL (Small/Medium units)": 52.21
        },
        {
          "Period": "2006/02/06 - 2006/02/12",
          "CCL": 53.35,
          "CCL (Small/Medium units)": 51.79
        },
        {
          "Period": "2006/01/30 - 2006/02/05",
          "CCL": 53.57,
          "CCL (Small/Medium units)": 52.11
        },
        {
          "Period": "2006/01/23 - 2006/01/29",
          "CCL": 53.65,
          "CCL (Small/Medium units)": 52.19
        },
        {
          "Period": "2006/01/16 - 2006/01/22",
          "CCL": 53.48,
          "CCL (Small/Medium units)": 52.04
        },
        {
          "Period": "2006/01/09 - 2006/01/15",
          "CCL": 52.67,
          "CCL (Small/Medium units)": 51.15
        },
        {
          "Period": "2006/01/02 - 2006/01/08",
          "CCL": 53.25,
          "CCL (Small/Medium units)": 51.75
        },
        {
          "Period": "2005/12/26 - 2006/01/01",
          "CCL": 52.51,
          "CCL (Small/Medium units)": 50.97
        },
        {
          "Period": "2005/12/19 - 2005/12/25",
          "CCL": 52.93,
          "CCL (Small/Medium units)": 51.44
        },
        {
          "Period": "2005/12/12 - 2005/12/18",
          "CCL": 52.84,
          "CCL (Small/Medium units)": 51.27
        },
        {
          "Period": "2005/12/05 - 2005/12/11",
          "CCL": 52.78,
          "CCL (Small/Medium units)": 51.2
        },
        {
          "Period": "2005/11/28 - 2005/12/04",
          "CCL": 52.19,
          "CCL (Small/Medium units)": 50.56
        },
        {
          "Period": "2005/11/21 - 2005/11/27",
          "CCL": 53.31,
          "CCL (Small/Medium units)": 51.74
        },
        {
          "Period": "2005/11/14 - 2005/11/20",
          "CCL": 53.86,
          "CCL (Small/Medium units)": 52.31
        },
        {
          "Period": "2005/11/07 - 2005/11/13",
          "CCL": 54.32,
          "CCL (Small/Medium units)": 52.81
        },
        {
          "Period": "2005/10/31 - 2005/11/06",
          "CCL": 54.68,
          "CCL (Small/Medium units)": 53.2
        },
        {
          "Period": "2005/10/24 - 2005/10/30",
          "CCL": 54.6,
          "CCL (Small/Medium units)": 53.12
        },
        {
          "Period": "2005/10/17 - 2005/10/23",
          "CCL": 55.15,
          "CCL (Small/Medium units)": 53.72
        },
        {
          "Period": "2005/10/10 - 2005/10/16",
          "CCL": 55.27,
          "CCL (Small/Medium units)": 53.81
        },
        {
          "Period": "2005/10/03 - 2005/10/09",
          "CCL": 54.83,
          "CCL (Small/Medium units)": 53.45
        },
        {
          "Period": "2005/09/26 - 2005/10/02",
          "CCL": 55.71,
          "CCL (Small/Medium units)": 54.36
        },
        {
          "Period": "2005/09/19 - 2005/09/25",
          "CCL": 55.99,
          "CCL (Small/Medium units)": 54.61
        },
        {
          "Period": "2005/09/12 - 2005/09/18",
          "CCL": 55.39,
          "CCL (Small/Medium units)": 53.96
        },
        {
          "Period": "2005/09/05 - 2005/09/11",
          "CCL": 55.9,
          "CCL (Small/Medium units)": 54.48
        },
        {
          "Period": "2005/08/29 - 2005/09/04",
          "CCL": 55.7,
          "CCL (Small/Medium units)": 54.3
        },
        {
          "Period": "2005/08/22 - 2005/08/28",
          "CCL": 55.24,
          "CCL (Small/Medium units)": 53.74
        },
        {
          "Period": "2005/08/15 - 2005/08/21",
          "CCL": 55.42,
          "CCL (Small/Medium units)": 53.92
        },
        {
          "Period": "2005/08/08 - 2005/08/14",
          "CCL": 55.64,
          "CCL (Small/Medium units)": 54.15
        },
        {
          "Period": "2005/08/01 - 2005/08/07",
          "CCL": 55.74,
          "CCL (Small/Medium units)": 54.39
        },
        {
          "Period": "2005/07/25 - 2005/07/31",
          "CCL": 55.59,
          "CCL (Small/Medium units)": 54.26
        },
        {
          "Period": "2005/07/18 - 2005/07/24",
          "CCL": 55.95,
          "CCL (Small/Medium units)": 54.64
        },
        {
          "Period": "2005/07/11 - 2005/07/17",
          "CCL": 55.61,
          "CCL (Small/Medium units)": 54.35
        },
        {
          "Period": "2005/07/04 - 2005/07/10",
          "CCL": 54.95,
          "CCL (Small/Medium units)": 53.57
        },
        {
          "Period": "2005/06/27 - 2005/07/03",
          "CCL": 55.07,
          "CCL (Small/Medium units)": 53.79
        },
        {
          "Period": "2005/06/20 - 2005/06/26",
          "CCL": 56.07,
          "CCL (Small/Medium units)": 54.84
        },
        {
          "Period": "2005/06/13 - 2005/06/19",
          "CCL": 55.82,
          "CCL (Small/Medium units)": 54.56
        },
        {
          "Period": "2005/06/06 - 2005/06/12",
          "CCL": 55.63,
          "CCL (Small/Medium units)": 54.37
        },
        {
          "Period": "2005/05/30 - 2005/06/05",
          "CCL": 55.48,
          "CCL (Small/Medium units)": 54.21
        },
        {
          "Period": "2005/05/23 - 2005/05/29",
          "CCL": 55.61,
          "CCL (Small/Medium units)": 54.3
        },
        {
          "Period": "2005/05/16 - 2005/05/22",
          "CCL": 55.71,
          "CCL (Small/Medium units)": 54.44
        },
        {
          "Period": "2005/05/09 - 2005/05/15",
          "CCL": 55.66,
          "CCL (Small/Medium units)": 54.36
        },
        {
          "Period": "2005/05/02 - 2005/05/08",
          "CCL": 55.03,
          "CCL (Small/Medium units)": 53.71
        },
        {
          "Period": "2005/04/25 - 2005/05/01",
          "CCL": 55.21,
          "CCL (Small/Medium units)": 53.94
        },
        {
          "Period": "2005/04/18 - 2005/04/24",
          "CCL": 55.33,
          "CCL (Small/Medium units)": 54.05
        },
        {
          "Period": "2005/04/11 - 2005/04/17",
          "CCL": 55.32,
          "CCL (Small/Medium units)": 54.02
        },
        {
          "Period": "2005/04/04 - 2005/04/10",
          "CCL": 54.45,
          "CCL (Small/Medium units)": 53.02
        },
        {
          "Period": "2005/03/28 - 2005/04/03",
          "CCL": 54.1,
          "CCL (Small/Medium units)": 52.81
        },
        {
          "Period": "2005/03/21 - 2005/03/27",
          "CCL": 53.97,
          "CCL (Small/Medium units)": 52.77
        },
        {
          "Period": "2005/03/14 - 2005/03/20",
          "CCL": 52.46,
          "CCL (Small/Medium units)": 51.16
        },
        {
          "Period": "2005/03/07 - 2005/03/13",
          "CCL": 51.68,
          "CCL (Small/Medium units)": 50.36
        },
        {
          "Period": "2005/02/28 - 2005/03/06",
          "CCL": 51.27,
          "CCL (Small/Medium units)": 49.96
        },
        {
          "Period": "2005/02/21 - 2005/02/27",
          "CCL": 50.98,
          "CCL (Small/Medium units)": 49.62
        },
        {
          "Period": "2005/02/14 - 2005/02/20",
          "CCL": 50.5,
          "CCL (Small/Medium units)": 49.19
        },
        {
          "Period": "2005/02/07 - 2005/02/13",
          "CCL": 50.4,
          "CCL (Small/Medium units)": 49.13
        },
        {
          "Period": "2005/01/24 - 2005/01/30",
          "CCL": 49.82,
          "CCL (Small/Medium units)": 48.48
        },
        {
          "Period": "2005/01/17 - 2005/01/23",
          "CCL": 49.39,
          "CCL (Small/Medium units)": 48.03
        },
        {
          "Period": "2005/01/10 - 2005/01/16",
          "CCL": 49.66,
          "CCL (Small/Medium units)": 48.33
        },
        {
          "Period": "2005/01/03 - 2005/01/09",
          "CCL": 49.16,
          "CCL (Small/Medium units)": 47.78
        },
        {
          "Period": "2004/12/27 - 2005/01/02",
          "CCL": 49.3,
          "CCL (Small/Medium units)": 47.96
        },
        {
          "Period": "2004/12/20 - 2004/12/26",
          "CCL": 49.78,
          "CCL (Small/Medium units)": 48.54
        },
        {
          "Period": "2004/12/13 - 2004/12/19",
          "CCL": 49.41,
          "CCL (Small/Medium units)": 48.05
        },
        {
          "Period": "2004/12/06 - 2004/12/12",
          "CCL": 49.09,
          "CCL (Small/Medium units)": 47.73
        },
        {
          "Period": "2004/11/29 - 2004/12/05",
          "CCL": 49.79,
          "CCL (Small/Medium units)": 48.43
        },
        {
          "Period": "2004/11/22 - 2004/11/28",
          "CCL": 49.53,
          "CCL (Small/Medium units)": 48.22
        },
        {
          "Period": "2004/11/15 - 2004/11/21",
          "CCL": 48.62,
          "CCL (Small/Medium units)": 47.32
        },
        {
          "Period": "2004/11/08 - 2004/11/14",
          "CCL": 48.69,
          "CCL (Small/Medium units)": 47.42
        },
        {
          "Period": "2004/11/01 - 2004/11/07",
          "CCL": 48.69,
          "CCL (Small/Medium units)": 47.42
        },
        {
          "Period": "2004/10/25 - 2004/10/31",
          "CCL": 48.23,
          "CCL (Small/Medium units)": 46.91
        },
        {
          "Period": "2004/10/18 - 2004/10/24",
          "CCL": 46.97,
          "CCL (Small/Medium units)": 45.78
        },
        {
          "Period": "2004/10/11 - 2004/10/17",
          "CCL": 47.08,
          "CCL (Small/Medium units)": 45.88
        },
        {
          "Period": "2004/10/04 - 2004/10/10",
          "CCL": 47.02,
          "CCL (Small/Medium units)": 45.84
        },
        {
          "Period": "2004/09/27 - 2004/10/03",
          "CCL": 46.78,
          "CCL (Small/Medium units)": 45.51
        },
        {
          "Period": "2004/09/20 - 2004/09/26",
          "CCL": 46.52,
          "CCL (Small/Medium units)": 45.23
        },
        {
          "Period": "2004/09/13 - 2004/09/19",
          "CCL": 46.62,
          "CCL (Small/Medium units)": 45.37
        },
        {
          "Period": "2004/09/06 - 2004/09/12",
          "CCL": 46.04,
          "CCL (Small/Medium units)": 44.74
        },
        {
          "Period": "2004/08/30 - 2004/09/05",
          "CCL": 46.2,
          "CCL (Small/Medium units)": 44.96
        },
        {
          "Period": "2004/08/23 - 2004/08/29",
          "CCL": 45.71,
          "CCL (Small/Medium units)": 44.42
        },
        {
          "Period": "2004/08/16 - 2004/08/22",
          "CCL": 45.11,
          "CCL (Small/Medium units)": 43.86
        },
        {
          "Period": "2004/08/09 - 2004/08/15",
          "CCL": 45.09,
          "CCL (Small/Medium units)": 43.84
        },
        {
          "Period": "2004/08/02 - 2004/08/08",
          "CCL": 45.27,
          "CCL (Small/Medium units)": 44.04
        },
        {
          "Period": "2004/07/26 - 2004/08/01",
          "CCL": 45.59,
          "CCL (Small/Medium units)": 44.38
        },
        {
          "Period": "2004/07/19 - 2004/07/25",
          "CCL": 46.48,
          "CCL (Small/Medium units)": 45.31
        },
        {
          "Period": "2004/07/12 - 2004/07/18",
          "CCL": 46.33,
          "CCL (Small/Medium units)": 45.16
        },
        {
          "Period": "2004/07/05 - 2004/07/11",
          "CCL": 46.44,
          "CCL (Small/Medium units)": 45.27
        },
        {
          "Period": "2004/06/28 - 2004/07/04",
          "CCL": 46.93,
          "CCL (Small/Medium units)": 45.76
        },
        {
          "Period": "2004/06/21 - 2004/06/27",
          "CCL": 46.81,
          "CCL (Small/Medium units)": 45.62
        },
        {
          "Period": "2004/06/14 - 2004/06/20",
          "CCL": 47.32,
          "CCL (Small/Medium units)": 46.15
        },
        {
          "Period": "2004/06/07 - 2004/06/13",
          "CCL": 47.34,
          "CCL (Small/Medium units)": 46.18
        },
        {
          "Period": "2004/05/31 - 2004/06/06",
          "CCL": 46.64,
          "CCL (Small/Medium units)": 45.5
        },
        {
          "Period": "2004/05/24 - 2004/05/30",
          "CCL": 46.51,
          "CCL (Small/Medium units)": 45.36
        },
        {
          "Period": "2004/05/17 - 2004/05/23",
          "CCL": 46.39,
          "CCL (Small/Medium units)": 45.24
        },
        {
          "Period": "2004/05/10 - 2004/05/16",
          "CCL": 46.37,
          "CCL (Small/Medium units)": 45.26
        },
        {
          "Period": "2004/05/03 - 2004/05/09",
          "CCL": 47.2,
          "CCL (Small/Medium units)": 46.09
        },
        {
          "Period": "2004/04/26 - 2004/05/02",
          "CCL": 47.06,
          "CCL (Small/Medium units)": 46.04
        },
        {
          "Period": "2004/04/19 - 2004/04/25",
          "CCL": 46.46,
          "CCL (Small/Medium units)": 45.51
        },
        {
          "Period": "2004/04/12 - 2004/04/18",
          "CCL": 45.96,
          "CCL (Small/Medium units)": 45.03
        },
        {
          "Period": "2004/04/05 - 2004/04/11",
          "CCL": 46.31,
          "CCL (Small/Medium units)": 45.43
        },
        {
          "Period": "2004/03/29 - 2004/04/04",
          "CCL": 45.81,
          "CCL (Small/Medium units)": 44.97
        },
        {
          "Period": "2004/03/22 - 2004/03/28",
          "CCL": 45.37,
          "CCL (Small/Medium units)": 44.5
        },
        {
          "Period": "2004/03/15 - 2004/03/21",
          "CCL": 44.93,
          "CCL (Small/Medium units)": 44.04
        },
        {
          "Period": "2004/03/08 - 2004/03/14",
          "CCL": 43.98,
          "CCL (Small/Medium units)": 43.09
        },
        {
          "Period": "2004/03/01 - 2004/03/07",
          "CCL": 43.25,
          "CCL (Small/Medium units)": 42.57
        },
        {
          "Period": "2004/02/23 - 2004/02/29",
          "CCL": 43.07,
          "CCL (Small/Medium units)": 42.43
        },
        {
          "Period": "2004/02/16 - 2004/02/22",
          "CCL": 41.36,
          "CCL (Small/Medium units)": 40.64
        },
        {
          "Period": "2004/02/09 - 2004/02/15",
          "CCL": 40.58,
          "CCL (Small/Medium units)": 39.82
        },
        {
          "Period": "2004/02/02 - 2004/02/08",
          "CCL": 39.37,
          "CCL (Small/Medium units)": 38.62
        },
        {
          "Period": "2004/01/26 - 2004/02/01",
          "CCL": 39.06,
          "CCL (Small/Medium units)": 38.29
        },
        {
          "Period": "2004/01/19 - 2004/01/25",
          "CCL": 38.41,
          "CCL (Small/Medium units)": 37.65
        },
        {
          "Period": "2004/01/12 - 2004/01/18",
          "CCL": 37.9,
          "CCL (Small/Medium units)": 37.18
        },
        {
          "Period": "2004/01/05 - 2004/01/11",
          "CCL": 38.33,
          "CCL (Small/Medium units)": 37.64
        },
        {
          "Period": "2003/12/29 - 2004/01/04",
          "CCL": 37.51,
          "CCL (Small/Medium units)": 36.81
        },
        {
          "Period": "2003/12/22 - 2003/12/28",
          "CCL": 37.07,
          "CCL (Small/Medium units)": 36.35
        },
        {
          "Period": "2003/12/15 - 2003/12/21",
          "CCL": 37.2,
          "CCL (Small/Medium units)": 36.49
        },
        {
          "Period": "2003/12/08 - 2003/12/14",
          "CCL": 36.79,
          "CCL (Small/Medium units)": 36.07
        },
        {
          "Period": "2003/12/01 - 2003/12/07",
          "CCL": 37.23,
          "CCL (Small/Medium units)": 36.56
        },
        {
          "Period": "2003/11/24 - 2003/11/30",
          "CCL": 36.43,
          "CCL (Small/Medium units)": 35.76
        },
        {
          "Period": "2003/11/17 - 2003/11/23",
          "CCL": 35.64,
          "CCL (Small/Medium units)": 34.95
        },
        {
          "Period": "2003/11/10 - 2003/11/16",
          "CCL": 35.52,
          "CCL (Small/Medium units)": 34.83
        },
        {
          "Period": "2003/11/03 - 2003/11/09",
          "CCL": 36.03,
          "CCL (Small/Medium units)": 35.36
        },
        {
          "Period": "2003/10/27 - 2003/11/02",
          "CCL": 35.87,
          "CCL (Small/Medium units)": 35.23
        },
        {
          "Period": "2003/10/20 - 2003/10/26",
          "CCL": 35.17,
          "CCL (Small/Medium units)": 34.49
        },
        {
          "Period": "2003/10/13 - 2003/10/19",
          "CCL": 34.98,
          "CCL (Small/Medium units)": 34.36
        },
        {
          "Period": "2003/10/06 - 2003/10/12",
          "CCL": 34.6,
          "CCL (Small/Medium units)": 33.99
        },
        {
          "Period": "2003/09/29 - 2003/10/05",
          "CCL": 34.19,
          "CCL (Small/Medium units)": 33.55
        },
        {
          "Period": "2003/09/22 - 2003/09/28",
          "CCL": 33.26,
          "CCL (Small/Medium units)": 32.62
        },
        {
          "Period": "2003/09/15 - 2003/09/21",
          "CCL": 33.48,
          "CCL (Small/Medium units)": 32.86
        },
        {
          "Period": "2003/09/08 - 2003/09/14",
          "CCL": 32.7,
          "CCL (Small/Medium units)": 32.05
        },
        {
          "Period": "2003/09/01 - 2003/09/07",
          "CCL": 32.29,
          "CCL (Small/Medium units)": 31.62
        },
        {
          "Period": "2003/08/25 - 2003/08/31",
          "CCL": 32.39,
          "CCL (Small/Medium units)": 31.67
        },
        {
          "Period": "2003/08/18 - 2003/08/24",
          "CCL": 31.77,
          "CCL (Small/Medium units)": 31.02
        },
        {
          "Period": "2003/08/11 - 2003/08/17",
          "CCL": 31.79,
          "CCL (Small/Medium units)": 31.03
        },
        {
          "Period": "2003/08/04 - 2003/08/10",
          "CCL": 31.77,
          "CCL (Small/Medium units)": 31.04
        },
        {
          "Period": "2003/07/28 - 2003/08/03",
          "CCL": 31.88,
          "CCL (Small/Medium units)": 31.12
        },
        {
          "Period": "2003/07/21 - 2003/07/27",
          "CCL": 32.14,
          "CCL (Small/Medium units)": 31.37
        },
        {
          "Period": "2003/07/14 - 2003/07/20",
          "CCL": 32.11,
          "CCL (Small/Medium units)": 31.31
        },
        {
          "Period": "2003/07/07 - 2003/07/13",
          "CCL": 32.57,
          "CCL (Small/Medium units)": 31.79
        },
        {
          "Period": "2003/06/30 - 2003/07/06",
          "CCL": 32.58,
          "CCL (Small/Medium units)": 31.78
        },
        {
          "Period": "2003/06/23 - 2003/06/29",
          "CCL": 32.67,
          "CCL (Small/Medium units)": 31.88
        },
        {
          "Period": "2003/06/16 - 2003/06/22",
          "CCL": 32.35,
          "CCL (Small/Medium units)": 31.54
        },
        {
          "Period": "2003/06/09 - 2003/06/15",
          "CCL": 32.16,
          "CCL (Small/Medium units)": 31.34
        },
        {
          "Period": "2003/06/02 - 2003/06/08",
          "CCL": 32.37,
          "CCL (Small/Medium units)": 31.54
        },
        {
          "Period": "2003/05/26 - 2003/06/01",
          "CCL": 32.43,
          "CCL (Small/Medium units)": 31.61
        },
        {
          "Period": "2003/05/19 - 2003/05/25",
          "CCL": 32.52,
          "CCL (Small/Medium units)": 31.67
        },
        {
          "Period": "2003/05/12 - 2003/05/18",
          "CCL": 32.61,
          "CCL (Small/Medium units)": 31.76
        },
        {
          "Period": "2003/05/05 - 2003/05/11",
          "CCL": 32.61,
          "CCL (Small/Medium units)": 31.75
        },
        {
          "Period": "2003/04/28 - 2003/05/04",
          "CCL": 32.83,
          "CCL (Small/Medium units)": 31.97
        },
        {
          "Period": "2003/04/21 - 2003/04/27",
          "CCL": 33.25,
          "CCL (Small/Medium units)": 32.42
        },
        {
          "Period": "2003/04/14 - 2003/04/20",
          "CCL": 33.44,
          "CCL (Small/Medium units)": 32.62
        },
        {
          "Period": "2003/04/07 - 2003/04/13",
          "CCL": 33.4,
          "CCL (Small/Medium units)": 32.57
        },
        {
          "Period": "2003/03/31 - 2003/04/06",
          "CCL": 33.38,
          "CCL (Small/Medium units)": 32.56
        },
        {
          "Period": "2003/03/24 - 2003/03/30",
          "CCL": 33.55,
          "CCL (Small/Medium units)": 32.74
        },
        {
          "Period": "2003/03/17 - 2003/03/23",
          "CCL": 33.99,
          "CCL (Small/Medium units)": 33.17
        },
        {
          "Period": "2003/03/10 - 2003/03/16",
          "CCL": 34.65,
          "CCL (Small/Medium units)": 33.87
        },
        {
          "Period": "2003/03/03 - 2003/03/09",
          "CCL": 35.14,
          "CCL (Small/Medium units)": 34.35
        },
        {
          "Period": "2003/02/24 - 2003/03/02",
          "CCL": 35.25,
          "CCL (Small/Medium units)": 34.46
        },
        {
          "Period": "2003/02/17 - 2003/02/23",
          "CCL": 35.49,
          "CCL (Small/Medium units)": 34.68
        },
        {
          "Period": "2003/02/10 - 2003/02/16",
          "CCL": 35.09,
          "CCL (Small/Medium units)": 34.26
        },
        {
          "Period": "2003/02/03 - 2003/02/09",
          "CCL": 35.36,
          "CCL (Small/Medium units)": 34.53
        },
        {
          "Period": "2003/01/27 - 2003/02/02",
          "CCL": 35.66,
          "CCL (Small/Medium units)": 34.81
        },
        {
          "Period": "2003/01/20 - 2003/01/26",
          "CCL": 35.66,
          "CCL (Small/Medium units)": 34.81
        },
        {
          "Period": "2003/01/13 - 2003/01/19",
          "CCL": 36.11,
          "CCL (Small/Medium units)": 35.28
        },
        {
          "Period": "2003/01/06 - 2003/01/12",
          "CCL": 35.69,
          "CCL (Small/Medium units)": 34.87
        },
        {
          "Period": "2002/12/30 - 2003/01/05",
          "CCL": 35.77,
          "CCL (Small/Medium units)": 34.96
        },
        {
          "Period": "2002/12/23 - 2002/12/29",
          "CCL": 35.83,
          "CCL (Small/Medium units)": 35.03
        },
        {
          "Period": "2002/12/16 - 2002/12/22",
          "CCL": 36.16,
          "CCL (Small/Medium units)": 35.34
        },
        {
          "Period": "2002/12/09 - 2002/12/15",
          "CCL": 35.82,
          "CCL (Small/Medium units)": 34.97
        },
        {
          "Period": "2002/12/02 - 2002/12/08",
          "CCL": 36.17,
          "CCL (Small/Medium units)": 35.33
        },
        {
          "Period": "2002/11/25 - 2002/12/01",
          "CCL": 35.97,
          "CCL (Small/Medium units)": 35.13
        },
        {
          "Period": "2002/11/18 - 2002/11/24",
          "CCL": 35.95,
          "CCL (Small/Medium units)": 35.13
        },
        {
          "Period": "2002/11/11 - 2002/11/17",
          "CCL": 35.99,
          "CCL (Small/Medium units)": 35.16
        },
        {
          "Period": "2002/11/04 - 2002/11/10",
          "CCL": 36.01,
          "CCL (Small/Medium units)": 35.18
        },
        {
          "Period": "2002/10/28 - 2002/11/03",
          "CCL": 36.21,
          "CCL (Small/Medium units)": 35.39
        },
        {
          "Period": "2002/10/21 - 2002/10/27",
          "CCL": 36.18,
          "CCL (Small/Medium units)": 35.34
        },
        {
          "Period": "2002/10/14 - 2002/10/20",
          "CCL": 36.77,
          "CCL (Small/Medium units)": 35.97
        },
        {
          "Period": "2002/10/07 - 2002/10/13",
          "CCL": 36.89,
          "CCL (Small/Medium units)": 36.09
        },
        {
          "Period": "2002/09/30 - 2002/10/06",
          "CCL": 37.14,
          "CCL (Small/Medium units)": 36.33
        },
        {
          "Period": "2002/09/23 - 2002/09/29",
          "CCL": 36.94,
          "CCL (Small/Medium units)": 36.12
        },
        {
          "Period": "2002/09/16 - 2002/09/22",
          "CCL": 37.47,
          "CCL (Small/Medium units)": 36.66
        },
        {
          "Period": "2002/09/09 - 2002/09/15",
          "CCL": 37.3,
          "CCL (Small/Medium units)": 36.48
        },
        {
          "Period": "2002/09/02 - 2002/09/08",
          "CCL": 37.83,
          "CCL (Small/Medium units)": 37.05
        },
        {
          "Period": "2002/08/26 - 2002/09/01",
          "CCL": 37.89,
          "CCL (Small/Medium units)": 37.11
        },
        {
          "Period": "2002/08/19 - 2002/08/25",
          "CCL": 37.79,
          "CCL (Small/Medium units)": 36.97
        },
        {
          "Period": "2002/08/12 - 2002/08/18",
          "CCL": 38.19,
          "CCL (Small/Medium units)": 37.39
        },
        {
          "Period": "2002/08/05 - 2002/08/11",
          "CCL": 38.63,
          "CCL (Small/Medium units)": 37.86
        },
        {
          "Period": "2002/07/29 - 2002/08/04",
          "CCL": 38.47,
          "CCL (Small/Medium units)": 37.7
        },
        {
          "Period": "2002/07/22 - 2002/07/28",
          "CCL": 38.94,
          "CCL (Small/Medium units)": 38.2
        },
        {
          "Period": "2002/07/15 - 2002/07/21",
          "CCL": 39.42,
          "CCL (Small/Medium units)": 38.71
        },
        {
          "Period": "2002/07/08 - 2002/07/14",
          "CCL": 39.22,
          "CCL (Small/Medium units)": 38.5
        },
        {
          "Period": "2002/07/01 - 2002/07/07",
          "CCL": 39.42,
          "CCL (Small/Medium units)": 38.7
        },
        {
          "Period": "2002/06/24 - 2002/06/30",
          "CCL": 39.51,
          "CCL (Small/Medium units)": 38.8
        },
        {
          "Period": "2002/06/17 - 2002/06/23",
          "CCL": 39.67,
          "CCL (Small/Medium units)": 38.98
        },
        {
          "Period": "2002/06/10 - 2002/06/16",
          "CCL": 39.52,
          "CCL (Small/Medium units)": 38.83
        },
        {
          "Period": "2002/06/03 - 2002/06/09",
          "CCL": 39.81,
          "CCL (Small/Medium units)": 39.12
        },
        {
          "Period": "2002/05/27 - 2002/06/02",
          "CCL": 39.84,
          "CCL (Small/Medium units)": 39.16
        },
        {
          "Period": "2002/05/20 - 2002/05/26",
          "CCL": 39.98,
          "CCL (Small/Medium units)": 39.31
        },
        {
          "Period": "2002/05/13 - 2002/05/19",
          "CCL": 40.28,
          "CCL (Small/Medium units)": 39.61
        },
        {
          "Period": "2002/05/06 - 2002/05/12",
          "CCL": 39.87,
          "CCL (Small/Medium units)": 39.2
        },
        {
          "Period": "2002/04/29 - 2002/05/05",
          "CCL": 39.8,
          "CCL (Small/Medium units)": 39.12
        },
        {
          "Period": "2002/04/22 - 2002/04/28",
          "CCL": 40.78,
          "CCL (Small/Medium units)": 40.14
        },
        {
          "Period": "2002/04/15 - 2002/04/21",
          "CCL": 40.19,
          "CCL (Small/Medium units)": 39.57
        },
        {
          "Period": "2002/04/08 - 2002/04/14",
          "CCL": 40.54,
          "CCL (Small/Medium units)": 39.92
        },
        {
          "Period": "2002/04/01 - 2002/04/07",
          "CCL": 40.94,
          "CCL (Small/Medium units)": 40.35
        },
        {
          "Period": "2002/03/25 - 2002/03/31",
          "CCL": 41.21,
          "CCL (Small/Medium units)": 40.63
        },
        {
          "Period": "2002/03/18 - 2002/03/24",
          "CCL": 41.67,
          "CCL (Small/Medium units)": 41.1
        },
        {
          "Period": "2002/03/11 - 2002/03/17",
          "CCL": 41.44,
          "CCL (Small/Medium units)": 40.87
        },
        {
          "Period": "2002/03/04 - 2002/03/10",
          "CCL": 40.58,
          "CCL (Small/Medium units)": 39.95
        },
        {
          "Period": "2002/02/25 - 2002/03/03",
          "CCL": 40.57,
          "CCL (Small/Medium units)": 39.94
        },
        {
          "Period": "2002/02/18 - 2002/02/24",
          "CCL": 40.66,
          "CCL (Small/Medium units)": 40.02
        },
        {
          "Period": "2002/02/11 - 2002/02/17",
          "CCL": 40.75,
          "CCL (Small/Medium units)": 40.11
        },
        {
          "Period": "2002/02/04 - 2002/02/10",
          "CCL": 40.69,
          "CCL (Small/Medium units)": 40.05
        },
        {
          "Period": "2002/01/28 - 2002/02/03",
          "CCL": 40.69,
          "CCL (Small/Medium units)": 40.05
        },
        {
          "Period": "2002/01/21 - 2002/01/27",
          "CCL": 40.31,
          "CCL (Small/Medium units)": 39.67
        },
        {
          "Period": "2002/01/14 - 2002/01/20",
          "CCL": 40.29,
          "CCL (Small/Medium units)": 39.64
        },
        {
          "Period": "2002/01/07 - 2002/01/13",
          "CCL": 40.35,
          "CCL (Small/Medium units)": 39.71
        },
        {
          "Period": "2001/12/31 - 2002/01/06",
          "CCL": 40.28,
          "CCL (Small/Medium units)": 39.6
        },
        {
          "Period": "2001/12/24 - 2001/12/30",
          "CCL": 40.67,
          "CCL (Small/Medium units)": 40.02
        },
        {
          "Period": "2001/12/17 - 2001/12/23",
          "CCL": 40.43,
          "CCL (Small/Medium units)": 39.81
        },
        {
          "Period": "2001/12/10 - 2001/12/16",
          "CCL": 40.45,
          "CCL (Small/Medium units)": 39.83
        },
        {
          "Period": "2001/12/03 - 2001/12/09",
          "CCL": 40.3,
          "CCL (Small/Medium units)": 39.64
        },
        {
          "Period": "2001/11/26 - 2001/12/02",
          "CCL": 39.92,
          "CCL (Small/Medium units)": 39.3
        },
        {
          "Period": "2001/11/19 - 2001/11/25",
          "CCL": 39.81,
          "CCL (Small/Medium units)": 39.29
        },
        {
          "Period": "2001/11/12 - 2001/11/18",
          "CCL": 40.71,
          "CCL (Small/Medium units)": 40.13
        },
        {
          "Period": "2001/11/05 - 2001/11/11",
          "CCL": 40.47,
          "CCL (Small/Medium units)": 39.91
        },
        {
          "Period": "2001/10/29 - 2001/11/04",
          "CCL": 40.62,
          "CCL (Small/Medium units)": 40.06
        },
        {
          "Period": "2001/10/22 - 2001/10/28",
          "CCL": 40.36,
          "CCL (Small/Medium units)": 39.75
        },
        {
          "Period": "2001/10/15 - 2001/10/21",
          "CCL": 40.01,
          "CCL (Small/Medium units)": 39.7
        },
        {
          "Period": "2001/10/08 - 2001/10/14",
          "CCL": 39.63,
          "CCL (Small/Medium units)": 39.34
        },
        {
          "Period": "2001/10/01 - 2001/10/07",
          "CCL": 40.05,
          "CCL (Small/Medium units)": 39.49
        },
        {
          "Period": "2001/09/24 - 2001/09/30",
          "CCL": 40.65,
          "CCL (Small/Medium units)": 40.07
        },
        {
          "Period": "2001/09/17 - 2001/09/23",
          "CCL": 41.1,
          "CCL (Small/Medium units)": 40.33
        },
        {
          "Period": "2001/09/10 - 2001/09/16",
          "CCL": 41.63,
          "CCL (Small/Medium units)": 40.88
        },
        {
          "Period": "2001/09/03 - 2001/09/09",
          "CCL": 41.62,
          "CCL (Small/Medium units)": 40.81
        },
        {
          "Period": "2001/08/27 - 2001/09/02",
          "CCL": 42.18,
          "CCL (Small/Medium units)": 41.6
        },
        {
          "Period": "2001/08/20 - 2001/08/26",
          "CCL": 42.03,
          "CCL (Small/Medium units)": 41.46
        },
        {
          "Period": "2001/08/13 - 2001/08/19",
          "CCL": 42.9,
          "CCL (Small/Medium units)": 42.24
        },
        {
          "Period": "2001/08/06 - 2001/08/12",
          "CCL": 42.89,
          "CCL (Small/Medium units)": 42.21
        },
        {
          "Period": "2001/07/30 - 2001/08/05",
          "CCL": 42.73,
          "CCL (Small/Medium units)": 41.99
        },
        {
          "Period": "2001/07/23 - 2001/07/29",
          "CCL": 42.87,
          "CCL (Small/Medium units)": 42.22
        },
        {
          "Period": "2001/07/16 - 2001/07/22",
          "CCL": 43.27,
          "CCL (Small/Medium units)": 42.58
        },
        {
          "Period": "2001/07/09 - 2001/07/15",
          "CCL": 42.83,
          "CCL (Small/Medium units)": 42.22
        },
        {
          "Period": "2001/07/02 - 2001/07/08",
          "CCL": 43.81,
          "CCL (Small/Medium units)": 43.11
        },
        {
          "Period": "2001/06/25 - 2001/07/01",
          "CCL": 44.04,
          "CCL (Small/Medium units)": 43.3
        },
        {
          "Period": "2001/06/18 - 2001/06/24",
          "CCL": 43.38,
          "CCL (Small/Medium units)": 42.59
        },
        {
          "Period": "2001/06/11 - 2001/06/17",
          "CCL": 43.99,
          "CCL (Small/Medium units)": 43.14
        },
        {
          "Period": "2001/06/04 - 2001/06/10",
          "CCL": 44.1,
          "CCL (Small/Medium units)": 43.22
        },
        {
          "Period": "2001/05/28 - 2001/06/03",
          "CCL": 43.79,
          "CCL (Small/Medium units)": 42.95
        },
        {
          "Period": "2001/05/21 - 2001/05/27",
          "CCL": 44.06,
          "CCL (Small/Medium units)": 43.3
        },
        {
          "Period": "2001/05/14 - 2001/05/20",
          "CCL": 44.25,
          "CCL (Small/Medium units)": 43.49
        },
        {
          "Period": "2001/05/07 - 2001/05/13",
          "CCL": 44.26,
          "CCL (Small/Medium units)": 43.46
        },
        {
          "Period": "2001/04/30 - 2001/05/06",
          "CCL": 44.92,
          "CCL (Small/Medium units)": 43.75
        },
        {
          "Period": "2001/04/23 - 2001/04/29",
          "CCL": 44.48,
          "CCL (Small/Medium units)": 43.46
        },
        {
          "Period": "2001/04/16 - 2001/04/22",
          "CCL": 44.8,
          "CCL (Small/Medium units)": 44.09
        },
        {
          "Period": "2001/04/09 - 2001/04/15",
          "CCL": 44.96,
          "CCL (Small/Medium units)": 43.95
        },
        {
          "Period": "2001/04/02 - 2001/04/08",
          "CCL": 44.64,
          "CCL (Small/Medium units)": 43.78
        },
        {
          "Period": "2001/03/26 - 2001/04/01",
          "CCL": 45.2,
          "CCL (Small/Medium units)": 44.18
        },
        {
          "Period": "2001/03/19 - 2001/03/25",
          "CCL": 44.4,
          "CCL (Small/Medium units)": 43.76
        },
        {
          "Period": "2001/03/12 - 2001/03/18",
          "CCL": 46.19,
          "CCL (Small/Medium units)": 45.01
        },
        {
          "Period": "2001/03/05 - 2001/03/11",
          "CCL": 46.27,
          "CCL (Small/Medium units)": 45.02
        },
        {
          "Period": "2001/02/26 - 2001/03/04",
          "CCL": 46.24,
          "CCL (Small/Medium units)": 44.83
        },
        {
          "Period": "2001/02/19 - 2001/02/25",
          "CCL": 45.92,
          "CCL (Small/Medium units)": 45.12
        },
        {
          "Period": "2001/02/12 - 2001/02/18",
          "CCL": 44.93,
          "CCL (Small/Medium units)": 44.06
        },
        {
          "Period": "2001/02/05 - 2001/02/11",
          "CCL": 44.46,
          "CCL (Small/Medium units)": 43.73
        },
        {
          "Period": "2001/01/29 - 2001/02/04",
          "CCL": 43.8,
          "CCL (Small/Medium units)": 43.39
        },
        {
          "Period": "2001/01/22 - 2001/01/28",
          "CCL": 43.54,
          "CCL (Small/Medium units)": 43.15
        },
        {
          "Period": "2001/01/15 - 2001/01/21",
          "CCL": 44.2,
          "CCL (Small/Medium units)": 43.47
        },
        {
          "Period": "2001/01/08 - 2001/01/14",
          "CCL": 44.2,
          "CCL (Small/Medium units)": 43.47
        },
        {
          "Period": "2001/01/01 - 2001/01/07",
          "CCL": 44.76,
          "CCL (Small/Medium units)": 43.88
        },
        {
          "Period": "2000/12/25 - 2000/12/31",
          "CCL": 44.41,
          "CCL (Small/Medium units)": 43.7
        },
        {
          "Period": "2000/12/18 - 2000/12/24",
          "CCL": 44.98,
          "CCL (Small/Medium units)": 44.37
        },
        {
          "Period": "2000/12/11 - 2000/12/17",
          "CCL": 44.58,
          "CCL (Small/Medium units)": 43.69
        },
        {
          "Period": "2000/12/04 - 2000/12/10",
          "CCL": 45.2,
          "CCL (Small/Medium units)": 44.3
        },
        {
          "Period": "2000/11/27 - 2000/12/03",
          "CCL": 46.02,
          "CCL (Small/Medium units)": 44.98
        },
        {
          "Period": "2000/11/20 - 2000/11/26",
          "CCL": 46.39,
          "CCL (Small/Medium units)": 45.19
        },
        {
          "Period": "2000/11/13 - 2000/11/19",
          "CCL": 46.71,
          "CCL (Small/Medium units)": 45.44
        },
        {
          "Period": "2000/11/06 - 2000/11/12",
          "CCL": 48.01,
          "CCL (Small/Medium units)": 46.69
        },
        {
          "Period": "2000/10/30 - 2000/11/05",
          "CCL": 47.6,
          "CCL (Small/Medium units)": 46.34
        },
        {
          "Period": "2000/10/23 - 2000/10/29",
          "CCL": 48.1,
          "CCL (Small/Medium units)": 47
        },
        {
          "Period": "2000/10/16 - 2000/10/22",
          "CCL": 48.47,
          "CCL (Small/Medium units)": 47.43
        },
        {
          "Period": "2000/10/09 - 2000/10/15",
          "CCL": 48.38,
          "CCL (Small/Medium units)": 47.42
        },
        {
          "Period": "2000/10/02 - 2000/10/08",
          "CCL": 47.89,
          "CCL (Small/Medium units)": 47.03
        },
        {
          "Period": "2000/09/25 - 2000/10/01",
          "CCL": 48.41,
          "CCL (Small/Medium units)": 47.44
        },
        {
          "Period": "2000/09/18 - 2000/09/24",
          "CCL": 48.8,
          "CCL (Small/Medium units)": 47.41
        },
        {
          "Period": "2000/09/11 - 2000/09/17",
          "CCL": 48.45,
          "CCL (Small/Medium units)": 47.17
        },
        {
          "Period": "2000/09/04 - 2000/09/10",
          "CCL": 48.4,
          "CCL (Small/Medium units)": 46.71
        },
        {
          "Period": "2000/08/28 - 2000/09/03",
          "CCL": 48.45,
          "CCL (Small/Medium units)": 46.75
        },
        {
          "Period": "2000/08/21 - 2000/08/27",
          "CCL": 48.88,
          "CCL (Small/Medium units)": 47.8
        },
        {
          "Period": "2000/08/14 - 2000/08/20",
          "CCL": 48.44,
          "CCL (Small/Medium units)": 47.43
        },
        {
          "Period": "2000/08/07 - 2000/08/13",
          "CCL": 48.5,
          "CCL (Small/Medium units)": 47.54
        },
        {
          "Period": "2000/07/31 - 2000/08/06",
          "CCL": 48.44,
          "CCL (Small/Medium units)": 47.48
        },
        {
          "Period": "2000/07/24 - 2000/07/30",
          "CCL": 48.15,
          "CCL (Small/Medium units)": 47.14
        },
        {
          "Period": "2000/07/17 - 2000/07/23",
          "CCL": 47.94,
          "CCL (Small/Medium units)": 47.15
        },
        {
          "Period": "2000/07/10 - 2000/07/16",
          "CCL": 47.77,
          "CCL (Small/Medium units)": 46.34
        },
        {
          "Period": "2000/07/03 - 2000/07/09",
          "CCL": 47.43,
          "CCL (Small/Medium units)": 46.25
        },
        {
          "Period": "2000/06/26 - 2000/07/02",
          "CCL": 47.25,
          "CCL (Small/Medium units)": 46.12
        },
        {
          "Period": "2000/06/19 - 2000/06/25",
          "CCL": 46.97,
          "CCL (Small/Medium units)": 45.95
        },
        {
          "Period": "2000/06/12 - 2000/06/18",
          "CCL": 47.02,
          "CCL (Small/Medium units)": 46.42
        },
        {
          "Period": "2000/06/05 - 2000/06/11",
          "CCL": 46.72,
          "CCL (Small/Medium units)": 46.22
        },
        {
          "Period": "2000/05/29 - 2000/06/04",
          "CCL": 47.34,
          "CCL (Small/Medium units)": 46.69
        },
        {
          "Period": "2000/05/22 - 2000/05/28",
          "CCL": 49.13,
          "CCL (Small/Medium units)": 48.18
        },
        {
          "Period": "2000/05/15 - 2000/05/21",
          "CCL": 49.6,
          "CCL (Small/Medium units)": 48.51
        },
        {
          "Period": "2000/05/08 - 2000/05/14",
          "CCL": 50.3,
          "CCL (Small/Medium units)": 49.1
        },
        {
          "Period": "2000/05/01 - 2000/05/07",
          "CCL": 50.7,
          "CCL (Small/Medium units)": 49.69
        },
        {
          "Period": "2000/04/24 - 2000/04/30",
          "CCL": 51.62,
          "CCL (Small/Medium units)": 50.5
        },
        {
          "Period": "2000/04/17 - 2000/04/23",
          "CCL": 51.62,
          "CCL (Small/Medium units)": 50.66
        },
        {
          "Period": "2000/04/10 - 2000/04/16",
          "CCL": 52.28,
          "CCL (Small/Medium units)": 51.21
        },
        {
          "Period": "2000/04/03 - 2000/04/09",
          "CCL": 52.28,
          "CCL (Small/Medium units)": 51.21
        },
        {
          "Period": "2000/03/27 - 2000/04/02",
          "CCL": 53.33,
          "CCL (Small/Medium units)": 52.18
        },
        {
          "Period": "2000/03/20 - 2000/03/26",
          "CCL": 54.16,
          "CCL (Small/Medium units)": 52.62
        },
        {
          "Period": "2000/03/13 - 2000/03/19",
          "CCL": 54.15,
          "CCL (Small/Medium units)": 52.93
        },
        {
          "Period": "2000/03/06 - 2000/03/12",
          "CCL": 53.65,
          "CCL (Small/Medium units)": 52.27
        },
        {
          "Period": "2000/02/28 - 2000/03/05",
          "CCL": 54.32,
          "CCL (Small/Medium units)": 52.83
        },
        {
          "Period": "2000/02/21 - 2000/02/27",
          "CCL": 55.32,
          "CCL (Small/Medium units)": 53.54
        },
        {
          "Period": "2000/02/14 - 2000/02/20",
          "CCL": 53.44,
          "CCL (Small/Medium units)": 52.55
        },
        {
          "Period": "2000/02/07 - 2000/02/13",
          "CCL": 52.12,
          "CCL (Small/Medium units)": 51.46
        },
        {
          "Period": "2000/01/31 - 2000/02/06",
          "CCL": 53.11,
          "CCL (Small/Medium units)": 52.19
        },
        {
          "Period": "2000/01/24 - 2000/01/30",
          "CCL": 53.3,
          "CCL (Small/Medium units)": 52.2
        },
        {
          "Period": "2000/01/17 - 2000/01/23",
          "CCL": 55.22,
          "CCL (Small/Medium units)": 53.29
        },
        {
          "Period": "2000/01/10 - 2000/01/16",
          "CCL": 53.46,
          "CCL (Small/Medium units)": 52.16
        },
        {
          "Period": "2000/01/03 - 2000/01/09",
          "CCL": 53.65,
          "CCL (Small/Medium units)": 52.63
        },
        {
          "Period": "1999/12/27 - 2000/01/02",
          "CCL": 54.24,
          "CCL (Small/Medium units)": 53.16
        }
      ].reverse();
  
    chart.data.forEach(function (o) {
    
      o.Category = "" + o.Category;
      o["CCL"] = o["CCL"] || undefined;
      o["CCL (Small/Medium units)"] = o["CCL (Small/Medium units)"] || undefined;
    });
  
    chart.events.on("ready", function () {
      dateAxis.zoom({ start: 0, end: 1 });
    });


    
    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = "yyyy/MM/dd";

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 60;
    dateAxis.startLocation = 0.5;
    dateAxis.endLocation = 0.5;
    dateAxis.dateFormatter.dateFormat="yyyy/MM/dd";
    dateAxis.baseInterval = {
    timeUnit: "day",
    count: 1
}
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  
    ["CCL"
    ].forEach(function (elem) {

  
    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = elem;
    series.tooltipText ="{Period}\n" + "[bold font-size: 20]{valueY}[/]";
    series.dataFields.dateX = "Period";
    series.strokeWidth = 2;
    series.minBulletDistance = 15;

    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "left";
    series.tooltip.label.textValign = "middle";
    

    // Make bullets grow on hover
    var bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#fff");

    var bullethover = bullet.states.create("hover");
    bullethover.properties.scale = 1.3;

    // Make a panning cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.maxTooltipDistance = 500;
    chart.cursor.behavior = "panXY";
    chart.cursor.xAxis = valueAxis;
    //chart.cursor.snapToSeries = series;

    series.legendSettings.valueText = elem;
    
    // Create vertical scrollbar and place it before the value axis
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.parent = chart.leftAxesContainer;
    chart.scrollbarY.toBack();
    
    // Create a horizontal scrollbar with previe and place it underneath the date axis
    //chart.scrollbarX.series.push(series);
    //chart.scrollbarX.parent = chart.bottomAxesContainer;
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.parent = chart.bottomAxesContainer;
  
    valueAxis.cursorTooltipEnabled = false;
    //dateAxis.cursorTooltipEnabled = false;

    chart.zoomOutButton.background.fill = am4core.color("#F8D9D6");
    chart.zoomOutButton.icon.stroke = am4core.color("#fff");
    chart.zoomOutButton.icon.strokeWidth = 2;
    chart.zoomOutButton.background.states.getKey("hover").properties.fill = am4core.color("#f7b6b0");
    chart.zoomOutButton.background.states.getKey("down").properties.fill = am4core.color("#f7b6b0");
    
    dateAxis.start = 0;
    dateAxis.keepSelection = true;
    
    });
    // axis ranges
    /*var range1 = dateAxis.axisRanges.create();
    range1.date = new Date(2011, 1, 1);
    range1.endDate = new Date(2013, 8, 31);
    range1.axisFill.fill = "#ced4da";
    range1.axisFill.fillOpacity = 0.3;*/

    var range1 = dateAxis.axisRanges.create();
    range1.date = new Date(2012, 3, 19);
    range1.grid.stroke = "#adb5bd";
    range1.grid.strokeOpacity = 0.8;
    range1.grid.strokeDasharray = "5,2";
    range1.grid.strokeWidth = 2;

    range1.label.text = "Hit the base index";
    range1.label.inside = true;
    range1.label.rotation = 90;
    range1.label.horizontalCenter = "right";
    range1.label.verticalCenter = "bottom";
    range1.label.fill = '#6c757d';

    var range2 = dateAxis.axisRanges.create();
    range2.date = new Date(2016, 1, 1);
    range2.grid.stroke = "#b3554d";
    range2.grid.strokeOpacity = 0.8;
    range2.grid.strokeDasharray = "5,2";
    range2.grid.strokeWidth = 2;

    var range5 = dateAxis.axisRanges.create();
    range5.date = new Date(2021, 1, 1);
    range5.grid.stroke = "#b3554d";
    range5.grid.strokeOpacity = 0.8;
    range5.grid.strokeDasharray = "5,2";
    range5.grid.strokeWidth = 2;

    range5.label.text = "2021";
    range5.label.inside = true;
    range5.label.rotation = 90;
    range5.label.horizontalCenter = "right";
    range5.label.verticalCenter = "bottom";
    range5.label.fill = '#6c757d';

    /*var range2 = dateAxis.axisRanges.create();
    range2.date = new Date(2011, 8, 8);
    range2.endDate = new Date(2012, 3, 4);
    range2.axisFill.fill = "#f7b6b0";
    range2.axisFill.fillOpacity = 0.4;*/

    var range3 = dateAxis.axisRanges.create();
    range3.date = new Date(2013, 11, 15);
    range3.endDate = new Date(2014, 6, 29);
    range3.axisFill.fill = "#f7b6b0";
    range3.axisFill.fillOpacity = 0.4;

    range3.label.text = "Brief Recession in early 2014";
    range3.label.inside = true;
    range3.label.rotation = 90;
    range3.label.horizontalCenter = "right";
    range3.label.verticalCenter = "bottom";
    range3.label.fill = '#6c757d';

    var range4 = dateAxis.axisRanges.create();
    range4.date = new Date(2015, 8, 31);
    range4.endDate = new Date(2016, 8, 7);
    range4.axisFill.fill = "#f7b6b0";
    range4.axisFill.fillOpacity = 0.4;

    range4.label.text = "Brief Recession in early 2016";
    range4.label.inside = true;
    range4.label.rotation = 90;
    range4.label.horizontalCenter = "right";
    range4.label.verticalCenter = "bottom";
    range4.label.fill = '#6c757d';

    /*var range1 = dateAxis.axisRanges.create();
    range1.date = new Date(2011, 1, 1);
    range1.endDate = new Date(2013, 12, 31);
    range1.axisFill.fill = "#6c757d";
    range1.axisFill.fillOpacity = 0.2;

    var range2 = dateAxis.axisRanges.create();
    range2.date = new Date(2015, 8, 24);
    range2.endDate = new Date(2016, 10, 2);
    range2.axisFill.fill = "#6c757d";
    range2.axisFill.fillOpacity = 0.2;*/


      // Create a horizontal scrollbar with previe and place it underneath the date axis
      //chart.scrollbarX = new am4charts.XYChartScrollbar();
      //chart.scrollbarX.series.push(series);
      //chart.scrollbarX = new am4core.Scrollbar();
      //chart.scrollbarX.parent = chart.bottomAxesContainer;
      
    //chart.legend = new am4charts.Legend();
      
    var title = chart.titles.create();
    title.text = "Centa-City Leading Index from 2000";
    title.align = "center"
    title.fill = '#6c757d'
    title.paddingBottom = 10;
    title.fontWeight = 600;
    title.fontSize = 20;
    title.marginTop = 10;
    title.marginBottom = 10;
    
    }); // end am4core.ready()