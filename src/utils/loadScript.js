const loadScript = (url, callback) =>{
  let script = document.createElement('script');
  script.type = 'text/javascript';

  if (script.readyState) {
    script.onreadystatechange = function(){
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange === null;
        callback();
      }
    }
  }
}