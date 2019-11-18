let renderer = new Renderer()
const tempManager = new TempManager()

const loadPage = async function () {
    await tempManager.getDataFromDB()
    renderer.renderData(tempManager.cityData)
}
const handleSearch = async function () {
    let cityInput = $("#cityInput").val()
    await tempManager.getCityData(cityInput)
    renderer.renderData(tempManager.cityData)
}


loadPage()