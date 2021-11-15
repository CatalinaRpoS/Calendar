"use strict"

function findDate() {
    
    let year = document.getElementById("year").value;
    
    if (year >= 1900 && year <= 2100) {

        let u_year, s_year, d_year, month, d_month, s_month, day, d_date, date;

        if (year < 2000) {

            s_year = parseInt(year);
            u_year = parseInt(year.slice(-2));
            d_year = (Math.floor(u_year / 4) + (u_year % 7)) % 7;
        }
    
        if (year >= 2000) {
    
            s_year = parseInt(year);
            u_year = parseInt(year.slice(-2)) + 100;
            d_year = (Math.floor(u_year / 4) + (u_year % 7)) % 7;
        } 

        if (year == 2100) {

            s_year = parseInt(year);
            u_year = parseInt(year.slice(-2)) + 149;
            d_year = (Math.floor(u_year / 4) + (u_year % 7)) % 7;
        }

        month = document.getElementById("month");
        s_month = month.options[month.selectedIndex].text;

        switch (s_month) {
            case "Enero":
                d_month = 0;
                break;
            case "Febrero":
                d_month = 3;
                break;
            case "Marzo":
                d_month = 3;
                break;
            case "Abril":
                d_month = 6;
                break;    
            case "Mayo":
                d_month = 1;
                break;      
            case "Junio":
                d_month = 4;
                break;
            case "Julio":
                d_month = 6;
                break;  
            case "Agosto":
                d_month = 2;
                break;
            case "Septiembre":
                d_month = 5;
                break;      
            case "Octubre":
                d_month = 0;
                break;
            case "Noviembre":
                d_month = 3;
                break;      
            case "Diciembre":
                d_month = 5;
                break;                
            default:
                document.getElementById("date").innerHTML = "Este mes no existe";
                break;
        }

        day = parseInt(document.getElementById("day").value);

        if (s_month) {

            if ((s_month == "Enero" || s_month == "Marzo" || s_month == "Mayo" || s_month == "Julio" || s_month == "Agosto" || s_month == "Octubre" || s_month == "Diciembre") && (day < 1 || day > 31)) {
                document.getElementById("date").innerHTML = "Esta fecha no existe";

            } else if ((s_month == "Abril" || s_month == "Junio" || s_month == "Septiembre" || s_month == "Noviembre") && (day < 1 || day > 30)) {
                document.getElementById("date").innerHTML = "Esta fecha no existe";

            } else if (s_month == "Febrero" && (day < 1 || day > 29)) {
                document.getElementById("date").innerHTML = "Esta fecha no existe";
                
            } else if (s_month == "Febrero" && day == 29) {

                if ((s_year % 100 == 0 && s_year % 400 != 0) || (s_year % 4 != 0)) {
                    document.getElementById("date").innerHTML = "Este año no es bisiesto";
                }    
                         
            } else if ((s_year % 4 == 0 && month == "Enero") || (s_year % 4 == 0 && month == "Febrero" && day <= 29)) {
                d_date = (d_date + 6) % 7;  

            } else{
                d_date = (d_year + d_month + day) % 7;
            }
        }

        if (d_date) {
            switch (d_date) {
                case 0:
                    date = "Domingo";
                    break;
                case 1: 
                    date = "Lunes";
                    break;
                case 2:
                    date = "Martes";
                    break;
                case 3:
                    date = "Miércoles";
                    break;
                case 4:
                    date = "Jueves";
                    break;
                case 5:
                    date = "Viernes";
                    break;
                case 6:
                    date = "Sábado";
                    break;                        
                default:
                    document.getElementById("date").innerHTML = "Esta fecha no existe";
                    break;
            }
    
            document.getElementById("date").innerHTML = date;
        } 
        
    
    } else{
        document.getElementById("date").innerHTML = "El año que elegiste está fuera del rango";
    }
}