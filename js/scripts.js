
const portfolio = () => {

    var grid = document.querySelector('.grid');
  var msnry;
  // element selectors
  var imgAll = document.querySelectorAll('.grid-item');
  var web = document.querySelectorAll('.web');
  var coms = document.querySelectorAll('.coms');
  var design = document.querySelectorAll('.design');
  // buttons
  const tabsUl = document.getElementById('buttonGroup');
  const lis = tabsUl.children;
  const gridItems = grid.children;
  
  
  imagesLoaded(grid, function(){
      msnry = new Masonry( grid, {
          //options
          itemSelector: '.grid-item',
        columnWidth: 100,
      isFitWidth: true,
      gutter: 5
  
      });
  });
  
  //element & class name
  function toggleClass(parentElem, childElems, className){
      for(let i = 0; i <childElems.length; i++){
          if(childElems[i]==parentElem){
              childElems[i].classList.add(className);
          }
          else{
              childElems[i].classList.remove(className);
          }
      }
  }
  
  function showImages(showImg, hideImg1, hideImg2){
      for(let i = 0; i < showImg.length; i++){
              showImg[i].style.display = "block";
          }
          for(let i = 0; i < hideImg1.length; i++){
              hideImg1[i].style.display = "none";
          }
          for(let i = 0; i< hideImg2.length; i++){
              hideImg2[i].style.display = "none";
          }
  }
  
  
  tabsUl.addEventListener('click', (event) =>{
      let tabLi = event.target.parentNode;
      
      toggleClass(tabLi, lis, 'is-active');
      
      //show all images
      if(event.target.id == "all"){
          for(let i = 0; i< imgAll.length; i++){
              imgAll[i].style.display = "block";
          }
      }
      
      //show ny images
      if(event.target.id == "web"){
          showImages(web, coms, design);
      }
      
      // show flowers
      if(event.target.id == "coms"){
          showImages(coms, web, design);
      }
      
      // show other images
      if(event.target.id == "design"){
          showImages(design, coms, web);
      }
      
      msnry.layout();
      
  });
  
  grid.addEventListener('click',function(event){
      let imgContainer = event.target.parentNode;
      toggleClass(imgContainer, gridItems, 'grid-item__expanded');
      msnry.layout();
  });
  }