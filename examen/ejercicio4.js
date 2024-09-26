const dateFormat = (dateStr) => {
    let dateComponent = dateStr.split('-');
    try {
        let date = new Date(dateComponent[2],dateComponent[1]-1,dateComponent[0]);
        let dateResult = new Intl.DateTimeFormat("es-ES", {
            dateStyle: "full"
          }).format(date);
        return dateResult;
    } catch {
        return "Fecha no válida";
    }
}

console.log(dateFormat("20-12-2012"));
console.log(dateFormat("2-1-2024"));
console.log(dateFormat("2-2014"));
console.log(dateFormat("40-5-2024"));