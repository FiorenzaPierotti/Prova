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
    a.addEventListener('click', () => {
      menuClick(this.id);
    })
    if(this.active){
    	a.classList.add('active');
    }
    return a;
  } 
}

const itemMenu = [
  {id: 1, css: 'home', link: 'home', label: 'Home', active: true},
  {id: 2, css: 'port', link: 'port', label: 'Port', active: false},
  {id: 3, css: 'blog', link: 'blog', label: 'Blog', active: false},
]

function createMenuList(){
  document.querySelector('#menu').innerHTML = ''; // svotato menu
  document.querySelector('#myDropdown').innerHTML = ''; // svotato menu

  itemMenu.forEach((item, i) => {     
    //createMenuListItem(menuList[i])
    createMenuListItem(item) // sono equivalenti
  });
}

createMenuList();

function createMenuListItem(item){ 
  let newItem = new MenuItem(item);

  const li = document.createElement('li');
  li.appendChild(newItem.createAnchor());
  document.querySelector('#menu').appendChild(li);  

  document.querySelector('#myDropdown').appendChild(newItem.createAnchor());
} 

function menuClick(itemId){
  itemMenu.map((value) => {
    value.active = itemId === value.id
    return value;
  })  
  createMenuList();
}

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
    img.src ='https://picsum.photos/500/400';
    li.appendChild(img);
  }
}
createLis();

// Fetch for Blog
fetch('https://jsonplaceholder.typicode.com/posts').then(result => {
    console.dir(result)
    if(result.ok){
      if( result.headers.get('Content-Type').includes('application/json')){
        return result.json()
      } 
      throw new Error('response type is not json');

    } else {
        throw new Error('response failed');
    }
}).then( json =>{
    console.log(json);
    init(json);    
    
}).catch(err => {
    console.log(err);
});

function init(obj) {  //obj = array
  const create = (blog) =>{ //blog = objects of the array
    const userId = blog.userId;
    const id = blog.id;
    const title = blog.title;
    const body = blog.body;

      const divCol = document.createElement('div');
      divCol.classList.add('col-sm-6', 'mb-4');

      const divCard = document.createElement('div');
      divCard.classList.add('card');
      divCol.appendChild(divCard);

      const a = document.createElement('a');
      a.classList.add('card-body');
      divCard.appendChild(a);
      /*a.addEventListener('click', function(){
        onClick(card);
      });*/

      const h5 = document.createElement('h5');
      h5.classList.add('card-title');
      h5.innerHTML = title;
      a.appendChild(h5);

      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.innerHTML = body;
      a.appendChild(cardText);

      const cardUserId = document.createElement('span');
      cardUserId.classList.add('card-link');
      cardUserId.innerHTML = 'User id:      '+userId;
      a.appendChild(cardUserId);

      const cardId = document.createElement('span');
      cardId.classList.add('card-link');
      cardId.innerHTML = 'Id:      '+id;
      a.appendChild(cardId);

      return divCol; 
  };
  
  obj.map(blog => create(blog))
  .forEach(divCol => document.querySelector('.row').appendChild(divCol));  

  /*obj.map(blog => {
    create(blog)

    for(i=0; i<10; i++){
      divCol => document.querySelector('.row').appendChild(divCol);
    };
  }); */
};