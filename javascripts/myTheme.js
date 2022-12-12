function am4themes_myTheme(target) {
    if (target instanceof am4core.ColorSet) {
      target.list = [
        am4core.color("#1E3F66"),
        am4core.color("#e07b8d"),
        am4core.color("#2E5984"),
        am4core.color("#528AAE"),
      ];
    }
  }