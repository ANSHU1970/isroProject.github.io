fetch("https://isro.vercel.app/api/spacecrafts").then((data => {
    // console.log(data)
    return data.json();
})).then(
    (objectData) => {
        console.log(objectData.spacecrafts[0].name);
        let tableData = "";
        objectData.spacecrafts.map((values) => {
            tableData += ` <tr>
            <td>${values.id}</td>
            <td>${values.name}</td>
          </tr>`
        })
        document.getElementById("table_body").innerHTML = tableData;

    })





