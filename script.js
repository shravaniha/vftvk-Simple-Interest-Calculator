function ComputeInterest()
            {
                p = document.getElementById("p").value;
                n = document.getElementById("n").value;
                r = document.getElementById("r").value;
                q=((p*n*r)/100)
                s=2020+Number(n);
                result = document.getElementById("result");   
                result.innerHTML = "If you deposit " + p + " at an interest rate of " + r + " You will receive an amount " + q + " in the year "+s ;  
            }  
