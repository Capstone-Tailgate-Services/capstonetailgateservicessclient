function getFoodItem(){
    var list1 = document.getElementById('firstList');
      var list2 = document.getElementById("secondList");
      var list1SelectedValue = list1.options[list1.selectedIndex].value;

    if (list1SelectedValue == 'Base Package') {
        list2.options.length=0;
        list2.options[0] = new Option('--Additonal Items--', '');
        list2.options[1] = new Option('None', 'None');
    }
  
    else if (list1SelectedValue == 'Silver Package') {
        list2.options.length=0;
        list2.options[0] = new Option('--Additonal Items--', '');
        list2.options[1] = new Option('Canopy', 'Canopy');
        list2.options[2] = new Option('Cooler', 'Cooler');
    }
  
    else if (list1SelectedValue == 'Gold Package') {
      list2.options.length=0;
      list2.options[0] = new Option('--Additional Items--', '');
      list2.options[1] = new Option('Canopy', 'Canopy');
      list2.options[2] = new Option('Cooler', 'Cooler');
      list2.options[3] = new Option('Power Supply', 'Power Supply');
    }
  
    else if (list1SelectedValue == 'Platinum Package') {
      list2.options.length=0;
      list2.options[0] = new Option('--Additional Items--', '');
      list2.options[1] = new Option('Canopy', 'Canopy');
      list2.options[2] = new Option('Cooler', 'Cooler');
      list2.options[3] = new Option('Power Supply', 'Power Supply');
      list2.options[4] = new Option('Grill', 'Grill');
      list2.options[5] = new Option('Table', 'Chairs');
    }
  }