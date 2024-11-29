function insert(num){
    document.form.display.value = document.form.display.value + num;
  }
  function equal(){
    var hasil = document.form.display.value;
    document.form.display.value = eval(hasil);
  }
  function clean(){
    document.form.display.value = "done";
  }
  function back(){
    var hasil = document.form.display.value;
    document.form.display.value = hasil.substring(0,hasil.length-1);
  }
