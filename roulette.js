var i =0 ;


function nb_aleatoire()

{
var nombreroulette=Math.random();
return Math.floor(nombreroulette*36);
}  
var nombreroulette = nb_aleatoire(nombreroulette) ;



function roulette()

{
var b = document.querySelector("#pmj").value ;
var c = document.querySelector("#pmo").value ;

var a = document.querySelector(".pari:checked").value;
var d = document.querySelector("#number").value ;
if(1*d>1*b)
{
    d=b;
    alert("Mise supérieure à la valeur du porte monnaie, la mise sera donc maximale !")
}
if (a==nombreroulette)
{
    alert("Vous avez gagné "+36*d+" mille francs !");
    b=1*b+36*d;
    c=1*c-1*d;
    document.querySelector("#pmj").value = b ;
    document.querySelector("#pmo").value = c;
}

else if ((a=="pair" && nombreroulette%2==0 ) || (a=="impair" && nombreroulette%2==1)) 
{
    alert("Vous avez gagné "+d+" mille francs !");
    b=1*b+1*d;
    c=1*c-1*d;
    document.querySelector("#pmj").value = b ;
    document.querySelector("#pmo").value = c;
}
else
{
    alert("Mise perdue");
    b=1*b-1*d;
    c=1*c+1*d;
    document.querySelector("#pmj").value = b ;
    document.querySelector("#pmo").value = c;
}

if(b==0)
    {
        alert("Echec cuisant ! Rafraîchissez la page pour rejouer .");
        document.querySelector("#number").disabled=true;
        document.querySelector("#number").value=0;
        
    }
nombreroulette=nb_aleatoire(nombreroulette);

    

}