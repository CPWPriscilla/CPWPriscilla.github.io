am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_myTheme1);
    // Themes end

    am4core.options.onlyShowOnViewport = true;
    am4core.options.queue = false;
    
    // Create chart instance
    var chart = am4core.create("chartdivcpi", am4charts.XYChart);
    
    // Add data
    chart.data = [
      {
        "Time": "Jan 2000",
        "Index": 71.5,
        "Year-on-year % change": -5.3
      },
      {
        "Time": "Feb 2000",
        "Index": 71.4,
        "Year-on-year % change": -5.1
      },
      {
        "Time": "Mar 2000",
        "Index": 71.2,
        "Year-on-year % change": -5
      },
      {
        "Time": "Apr 2000",
        "Index": 71.2,
        "Year-on-year % change": -4.4
      },
      {
        "Time": "May 2000",
        "Index": 71.1,
        "Year-on-year % change": -4.5
      },
      {
        "Time": "Jun 2000",
        "Index": 70.8,
        "Year-on-year % change": -4.5
      },
      {
        "Time": "Jul 2000",
        "Index": 70.7,
        "Year-on-year % change": -3.2
      },
      {
        "Time": "Aug 2000",
        "Index": 70.5,
        "Year-on-year % change": -2.7
      },
      {
        "Time": "Sep 2000",
        "Index": 70.6,
        "Year-on-year % change": -2.6
      },
      {
        "Time": "Oct 2000",
        "Index": 70.6,
        "Year-on-year % change": -3.1
      },
      {
        "Time": "Nov 2000",
        "Index": 70.7,
        "Year-on-year % change": -2.3
      },
      {
        "Time": "Dec 2000",
        "Index": 70.5,
        "Year-on-year % change": -2.1
      },
      {
        "Time": "Jan 2001",
        "Index": 70.4,
        "Year-on-year % change": -1.5
      },
      {
        "Time": "Feb 2001",
        "Index": 69.7,
        "Year-on-year % change": -2.4
      },
      {
        "Time": "Mar 2001",
        "Index": 69.8,
        "Year-on-year % change": -1.9
      },
      {
        "Time": "Apr 2001",
        "Index": 70.2,
        "Year-on-year % change": -1.4
      },
      {
        "Time": "May 2001",
        "Index": 70,
        "Year-on-year % change": -1.5
      },
      {
        "Time": "Jun 2001",
        "Index": 70,
        "Year-on-year % change": -1.1
      },
      {
        "Time": "Jul 2001",
        "Index": 70.1,
        "Year-on-year % change": -0.9
      },
      {
        "Time": "Aug 2001",
        "Index": 69.7,
        "Year-on-year % change": -1.1
      },
      {
        "Time": "Sep 2001",
        "Index": 69.8,
        "Year-on-year % change": -1.2
      },
      {
        "Time": "Oct 2001",
        "Index": 69.7,
        "Year-on-year % change": -1.2
      },
      {
        "Time": "Nov 2001",
        "Index": 69.7,
        "Year-on-year % change": -1.4
      },
      {
        "Time": "Dec 2001",
        "Index": 68,
        "Year-on-year % change": -3.6
      },
      {
        "Time": "Jan 2002",
        "Index": 68,
        "Year-on-year % change": -3.5
      },
      {
        "Time": "Feb 2002",
        "Index": 68.1,
        "Year-on-year % change": -2.3
      },
      {
        "Time": "Mar 2002",
        "Index": 68.3,
        "Year-on-year % change": -2.2
      },
      {
        "Time": "Apr 2002",
        "Index": 68.1,
        "Year-on-year % change": -3.1
      },
      {
        "Time": "May 2002",
        "Index": 67.8,
        "Year-on-year % change": -3.1
      },
      {
        "Time": "Jun 2002",
        "Index": 67.7,
        "Year-on-year % change": -3.3
      },
      {
        "Time": "Jul 2002",
        "Index": 67.7,
        "Year-on-year % change": -3.4
      },
      {
        "Time": "Aug 2002",
        "Index": 67.5,
        "Year-on-year % change": -3.3
      },
      {
        "Time": "Sep 2002",
        "Index": 67.2,
        "Year-on-year % change": -3.7
      },
      {
        "Time": "Oct 2002",
        "Index": 67.2,
        "Year-on-year % change": -3.6
      },
      {
        "Time": "Nov 2002",
        "Index": 67.1,
        "Year-on-year % change": -3.6
      },
      {
        "Time": "Dec 2002",
        "Index": 66.9,
        "Year-on-year % change": -1.5
      },
      {
        "Time": "Jan 2003",
        "Index": 66.9,
        "Year-on-year % change": -1.6
      },
      {
        "Time": "Feb 2003",
        "Index": 66.7,
        "Year-on-year % change": -2
      },
      {
        "Time": "Mar 2003",
        "Index": 66.8,
        "Year-on-year % change": -2.1
      },
      {
        "Time": "Apr 2003",
        "Index": 66.9,
        "Year-on-year % change": -1.8
      },
      {
        "Time": "May 2003",
        "Index": 66.2,
        "Year-on-year % change": -2.5
      },
      {
        "Time": "Jun 2003",
        "Index": 65.6,
        "Year-on-year % change": -3.1
      },
      {
        "Time": "Jul 2003",
        "Index": 65,
        "Year-on-year % change": -4
      },
      {
        "Time": "Aug 2003",
        "Index": 64.9,
        "Year-on-year % change": -3.8
      },
      {
        "Time": "Sep 2003",
        "Index": 65,
        "Year-on-year % change": -3.2
      },
      {
        "Time": "Oct 2003",
        "Index": 65.4,
        "Year-on-year % change": -2.7
      },
      {
        "Time": "Nov 2003",
        "Index": 65.5,
        "Year-on-year % change": -2.4
      },
      {
        "Time": "Dec 2003",
        "Index": 65.7,
        "Year-on-year % change": -1.9
      },
      {
        "Time": "Jan 2004",
        "Index": 65.9,
        "Year-on-year % change": -1.5
      },
      {
        "Time": "Feb 2004",
        "Index": 65.4,
        "Year-on-year % change": -2
      },
      {
        "Time": "Mar 2004",
        "Index": 65.5,
        "Year-on-year % change": -2.1
      },
      {
        "Time": "Apr 2004",
        "Index": 65.8,
        "Year-on-year % change": -1.5
      },
      {
        "Time": "May 2004",
        "Index": 65.6,
        "Year-on-year % change": -0.9
      },
      {
        "Time": "Jun 2004",
        "Index": 65.5,
        "Year-on-year % change": -0.1
      },
      {
        "Time": "Jul 2004",
        "Index": 65.5,
        "Year-on-year % change": "+0.9"
      },
      {
        "Time": "Aug 2004",
        "Index": 65.4,
        "Year-on-year % change": "+0.8"
      },
      {
        "Time": "Sep 2004",
        "Index": 65.5,
        "Year-on-year % change": "+0.7"
      },
      {
        "Time": "Oct 2004",
        "Index": 65.8,
        "Year-on-year % change": "+0.2"
      },
      {
        "Time": "Nov 2004",
        "Index": 65.9,
        "Year-on-year % change": "+0.2"
      },
      {
        "Time": "Dec 2004",
        "Index": 65.9,
        "Year-on-year % change": "+0.2"
      },
      {
        "Time": "Jan 2005",
        "Index": 65.7,
        "Year-on-year % change": -0.5
      },
      {
        "Time": "Feb 2005",
        "Index": 65.9,
        "Year-on-year % change": "+0.8"
      },
      {
        "Time": "Mar 2005",
        "Index": 65.9,
        "Year-on-year % change": "+0.8"
      },
      {
        "Time": "Apr 2005",
        "Index": 66.1,
        "Year-on-year % change": "+0.5"
      },
      {
        "Time": "May 2005",
        "Index": 66,
        "Year-on-year % change": "+0.8"
      },
      {
        "Time": "Jun 2005",
        "Index": 66.2,
        "Year-on-year % change": "+1.2"
      },
      {
        "Time": "Jul 2005",
        "Index": 66.3,
        "Year-on-year % change": "+1.3"
      },
      {
        "Time": "Aug 2005",
        "Index": 66.2,
        "Year-on-year % change": "+1.4"
      },
      {
        "Time": "Sep 2005",
        "Index": 66.5,
        "Year-on-year % change": "+1.6"
      },
      {
        "Time": "Oct 2005",
        "Index": 66.6,
        "Year-on-year % change": "+1.3"
      },
      {
        "Time": "Nov 2005",
        "Index": 66.7,
        "Year-on-year % change": "+1.2"
      },
      {
        "Time": "Dec 2005",
        "Index": 66.8,
        "Year-on-year % change": "+1.3"
      },
      {
        "Time": "Jan 2006",
        "Index": 66.9,
        "Year-on-year % change": "+1.9"
      },
      {
        "Time": "Feb 2006",
        "Index": 66.7,
        "Year-on-year % change": "+1.2"
      },
      {
        "Time": "Mar 2006",
        "Index": 67,
        "Year-on-year % change": "+1.6"
      },
      {
        "Time": "Apr 2006",
        "Index": 67.3,
        "Year-on-year % change": "+1.9"
      },
      {
        "Time": "May 2006",
        "Index": 67.4,
        "Year-on-year % change": "+2.1"
      },
      {
        "Time": "Jun 2006",
        "Index": 67.6,
        "Year-on-year % change": "+2.2"
      },
      {
        "Time": "Jul 2006",
        "Index": 67.8,
        "Year-on-year % change": "+2.3"
      },
      {
        "Time": "Aug 2006",
        "Index": 67.8,
        "Year-on-year % change": "+2.5"
      },
      {
        "Time": "Sep 2006",
        "Index": 67.9,
        "Year-on-year % change": "+2.1"
      },
      {
        "Time": "Oct 2006",
        "Index": 68,
        "Year-on-year % change": "+2.0"
      },
      {
        "Time": "Nov 2006",
        "Index": 68.1,
        "Year-on-year % change": "+2.2"
      },
      {
        "Time": "Dec 2006",
        "Index": 68.3,
        "Year-on-year % change": "+2.3"
      },
      {
        "Time": "Jan 2007",
        "Index": 68.2,
        "Year-on-year % change": "+2.0"
      },
      {
        "Time": "Feb 2007",
        "Index": 67.3,
        "Year-on-year % change": "+0.8"
      },
      {
        "Time": "Mar 2007",
        "Index": 68.6,
        "Year-on-year % change": "+2.4"
      },
      {
        "Time": "Apr 2007",
        "Index": 68.2,
        "Year-on-year % change": "+1.3"
      },
      {
        "Time": "May 2007",
        "Index": 68.2,
        "Year-on-year % change": "+1.2"
      },
      {
        "Time": "Jun 2007",
        "Index": 68.5,
        "Year-on-year % change": "+1.3"
      },
      {
        "Time": "Jul 2007",
        "Index": 68.9,
        "Year-on-year % change": "+1.5"
      },
      {
        "Time": "Aug 2007",
        "Index": 68.9,
        "Year-on-year % change": "+1.6"
      },
      {
        "Time": "Sep 2007",
        "Index": 69,
        "Year-on-year % change": "+1.6"
      },
      {
        "Time": "Oct 2007",
        "Index": 70.1,
        "Year-on-year % change": "+3.2"
      },
      {
        "Time": "Nov 2007",
        "Index": 70.5,
        "Year-on-year % change": "+3.4"
      },
      {
        "Time": "Dec 2007",
        "Index": 70.9,
        "Year-on-year % change": "+3.8"
      },
      {
        "Time": "Jan 2008",
        "Index": 70.4,
        "Year-on-year % change": "+3.2"
      },
      {
        "Time": "Feb 2008",
        "Index": 71.5,
        "Year-on-year % change": "+6.3"
      },
      {
        "Time": "Mar 2008",
        "Index": 71.5,
        "Year-on-year % change": "+4.2"
      },
      {
        "Time": "Apr 2008",
        "Index": 71.9,
        "Year-on-year % change": "+5.4"
      },
      {
        "Time": "May 2008",
        "Index": 72.1,
        "Year-on-year % change": "+5.7"
      },
      {
        "Time": "Jun 2008",
        "Index": 72.7,
        "Year-on-year % change": "+6.1"
      },
      {
        "Time": "Jul 2008",
        "Index": 73.2,
        "Year-on-year % change": "+6.3"
      },
      {
        "Time": "Aug 2008",
        "Index": 72.1,
        "Year-on-year % change": "+4.6"
      },
      {
        "Time": "Sep 2008",
        "Index": 71.1,
        "Year-on-year % change": "+3.0"
      },
      {
        "Time": "Oct 2008",
        "Index": 71.4,
        "Year-on-year % change": "+1.8"
      },
      {
        "Time": "Nov 2008",
        "Index": 72.6,
        "Year-on-year % change": "+3.1"
      },
      {
        "Time": "Dec 2008",
        "Index": 72.4,
        "Year-on-year % change": "+2.1"
      },
      {
        "Time": "Jan 2009",
        "Index": 72.6,
        "Year-on-year % change": "+3.1"
      },
      {
        "Time": "Feb 2009",
        "Index": 72.1,
        "Year-on-year % change": "+0.8"
      },
      {
        "Time": "Mar 2009",
        "Index": 72.3,
        "Year-on-year % change": "+1.2"
      },
      {
        "Time": "Apr 2009",
        "Index": 72.3,
        "Year-on-year % change": "+0.6"
      },
      {
        "Time": "May 2009",
        "Index": 72.2,
        "Year-on-year % change": "0.0 [φ3]"
      },
      {
        "Time": "Jun 2009",
        "Index": 72.1,
        "Year-on-year % change": -0.9
      },
      {
        "Time": "Jul 2009",
        "Index": 72.1,
        "Year-on-year % change": -1.5
      },
      {
        "Time": "Aug 2009",
        "Index": 70.9,
        "Year-on-year % change": -1.6
      },
      {
        "Time": "Sep 2009",
        "Index": 71.4,
        "Year-on-year % change": "+0.5"
      },
      {
        "Time": "Oct 2009",
        "Index": 73.2,
        "Year-on-year % change": "+2.2"
      },
      {
        "Time": "Nov 2009",
        "Index": 73.2,
        "Year-on-year % change": "+0.5"
      },
      {
        "Time": "Dec 2009",
        "Index": 73.5,
        "Year-on-year % change": "+1.3"
      },
      {
        "Time": "Jan 2010",
        "Index": 73.5,
        "Year-on-year % change": "+1.0"
      },
      {
        "Time": "Feb 2010",
        "Index": 74.2,
        "Year-on-year % change": "+2.8"
      },
      {
        "Time": "Mar 2010",
        "Index": 73.9,
        "Year-on-year % change": "+2.0"
      },
      {
        "Time": "Apr 2010",
        "Index": 74.2,
        "Year-on-year % change": "+2.4"
      },
      {
        "Time": "May 2010",
        "Index": 74.1,
        "Year-on-year % change": "+2.5"
      },
      {
        "Time": "Jun 2010",
        "Index": 74.2,
        "Year-on-year % change": "+2.8"
      },
      {
        "Time": "Jul 2010",
        "Index": 72.5,
        "Year-on-year % change": "+1.3"
      },
      {
        "Time": "Aug 2010",
        "Index": 72.5,
        "Year-on-year % change": "+3.0"
      },
      {
        "Time": "Sep 2010",
        "Index": 72.8,
        "Year-on-year % change": "+2.6"
      },
      {
        "Time": "Oct 2010",
        "Index": 75,
        "Year-on-year % change": "+2.5"
      },
      {
        "Time": "Nov 2010",
        "Index": 75.2,
        "Year-on-year % change": "+2.8"
      },
      {
        "Time": "Dec 2010",
        "Index": 75.7,
        "Year-on-year % change": "+2.9"
      },
      {
        "Time": "Jan 2011",
        "Index": 76.1,
        "Year-on-year % change": "+3.4"
      },
      {
        "Time": "Feb 2011",
        "Index": 76.9,
        "Year-on-year % change": "+3.6"
      },
      {
        "Time": "Mar 2011",
        "Index": 77.1,
        "Year-on-year % change": "+4.4"
      },
      {
        "Time": "Apr 2011",
        "Index": 77.6,
        "Year-on-year % change": "+4.6"
      },
      {
        "Time": "May 2011",
        "Index": 78,
        "Year-on-year % change": "+5.2"
      },
      {
        "Time": "Jun 2011",
        "Index": 78.4,
        "Year-on-year % change": "+5.6"
      },
      {
        "Time": "Jul 2011",
        "Index": 78.3,
        "Year-on-year % change": "+7.9"
      },
      {
        "Time": "Aug 2011",
        "Index": 76.7,
        "Year-on-year % change": "+5.7"
      },
      {
        "Time": "Sep 2011",
        "Index": 77,
        "Year-on-year % change": "+5.8"
      },
      {
        "Time": "Oct 2011",
        "Index": 79.3,
        "Year-on-year % change": "+5.8"
      },
      {
        "Time": "Nov 2011",
        "Index": 79.5,
        "Year-on-year % change": "+5.7"
      },
      {
        "Time": "Dec 2011",
        "Index": 80,
        "Year-on-year % change": "+5.7"
      },
      {
        "Time": "Jan 2012",
        "Index": 80.7,
        "Year-on-year % change": "+6.1"
      },
      {
        "Time": "Feb 2012",
        "Index": 80.5,
        "Year-on-year % change": "+4.7"
      },
      {
        "Time": "Mar 2012",
        "Index": 80.9,
        "Year-on-year % change": "+4.9"
      },
      {
        "Time": "Apr 2012",
        "Index": 81.3,
        "Year-on-year % change": "+4.7"
      },
      {
        "Time": "May 2012",
        "Index": 81.3,
        "Year-on-year % change": "+4.3"
      },
      {
        "Time": "Jun 2012",
        "Index": 81.3,
        "Year-on-year % change": "+3.7"
      },
      {
        "Time": "Jul 2012",
        "Index": 79.6,
        "Year-on-year % change": "+1.6"
      },
      {
        "Time": "Aug 2012",
        "Index": 79.6,
        "Year-on-year % change": "+3.7"
      },
      {
        "Time": "Sep 2012",
        "Index": 79.9,
        "Year-on-year % change": "+3.8"
      },
      {
        "Time": "Oct 2012",
        "Index": 82.3,
        "Year-on-year % change": "+3.8"
      },
      {
        "Time": "Nov 2012",
        "Index": 82.5,
        "Year-on-year % change": "+3.7"
      },
      {
        "Time": "Dec 2012",
        "Index": 82.9,
        "Year-on-year % change": "+3.7"
      },
      {
        "Time": "Jan 2013",
        "Index": 83.1,
        "Year-on-year % change": "+3.0"
      },
      {
        "Time": "Feb 2013",
        "Index": 84,
        "Year-on-year % change": "+4.4"
      },
      {
        "Time": "Mar 2013",
        "Index": 83.8,
        "Year-on-year % change": "+3.6"
      },
      {
        "Time": "Apr 2013",
        "Index": 84.6,
        "Year-on-year % change": "+4.0"
      },
      {
        "Time": "May 2013",
        "Index": 84.5,
        "Year-on-year % change": "+3.9"
      },
      {
        "Time": "Jun 2013",
        "Index": 84.6,
        "Year-on-year % change": "+4.1"
      },
      {
        "Time": "Jul 2013",
        "Index": 85.1,
        "Year-on-year % change": "+6.9"
      },
      {
        "Time": "Aug 2013",
        "Index": 83.2,
        "Year-on-year % change": "+4.5"
      },
      {
        "Time": "Sep 2013",
        "Index": 83.6,
        "Year-on-year % change": "+4.6"
      },
      {
        "Time": "Oct 2013",
        "Index": 85.9,
        "Year-on-year % change": "+4.3"
      },
      {
        "Time": "Nov 2013",
        "Index": 86.1,
        "Year-on-year % change": "+4.3"
      },
      {
        "Time": "Dec 2013",
        "Index": 86.5,
        "Year-on-year % change": "+4.3"
      },
      {
        "Time": "Jan 2014",
        "Index": 86.9,
        "Year-on-year % change": "+4.6"
      },
      {
        "Time": "Feb 2014",
        "Index": 87.3,
        "Year-on-year % change": "+3.9"
      },
      {
        "Time": "Mar 2014",
        "Index": 87.1,
        "Year-on-year % change": "+3.9"
      },
      {
        "Time": "Apr 2014",
        "Index": 87.7,
        "Year-on-year % change": "+3.7"
      },
      {
        "Time": "May 2014",
        "Index": 87.6,
        "Year-on-year % change": "+3.7"
      },
      {
        "Time": "Jun 2014",
        "Index": 87.7,
        "Year-on-year % change": "+3.6"
      },
      {
        "Time": "Jul 2014",
        "Index": 88.5,
        "Year-on-year % change": "+4.0"
      },
      {
        "Time": "Aug 2014",
        "Index": 86.5,
        "Year-on-year % change": "+3.9"
      },
      {
        "Time": "Sep 2014",
        "Index": 89.1,
        "Year-on-year % change": "+6.6"
      },
      {
        "Time": "Oct 2014",
        "Index": 90.3,
        "Year-on-year % change": "+5.2"
      },
      {
        "Time": "Nov 2014",
        "Index": 90.5,
        "Year-on-year % change": "+5.1"
      },
      {
        "Time": "Dec 2014",
        "Index": 90.7,
        "Year-on-year % change": "+4.9"
      },
      {
        "Time": "Jan 2015",
        "Index": 90.4,
        "Year-on-year % change": "+4.1"
      },
      {
        "Time": "Feb 2015",
        "Index": 91.2,
        "Year-on-year % change": "+4.6"
      },
      {
        "Time": "Mar 2015",
        "Index": 90.9,
        "Year-on-year % change": "+4.5"
      },
      {
        "Time": "Apr 2015",
        "Index": 90.2,
        "Year-on-year % change": "+2.8"
      },
      {
        "Time": "May 2015",
        "Index": 90.2,
        "Year-on-year % change": "+3.0"
      },
      {
        "Time": "Jun 2015",
        "Index": 90.3,
        "Year-on-year % change": "+3.1"
      },
      {
        "Time": "Jul 2015",
        "Index": 90.8,
        "Year-on-year % change": "+2.5"
      },
      {
        "Time": "Aug 2015",
        "Index": 89.1,
        "Year-on-year % change": "+2.4"
      },
      {
        "Time": "Sep 2015",
        "Index": 90.9,
        "Year-on-year % change": "+2.0"
      },
      {
        "Time": "Oct 2015",
        "Index": 92.3,
        "Year-on-year % change": "+2.3"
      },
      {
        "Time": "Nov 2015",
        "Index": 92.5,
        "Year-on-year % change": "+2.3"
      },
      {
        "Time": "Dec 2015",
        "Index": 92.8,
        "Year-on-year % change": "+2.4"
      },
      {
        "Time": "Jan 2016",
        "Index": 92.7,
        "Year-on-year % change": "+2.5"
      },
      {
        "Time": "Feb 2016",
        "Index": 93.9,
        "Year-on-year % change": "+3.0"
      },
      {
        "Time": "Mar 2016",
        "Index": 93.5,
        "Year-on-year % change": "+2.9"
      },
      {
        "Time": "Apr 2016",
        "Index": 92.6,
        "Year-on-year % change": "+2.7"
      },
      {
        "Time": "May 2016",
        "Index": 92.5,
        "Year-on-year % change": "+2.6"
      },
      {
        "Time": "Jun 2016",
        "Index": 92.5,
        "Year-on-year % change": "+2.4"
      },
      {
        "Time": "Jul 2016",
        "Index": 92.9,
        "Year-on-year % change": "+2.3"
      },
      {
        "Time": "Aug 2016",
        "Index": 93,
        "Year-on-year % change": "+4.3"
      },
      {
        "Time": "Sep 2016",
        "Index": 93.3,
        "Year-on-year % change": "+2.7"
      },
      {
        "Time": "Oct 2016",
        "Index": 93.4,
        "Year-on-year % change": "+1.2"
      },
      {
        "Time": "Nov 2016",
        "Index": 93.7,
        "Year-on-year % change": "+1.2"
      },
      {
        "Time": "Dec 2016",
        "Index": 93.9,
        "Year-on-year % change": "+1.2"
      },
      {
        "Time": "Jan 2017",
        "Index": 93.9,
        "Year-on-year % change": "+1.3"
      },
      {
        "Time": "Feb 2017",
        "Index": 93.8,
        "Year-on-year % change": -0.1
      },
      {
        "Time": "Mar 2017",
        "Index": 94,
        "Year-on-year % change": "+0.5"
      },
      {
        "Time": "Apr 2017",
        "Index": 94.5,
        "Year-on-year % change": "+2.0"
      },
      {
        "Time": "May 2017",
        "Index": 94.4,
        "Year-on-year % change": "+2.0"
      },
      {
        "Time": "Jun 2017",
        "Index": 94.3,
        "Year-on-year % change": "+1.9"
      },
      {
        "Time": "Jul 2017",
        "Index": 94.7,
        "Year-on-year % change": "+2.0"
      },
      {
        "Time": "Aug 2017",
        "Index": 94.8,
        "Year-on-year % change": "+1.9"
      },
      {
        "Time": "Sep 2017",
        "Index": 94.6,
        "Year-on-year % change": "+1.4"
      },
      {
        "Time": "Oct 2017",
        "Index": 94.9,
        "Year-on-year % change": "+1.5"
      },
      {
        "Time": "Nov 2017",
        "Index": 95.2,
        "Year-on-year % change": "+1.6"
      },
      {
        "Time": "Dec 2017",
        "Index": 95.5,
        "Year-on-year % change": "+1.7"
      },
      {
        "Time": "Jan 2018",
        "Index": 95.5,
        "Year-on-year % change": "+1.7"
      },
      {
        "Time": "Feb 2018",
        "Index": 96.7,
        "Year-on-year % change": "+3.1"
      },
      {
        "Time": "Mar 2018",
        "Index": 96.4,
        "Year-on-year % change": "+2.6"
      },
      {
        "Time": "Apr 2018",
        "Index": 96.3,
        "Year-on-year % change": "+1.9"
      },
      {
        "Time": "May 2018",
        "Index": 96.4,
        "Year-on-year % change": "+2.1"
      },
      {
        "Time": "Jun 2018",
        "Index": 96.6,
        "Year-on-year % change": "+2.4"
      },
      {
        "Time": "Jul 2018",
        "Index": 96.9,
        "Year-on-year % change": "+2.4"
      },
      {
        "Time": "Aug 2018",
        "Index": 97,
        "Year-on-year % change": "+2.3"
      },
      {
        "Time": "Sep 2018",
        "Index": 97.2,
        "Year-on-year % change": "+2.7"
      },
      {
        "Time": "Oct 2018",
        "Index": 97.4,
        "Year-on-year % change": "+2.7"
      },
      {
        "Time": "Nov 2018",
        "Index": 97.6,
        "Year-on-year % change": "+2.6"
      },
      {
        "Time": "Dec 2018",
        "Index": 97.9,
        "Year-on-year % change": "+2.5"
      },
      {
        "Time": "Jan 2019",
        "Index": 97.8,
        "Year-on-year % change": "+2.4"
      },
      {
        "Time": "Feb 2019",
        "Index": 98.7,
        "Year-on-year % change": "+2.1"
      },
      {
        "Time": "Mar 2019",
        "Index": 98.4,
        "Year-on-year % change": "+2.1"
      },
      {
        "Time": "Apr 2019",
        "Index": 99.1,
        "Year-on-year % change": "+2.9"
      },
      {
        "Time": "May 2019",
        "Index": 99,
        "Year-on-year % change": "+2.8"
      },
      {
        "Time": "Jun 2019",
        "Index": 99.7,
        "Year-on-year % change": "+3.3"
      },
      {
        "Time": "Jul 2019",
        "Index": 100.1,
        "Year-on-year % change": "+3.3"
      },
      {
        "Time": "Aug 2019",
        "Index": 100.3,
        "Year-on-year % change": "+3.5"
      },
      {
        "Time": "Sep 2019",
        "Index": 100.3,
        "Year-on-year % change": "+3.2"
      },
      {
        "Time": "Oct 2019",
        "Index": 100.6,
        "Year-on-year % change": "+3.1"
      },
      {
        "Time": "Nov 2019",
        "Index": 100.7,
        "Year-on-year % change": "+3.0"
      },
      {
        "Time": "Dec 2019",
        "Index": 100.7,
        "Year-on-year % change": "+2.9"
      },
      {
        "Time": "Jan 2020",
        "Index": 98.5,
        "Year-on-year % change": "+1.4"
      },
      {
        "Time": "Feb 2020",
        "Index": 101,
        "Year-on-year % change": "+2.2"
      },
      {
        "Time": "Mar 2020",
        "Index": 100.9,
        "Year-on-year % change": "+2.3"
      },
      {
        "Time": "Apr 2020",
        "Index": 101,
        "Year-on-year % change": "+1.9"
      },
      {
        "Time": "May 2020",
        "Index": 100.7,
        "Year-on-year % change": "+1.5"
      },
      {
        "Time": "Jun 2020",
        "Index": 100.6,
        "Year-on-year % change": "+0.7"
      },
      {
        "Time": "Jul 2020",
        "Index": 97.7,
        "Year-on-year % change": -2.3
      },
      {
        "Time": "Aug 2020",
        "Index": 99.9,
        "Year-on-year % change": -0.4
      },
      {
        "Time": "Sep 2020",
        "Index": 97.8,
        "Year-on-year % change": -2.2
      },
      {
        "Time": "Oct 2020",
        "Index": 100.2,
        "Year-on-year % change": -0.4
      },
      {
        "Time": "Nov 2020",
        "Index": 100.3,
        "Year-on-year % change": -0.3
      },
      {
        "Time": "Dec 2020",
        "Index": 99.8,
        "Year-on-year % change": -1
      },
      {
        "Time": "Jan 2021",
        "Index": 101.1,
        "Year-on-year % change": "+2.6"
      },
      {
        "Time": "Feb 2021",
        "Index": 101.4,
        "Year-on-year % change": "+0.5"
      },
      {
        "Time": "Mar 2021",
        "Index": 101.5,
        "Year-on-year % change": "+0.6"
      },
      {
        "Time": "Apr 2021",
        "Index": 101.8,
        "Year-on-year % change": "+0.8"
      },
      {
        "Time": "May 2021",
        "Index": 101.6,
        "Year-on-year % change": "+1.0"
      },
      {
        "Time": "Jun 2021",
        "Index": 101.3,
        "Year-on-year % change": "+0.7"
      },
      {
        "Time": "Jul 2021",
        "Index": 101.4,
        "Year-on-year % change": "+3.7"
      },
      {
        "Time": "Aug 2021",
        "Index": 101.5,
        "Year-on-year % change": "+1.6"
      },
      {
        "Time": "Sep 2021",
        "Index": 99.2,
        "Year-on-year % change": "+1.4"
      },
      {
        "Time": "Oct 2021",
        "Index": 102,
        "Year-on-year % change": "+1.7"
      },
      {
        "Time": "Nov 2021",
        "Index": 102.2,
        "Year-on-year % change": "+1.8"
      },
      {
        "Time": "Dec 2021",
        "Index": 102.2,
        "Year-on-year % change": "+2.4"
      },
      {
        "Time": "Jan 2022",
        "Index": 102.3,
        "Year-on-year % change": "+1.2"
      },
      {
        "Time": "Feb 2022",
        "Index": 103.1,
        "Year-on-year % change": "+1.6"
      },
      {
        "Time": "Mar 2022",
        "Index": 103.3,
        "Year-on-year % change": "+1.7"
      },
      {
        "Time": "Apr 2022",
        "Index": 103.1,
        "Year-on-year % change": "+1.3"
      },
      {
        "Time": "May 2022",
        "Index": 102.9,
        "Year-on-year % change": "+1.2"
      },
      {
        "Time": "Jun 2022",
        "Index": 103.2,
        "Year-on-year % change": "+1.8"
      },
      {
        "Time": "Jul 2022",
        "Index": 103.3,
        "Year-on-year % change": "+1.9"
      },
      {
        "Time": "Aug 2022",
        "Index": 103.4,
        "Year-on-year % change": "+1.9"
      },
      {
        "Time": "Sep 2022",
        "Index": 103.5,
        "Year-on-year % change": "+4.4"
      },
      {
        "Time": "Oct 2022",
        "Index": 103.8,
        "Year-on-year % change": "+1.8"
      }
    ];
  
      chart.data.forEach(function (o) {
      
        o.Category = "" + o.Category;
        o["Index"] = o["Index"] || undefined;
        o["Year-on-year % change"] = o["Year-on-year % change"] || undefined;
    });
  
    chart.events.on("ready", function () {
      dateAxis.zoom({ start: 0, end: 1 });
    });
    
    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
    
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  
    ["Index",
    "Year-on-year % change"
    ].forEach(function (elem) {

  
    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = elem;
    series.tooltipText = elem + "\n({Time})\n[bold font-size: 20]{valueY}"
    series.dataFields.dateX = "Time";
    series.strokeWidth = 2;
    series.minBulletDistance = 15;

    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "middle";
    series.tooltip.label.textValign = "middle";
    series.tooltip.background.fillOpacity = 0.3;

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

    chart.zoomOutButton.background.fill = am4core.color("#F8D9D6");
    chart.zoomOutButton.icon.stroke = am4core.color("#fff");
    chart.zoomOutButton.icon.strokeWidth = 2;
    chart.zoomOutButton.background.states.getKey("hover").properties.fill = am4core.color("#f7b6b0");
    chart.zoomOutButton.background.states.getKey("down").properties.fill = am4core.color("#f7b6b0");
    
    dateAxis.start = 0;
    dateAxis.keepSelection = true;
    
    });
      
    chart.legend = new am4charts.Legend();

    var title = chart.titles.create();
    title.text = "Consumer Price Indices";
    title.align = "center"
    title.fill = '#6c757d'
    title.paddingBottom = 10;
    title.fontWeight = 600;
    title.fontSize = 20;
    title.marginTop = 10;
    title.marginBottom = 10;
    
    }); // end am4core.ready()