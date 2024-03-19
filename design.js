var num = (Math.ceil(Math.random()*100));
var count=1;
console.log(num);
function findNumber()
{
    var numUser = parseInt(document.getElementById("n1").value);
    if(numUser == num)
    {
        document.getElementById("res").textContent = "uuuu won . number of tries are "+count+".";
    }
    else if(numUser > num)
    {
        document.getElementById("res").textContent = "Try with the smaller number";
    }
    else
    {
        document.getElementById("res").textContent = "Try with the larger number";
    }
    document.getElementById("tries").textContent = count;
    count++;
}


