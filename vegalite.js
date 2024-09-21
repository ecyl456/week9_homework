var vg_1 = "w9homework.json";  // Path to your Vega-Lite JSON file

vegaEmbed("#choropleth_map", vg_1)  // Embeds the chart into an HTML element with the ID 'choropleth_map'
    .then(function (result) {
        // You can access the Vega view instance as result.view
    })
    .catch(console.error);