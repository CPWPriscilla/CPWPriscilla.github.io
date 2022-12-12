am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.unuseTheme(am4themes_myTheme2);
    am4core.useTheme(am4themes_myTheme1);
    // Themes end
    
    am4core.options.onlyShowOnViewport = false;

    var iconPath = `M1410 5456 c-217 -47 -364 -252 -331 -463 21 -135 107 -250 233 -312
    135 -67 315 -51 439 38 162 116 217 326 134 509 -31 68 -124 161 -195 194 -55
    26 -151 49 -199 47 -14 0 -51 -6 -81 -13z M1045 4476 c-155 -50 -253 -126 -333 -260 -25 -41 -88 -230 -244
    -733 -181 -586 -209 -685 -206 -728 6 -72 34 -123 86 -156 96 -61 196 -43 247
    45 17 28 93 268 201 633 96 323 174 589 174 590 0 2 18 3 41 3 34 0 40 -3 35
    -17 -3 -10 -131 -466 -286 -1013 -155 -547 -283 -1003 -286 -1012 -5 -17 12
    -18 264 -18 230 0 271 -2 276 -15 3 -8 6 -360 6 -782 0 -759 1 -768 21 -811
    33 -67 85 -96 179 -100 110 -5 170 27 205 111 13 32 15 138 15 822 l0 785 55
    0 55 0 0 -767 c0 -524 4 -781 11 -808 15 -54 52 -101 99 -125 47 -24 154 -27
    203 -6 39 17 92 71 106 109 8 19 11 282 11 808 l0 779 270 0 c222 0 270 2 270
    14 0 10 -386 1351 -575 1999 l-14 47 48 0 48 0 178 -592 c97 -326 183 -604
    190 -618 35 -67 122 -116 186 -105 83 14 158 101 159 185 0 19 -93 346 -206
    725 -193 643 -210 695 -252 758 -83 127 -168 192 -326 252 l-66 25 -388 0
    c-375 -1 -389 -2 -457 -24z`
    
    
    
    var chart = am4core.create("Fpost2nd", am4charts.SlicedChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
    chart.logo.disabled = true;
    chart.paddingLeft = 0;
    chart.tooltipText = "Female: [bold font-size: 20]1"
    chart.showTooltipOn = "always";
    chart.tooltip.getFillFromObject = false;
    chart.tooltip.background.fill = "#e07b8d";
    
    chart.data = [{
        "name": "Female",
        "value": 1000
    }];
    
    var series = chart.series.push(new am4charts.PictorialStackedSeries());
    series.maskSprite.rotation = 180;
    series.dataFields.value = "value";
    series.dataFields.category = "name";
    series.alignLabels = true;
    series.slices.template.tooltipText = "{category}: [bold font-size: 20]{value}";
    series.slices.template.showTooltipOn = "always";
    series.slices.template.fill = am4core.color("#e07b8d")
    series.tooltip.disabled = true;
    
    series.maskSprite.path = iconPath;
    series.ticks.template.locationX = 1;
    series.ticks.template.locationY = 0.5;
    series.ticks.template.disabled = true;
    series.labels.template.disabled = true;
    series.Container.align='center';

    
    series.labelsContainer.width = 40;

    
    
    }); // end am4core.ready()