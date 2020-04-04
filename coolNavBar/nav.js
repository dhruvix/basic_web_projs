const themeButton = document.getElementById('theme');
const body = document.body;


themeButton.onclick = () => {
  if(body.classList.contains('light')){
    body.classList.replace('light', 'dark');
    document.getElementById('Theme').innerHTML = "light mode";
  }
  else{
    body.classList.replace('dark', 'light');
    document.getElementById('Theme').innerHTML = "dark mode";
  } 
};
