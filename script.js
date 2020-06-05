function myFunction (){
    document.querySelector('#myDropdown').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.burger') && !event.target.matches('.line')) {
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

// Toggle buttons of the menu nav on click

//-------------------------------------------------
function MenuItem(item) {
	this.id = item.id || 0;
  this.link = item.link || '';
  this.css = item.css || '';
	this.label = item.label || '';
  this.active = item.active || false;

  this.toggleActive = function () {
  	this.active = !this.active
  }

  this.menuClick = function (ItemId){
    this.active = itemId === this.id;
    return item;
  }
  
  this.setActive = function (bool) {
  	this.active = bool
  }  
  
  setHref = () => {
  	return '#' + this.link
  }
  
  this.createAnchor = function () {
  	let a = document.createElement('a');
    a.classList.add(this.css);
    a.href = setHref();
    a.innerHTML = this.label;
    a.onclick();
    if(this.active){
    	a.classList.add('active');
    }
    
    return a;
  }
}

const itemHome = {id: 1, css: 'home', link:'home', label:'Home', active: true};
const itemPort = {id: 2, css: 'port', link:'port', label:'Port', active: false};
const itemBlog = {id: 3, css: 'blog', link:'blog', label:'Blog', active: false};

let newItemHome = new MenuItem(itemHome).createAnchor();
let newBurgerItemHome = new MenuItem(itemHome).createAnchor();

let newItemPort = new MenuItem(itemPort).createAnchor();
let newBurgerItemPort = new MenuItem(itemPort).createAnchor();

let newItemBlog = new MenuItem(itemBlog).createAnchor();
let newBurgerItemBlog = new MenuItem(itemBlog).createAnchor();

//-------------------------------------------------------------

function createMenuListItem(){  
    const li = document.createElement('li');
    li.appendChild(newItemHome);
    document.querySelector('#menu').appendChild(li); 
    
    const second_li = document.createElement('li');
    second_li.appendChild(newItemPort);
    document.querySelector('#menu').appendChild(second_li); 

    const third_li = document.createElement('li');
    third_li.appendChild(newItemBlog);
    document.querySelector('#menu').appendChild(third_li); 
} 

function createBurgerMenuItem(){
  document.querySelector('#myDropdown').appendChild(newBurgerItemHome); 
  document.querySelector('#myDropdown').appendChild(newBurgerItemBlog); 
  document.querySelector('#myDropdown').appendChild(newBurgerItemPort);
} 

createMenuListItem()
createBurgerMenuItem()

/*let menuList = [
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
    //if(itemId === item.id){
      //item.active = true;
    //} else {
      //item.active = false;
    //}
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

createMenuList();*/

// Create Lis in 'port' for the grid
function createLis(){
  for(i=0; i<12; i++){
    const li = document.createElement('li');
    document.querySelector('.portfolio').appendChild(li);
    const img = document.createElement('img');
    img.src ='https://via.placeholder.com/150';
    li.appendChild(img);
  }
}
createLis();
