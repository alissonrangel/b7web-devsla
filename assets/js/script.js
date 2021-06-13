

function menu_button() {
  let menu_lateral = document.getElementById('menu-lateral');

  menu_lateral.style.right = 0;
  //menu_lateral.style.opacity = 1;
  //menu_lateral.style.zIndex = 1000;
  //menu_lateral.style.display = 'block';  
  // menu_lateral.classList.remove('display-none');
  // menu_lateral.classList.add('display-block');
}

function close_button() {
  let menu_lateral = document.getElementById('menu-lateral');
  menu_lateral.style.right = '-220px';
  //menu_lateral.style.opacity = 0;
  //menu_lateral.style.zIndex = -1;
  //menu_lateral.style.display = 'none';
  // menu_lateral.classList.remove('display-block');
  // menu_lateral.classList.add('display-none');
}