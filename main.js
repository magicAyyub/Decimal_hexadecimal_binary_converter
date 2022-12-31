// fonction pour activer le focus du premier champ du formulaire
function focu(){
    document.getElementById("focus").focus();
}

// fonction qui converti de n'importe quelle base en base décimal
function to_decimal_base(value_,lenght_,base_init){
    sum_number = 0; 
    if(value_){
        for(i=0; i<=lenght_-1; i++){
        if(String(value_)[i]=='A' || String(value_)[i]=='a'){
            sum_number= sum_number+10*16**((lenght_)-1 -i);
        }
        else if(String(value_)[i]== 'B' || String(value_)[i]=='b'){
            sum_number = sum_number + 11 * 16 ** ((lenght_)-1 -i);
        }
        else if (String(value_)[i]== 'C' || String(value_)[i]=='c'){
            sum_number = sum_number + 12 * 16 ** ((lenght_)-1 -i);
        }
        else if (String(value_)[i] == 'D' || String(value_)[i]=='d'){
            sum_number = sum_number + 13 * 16 ** ((lenght_)-1 -i);
        }
        else if (String(value_)[i] == 'E' || String(value_)[i]=='e'){
            sum_number = sum_number + 14* 16 ** ((lenght_)-1 -i);
        }
        else if (String(value_)[i] == 'F' || String(value_)[i]=='f'){
            sum_number = sum_number + 15 * 16 ** ((lenght_)-1 -i);
        }
        else{
            sum_number= sum_number+Number(value_[i]) *base_init**((lenght_)-1-i);
        }
        } 
    }
        return(sum_number);       
}

// fonction qui converti de la base decimal en n'importe quelle base
function to_other_base(decimal_base,base){
    if(decimal_base){
        decimal_base = Number(decimal_base);
        base = Number(base);
        other_base = "";
        stop_loop = 1;
        while (stop_loop != 0) {
            remains = decimal_base%base;
            stop_loop= Math.floor( decimal_base/ base);
            decimal_base = stop_loop;
            if(remains>9){
                if(remains == 10){
                    other_base = 'A' + other_base;
                }
                else if(remains == 11){
                    other_base = 'B' + other_base;
                }
                else if(remains == 12){
                    other_base = 'C' + other_base;
                }
                else if(remains == 13){
                    other_base = 'D' + other_base;
                }
                else if(remains == 14){
                    other_base = 'E' + other_base;
                }
                else{
                    other_base = 'F' + other_base;
                }
            }else{
                other_base = String(remains) + other_base;
            }
        }        
    }
    return(other_base);
    }

/*
* transformation de la base binaire en n'importe quelle base
*/

function print_input_value(value_,lenght_,base_init,base){
    transform_=to_decimal_base(value_,lenght_,base_init); 
    to_other_base(transform_,base);
    if(lenght_>0){
        if(base == 10  ){
            document.getElementById('focus').value = other_base;
        }
        if(base == 16){
            document.getElementById('hexa').value = other_base;
        }
        if(base == 2){
            document.getElementById('bin').value = other_base; 
        }
    }else{
        if(base == 10  ){
            document.getElementById('focus').value = 0;
        }
        if(base == 16){
            document.getElementById('hexa').value = 0;
        }
        if(base == 2){
            document.getElementById('bin').value = 0; 
        }
    }
}










 
