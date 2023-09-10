fetch("https://isro.vercel.app/api/centres").then((data => {
    // console.log(data)
    return data.json();
})).then(
    (objectData) => {
        console.log(objectData.centres[0].id);
        let tableData = "";
        objectData.centres.map((values) => {
            tableData += ` <tr>
            <td>${values.id}</td>
            <td>${values.name}</td>
            <td>${values.Place}</td>
            <td>${values.State}</td>
          </tr>`
        })
        document.getElementById("table_body").innerHTML = tableData;

    })





