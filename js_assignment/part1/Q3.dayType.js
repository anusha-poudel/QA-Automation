function dayType(day){
    switch(day){
        case "Saturday", "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Weekday");
            break;
    }
}

dayType("Tuesday");