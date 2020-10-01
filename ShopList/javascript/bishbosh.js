window.load=bishBosh();

function bishBosh()
{
 
    var element = document.getElementById("btnBishBosh").addEventListener("click", loopForBishBosh);
    
    
    var userElement = document.getElementById("btnUserBishBosh").addEventListener("click", userLoopBishBosh);
    
}
function loopForBishBosh()
{
    
    var pResults = document.getElementById("printResult");
    
    var result = "";
    var x;
    for(x = 1; x <= 100; x++)
    {
        if((x % 3 == 0) && (x % 4 == 0))
        {
            result += "Bish-Bosh <br>";
        }
        else if(x % 3 == 0)
        {
            result += "Bish <br>";
        }
        else if(x % 4 == 0)
        {
            result += "Bosh <br>";
        }
        else
        {
            result += "The number is... " + x + "<br>";
        }
    }
    if(result !== "")
    {
    pResults.innerHTML = result;
    }
}

function userLoopBishBosh( )
{
    var maxLoop = document.getElementById("maxLoop").value;
    
    var bish = document.getElementById("bishNr").value;

    var bosh = document.getElementById("boshNr").value;
    
    var pResults = document.getElementById("printUserResult");
    
    var result = "";
    var x;
    for(x = 1; x <= maxLoop; x++)
    {
        if((x % bish == 0) && (x % bosh == 0))
        {
            result += "Bish-Bosh <br>";
        }
        else if(x % bish == 0)
        {
            result += "Bish <br>";
        }
        else if(x % bosh == 0)
        {
            result += "Bosh <br>";
        }
        else
        {
            result += "The number is... " + x + "<br>";
        }
    }
    if(result !== "")
    {
    pResults.innerHTML = result;
    }


}