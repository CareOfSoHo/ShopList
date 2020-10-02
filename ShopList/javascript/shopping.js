
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('#shopList');
console.log(list);
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
      console.log(ev.target.tagName);
    ev.target.classList.toggle('checked');
  }
}, false);
 

function AddItem() {

    /*let name = document.forms.ShoppingList.name.value;
    let data = document.forms.ShoppingList.data.value;
    localStorage.setItem(name, data);
    */
    let shopVal = document.getElementById("shopVal").value;
    
    let node = document.createElement("li");
    node.className = "liShop";
    let textnode = document.createTextNode(shopVal);

   // console.log(shopVal);
    node.appendChild(textnode);
    
    if(shopVal === "")
    {
        alert("Du måste skriva in en vara");
    }
    else{
        document.getElementById("shopList").appendChild(node);
    }
        
    document.getElementById("shopVal").value = "";


    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    node.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }

    /*
    //tilldela innerT - texten i <li> elementen
    let innerT = node.innerText;
    //Skapa nytt <a>
    let a = document.createElement("a");
    //tilldela attribut href och värde till attibutet
    a.setAttribute("href", "#" + innerT);
    // så här ska taggen skapas <a href=#HTML> 
    a.innerText = innerT;
    //tömmer variablen node.innerHTML
    node.innerHTML = "";
    //lägger till child <a...>
    node.appendChild(a);
    document.getElementById("shopList").appendChild(node);
    
    */
   
}


function ClearAll() {
    localStorage.clear();
    let sList = document.getElementById('shopList');
    sList.remove();
    
}

function newBackgroundStyle()
{
//Hämta child elementet
var child = document.getElementById("shopList");
//hämta och sätt parent elementet till childen
var parent = child.parentNode;
//här sätter jag ny bakgrundsfärg på parent-elementet parent
parent.style.backgroundColor = "#f8f9fa";

}
//kör newBackgroundStyle
newBackgroundStyle();


//Ändra en befintlig vara - kolla om den finns
function ModifyItem() {
    /*
      var name1 = document.forms.ShoppingList.name.value;
      var data1 = document.forms.ShoppingList.data.value;
  
      //FInns varan
      if (localStorage.getItem(name1) !=null)
      {
          //uppdatera
          localStorage.setItem(name1,data1);
          document.forms.ShoppingList.data.value = localStorage.getItem(name1);
      }
  */
      //showShopList();
      //showList();
  }
  function RemoveItem()
  {
  /*
  var name = document.forms.ShoppingList.name.value;
  let sList = document.getElementById('shopList');
  
  console.log("Item to remove name: " + name);
  
  for (i = 0; i <= localStorage.length-1; i++) {
      key = localStorage.key(i);
      
      if (sList.hasChildNodes()) 
      {
          if(name == key)
          sList.removeChild(sList.childNodes[i]);
          window.load; 
      }
      
  }
  
  document.forms.ShoppingList.data.value = localStorage.removeItem(name);
  document.forms.ShoppingList.data.value = "";
  
  */
  
  }
  

