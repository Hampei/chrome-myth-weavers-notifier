DEFAULTS = {
  check_interval_m: 15,
  checkpage_url: ""
}

function load_defaults() {
  $.each(DEFAULTS, function(k,v){
    if (!localStorage[k]) localStorage[k] = v;
  });
}
