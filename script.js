function myFunction (){
    document.querySelector('#myDropdown').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.burger')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      /*var dropdown = document.querySelector(".dropdown-content");
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }*/  
      
      /*if (dropdowns[0].classList.contains('show')) {
        dropdowns[0].classList.remove('show');
      }*/ 
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

let menuList = [
  {id: 1, css: 'home', link: '#home', label: 'Home', active: true},
  {id: 2, css: 'port', link: '#port', label: 'Port', active: false},
  {id: 3, css: 'blog', link: '#blog', label: 'Blog', active: false},
]

function createMenuListItem(item){  

  const li = document.createElement('li');
  const a = document.createElement('a');
  a.classList.add(item.css);
  a.href = item.link;
  a.innerHTML = item.label;
  a.addEventListener('click', () => {
    menuClick(item.id);
  })
  if(item.active){
    a.classList.add('active')
  }
  li.appendChild(a);
  document.querySelector('#menu').appendChild(li);
 
}

function createBurgerMenuItem(item){  

  const a = document.createElement('a');
  a.classList.add(item.css);
  a.href = item.link;
  a.innerHTML = item.label;
  a.addEventListener('click', () => {
    menuClick(item.id);
  })
  if(item.active){
    a.classList.add('active')
  }
  document.querySelector('#myDropdown').appendChild(a); 
}


function menuClick(itemId){
  menuList = menuList.map((item) => {
    /*if(itemId === item.id){
      item.active = true;
    } else {
      item.active = false;
    }*/
    item.active = itemId === item.id
    return item;
  })
  createMenuList();
}

function createMenuList(){
  document.querySelector('#menu').innerHTML = ''; // svotato menu
  document.querySelector('#myDropdown').innerHTML = ''; // svotato menu
  menuList.forEach((item, i) => { 
    //createMenuListItem(menuList[i])
    createMenuListItem(item) // sono equivalenti
    createBurgerMenuItem(item)
  });
}

createMenuList();
