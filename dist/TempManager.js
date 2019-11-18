class TempManager{
    constructor() {
        this.cityData=[]
    }
    async getDataFromDB(){
        let db = await $.get('/cities')
        this.cityData = db
    }
    async getCityData(cityName){
        let cityD= await $.get(`/city/:${cityName}`)
        this.cityData.push(cityD)
    }
    saveCity(cityName){
        let body= this.cityData.find(c=>c.name == cityName)
        $.post('/city',body)
    }
    removeCity(cityName){
        $.ajax({
            method:"DELETE",
            url: `/city/${cityName}`,
            success: function(){}
        })
    }
}
