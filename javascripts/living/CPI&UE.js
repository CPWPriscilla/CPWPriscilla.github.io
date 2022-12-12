am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  am4core.useTheme(am4themes_myTheme1);
  // Themes end

  am4core.options.onlyShowOnViewport = true;
  
  // Create chart instance
  var chart = am4core.create("chartdivcpiue", am4charts.XYChart);
  
  // Add data
  chart.data = [
    {
      "Chartdate": "01/01/2000",
      "UE Year/Period": "1/2000 - 3/2000",
      "Unemployment rate (seasonally adjusted) (%)": 5.6,
      "CPI Time": "Jan 2000",
      "CPI Index": 71.5,
      "CPI Year-on-year % change": -5.3
    },
    {
      "Chartdate": "01/02/2000",
      "UE Year/Period": "2/2000 - 4/2000",
      "Unemployment rate (seasonally adjusted) (%)": 5.3,
      "CPI Time": "Feb 2000",
      "CPI Index": 71.4,
      "CPI Year-on-year % change": -5.1
    },
    {
      "Chartdate": "01/03/2000",
      "UE Year/Period": "3/2000 - 5/2000",
      "Unemployment rate (seasonally adjusted) (%)": 5.1,
      "CPI Time": "Mar 2000",
      "CPI Index": 71.2,
      "CPI Year-on-year % change": -5
    },
    {
      "Chartdate": "01/04/2000",
      "UE Year/Period": "4/2000 - 6/2000",
      "Unemployment rate (seasonally adjusted) (%)": 5.1,
      "CPI Time": "Apr 2000",
      "CPI Index": 71.2,
      "CPI Year-on-year % change": -4.4
    },
    {
      "Chartdate": "01/05/2000",
      "UE Year/Period": "5/2000 - 7/2000",
      "Unemployment rate (seasonally adjusted) (%)": 5,
      "CPI Time": "May 2000",
      "CPI Index": 71.1,
      "CPI Year-on-year % change": -4.5
    },
    {
      "Chartdate": "01/06/2000",
      "UE Year/Period": "6/2000 - 8/2000",
      "Unemployment rate (seasonally adjusted) (%)": 4.9,
      "CPI Time": "Jun 2000",
      "CPI Index": 70.8,
      "CPI Year-on-year % change": -4.5
    },
    {
      "Chartdate": "01/07/2000",
      "UE Year/Period": "7/2000 - 9/2000",
      "Unemployment rate (seasonally adjusted) (%)": 4.8,
      "CPI Time": "Jul 2000",
      "CPI Index": 70.7,
      "CPI Year-on-year % change": -3.2
    },
    {
      "Chartdate": "01/08/2000",
      "UE Year/Period": "8/2000 - 10/2000",
      "Unemployment rate (seasonally adjusted) (%)": 4.7,
      "CPI Time": "Aug 2000",
      "CPI Index": 70.5,
      "CPI Year-on-year % change": -2.7
    },
    {
      "Chartdate": "01/09/2000",
      "UE Year/Period": "9/2000 - 11/2000",
      "Unemployment rate (seasonally adjusted) (%)": 4.5,
      "CPI Time": "Sep 2000",
      "CPI Index": 70.6,
      "CPI Year-on-year % change": -2.6
    },
    {
      "Chartdate": "01/10/2000",
      "UE Year/Period": "10/2000 - 12/2000",
      "Unemployment rate (seasonally adjusted) (%)": 4.4,
      "CPI Time": "Oct 2000",
      "CPI Index": 70.6,
      "CPI Year-on-year % change": -3.1
    },
    {
      "Chartdate": "01/11/2000",
      "UE Year/Period": "11/2000 - 1/2001",
      "Unemployment rate (seasonally adjusted) (%)": 4.4,
      "CPI Time": "Nov 2000",
      "CPI Index": 70.7,
      "CPI Year-on-year % change": -2.3
    },
    {
      "Chartdate": "01/12/2000",
      "UE Year/Period": "12/2000 - 2/2001",
      "Unemployment rate (seasonally adjusted) (%)": 4.5,
      "CPI Time": "Dec 2000",
      "CPI Index": 70.5,
      "CPI Year-on-year % change": -2.1
    },
    {
      "Chartdate": "01/01/2001",
      "UE Year/Period": "1/2001 - 3/2001",
      "Unemployment rate (seasonally adjusted) (%)": 4.5,
      "CPI Time": "Jan 2001",
      "CPI Index": 70.4,
      "CPI Year-on-year % change": -1.5
    },
    {
      "Chartdate": "01/02/2001",
      "UE Year/Period": "2/2001 - 4/2001",
      "Unemployment rate (seasonally adjusted) (%)": 4.5,
      "CPI Time": "Feb 2001",
      "CPI Index": 69.7,
      "CPI Year-on-year % change": -2.4
    },
    {
      "Chartdate": "01/03/2001",
      "UE Year/Period": "3/2001 - 5/2001",
      "Unemployment rate (seasonally adjusted) (%)": 4.5,
      "CPI Time": "Mar 2001",
      "CPI Index": 69.8,
      "CPI Year-on-year % change": -1.9
    },
    {
      "Chartdate": "01/04/2001",
      "UE Year/Period": "4/2001 - 6/2001",
      "Unemployment rate (seasonally adjusted) (%)": 4.5,
      "CPI Time": "Apr 2001",
      "CPI Index": 70.2,
      "CPI Year-on-year % change": -1.4
    },
    {
      "Chartdate": "01/05/2001",
      "UE Year/Period": "5/2001 - 7/2001",
      "Unemployment rate (seasonally adjusted) (%)": 4.5,
      "CPI Time": "May 2001",
      "CPI Index": 70,
      "CPI Year-on-year % change": -1.5
    },
    {
      "Chartdate": "01/06/2001",
      "UE Year/Period": "6/2001 - 8/2001",
      "Unemployment rate (seasonally adjusted) (%)": 4.8,
      "CPI Time": "Jun 2001",
      "CPI Index": 70,
      "CPI Year-on-year % change": -1.1
    },
    {
      "Chartdate": "01/07/2001",
      "UE Year/Period": "7/2001 - 9/2001",
      "Unemployment rate (seasonally adjusted) (%)": 5.2,
      "CPI Time": "Jul 2001",
      "CPI Index": 70.1,
      "CPI Year-on-year % change": -0.9
    },
    {
      "Chartdate": "01/08/2001",
      "UE Year/Period": "8/2001 - 10/2001",
      "Unemployment rate (seasonally adjusted) (%)": 5.5,
      "CPI Time": "Aug 2001",
      "CPI Index": 69.7,
      "CPI Year-on-year % change": -1.1
    },
    {
      "Chartdate": "01/09/2001",
      "UE Year/Period": "9/2001 - 11/2001",
      "Unemployment rate (seasonally adjusted) (%)": 6,
      "CPI Time": "Sep 2001",
      "CPI Index": 69.8,
      "CPI Year-on-year % change": -1.2
    },
    {
      "Chartdate": "01/10/2001",
      "UE Year/Period": "10/2001 - 12/2001",
      "Unemployment rate (seasonally adjusted) (%)": 6.3,
      "CPI Time": "Oct 2001",
      "CPI Index": 69.7,
      "CPI Year-on-year % change": -1.2
    },
    {
      "Chartdate": "01/11/2001",
      "UE Year/Period": "11/2001 - 1/2002",
      "Unemployment rate (seasonally adjusted) (%)": 6.7,
      "CPI Time": "Nov 2001",
      "CPI Index": 69.7,
      "CPI Year-on-year % change": -1.4
    },
    {
      "Chartdate": "01/12/2001",
      "UE Year/Period": "12/2001 - 2/2002",
      "Unemployment rate (seasonally adjusted) (%)": 6.8,
      "CPI Time": "Dec 2001",
      "CPI Index": 68,
      "CPI Year-on-year % change": -3.6
    },
    {
      "Chartdate": "01/01/2002",
      "UE Year/Period": "1/2002 - 3/2002",
      "Unemployment rate (seasonally adjusted) (%)": 7,
      "CPI Time": "Jan 2002",
      "CPI Index": 68,
      "CPI Year-on-year % change": -3.5
    },
    {
      "Chartdate": "01/02/2002",
      "UE Year/Period": "2/2002 - 4/2002",
      "Unemployment rate (seasonally adjusted) (%)": 7.1,
      "CPI Time": "Feb 2002",
      "CPI Index": 68.1,
      "CPI Year-on-year % change": -2.3
    },
    {
      "Chartdate": "01/03/2002",
      "UE Year/Period": "3/2002 - 5/2002",
      "Unemployment rate (seasonally adjusted) (%)": 7.3,
      "CPI Time": "Mar 2002",
      "CPI Index": 68.3,
      "CPI Year-on-year % change": -2.2
    },
    {
      "Chartdate": "01/04/2002",
      "UE Year/Period": "4/2002 - 6/2002",
      "Unemployment rate (seasonally adjusted) (%)": 7.5,
      "CPI Time": "Apr 2002",
      "CPI Index": 68.1,
      "CPI Year-on-year % change": -3.1
    },
    {
      "Chartdate": "01/05/2002",
      "UE Year/Period": "5/2002 - 7/2002",
      "Unemployment rate (seasonally adjusted) (%)": 7.5,
      "CPI Time": "May 2002",
      "CPI Index": 67.8,
      "CPI Year-on-year % change": -3.1
    },
    {
      "Chartdate": "01/06/2002",
      "UE Year/Period": "6/2002 - 8/2002",
      "Unemployment rate (seasonally adjusted) (%)": 7.4,
      "CPI Time": "Jun 2002",
      "CPI Index": 67.7,
      "CPI Year-on-year % change": -3.3
    },
    {
      "Chartdate": "01/07/2002",
      "UE Year/Period": "7/2002 - 9/2002",
      "Unemployment rate (seasonally adjusted) (%)": 7.3,
      "CPI Time": "Jul 2002",
      "CPI Index": 67.7,
      "CPI Year-on-year % change": -3.4
    },
    {
      "Chartdate": "01/08/2002",
      "UE Year/Period": "8/2002 - 10/2002",
      "Unemployment rate (seasonally adjusted) (%)": 7.3,
      "CPI Time": "Aug 2002",
      "CPI Index": 67.5,
      "CPI Year-on-year % change": -3.3
    },
    {
      "Chartdate": "01/09/2002",
      "UE Year/Period": "9/2002 - 11/2002",
      "Unemployment rate (seasonally adjusted) (%)": 7.3,
      "CPI Time": "Sep 2002",
      "CPI Index": 67.2,
      "CPI Year-on-year % change": -3.7
    },
    {
      "Chartdate": "01/10/2002",
      "UE Year/Period": "10/2002 - 12/2002",
      "Unemployment rate (seasonally adjusted) (%)": 7.4,
      "CPI Time": "Oct 2002",
      "CPI Index": 67.2,
      "CPI Year-on-year % change": -3.6
    },
    {
      "Chartdate": "01/11/2002",
      "UE Year/Period": "11/2002 - 1/2003",
      "Unemployment rate (seasonally adjusted) (%)": 7.4,
      "CPI Time": "Nov 2002",
      "CPI Index": 67.1,
      "CPI Year-on-year % change": -3.6
    },
    {
      "Chartdate": "01/12/2002",
      "UE Year/Period": "12/2002 - 2/2003",
      "Unemployment rate (seasonally adjusted) (%)": 7.6,
      "CPI Time": "Dec 2002",
      "CPI Index": 66.9,
      "CPI Year-on-year % change": -1.5
    },
    {
      "Chartdate": "01/01/2003",
      "UE Year/Period": "1/2003 - 3/2003",
      "Unemployment rate (seasonally adjusted) (%)": 7.5,
      "CPI Time": "Jan 2003",
      "CPI Index": 66.9,
      "CPI Year-on-year % change": -1.6
    },
    {
      "Chartdate": "01/02/2003",
      "UE Year/Period": "2/2003 - 4/2003",
      "Unemployment rate (seasonally adjusted) (%)": 7.8,
      "CPI Time": "Feb 2003",
      "CPI Index": 66.7,
      "CPI Year-on-year % change": -2
    },
    {
      "Chartdate": "01/03/2003",
      "UE Year/Period": "3/2003 - 5/2003",
      "Unemployment rate (seasonally adjusted) (%)": 8.2,
      "CPI Time": "Mar 2003",
      "CPI Index": 66.8,
      "CPI Year-on-year % change": -2.1
    },
    {
      "Chartdate": "01/04/2003",
      "UE Year/Period": "4/2003 - 6/2003",
      "Unemployment rate (seasonally adjusted) (%)": 8.5,
      "CPI Time": "Apr 2003",
      "CPI Index": 66.9,
      "CPI Year-on-year % change": -1.8
    },
    {
      "Chartdate": "01/05/2003",
      "UE Year/Period": "5/2003 - 7/2003",
      "Unemployment rate (seasonally adjusted) (%)": 8.4,
      "CPI Time": "May 2003",
      "CPI Index": 66.2,
      "CPI Year-on-year % change": -2.5
    },
    {
      "Chartdate": "01/06/2003",
      "UE Year/Period": "6/2003 - 8/2003",
      "Unemployment rate (seasonally adjusted) (%)": 8.4,
      "CPI Time": "Jun 2003",
      "CPI Index": 65.6,
      "CPI Year-on-year % change": -3.1
    },
    {
      "Chartdate": "01/07/2003",
      "UE Year/Period": "7/2003 - 9/2003",
      "Unemployment rate (seasonally adjusted) (%)": 8.2,
      "CPI Time": "Jul 2003",
      "CPI Index": 65,
      "CPI Year-on-year % change": -4
    },
    {
      "Chartdate": "01/08/2003",
      "UE Year/Period": "8/2003 - 10/2003",
      "Unemployment rate (seasonally adjusted) (%)": 8,
      "CPI Time": "Aug 2003",
      "CPI Index": 64.9,
      "CPI Year-on-year % change": -3.8
    },
    {
      "Chartdate": "01/09/2003",
      "UE Year/Period": "9/2003 - 11/2003",
      "Unemployment rate (seasonally adjusted) (%)": 7.6,
      "CPI Time": "Sep 2003",
      "CPI Index": 65,
      "CPI Year-on-year % change": -3.2
    },
    {
      "Chartdate": "01/10/2003",
      "UE Year/Period": "10/2003 - 12/2003",
      "Unemployment rate (seasonally adjusted) (%)": 7.5,
      "CPI Time": "Oct 2003",
      "CPI Index": 65.4,
      "CPI Year-on-year % change": -2.7
    },
    {
      "Chartdate": "01/11/2003",
      "UE Year/Period": "11/2003 - 1/2004",
      "Unemployment rate (seasonally adjusted) (%)": 7.5,
      "CPI Time": "Nov 2003",
      "CPI Index": 65.5,
      "CPI Year-on-year % change": -2.4
    },
    {
      "Chartdate": "01/12/2003",
      "UE Year/Period": "12/2003 - 2/2004",
      "Unemployment rate (seasonally adjusted) (%)": 7.3,
      "CPI Time": "Dec 2003",
      "CPI Index": 65.7,
      "CPI Year-on-year % change": -1.9
    },
    {
      "Chartdate": "01/01/2004",
      "UE Year/Period": "1/2004 - 3/2004",
      "Unemployment rate (seasonally adjusted) (%)": 7.2,
      "CPI Time": "Jan 2004",
      "CPI Index": 65.9,
      "CPI Year-on-year % change": -1.5
    },
    {
      "Chartdate": "01/02/2004",
      "UE Year/Period": "2/2004 - 4/2004",
      "Unemployment rate (seasonally adjusted) (%)": 7.1,
      "CPI Time": "Feb 2004",
      "CPI Index": 65.4,
      "CPI Year-on-year % change": -2
    },
    {
      "Chartdate": "01/03/2004",
      "UE Year/Period": "3/2004 - 5/2004",
      "Unemployment rate (seasonally adjusted) (%)": 6.9,
      "CPI Time": "Mar 2004",
      "CPI Index": 65.5,
      "CPI Year-on-year % change": -2.1
    },
    {
      "Chartdate": "01/04/2004",
      "UE Year/Period": "4/2004 - 6/2004",
      "Unemployment rate (seasonally adjusted) (%)": 6.7,
      "CPI Time": "Apr 2004",
      "CPI Index": 65.8,
      "CPI Year-on-year % change": -1.5
    },
    {
      "Chartdate": "01/05/2004",
      "UE Year/Period": "5/2004 - 7/2004",
      "Unemployment rate (seasonally adjusted) (%)": 6.6,
      "CPI Time": "May 2004",
      "CPI Index": 65.6,
      "CPI Year-on-year % change": -0.9
    },
    {
      "Chartdate": "01/06/2004",
      "UE Year/Period": "6/2004 - 8/2004",
      "Unemployment rate (seasonally adjusted) (%)": 6.6,
      "CPI Time": "Jun 2004",
      "CPI Index": 65.5,
      "CPI Year-on-year % change": -0.1
    },
    {
      "Chartdate": "01/07/2004",
      "UE Year/Period": "7/2004 - 9/2004",
      "Unemployment rate (seasonally adjusted) (%)": 6.7,
      "CPI Time": "Jul 2004",
      "CPI Index": 65.5,
      "CPI Year-on-year % change": "+0.9"
    },
    {
      "Chartdate": "01/08/2004",
      "UE Year/Period": "8/2004 - 10/2004",
      "Unemployment rate (seasonally adjusted) (%)": 6.7,
      "CPI Time": "Aug 2004",
      "CPI Index": 65.4,
      "CPI Year-on-year % change": "+0.8"
    },
    {
      "Chartdate": "01/09/2004",
      "UE Year/Period": "9/2004 - 11/2004",
      "Unemployment rate (seasonally adjusted) (%)": 6.7,
      "CPI Time": "Sep 2004",
      "CPI Index": 65.5,
      "CPI Year-on-year % change": "+0.7"
    },
    {
      "Chartdate": "01/10/2004",
      "UE Year/Period": "10/2004 - 12/2004",
      "Unemployment rate (seasonally adjusted) (%)": 6.6,
      "CPI Time": "Oct 2004",
      "CPI Index": 65.8,
      "CPI Year-on-year % change": "+0.2"
    },
    {
      "Chartdate": "01/11/2004",
      "UE Year/Period": "11/2004 - 1/2005",
      "Unemployment rate (seasonally adjusted) (%)": 6.4,
      "CPI Time": "Nov 2004",
      "CPI Index": 65.9,
      "CPI Year-on-year % change": "+0.2"
    },
    {
      "Chartdate": "01/12/2004",
      "UE Year/Period": "12/2004 - 2/2005",
      "Unemployment rate (seasonally adjusted) (%)": 6.1,
      "CPI Time": "Dec 2004",
      "CPI Index": 65.9,
      "CPI Year-on-year % change": "+0.2"
    },
    {
      "Chartdate": "01/01/2005",
      "UE Year/Period": "1/2005 - 3/2005",
      "Unemployment rate (seasonally adjusted) (%)": 6,
      "CPI Time": "Jan 2005",
      "CPI Index": 65.7,
      "CPI Year-on-year % change": -0.5
    },
    {
      "Chartdate": "01/02/2005",
      "UE Year/Period": "2/2005 - 4/2005",
      "Unemployment rate (seasonally adjusted) (%)": 5.9,
      "CPI Time": "Feb 2005",
      "CPI Index": 65.9,
      "CPI Year-on-year % change": "+0.8"
    },
    {
      "Chartdate": "01/03/2005",
      "UE Year/Period": "3/2005 - 5/2005",
      "Unemployment rate (seasonally adjusted) (%)": 5.7,
      "CPI Time": "Mar 2005",
      "CPI Index": 65.9,
      "CPI Year-on-year % change": "+0.8"
    },
    {
      "Chartdate": "01/04/2005",
      "UE Year/Period": "4/2005 - 6/2005",
      "Unemployment rate (seasonally adjusted) (%)": 5.7,
      "CPI Time": "Apr 2005",
      "CPI Index": 66.1,
      "CPI Year-on-year % change": "+0.5"
    },
    {
      "Chartdate": "01/05/2005",
      "UE Year/Period": "5/2005 - 7/2005",
      "Unemployment rate (seasonally adjusted) (%)": 5.7,
      "CPI Time": "May 2005",
      "CPI Index": 66,
      "CPI Year-on-year % change": "+0.8"
    },
    {
      "Chartdate": "01/06/2005",
      "UE Year/Period": "6/2005 - 8/2005",
      "Unemployment rate (seasonally adjusted) (%)": 5.6,
      "CPI Time": "Jun 2005",
      "CPI Index": 66.2,
      "CPI Year-on-year % change": "+1.2"
    },
    {
      "Chartdate": "01/07/2005",
      "UE Year/Period": "7/2005 - 9/2005",
      "Unemployment rate (seasonally adjusted) (%)": 5.4,
      "CPI Time": "Jul 2005",
      "CPI Index": 66.3,
      "CPI Year-on-year % change": "+1.3"
    },
    {
      "Chartdate": "01/08/2005",
      "UE Year/Period": "8/2005 - 10/2005",
      "Unemployment rate (seasonally adjusted) (%)": 5.3,
      "CPI Time": "Aug 2005",
      "CPI Index": 66.2,
      "CPI Year-on-year % change": "+1.4"
    },
    {
      "Chartdate": "01/09/2005",
      "UE Year/Period": "9/2005 - 11/2005",
      "Unemployment rate (seasonally adjusted) (%)": 5.4,
      "CPI Time": "Sep 2005",
      "CPI Index": 66.5,
      "CPI Year-on-year % change": "+1.6"
    },
    {
      "Chartdate": "01/10/2005",
      "UE Year/Period": "10/2005 - 12/2005",
      "Unemployment rate (seasonally adjusted) (%)": 5.2,
      "CPI Time": "Oct 2005",
      "CPI Index": 66.6,
      "CPI Year-on-year % change": "+1.3"
    },
    {
      "Chartdate": "01/11/2005",
      "UE Year/Period": "11/2005 - 1/2006",
      "Unemployment rate (seasonally adjusted) (%)": 5.2,
      "CPI Time": "Nov 2005",
      "CPI Index": 66.7,
      "CPI Year-on-year % change": "+1.2"
    },
    {
      "Chartdate": "01/12/2005",
      "UE Year/Period": "12/2005 - 2/2006",
      "Unemployment rate (seasonally adjusted) (%)": 5.1,
      "CPI Time": "Dec 2005",
      "CPI Index": 66.8,
      "CPI Year-on-year % change": "+1.3"
    },
    {
      "Chartdate": "01/01/2006",
      "UE Year/Period": "1/2006 - 3/2006",
      "Unemployment rate (seasonally adjusted) (%)": 5.1,
      "CPI Time": "Jan 2006",
      "CPI Index": 66.9,
      "CPI Year-on-year % change": "+1.9"
    },
    {
      "Chartdate": "01/02/2006",
      "UE Year/Period": "2/2006 - 4/2006",
      "Unemployment rate (seasonally adjusted) (%)": 5,
      "CPI Time": "Feb 2006",
      "CPI Index": 66.7,
      "CPI Year-on-year % change": "+1.2"
    },
    {
      "Chartdate": "01/03/2006",
      "UE Year/Period": "3/2006 - 5/2006",
      "Unemployment rate (seasonally adjusted) (%)": 4.9,
      "CPI Time": "Mar 2006",
      "CPI Index": 67,
      "CPI Year-on-year % change": "+1.6"
    },
    {
      "Chartdate": "01/04/2006",
      "UE Year/Period": "4/2006 - 6/2006",
      "Unemployment rate (seasonally adjusted) (%)": 4.9,
      "CPI Time": "Apr 2006",
      "CPI Index": 67.3,
      "CPI Year-on-year % change": "+1.9"
    },
    {
      "Chartdate": "01/05/2006",
      "UE Year/Period": "5/2006 - 7/2006",
      "Unemployment rate (seasonally adjusted) (%)": 4.9,
      "CPI Time": "May 2006",
      "CPI Index": 67.4,
      "CPI Year-on-year % change": "+2.1"
    },
    {
      "Chartdate": "01/06/2006",
      "UE Year/Period": "6/2006 - 8/2006",
      "Unemployment rate (seasonally adjusted) (%)": 4.8,
      "CPI Time": "Jun 2006",
      "CPI Index": 67.6,
      "CPI Year-on-year % change": "+2.2"
    },
    {
      "Chartdate": "01/07/2006",
      "UE Year/Period": "7/2006 - 9/2006",
      "Unemployment rate (seasonally adjusted) (%)": 4.6,
      "CPI Time": "Jul 2006",
      "CPI Index": 67.8,
      "CPI Year-on-year % change": "+2.3"
    },
    {
      "Chartdate": "01/08/2006",
      "UE Year/Period": "8/2006 - 10/2006",
      "Unemployment rate (seasonally adjusted) (%)": 4.6,
      "CPI Time": "Aug 2006",
      "CPI Index": 67.8,
      "CPI Year-on-year % change": "+2.5"
    },
    {
      "Chartdate": "01/09/2006",
      "UE Year/Period": "9/2006 - 11/2006",
      "Unemployment rate (seasonally adjusted) (%)": 4.5,
      "CPI Time": "Sep 2006",
      "CPI Index": 67.9,
      "CPI Year-on-year % change": "+2.1"
    },
    {
      "Chartdate": "01/10/2006",
      "UE Year/Period": "10/2006 - 12/2006",
      "Unemployment rate (seasonally adjusted) (%)": 4.5,
      "CPI Time": "Oct 2006",
      "CPI Index": 68,
      "CPI Year-on-year % change": "+2.0"
    },
    {
      "Chartdate": "01/11/2006",
      "UE Year/Period": "11/2006 - 1/2007",
      "Unemployment rate (seasonally adjusted) (%)": 4.5,
      "CPI Time": "Nov 2006",
      "CPI Index": 68.1,
      "CPI Year-on-year % change": "+2.2"
    },
    {
      "Chartdate": "01/12/2006",
      "UE Year/Period": "12/2006 - 2/2007",
      "Unemployment rate (seasonally adjusted) (%)": 4.3,
      "CPI Time": "Dec 2006",
      "CPI Index": 68.3,
      "CPI Year-on-year % change": "+2.3"
    },
    {
      "Chartdate": "01/01/2007",
      "UE Year/Period": "1/2007 - 3/2007",
      "Unemployment rate (seasonally adjusted) (%)": 4.3,
      "CPI Time": "Jan 2007",
      "CPI Index": 68.2,
      "CPI Year-on-year % change": "+2.0"
    },
    {
      "Chartdate": "01/02/2007",
      "UE Year/Period": "2/2007 - 4/2007",
      "Unemployment rate (seasonally adjusted) (%)": 4.3,
      "CPI Time": "Feb 2007",
      "CPI Index": 67.3,
      "CPI Year-on-year % change": "+0.8"
    },
    {
      "Chartdate": "01/03/2007",
      "UE Year/Period": "3/2007 - 5/2007",
      "Unemployment rate (seasonally adjusted) (%)": 4.3,
      "CPI Time": "Mar 2007",
      "CPI Index": 68.6,
      "CPI Year-on-year % change": "+2.4"
    },
    {
      "Chartdate": "01/04/2007",
      "UE Year/Period": "4/2007 - 6/2007",
      "Unemployment rate (seasonally adjusted) (%)": 4.2,
      "CPI Time": "Apr 2007",
      "CPI Index": 68.2,
      "CPI Year-on-year % change": "+1.3"
    },
    {
      "Chartdate": "01/05/2007",
      "UE Year/Period": "5/2007 - 7/2007",
      "Unemployment rate (seasonally adjusted) (%)": 4.1,
      "CPI Time": "May 2007",
      "CPI Index": 68.2,
      "CPI Year-on-year % change": "+1.2"
    },
    {
      "Chartdate": "01/06/2007",
      "UE Year/Period": "6/2007 - 8/2007",
      "Unemployment rate (seasonally adjusted) (%)": 4.2,
      "CPI Time": "Jun 2007",
      "CPI Index": 68.5,
      "CPI Year-on-year % change": "+1.3"
    },
    {
      "Chartdate": "01/07/2007",
      "UE Year/Period": "7/2007 - 9/2007",
      "Unemployment rate (seasonally adjusted) (%)": 4.1,
      "CPI Time": "Jul 2007",
      "CPI Index": 68.9,
      "CPI Year-on-year % change": "+1.5"
    },
    {
      "Chartdate": "01/08/2007",
      "UE Year/Period": "8/2007 - 10/2007",
      "Unemployment rate (seasonally adjusted) (%)": 4,
      "CPI Time": "Aug 2007",
      "CPI Index": 68.9,
      "CPI Year-on-year % change": "+1.6"
    },
    {
      "Chartdate": "01/09/2007",
      "UE Year/Period": "9/2007 - 11/2007",
      "Unemployment rate (seasonally adjusted) (%)": 3.7,
      "CPI Time": "Sep 2007",
      "CPI Index": 69,
      "CPI Year-on-year % change": "+1.6"
    },
    {
      "Chartdate": "01/10/2007",
      "UE Year/Period": "10/2007 - 12/2007",
      "Unemployment rate (seasonally adjusted) (%)": 3.4,
      "CPI Time": "Oct 2007",
      "CPI Index": 70.1,
      "CPI Year-on-year % change": "+3.2"
    },
    {
      "Chartdate": "01/11/2007",
      "UE Year/Period": "11/2007 - 1/2008",
      "Unemployment rate (seasonally adjusted) (%)": 3.4,
      "CPI Time": "Nov 2007",
      "CPI Index": 70.5,
      "CPI Year-on-year % change": "+3.4"
    },
    {
      "Chartdate": "01/12/2007",
      "UE Year/Period": "12/2007 - 2/2008",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Dec 2007",
      "CPI Index": 70.9,
      "CPI Year-on-year % change": "+3.8"
    },
    {
      "Chartdate": "01/01/2008",
      "UE Year/Period": "1/2008 - 3/2008",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Jan 2008",
      "CPI Index": 70.4,
      "CPI Year-on-year % change": "+3.2"
    },
    {
      "Chartdate": "01/02/2008",
      "UE Year/Period": "2/2008 - 4/2008",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Feb 2008",
      "CPI Index": 71.5,
      "CPI Year-on-year % change": "+6.3"
    },
    {
      "Chartdate": "01/03/2008",
      "UE Year/Period": "3/2008 - 5/2008",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Mar 2008",
      "CPI Index": 71.5,
      "CPI Year-on-year % change": "+4.2"
    },
    {
      "Chartdate": "01/04/2008",
      "UE Year/Period": "4/2008 - 6/2008",
      "Unemployment rate (seasonally adjusted) (%)": 3.2,
      "CPI Time": "Apr 2008",
      "CPI Index": 71.9,
      "CPI Year-on-year % change": "+5.4"
    },
    {
      "Chartdate": "01/05/2008",
      "UE Year/Period": "5/2008 - 7/2008",
      "Unemployment rate (seasonally adjusted) (%)": 3.2,
      "CPI Time": "May 2008",
      "CPI Index": 72.1,
      "CPI Year-on-year % change": "+5.7"
    },
    {
      "Chartdate": "01/06/2008",
      "UE Year/Period": "6/2008 - 8/2008",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Jun 2008",
      "CPI Index": 72.7,
      "CPI Year-on-year % change": "+6.1"
    },
    {
      "Chartdate": "01/07/2008",
      "UE Year/Period": "7/2008 - 9/2008",
      "Unemployment rate (seasonally adjusted) (%)": 3.5,
      "CPI Time": "Jul 2008",
      "CPI Index": 73.2,
      "CPI Year-on-year % change": "+6.3"
    },
    {
      "Chartdate": "01/08/2008",
      "UE Year/Period": "8/2008 - 10/2008",
      "Unemployment rate (seasonally adjusted) (%)": 3.6,
      "CPI Time": "Aug 2008",
      "CPI Index": 72.1,
      "CPI Year-on-year % change": "+4.6"
    },
    {
      "Chartdate": "01/09/2008",
      "UE Year/Period": "9/2008 - 11/2008",
      "Unemployment rate (seasonally adjusted) (%)": 3.9,
      "CPI Time": "Sep 2008",
      "CPI Index": 71.1,
      "CPI Year-on-year % change": "+3.0"
    },
    {
      "Chartdate": "01/10/2008",
      "UE Year/Period": "10/2008 - 12/2008",
      "Unemployment rate (seasonally adjusted) (%)": 4.1,
      "CPI Time": "Oct 2008",
      "CPI Index": 71.4,
      "CPI Year-on-year % change": "+1.8"
    },
    {
      "Chartdate": "01/11/2008",
      "UE Year/Period": "11/2008 - 1/2009",
      "Unemployment rate (seasonally adjusted) (%)": 4.6,
      "CPI Time": "Nov 2008",
      "CPI Index": 72.6,
      "CPI Year-on-year % change": "+3.1"
    },
    {
      "Chartdate": "01/12/2008",
      "UE Year/Period": "12/2008 - 2/2009",
      "Unemployment rate (seasonally adjusted) (%)": 5.1,
      "CPI Time": "Dec 2008",
      "CPI Index": 72.4,
      "CPI Year-on-year % change": "+2.1"
    },
    {
      "Chartdate": "01/01/2009",
      "UE Year/Period": "1/2009 - 3/2009",
      "Unemployment rate (seasonally adjusted) (%)": 5.2,
      "CPI Time": "Jan 2009",
      "CPI Index": 72.6,
      "CPI Year-on-year % change": "+3.1"
    },
    {
      "Chartdate": "01/02/2009",
      "UE Year/Period": "2/2009 - 4/2009",
      "Unemployment rate (seasonally adjusted) (%)": 5.3,
      "CPI Time": "Feb 2009",
      "CPI Index": 72.1,
      "CPI Year-on-year % change": "+0.8"
    },
    {
      "Chartdate": "01/03/2009",
      "UE Year/Period": "3/2009 - 5/2009",
      "Unemployment rate (seasonally adjusted) (%)": 5.3,
      "CPI Time": "Mar 2009",
      "CPI Index": 72.3,
      "CPI Year-on-year % change": "+1.2"
    },
    {
      "Chartdate": "01/04/2009",
      "UE Year/Period": "4/2009 - 6/2009",
      "Unemployment rate (seasonally adjusted) (%)": 5.3,
      "CPI Time": "Apr 2009",
      "CPI Index": 72.3,
      "CPI Year-on-year % change": "+0.6"
    },
    {
      "Chartdate": "01/05/2009",
      "UE Year/Period": "5/2009 - 7/2009",
      "Unemployment rate (seasonally adjusted) (%)": 5.4,
      "CPI Time": "May 2009",
      "CPI Index": 72.2,
      "CPI Year-on-year % change": 0
    },
    {
      "Chartdate": "01/06/2009",
      "UE Year/Period": "6/2009 - 8/2009",
      "Unemployment rate (seasonally adjusted) (%)": 5.5,
      "CPI Time": "Jun 2009",
      "CPI Index": 72.1,
      "CPI Year-on-year % change": -0.9
    },
    {
      "Chartdate": "01/07/2009",
      "UE Year/Period": "7/2009 - 9/2009",
      "Unemployment rate (seasonally adjusted) (%)": 5.4,
      "CPI Time": "Jul 2009",
      "CPI Index": 72.1,
      "CPI Year-on-year % change": -1.5
    },
    {
      "Chartdate": "01/08/2009",
      "UE Year/Period": "8/2009 - 10/2009",
      "Unemployment rate (seasonally adjusted) (%)": 5.2,
      "CPI Time": "Aug 2009",
      "CPI Index": 70.9,
      "CPI Year-on-year % change": -1.6
    },
    {
      "Chartdate": "01/09/2009",
      "UE Year/Period": "9/2009 - 11/2009",
      "Unemployment rate (seasonally adjusted) (%)": 5.1,
      "CPI Time": "Sep 2009",
      "CPI Index": 71.4,
      "CPI Year-on-year % change": "+0.5"
    },
    {
      "Chartdate": "01/10/2009",
      "UE Year/Period": "10/2009 - 12/2009",
      "Unemployment rate (seasonally adjusted) (%)": 5,
      "CPI Time": "Oct 2009",
      "CPI Index": 73.2,
      "CPI Year-on-year % change": "+2.2"
    },
    {
      "Chartdate": "01/11/2009",
      "UE Year/Period": "11/2009 - 1/2010",
      "Unemployment rate (seasonally adjusted) (%)": 4.9,
      "CPI Time": "Nov 2009",
      "CPI Index": 73.2,
      "CPI Year-on-year % change": "+0.5"
    },
    {
      "Chartdate": "01/12/2009",
      "UE Year/Period": "12/2009 - 2/2010",
      "Unemployment rate (seasonally adjusted) (%)": 4.7,
      "CPI Time": "Dec 2009",
      "CPI Index": 73.5,
      "CPI Year-on-year % change": "+1.3"
    },
    {
      "Chartdate": "01/01/2010",
      "UE Year/Period": "1/2010 - 3/2010",
      "Unemployment rate (seasonally adjusted) (%)": 4.6,
      "CPI Time": "Jan 2010",
      "CPI Index": 73.5,
      "CPI Year-on-year % change": "+1.0"
    },
    {
      "Chartdate": "01/02/2010",
      "UE Year/Period": "2/2010 - 4/2010",
      "Unemployment rate (seasonally adjusted) (%)": 4.5,
      "CPI Time": "Feb 2010",
      "CPI Index": 74.2,
      "CPI Year-on-year % change": "+2.8"
    },
    {
      "Chartdate": "01/03/2010",
      "UE Year/Period": "3/2010 - 5/2010",
      "Unemployment rate (seasonally adjusted) (%)": 4.6,
      "CPI Time": "Mar 2010",
      "CPI Index": 73.9,
      "CPI Year-on-year % change": "+2.0"
    },
    {
      "Chartdate": "01/04/2010",
      "UE Year/Period": "4/2010 - 6/2010",
      "Unemployment rate (seasonally adjusted) (%)": 4.6,
      "CPI Time": "Apr 2010",
      "CPI Index": 74.2,
      "CPI Year-on-year % change": "+2.4"
    },
    {
      "Chartdate": "01/05/2010",
      "UE Year/Period": "5/2010 - 7/2010",
      "Unemployment rate (seasonally adjusted) (%)": 4.3,
      "CPI Time": "May 2010",
      "CPI Index": 74.1,
      "CPI Year-on-year % change": "+2.5"
    },
    {
      "Chartdate": "01/06/2010",
      "UE Year/Period": "6/2010 - 8/2010",
      "Unemployment rate (seasonally adjusted) (%)": 4.3,
      "CPI Time": "Jun 2010",
      "CPI Index": 74.2,
      "CPI Year-on-year % change": "+2.8"
    },
    {
      "Chartdate": "01/07/2010",
      "UE Year/Period": "7/2010 - 9/2010",
      "Unemployment rate (seasonally adjusted) (%)": 4.2,
      "CPI Time": "Jul 2010",
      "CPI Index": 72.5,
      "CPI Year-on-year % change": "+1.3"
    },
    {
      "Chartdate": "01/08/2010",
      "UE Year/Period": "8/2010 - 10/2010",
      "Unemployment rate (seasonally adjusted) (%)": 4.2,
      "CPI Time": "Aug 2010",
      "CPI Index": 72.5,
      "CPI Year-on-year % change": "+3.0"
    },
    {
      "Chartdate": "01/09/2010",
      "UE Year/Period": "9/2010 - 11/2010",
      "Unemployment rate (seasonally adjusted) (%)": 4,
      "CPI Time": "Sep 2010",
      "CPI Index": 72.8,
      "CPI Year-on-year % change": "+2.6"
    },
    {
      "Chartdate": "01/10/2010",
      "UE Year/Period": "10/2010 - 12/2010",
      "Unemployment rate (seasonally adjusted) (%)": 3.9,
      "CPI Time": "Oct 2010",
      "CPI Index": 75,
      "CPI Year-on-year % change": "+2.5"
    },
    {
      "Chartdate": "01/11/2010",
      "UE Year/Period": "11/2010 - 1/2011",
      "Unemployment rate (seasonally adjusted) (%)": 3.8,
      "CPI Time": "Nov 2010",
      "CPI Index": 75.2,
      "CPI Year-on-year % change": "+2.8"
    },
    {
      "Chartdate": "01/12/2010",
      "UE Year/Period": "12/2010 - 2/2011",
      "Unemployment rate (seasonally adjusted) (%)": 3.6,
      "CPI Time": "Dec 2010",
      "CPI Index": 75.7,
      "CPI Year-on-year % change": "+2.9"
    },
    {
      "Chartdate": "01/01/2011",
      "UE Year/Period": "1/2011 - 3/2011",
      "Unemployment rate (seasonally adjusted) (%)": 3.5,
      "CPI Time": "Jan 2011",
      "CPI Index": 76.1,
      "CPI Year-on-year % change": "+3.4"
    },
    {
      "Chartdate": "01/02/2011",
      "UE Year/Period": "2/2011 - 4/2011",
      "Unemployment rate (seasonally adjusted) (%)": 3.6,
      "CPI Time": "Feb 2011",
      "CPI Index": 76.9,
      "CPI Year-on-year % change": "+3.6"
    },
    {
      "Chartdate": "01/03/2011",
      "UE Year/Period": "3/2011 - 5/2011",
      "Unemployment rate (seasonally adjusted) (%)": 3.6,
      "CPI Time": "Mar 2011",
      "CPI Index": 77.1,
      "CPI Year-on-year % change": "+4.4"
    },
    {
      "Chartdate": "01/04/2011",
      "UE Year/Period": "4/2011 - 6/2011",
      "Unemployment rate (seasonally adjusted) (%)": 3.6,
      "CPI Time": "Apr 2011",
      "CPI Index": 77.6,
      "CPI Year-on-year % change": "+4.6"
    },
    {
      "Chartdate": "01/05/2011",
      "UE Year/Period": "5/2011 - 7/2011",
      "Unemployment rate (seasonally adjusted) (%)": 3.5,
      "CPI Time": "May 2011",
      "CPI Index": 78,
      "CPI Year-on-year % change": "+5.2"
    },
    {
      "Chartdate": "01/06/2011",
      "UE Year/Period": "6/2011 - 8/2011",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Jun 2011",
      "CPI Index": 78.4,
      "CPI Year-on-year % change": "+5.6"
    },
    {
      "Chartdate": "01/07/2011",
      "UE Year/Period": "7/2011 - 9/2011",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Jul 2011",
      "CPI Index": 78.3,
      "CPI Year-on-year % change": "+7.9"
    },
    {
      "Chartdate": "01/08/2011",
      "UE Year/Period": "8/2011 - 10/2011",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Aug 2011",
      "CPI Index": 76.7,
      "CPI Year-on-year % change": "+5.7"
    },
    {
      "Chartdate": "01/09/2011",
      "UE Year/Period": "9/2011 - 11/2011",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Sep 2011",
      "CPI Index": 77,
      "CPI Year-on-year % change": "+5.8"
    },
    {
      "Chartdate": "01/10/2011",
      "UE Year/Period": "10/2011 - 12/2011",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Oct 2011",
      "CPI Index": 79.3,
      "CPI Year-on-year % change": "+5.8"
    },
    {
      "Chartdate": "01/11/2011",
      "UE Year/Period": "11/2011 - 1/2012",
      "Unemployment rate (seasonally adjusted) (%)": 3.2,
      "CPI Time": "Nov 2011",
      "CPI Index": 79.5,
      "CPI Year-on-year % change": "+5.7"
    },
    {
      "Chartdate": "01/12/2011",
      "UE Year/Period": "12/2011 - 2/2012",
      "Unemployment rate (seasonally adjusted) (%)": 3.4,
      "CPI Time": "Dec 2011",
      "CPI Index": 80,
      "CPI Year-on-year % change": "+5.7"
    },
    {
      "Chartdate": "01/01/2012",
      "UE Year/Period": "1/2012 - 3/2012",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Jan 2012",
      "CPI Index": 80.7,
      "CPI Year-on-year % change": "+6.1"
    },
    {
      "Chartdate": "01/02/2012",
      "UE Year/Period": "2/2012 - 4/2012",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Feb 2012",
      "CPI Index": 80.5,
      "CPI Year-on-year % change": "+4.7"
    },
    {
      "Chartdate": "01/03/2012",
      "UE Year/Period": "3/2012 - 5/2012",
      "Unemployment rate (seasonally adjusted) (%)": 3.2,
      "CPI Time": "Mar 2012",
      "CPI Index": 80.9,
      "CPI Year-on-year % change": "+4.9"
    },
    {
      "Chartdate": "01/04/2012",
      "UE Year/Period": "4/2012 - 6/2012",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Apr 2012",
      "CPI Index": 81.3,
      "CPI Year-on-year % change": "+4.7"
    },
    {
      "Chartdate": "01/05/2012",
      "UE Year/Period": "5/2012 - 7/2012",
      "Unemployment rate (seasonally adjusted) (%)": 3.2,
      "CPI Time": "May 2012",
      "CPI Index": 81.3,
      "CPI Year-on-year % change": "+4.3"
    },
    {
      "Chartdate": "01/06/2012",
      "UE Year/Period": "6/2012 - 8/2012",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Jun 2012",
      "CPI Index": 81.3,
      "CPI Year-on-year % change": "+3.7"
    },
    {
      "Chartdate": "01/07/2012",
      "UE Year/Period": "7/2012 - 9/2012",
      "Unemployment rate (seasonally adjusted) (%)": 3.4,
      "CPI Time": "Jul 2012",
      "CPI Index": 79.6,
      "CPI Year-on-year % change": "+1.6"
    },
    {
      "Chartdate": "01/08/2012",
      "UE Year/Period": "8/2012 - 10/2012",
      "Unemployment rate (seasonally adjusted) (%)": 3.4,
      "CPI Time": "Aug 2012",
      "CPI Index": 79.6,
      "CPI Year-on-year % change": "+3.7"
    },
    {
      "Chartdate": "01/09/2012",
      "UE Year/Period": "9/2012 - 11/2012",
      "Unemployment rate (seasonally adjusted) (%)": 3.4,
      "CPI Time": "Sep 2012",
      "CPI Index": 79.9,
      "CPI Year-on-year % change": "+3.8"
    },
    {
      "Chartdate": "01/10/2012",
      "UE Year/Period": "10/2012 - 12/2012",
      "Unemployment rate (seasonally adjusted) (%)": 3.2,
      "CPI Time": "Oct 2012",
      "CPI Index": 82.3,
      "CPI Year-on-year % change": "+3.8"
    },
    {
      "Chartdate": "01/11/2012",
      "UE Year/Period": "11/2012 - 1/2013",
      "Unemployment rate (seasonally adjusted) (%)": 3.5,
      "CPI Time": "Nov 2012",
      "CPI Index": 82.5,
      "CPI Year-on-year % change": "+3.7"
    },
    {
      "Chartdate": "01/12/2012",
      "UE Year/Period": "12/2012 - 2/2013",
      "Unemployment rate (seasonally adjusted) (%)": 3.5,
      "CPI Time": "Dec 2012",
      "CPI Index": 82.9,
      "CPI Year-on-year % change": "+3.7"
    },
    {
      "Chartdate": "01/01/2013",
      "UE Year/Period": "1/2013 - 3/2013",
      "Unemployment rate (seasonally adjusted) (%)": 3.5,
      "CPI Time": "Jan 2013",
      "CPI Index": 83.1,
      "CPI Year-on-year % change": "+3.0"
    },
    {
      "Chartdate": "01/02/2013",
      "UE Year/Period": "2/2013 - 4/2013",
      "Unemployment rate (seasonally adjusted) (%)": 3.5,
      "CPI Time": "Feb 2013",
      "CPI Index": 84,
      "CPI Year-on-year % change": "+4.4"
    },
    {
      "Chartdate": "01/03/2013",
      "UE Year/Period": "3/2013 - 5/2013",
      "Unemployment rate (seasonally adjusted) (%)": 3.5,
      "CPI Time": "Mar 2013",
      "CPI Index": 83.8,
      "CPI Year-on-year % change": "+3.6"
    },
    {
      "Chartdate": "01/04/2013",
      "UE Year/Period": "4/2013 - 6/2013",
      "Unemployment rate (seasonally adjusted) (%)": 3.4,
      "CPI Time": "Apr 2013",
      "CPI Index": 84.6,
      "CPI Year-on-year % change": "+4.0"
    },
    {
      "Chartdate": "01/05/2013",
      "UE Year/Period": "5/2013 - 7/2013",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "May 2013",
      "CPI Index": 84.5,
      "CPI Year-on-year % change": "+3.9"
    },
    {
      "Chartdate": "01/06/2013",
      "UE Year/Period": "6/2013 - 8/2013",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Jun 2013",
      "CPI Index": 84.6,
      "CPI Year-on-year % change": "+4.1"
    },
    {
      "Chartdate": "01/07/2013",
      "UE Year/Period": "7/2013 - 9/2013",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Jul 2013",
      "CPI Index": 85.1,
      "CPI Year-on-year % change": "+6.9"
    },
    {
      "Chartdate": "01/08/2013",
      "UE Year/Period": "8/2013 - 10/2013",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Aug 2013",
      "CPI Index": 83.2,
      "CPI Year-on-year % change": "+4.5"
    },
    {
      "Chartdate": "01/09/2013",
      "UE Year/Period": "9/2013 - 11/2013",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Sep 2013",
      "CPI Index": 83.6,
      "CPI Year-on-year % change": "+4.6"
    },
    {
      "Chartdate": "01/10/2013",
      "UE Year/Period": "10/2013 - 12/2013",
      "Unemployment rate (seasonally adjusted) (%)": 3.2,
      "CPI Time": "Oct 2013",
      "CPI Index": 85.9,
      "CPI Year-on-year % change": "+4.3"
    },
    {
      "Chartdate": "01/11/2013",
      "UE Year/Period": "11/2013 - 1/2014",
      "Unemployment rate (seasonally adjusted) (%)": 3.2,
      "CPI Time": "Nov 2013",
      "CPI Index": 86.1,
      "CPI Year-on-year % change": "+4.3"
    },
    {
      "Chartdate": "01/12/2013",
      "UE Year/Period": "12/2013 - 2/2014",
      "Unemployment rate (seasonally adjusted) (%)": 3.1,
      "CPI Time": "Dec 2013",
      "CPI Index": 86.5,
      "CPI Year-on-year % change": "+4.3"
    },
    {
      "Chartdate": "01/01/2014",
      "UE Year/Period": "1/2014 - 3/2014",
      "Unemployment rate (seasonally adjusted) (%)": 3.2,
      "CPI Time": "Jan 2014",
      "CPI Index": 86.9,
      "CPI Year-on-year % change": "+4.6"
    },
    {
      "Chartdate": "01/02/2014",
      "UE Year/Period": "2/2014 - 4/2014",
      "Unemployment rate (seasonally adjusted) (%)": 3.2,
      "CPI Time": "Feb 2014",
      "CPI Index": 87.3,
      "CPI Year-on-year % change": "+3.9"
    },
    {
      "Chartdate": "01/03/2014",
      "UE Year/Period": "3/2014 - 5/2014",
      "Unemployment rate (seasonally adjusted) (%)": 3.2,
      "CPI Time": "Mar 2014",
      "CPI Index": 87.1,
      "CPI Year-on-year % change": "+3.9"
    },
    {
      "Chartdate": "01/04/2014",
      "UE Year/Period": "4/2014 - 6/2014",
      "Unemployment rate (seasonally adjusted) (%)": 3.2,
      "CPI Time": "Apr 2014",
      "CPI Index": 87.7,
      "CPI Year-on-year % change": "+3.7"
    },
    {
      "Chartdate": "01/05/2014",
      "UE Year/Period": "5/2014 - 7/2014",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "May 2014",
      "CPI Index": 87.6,
      "CPI Year-on-year % change": "+3.7"
    },
    {
      "Chartdate": "01/06/2014",
      "UE Year/Period": "6/2014 - 8/2014",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Jun 2014",
      "CPI Index": 87.7,
      "CPI Year-on-year % change": "+3.6"
    },
    {
      "Chartdate": "01/07/2014",
      "UE Year/Period": "7/2014 - 9/2014",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Jul 2014",
      "CPI Index": 88.5,
      "CPI Year-on-year % change": "+4.0"
    },
    {
      "Chartdate": "01/08/2014",
      "UE Year/Period": "8/2014 - 10/2014",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Aug 2014",
      "CPI Index": 86.5,
      "CPI Year-on-year % change": "+3.9"
    },
    {
      "Chartdate": "01/09/2014",
      "UE Year/Period": "9/2014 - 11/2014",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Sep 2014",
      "CPI Index": 89.1,
      "CPI Year-on-year % change": "+6.6"
    },
    {
      "Chartdate": "01/10/2014",
      "UE Year/Period": "10/2014 - 12/2014",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Oct 2014",
      "CPI Index": 90.3,
      "CPI Year-on-year % change": "+5.2"
    },
    {
      "Chartdate": "01/11/2014",
      "UE Year/Period": "11/2014 - 1/2015",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Nov 2014",
      "CPI Index": 90.5,
      "CPI Year-on-year % change": "+5.1"
    },
    {
      "Chartdate": "01/12/2014",
      "UE Year/Period": "12/2014 - 2/2015",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Dec 2014",
      "CPI Index": 90.7,
      "CPI Year-on-year % change": "+4.9"
    },
    {
      "Chartdate": "01/01/2015",
      "UE Year/Period": "1/2015 - 3/2015",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Jan 2015",
      "CPI Index": 90.4,
      "CPI Year-on-year % change": "+4.1"
    },
    {
      "Chartdate": "01/02/2015",
      "UE Year/Period": "2/2015 - 4/2015",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Feb 2015",
      "CPI Index": 91.2,
      "CPI Year-on-year % change": "+4.6"
    },
    {
      "Chartdate": "01/03/2015",
      "UE Year/Period": "3/2015 - 5/2015",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Mar 2015",
      "CPI Index": 90.9,
      "CPI Year-on-year % change": "+4.5"
    },
    {
      "Chartdate": "01/04/2015",
      "UE Year/Period": "4/2015 - 6/2015",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Apr 2015",
      "CPI Index": 90.2,
      "CPI Year-on-year % change": "+2.8"
    },
    {
      "Chartdate": "01/05/2015",
      "UE Year/Period": "5/2015 - 7/2015",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "May 2015",
      "CPI Index": 90.2,
      "CPI Year-on-year % change": "+3.0"
    },
    {
      "Chartdate": "01/06/2015",
      "UE Year/Period": "6/2015 - 8/2015",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Jun 2015",
      "CPI Index": 90.3,
      "CPI Year-on-year % change": "+3.1"
    },
    {
      "Chartdate": "01/07/2015",
      "UE Year/Period": "7/2015 - 9/2015",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Jul 2015",
      "CPI Index": 90.8,
      "CPI Year-on-year % change": "+2.5"
    },
    {
      "Chartdate": "01/08/2015",
      "UE Year/Period": "8/2015 - 10/2015",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Aug 2015",
      "CPI Index": 89.1,
      "CPI Year-on-year % change": "+2.4"
    },
    {
      "Chartdate": "01/09/2015",
      "UE Year/Period": "9/2015 - 11/2015",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Sep 2015",
      "CPI Index": 90.9,
      "CPI Year-on-year % change": "+2.0"
    },
    {
      "Chartdate": "01/10/2015",
      "UE Year/Period": "10/2015 - 12/2015",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Oct 2015",
      "CPI Index": 92.3,
      "CPI Year-on-year % change": "+2.3"
    },
    {
      "Chartdate": "01/11/2015",
      "UE Year/Period": "11/2015 - 1/2016",
      "Unemployment rate (seasonally adjusted) (%)": 3.4,
      "CPI Time": "Nov 2015",
      "CPI Index": 92.5,
      "CPI Year-on-year % change": "+2.3"
    },
    {
      "Chartdate": "01/12/2015",
      "UE Year/Period": "12/2015 - 2/2016",
      "Unemployment rate (seasonally adjusted) (%)": 3.4,
      "CPI Time": "Dec 2015",
      "CPI Index": 92.8,
      "CPI Year-on-year % change": "+2.4"
    },
    {
      "Chartdate": "01/01/2016",
      "UE Year/Period": "1/2016 - 3/2016",
      "Unemployment rate (seasonally adjusted) (%)": 3.4,
      "CPI Time": "Jan 2016",
      "CPI Index": 92.7,
      "CPI Year-on-year % change": "+2.5"
    },
    {
      "Chartdate": "01/02/2016",
      "UE Year/Period": "2/2016 - 4/2016",
      "Unemployment rate (seasonally adjusted) (%)": 3.4,
      "CPI Time": "Feb 2016",
      "CPI Index": 93.9,
      "CPI Year-on-year % change": "+3.0"
    },
    {
      "Chartdate": "01/03/2016",
      "UE Year/Period": "3/2016 - 5/2016",
      "Unemployment rate (seasonally adjusted) (%)": 3.4,
      "CPI Time": "Mar 2016",
      "CPI Index": 93.5,
      "CPI Year-on-year % change": "+2.9"
    },
    {
      "Chartdate": "01/04/2016",
      "UE Year/Period": "4/2016 - 6/2016",
      "Unemployment rate (seasonally adjusted) (%)": 3.4,
      "CPI Time": "Apr 2016",
      "CPI Index": 92.6,
      "CPI Year-on-year % change": "+2.7"
    },
    {
      "Chartdate": "01/05/2016",
      "UE Year/Period": "5/2016 - 7/2016",
      "Unemployment rate (seasonally adjusted) (%)": 3.4,
      "CPI Time": "May 2016",
      "CPI Index": 92.5,
      "CPI Year-on-year % change": "+2.6"
    },
    {
      "Chartdate": "01/06/2016",
      "UE Year/Period": "6/2016 - 8/2016",
      "Unemployment rate (seasonally adjusted) (%)": 3.4,
      "CPI Time": "Jun 2016",
      "CPI Index": 92.5,
      "CPI Year-on-year % change": "+2.4"
    },
    {
      "Chartdate": "01/07/2016",
      "UE Year/Period": "7/2016 - 9/2016",
      "Unemployment rate (seasonally adjusted) (%)": 3.4,
      "CPI Time": "Jul 2016",
      "CPI Index": 92.9,
      "CPI Year-on-year % change": "+2.3"
    },
    {
      "Chartdate": "01/08/2016",
      "UE Year/Period": "8/2016 - 10/2016",
      "Unemployment rate (seasonally adjusted) (%)": 3.4,
      "CPI Time": "Aug 2016",
      "CPI Index": 93,
      "CPI Year-on-year % change": "+4.3"
    },
    {
      "Chartdate": "01/09/2016",
      "UE Year/Period": "9/2016 - 11/2016",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Sep 2016",
      "CPI Index": 93.3,
      "CPI Year-on-year % change": "+2.7"
    },
    {
      "Chartdate": "01/10/2016",
      "UE Year/Period": "10/2016 - 12/2016",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Oct 2016",
      "CPI Index": 93.4,
      "CPI Year-on-year % change": "+1.2"
    },
    {
      "Chartdate": "01/11/2016",
      "UE Year/Period": "11/2016 - 1/2017",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Nov 2016",
      "CPI Index": 93.7,
      "CPI Year-on-year % change": "+1.2"
    },
    {
      "Chartdate": "01/12/2016",
      "UE Year/Period": "12/2016 - 2/2017",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Dec 2016",
      "CPI Index": 93.9,
      "CPI Year-on-year % change": "+1.2"
    },
    {
      "Chartdate": "01/01/2017",
      "UE Year/Period": "1/2017 - 3/2017",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Jan 2017",
      "CPI Index": 93.9,
      "CPI Year-on-year % change": "+1.3"
    },
    {
      "Chartdate": "01/02/2017",
      "UE Year/Period": "2/2017 - 4/2017",
      "Unemployment rate (seasonally adjusted) (%)": 3.2,
      "CPI Time": "Feb 2017",
      "CPI Index": 93.8,
      "CPI Year-on-year % change": -0.1
    },
    {
      "Chartdate": "01/03/2017",
      "UE Year/Period": "3/2017 - 5/2017",
      "Unemployment rate (seasonally adjusted) (%)": 3.2,
      "CPI Time": "Mar 2017",
      "CPI Index": 94,
      "CPI Year-on-year % change": "+0.5"
    },
    {
      "Chartdate": "01/04/2017",
      "UE Year/Period": "4/2017 - 6/2017",
      "Unemployment rate (seasonally adjusted) (%)": 3.1,
      "CPI Time": "Apr 2017",
      "CPI Index": 94.5,
      "CPI Year-on-year % change": "+2.0"
    },
    {
      "Chartdate": "01/05/2017",
      "UE Year/Period": "5/2017 - 7/2017",
      "Unemployment rate (seasonally adjusted) (%)": 3.2,
      "CPI Time": "May 2017",
      "CPI Index": 94.4,
      "CPI Year-on-year % change": "+2.0"
    },
    {
      "Chartdate": "01/06/2017",
      "UE Year/Period": "6/2017 - 8/2017",
      "Unemployment rate (seasonally adjusted) (%)": 3.1,
      "CPI Time": "Jun 2017",
      "CPI Index": 94.3,
      "CPI Year-on-year % change": "+1.9"
    },
    {
      "Chartdate": "01/07/2017",
      "UE Year/Period": "7/2017 - 9/2017",
      "Unemployment rate (seasonally adjusted) (%)": 3.1,
      "CPI Time": "Jul 2017",
      "CPI Index": 94.7,
      "CPI Year-on-year % change": "+2.0"
    },
    {
      "Chartdate": "01/08/2017",
      "UE Year/Period": "8/2017 - 10/2017",
      "Unemployment rate (seasonally adjusted) (%)": 3,
      "CPI Time": "Aug 2017",
      "CPI Index": 94.8,
      "CPI Year-on-year % change": "+1.9"
    },
    {
      "Chartdate": "01/09/2017",
      "UE Year/Period": "9/2017 - 11/2017",
      "Unemployment rate (seasonally adjusted) (%)": 3,
      "CPI Time": "Sep 2017",
      "CPI Index": 94.6,
      "CPI Year-on-year % change": "+1.4"
    },
    {
      "Chartdate": "01/10/2017",
      "UE Year/Period": "10/2017 - 12/2017",
      "Unemployment rate (seasonally adjusted) (%)": 2.9,
      "CPI Time": "Oct 2017",
      "CPI Index": 94.9,
      "CPI Year-on-year % change": "+1.5"
    },
    {
      "Chartdate": "01/11/2017",
      "UE Year/Period": "11/2017 - 1/2018",
      "Unemployment rate (seasonally adjusted) (%)": 2.9,
      "CPI Time": "Nov 2017",
      "CPI Index": 95.2,
      "CPI Year-on-year % change": "+1.6"
    },
    {
      "Chartdate": "01/12/2017",
      "UE Year/Period": "12/2017 - 2/2018",
      "Unemployment rate (seasonally adjusted) (%)": 2.9,
      "CPI Time": "Dec 2017",
      "CPI Index": 95.5,
      "CPI Year-on-year % change": "+1.7"
    },
    {
      "Chartdate": "01/01/2018",
      "UE Year/Period": "1/2018 - 3/2018",
      "Unemployment rate (seasonally adjusted) (%)": 2.8,
      "CPI Time": "Jan 2018",
      "CPI Index": 95.5,
      "CPI Year-on-year % change": "+1.7"
    },
    {
      "Chartdate": "01/02/2018",
      "UE Year/Period": "2/2018 - 4/2018",
      "Unemployment rate (seasonally adjusted) (%)": 2.8,
      "CPI Time": "Feb 2018",
      "CPI Index": 96.7,
      "CPI Year-on-year % change": "+3.1"
    },
    {
      "Chartdate": "01/03/2018",
      "UE Year/Period": "3/2018 - 5/2018",
      "Unemployment rate (seasonally adjusted) (%)": 2.8,
      "CPI Time": "Mar 2018",
      "CPI Index": 96.4,
      "CPI Year-on-year % change": "+2.6"
    },
    {
      "Chartdate": "01/04/2018",
      "UE Year/Period": "4/2018 - 6/2018",
      "Unemployment rate (seasonally adjusted) (%)": 2.8,
      "CPI Time": "Apr 2018",
      "CPI Index": 96.3,
      "CPI Year-on-year % change": "+1.9"
    },
    {
      "Chartdate": "01/05/2018",
      "UE Year/Period": "5/2018 - 7/2018",
      "Unemployment rate (seasonally adjusted) (%)": 2.8,
      "CPI Time": "May 2018",
      "CPI Index": 96.4,
      "CPI Year-on-year % change": "+2.1"
    },
    {
      "Chartdate": "01/06/2018",
      "UE Year/Period": "6/2018 - 8/2018",
      "Unemployment rate (seasonally adjusted) (%)": 2.8,
      "CPI Time": "Jun 2018",
      "CPI Index": 96.6,
      "CPI Year-on-year % change": "+2.4"
    },
    {
      "Chartdate": "01/07/2018",
      "UE Year/Period": "7/2018 - 9/2018",
      "Unemployment rate (seasonally adjusted) (%)": 2.8,
      "CPI Time": "Jul 2018",
      "CPI Index": 96.9,
      "CPI Year-on-year % change": "+2.4"
    },
    {
      "Chartdate": "01/08/2018",
      "UE Year/Period": "8/2018 - 10/2018",
      "Unemployment rate (seasonally adjusted) (%)": 2.8,
      "CPI Time": "Aug 2018",
      "CPI Index": 97,
      "CPI Year-on-year % change": "+2.3"
    },
    {
      "Chartdate": "01/09/2018",
      "UE Year/Period": "9/2018 - 11/2018",
      "Unemployment rate (seasonally adjusted) (%)": 2.8,
      "CPI Time": "Sep 2018",
      "CPI Index": 97.2,
      "CPI Year-on-year % change": "+2.7"
    },
    {
      "Chartdate": "01/10/2018",
      "UE Year/Period": "10/2018 - 12/2018",
      "Unemployment rate (seasonally adjusted) (%)": 2.8,
      "CPI Time": "Oct 2018",
      "CPI Index": 97.4,
      "CPI Year-on-year % change": "+2.7"
    },
    {
      "Chartdate": "01/11/2018",
      "UE Year/Period": "11/2018 - 1/2019",
      "Unemployment rate (seasonally adjusted) (%)": 2.8,
      "CPI Time": "Nov 2018",
      "CPI Index": 97.6,
      "CPI Year-on-year % change": "+2.6"
    },
    {
      "Chartdate": "01/12/2018",
      "UE Year/Period": "12/2018 - 2/2019",
      "Unemployment rate (seasonally adjusted) (%)": 2.8,
      "CPI Time": "Dec 2018",
      "CPI Index": 97.9,
      "CPI Year-on-year % change": "+2.5"
    },
    {
      "Chartdate": "01/01/2019",
      "UE Year/Period": "1/2019 - 3/2019",
      "Unemployment rate (seasonally adjusted) (%)": 2.8,
      "CPI Time": "Jan 2019",
      "CPI Index": 97.8,
      "CPI Year-on-year % change": "+2.4"
    },
    {
      "Chartdate": "01/02/2019",
      "UE Year/Period": "2/2019 - 4/2019",
      "Unemployment rate (seasonally adjusted) (%)": 2.8,
      "CPI Time": "Feb 2019",
      "CPI Index": 98.7,
      "CPI Year-on-year % change": "+2.1"
    },
    {
      "Chartdate": "01/03/2019",
      "UE Year/Period": "3/2019 - 5/2019",
      "Unemployment rate (seasonally adjusted) (%)": 2.8,
      "CPI Time": "Mar 2019",
      "CPI Index": 98.4,
      "CPI Year-on-year % change": "+2.1"
    },
    {
      "Chartdate": "01/04/2019",
      "UE Year/Period": "4/2019 - 6/2019",
      "Unemployment rate (seasonally adjusted) (%)": 2.8,
      "CPI Time": "Apr 2019",
      "CPI Index": 99.1,
      "CPI Year-on-year % change": "+2.9"
    },
    {
      "Chartdate": "01/05/2019",
      "UE Year/Period": "5/2019 - 7/2019",
      "Unemployment rate (seasonally adjusted) (%)": 2.8,
      "CPI Time": "May 2019",
      "CPI Index": 99,
      "CPI Year-on-year % change": "+2.8"
    },
    {
      "Chartdate": "01/06/2019",
      "UE Year/Period": "6/2019 - 8/2019",
      "Unemployment rate (seasonally adjusted) (%)": 2.9,
      "CPI Time": "Jun 2019",
      "CPI Index": 99.7,
      "CPI Year-on-year % change": "+3.3"
    },
    {
      "Chartdate": "01/07/2019",
      "UE Year/Period": "7/2019 - 9/2019",
      "Unemployment rate (seasonally adjusted) (%)": 2.9,
      "CPI Time": "Jul 2019",
      "CPI Index": 100.1,
      "CPI Year-on-year % change": "+3.3"
    },
    {
      "Chartdate": "01/08/2019",
      "UE Year/Period": "8/2019 - 10/2019",
      "Unemployment rate (seasonally adjusted) (%)": 3,
      "CPI Time": "Aug 2019",
      "CPI Index": 100.3,
      "CPI Year-on-year % change": "+3.5"
    },
    {
      "Chartdate": "01/09/2019",
      "UE Year/Period": "9/2019 - 11/2019",
      "Unemployment rate (seasonally adjusted) (%)": 3.1,
      "CPI Time": "Sep 2019",
      "CPI Index": 100.3,
      "CPI Year-on-year % change": "+3.2"
    },
    {
      "Chartdate": "01/10/2019",
      "UE Year/Period": "10/2019 - 12/2019",
      "Unemployment rate (seasonally adjusted) (%)": 3.3,
      "CPI Time": "Oct 2019",
      "CPI Index": 100.6,
      "CPI Year-on-year % change": "+3.1"
    },
    {
      "Chartdate": "01/11/2019",
      "UE Year/Period": "11/2019 - 1/2020",
      "Unemployment rate (seasonally adjusted) (%)": 3.4,
      "CPI Time": "Nov 2019",
      "CPI Index": 100.7,
      "CPI Year-on-year % change": "+3.0"
    },
    {
      "Chartdate": "01/12/2019",
      "UE Year/Period": "12/2019 - 2/2020",
      "Unemployment rate (seasonally adjusted) (%)": 3.8,
      "CPI Time": "Dec 2019",
      "CPI Index": 100.7,
      "CPI Year-on-year % change": "+2.9"
    },
    {
      "Chartdate": "01/01/2020",
      "UE Year/Period": "1/2020 - 3/2020",
      "Unemployment rate (seasonally adjusted) (%)": 4.3,
      "CPI Time": "Jan 2020",
      "CPI Index": 98.5,
      "CPI Year-on-year % change": "+1.4"
    },
    {
      "Chartdate": "01/02/2020",
      "UE Year/Period": "2/2020 - 4/2020",
      "Unemployment rate (seasonally adjusted) (%)": 5.2,
      "CPI Time": "Feb 2020",
      "CPI Index": 101,
      "CPI Year-on-year % change": "+2.2"
    },
    {
      "Chartdate": "01/03/2020",
      "UE Year/Period": "3/2020 - 5/2020",
      "Unemployment rate (seasonally adjusted) (%)": 5.9,
      "CPI Time": "Mar 2020",
      "CPI Index": 100.9,
      "CPI Year-on-year % change": "+2.3"
    },
    {
      "Chartdate": "01/04/2020",
      "UE Year/Period": "4/2020 - 6/2020",
      "Unemployment rate (seasonally adjusted) (%)": 6.1,
      "CPI Time": "Apr 2020",
      "CPI Index": 101,
      "CPI Year-on-year % change": "+1.9"
    },
    {
      "Chartdate": "01/05/2020",
      "UE Year/Period": "5/2020 - 7/2020",
      "Unemployment rate (seasonally adjusted) (%)": 6,
      "CPI Time": "May 2020",
      "CPI Index": 100.7,
      "CPI Year-on-year % change": "+1.5"
    },
    {
      "Chartdate": "01/06/2020",
      "UE Year/Period": "6/2020 - 8/2020",
      "Unemployment rate (seasonally adjusted) (%)": 6.1,
      "CPI Time": "Jun 2020",
      "CPI Index": 100.6,
      "CPI Year-on-year % change": "+0.7"
    },
    {
      "Chartdate": "01/07/2020",
      "UE Year/Period": "7/2020 - 9/2020",
      "Unemployment rate (seasonally adjusted) (%)": 6.2,
      "CPI Time": "Jul 2020",
      "CPI Index": 97.7,
      "CPI Year-on-year % change": -2.3
    },
    {
      "Chartdate": "01/08/2020",
      "UE Year/Period": "8/2020 - 10/2020",
      "Unemployment rate (seasonally adjusted) (%)": 6.3,
      "CPI Time": "Aug 2020",
      "CPI Index": 99.9,
      "CPI Year-on-year % change": -0.4
    },
    {
      "Chartdate": "01/09/2020",
      "UE Year/Period": "9/2020 - 11/2020",
      "Unemployment rate (seasonally adjusted) (%)": 6.2,
      "CPI Time": "Sep 2020",
      "CPI Index": 97.8,
      "CPI Year-on-year % change": -2.2
    },
    {
      "Chartdate": "01/10/2020",
      "UE Year/Period": "10/2020 - 12/2020",
      "Unemployment rate (seasonally adjusted) (%)": 6.6,
      "CPI Time": "Oct 2020",
      "CPI Index": 100.2,
      "CPI Year-on-year % change": -0.4
    },
    {
      "Chartdate": "01/11/2020",
      "UE Year/Period": "11/2020 - 1/2021",
      "Unemployment rate (seasonally adjusted) (%)": 7,
      "CPI Time": "Nov 2020",
      "CPI Index": 100.3,
      "CPI Year-on-year % change": -0.3
    },
    {
      "Chartdate": "01/12/2020",
      "UE Year/Period": "12/2020 - 2/2021",
      "Unemployment rate (seasonally adjusted) (%)": 7.2,
      "CPI Time": "Dec 2020",
      "CPI Index": 99.8,
      "CPI Year-on-year % change": -1
    },
    {
      "Chartdate": "01/01/2021",
      "UE Year/Period": "1/2021 - 3/2021",
      "Unemployment rate (seasonally adjusted) (%)": 6.8,
      "CPI Time": "Jan 2021",
      "CPI Index": 101.1,
      "CPI Year-on-year % change": "+2.6"
    },
    {
      "Chartdate": "01/02/2021",
      "UE Year/Period": "2/2021 - 4/2021",
      "Unemployment rate (seasonally adjusted) (%)": 6.4,
      "CPI Time": "Feb 2021",
      "CPI Index": 101.4,
      "CPI Year-on-year % change": "+0.5"
    },
    {
      "Chartdate": "01/03/2021",
      "UE Year/Period": "3/2021 - 5/2021",
      "Unemployment rate (seasonally adjusted) (%)": 6,
      "CPI Time": "Mar 2021",
      "CPI Index": 101.5,
      "CPI Year-on-year % change": "+0.6"
    },
    {
      "Chartdate": "01/04/2021",
      "UE Year/Period": "4/2021 - 6/2021",
      "Unemployment rate (seasonally adjusted) (%)": 5.4,
      "CPI Time": "Apr 2021",
      "CPI Index": 101.8,
      "CPI Year-on-year % change": "+0.8"
    },
    {
      "Chartdate": "01/05/2021",
      "UE Year/Period": "5/2021 - 7/2021",
      "Unemployment rate (seasonally adjusted) (%)": 4.9,
      "CPI Time": "May 2021",
      "CPI Index": 101.6,
      "CPI Year-on-year % change": "+1.0"
    },
    {
      "Chartdate": "01/06/2021",
      "UE Year/Period": "6/2021 - 8/2021",
      "Unemployment rate (seasonally adjusted) (%)": 4.6,
      "CPI Time": "Jun 2021",
      "CPI Index": 101.3,
      "CPI Year-on-year % change": "+0.7"
    },
    {
      "Chartdate": "01/07/2021",
      "UE Year/Period": "7/2021 - 9/2021",
      "Unemployment rate (seasonally adjusted) (%)": 4.5,
      "CPI Time": "Jul 2021",
      "CPI Index": 101.4,
      "CPI Year-on-year % change": "+3.7"
    },
    {
      "Chartdate": "01/08/2021",
      "UE Year/Period": "8/2021 - 10/2021",
      "Unemployment rate (seasonally adjusted) (%)": 4.3,
      "CPI Time": "Aug 2021",
      "CPI Index": 101.5,
      "CPI Year-on-year % change": "+1.6"
    },
    {
      "Chartdate": "01/09/2021",
      "UE Year/Period": "9/2021 - 11/2021",
      "Unemployment rate (seasonally adjusted) (%)": 4.2,
      "CPI Time": "Sep 2021",
      "CPI Index": 99.2,
      "CPI Year-on-year % change": "+1.4"
    },
    {
      "Chartdate": "01/10/2021",
      "UE Year/Period": "10/2021 - 12/2021",
      "Unemployment rate (seasonally adjusted) (%)": 4,
      "CPI Time": "Oct 2021",
      "CPI Index": 102,
      "CPI Year-on-year % change": "+1.7"
    },
    {
      "Chartdate": "01/11/2021",
      "UE Year/Period": "11/2021 - 1/2022",
      "Unemployment rate (seasonally adjusted) (%)": 3.9,
      "CPI Time": "Nov 2021",
      "CPI Index": 102.2,
      "CPI Year-on-year % change": "+1.8"
    },
    {
      "Chartdate": "01/12/2021",
      "UE Year/Period": "12/2021 - 2/2022",
      "Unemployment rate (seasonally adjusted) (%)": 4.5,
      "CPI Time": "Dec 2021",
      "CPI Index": 102.2,
      "CPI Year-on-year % change": "+2.4"
    },
    {
      "Chartdate": "01/01/2022",
      "UE Year/Period": "1/2022 - 3/2022",
      "Unemployment rate (seasonally adjusted) (%)": 5,
      "CPI Time": "Jan 2022",
      "CPI Index": 102.3,
      "CPI Year-on-year % change": "+1.2"
    },
    {
      "Chartdate": "01/02/2022",
      "UE Year/Period": "2/2022 - 4/2022",
      "Unemployment rate (seasonally adjusted) (%)": 5.4,
      "CPI Time": "Feb 2022",
      "CPI Index": 103.1,
      "CPI Year-on-year % change": "+1.6"
    },
    {
      "Chartdate": "01/03/2022",
      "UE Year/Period": "3/2022 - 5/2022",
      "Unemployment rate (seasonally adjusted) (%)": 5.1,
      "CPI Time": "Mar 2022",
      "CPI Index": 103.3,
      "CPI Year-on-year % change": "+1.7"
    },
    {
      "Chartdate": "01/04/2022",
      "UE Year/Period": "4/2022 - 6/2022",
      "Unemployment rate (seasonally adjusted) (%)": 4.7,
      "CPI Time": "Apr 2022",
      "CPI Index": 103.1,
      "CPI Year-on-year % change": "+1.3"
    },
    {
      "Chartdate": "01/05/2022",
      "UE Year/Period": "5/2022 - 7/2022",
      "Unemployment rate (seasonally adjusted) (%)": 4.3,
      "CPI Time": "May 2022",
      "CPI Index": 102.9,
      "CPI Year-on-year % change": "+1.2"
    },
    {
      "Chartdate": "01/06/2022",
      "UE Year/Period": "6/2022 - 8/2022",
      "Unemployment rate (seasonally adjusted) (%)": 4.1,
      "CPI Time": "Jun 2022",
      "CPI Index": 103.2,
      "CPI Year-on-year % change": "+1.8"
    },
    {
      "Chartdate": "01/07/2022",
      "UE Year/Period": "7/2022 - 9/2022",
      "Unemployment rate (seasonally adjusted) (%)": 3.9,
      "CPI Time": "Jul 2022",
      "CPI Index": 103.3,
      "CPI Year-on-year % change": "+1.9"
    },
    {
      "Chartdate": "01/08/2022",
      "UE Year/Period": "8/2022 - 10/2022",
      "Unemployment rate (seasonally adjusted) (%)": 3.8,
      "CPI Time": "Aug 2022",
      "CPI Index": 103.4,
      "CPI Year-on-year % change": "+1.9"
    },
    {
      "Chartdate": "01/09/2022",
      "UE Year/Period": "",
      "Unemployment rate (seasonally adjusted) (%)": "",
      "CPI Time": "Sep 2022",
      "CPI Index": 103.5,
      "CPI Year-on-year % change": "+4.4"
    },
    {
      "Chartdate": "01/10/2022",
      "UE Year/Period": "",
      "Unemployment rate (seasonally adjusted) (%)": "",
      "CPI Time": "Oct 2022",
      "CPI Index": 103.8,
      "CPI Year-on-year % change": "+1.8"
    }
  ];

    chart.data.forEach(function (o) {
    
      o.Category = "" + o.Category;
      o["UE Year/Period"] = o["UE Year/Period"] || undefined;
      o["Unemployment rate (seasonally adjusted) (%)"] = o["Unemployment rate (seasonally adjusted) (%)"] || undefined;
      o["CPI Time"] = o["CPI Time"] || undefined;
      o["CPI Index"] = o["CPI Index"] || undefined;
      o["CPI Year-on-year % change"] = o["CPI Year-on-year % change"] || undefined;
  });

  chart.events.on("ready", function () {
    dateAxis.zoom({ start: 0, end: 1 });
  });
  
  // Set input format for the dates
  chart.dateFormatter.inputDateFormat = "dd-MM-yyyy";
  
  // Create axes
  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

  [
  "CPI Index"
  ].forEach(function (elem) {


  // Create series
  var series1 = chart.series.push(new am4charts.LineSeries());
  series1.dataFields.valueY = elem;
  series1.tooltipText = elem + ": {valueY}"
  series1.dataFields.dateX = "Chartdate";
  series1.dataFields.realdate = 'CPI Time'
  series1.strokeWidth = 2;
  series1.minBulletDistance = 15;

  // Drop-shaped tooltips
  series1.tooltip.background.cornerRadius = 20;
  series1.tooltip.background.strokeOpacity = 0;
  series1.tooltip.pointerOrientation = "vertical";
  series1.tooltip.label.minWidth = 40;
  series1.tooltip.label.minHeight = 40;
  series1.tooltip.label.textAlign = "middle";
  series1.tooltip.label.textValign = "middle";
  series1.tooltipText = "{realdate}\nCPI Index\n[bold font-size: 20]{valueY}[/]";
  series1.tooltip.background.fillOpacity = 0.3;

  // Make bullets grow on hover
  var bullet = series1.bullets.push(new am4charts.CircleBullet());
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

  series1.legendSettings.valueText = elem;
  
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
  [
    "CPI Year-on-year % change"
    ].forEach(function (elem) {
  
  
    // Create series
    var series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = elem;
    series2.tooltipText = elem + ": {valueY}"
    series2.dataFields.dateX = "Chartdate";
    series2.dataFields.realdate = 'CPI Time'
    series2.strokeWidth = 2;
    series2.minBulletDistance = 15;
  
    // Drop-shaped tooltips
    series2.tooltip.background.cornerRadius = 20;
    series2.tooltip.background.strokeOpacity = 0;
    series2.tooltip.pointerOrientation = "vertical";
    series2.tooltip.label.minWidth = 40;
    series2.tooltip.label.minHeight = 40;
    series2.tooltip.label.textAlign = "middle";
    series2.tooltip.label.textValign = "middle";
    series2.tooltipText = "{realdate}\nCPI Year-on-year % change\n[bold font-size: 20]{valueY}[/]";
    series2.tooltip.background.fillOpacity = 0.3;

  
    // Make bullets grow on hover
    var bullet = series2.bullets.push(new am4charts.CircleBullet());
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
  
    series2.legendSettings.valueText = elem;
    
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
    
  [
    "Unemployment rate (seasonally adjusted) (%)"
    ].forEach(function (elem) {
  
  
    // Create series
    var series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.valueY = elem;
    series3.tooltipText = elem + ": {valueY}"
    series3.dataFields.dateX = "Chartdate";
    series3.dataFields.realdate = "UE Year/Period";
    series3.strokeWidth = 2;
    series3.minBulletDistance = 15;
  
    // Drop-shaped tooltips
    series3.tooltip.background.cornerRadius = 20;
    series3.tooltip.background.strokeOpacity = 0;
    series3.tooltip.pointerOrientation = "vertical";
    series3.tooltip.label.minWidth = 40;
    series3.tooltip.label.minHeight = 40;
    series3.tooltip.label.textAlign = "middle";
    series3.tooltip.label.textValign = "middle";
    series3.tooltipText = "{realdate}\nUnemployment rate (seasonally adjusted) (%)\n[bold font-size: 20]{valueY}[/]";
    series3.tooltip.background.fillOpacity = 0.3;
  
    // Make bullets grow on hover
    var bullet = series3.bullets.push(new am4charts.CircleBullet());
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
  
    series3.legendSettings.valueText = elem;
    
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
  title.text = "Consumer Price Indices and Unemployment Rate";
  title.align = "center"
  title.fill = '#6c757d'
  title.paddingBottom = 10;
  title.fontWeight = 600;
  title.fontSize = 20;
  title.marginTop = 10;
  title.marginBottom = 10;

  var range1 = dateAxis.axisRanges.create();
  range1.date = new Date(2019, 12, 1);
  range1.endDate = new Date(2022, 10, 1);
  range1.axisFill.fill = "#f7b6b0";
  range1.axisFill.fillOpacity = 0.2;

  range1.label.text = "Pandemic";
  range1.label.inside = true;
  range1.label.rotation = 90;
  range1.label.horizontalCenter = "right";
  range1.label.verticalCenter = "top";
  range1.label.fill = '#6c757d';
  range1.label.fillOpacity = 0.4;
  
  }); // end am4core.ready()