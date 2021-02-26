module.exports = function toReadable (number) {
    let str="";
    number=String(number);
    number=number.split('').reverse()
    out:for (let i=0;i<number.length;i++){

        if(i==0 && number[i+1]==1){
            switch(+number[i]){
                case 0: str= str+"ten ";break;
                case 1: str=str+"eleven "; break;
                case 2: str=str+"twelve "; break;
                case 3: str=str+"thirteen "; break;
                case 4: str=str+"fourteen "; break;
                case 5: str=str+"fifteen "; break;
                case 6: str=str+"sixteen "; break;
                case 7: str=str+"seventeen "; break;
                case 8: str=str+"eighteen "; break;
                case 9: str=str+"nineteen "; break;                    
                default: console.log("error"); break;
            }
            i++;
            continue out;
        }
        else if(i==2){
            str=str+"hundred ";
            switch(+number[i]){
                case 1: str=str+"one "; break;
                case 2: str=str+"two "; break;
                case 3: str=str+"three "; break;
                case 4: str=str+"four "; break;
                case 5: str=str+"five "; break;
                case 6: str=str+"six "; break;
                case 7: str=str+"seven "; break;
                case 8: str=str+"eight "; break;
                case 9: str=str+"nine "; break;
                default: console.log("error"); break;
            }
            
        }   
        else if(i==0){
            switch(+number[i]){
                case 0: if(number[i+1]==null &&  number[i]==0)
                {
                    str="zero" 
                };
                break;
                case 1: str=str+"one "; break;
                case 2: str=str+"two "; break;
                case 3: str=str+"three "; break;
                case 4: str=str+"four "; break;
                case 5: str=str+"five "; break;
                case 6: str=str+"six "; break;
                case 7: str=str+"seven "; break;
                case 8: str=str+"eight "; break;
                case 9: str=str+"nine "; break;
                default: console.log("error"); break;
            }
        }
        else if(i==1){
            switch(+number[i]){
                case 1: str=str+"ten "; break;
                case 2: str=str+"twenty "; break;
                case 3: str=str+"thirty "; break;
                case 4: str=str+"forty "; break;
                case 5: str=str+"fifty "; break;
                case 6: str=str+"sixty "; break;
                case 7: str=str+"seventy "; break;
                case 8: str=str+"eighty "; break;
                case 9: str=str+"ninety "; break;
                default: console.log("error"); break;
            }
        }   
    }
    str=str.split(' ').reverse().join(' ');
    str=str.trimStart();
    return str;
}


