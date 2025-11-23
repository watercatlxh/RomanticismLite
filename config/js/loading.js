//Loading页面
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    var progressBar = document.getElementById('loading-progress');
    if (progressBar) {
      progressBar.style.display = 'none';
    }
  }
}