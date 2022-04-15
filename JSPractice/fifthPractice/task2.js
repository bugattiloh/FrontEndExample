class Town {
    constructor(str) {
        let split = str.split(' | ');
        this.name = split[0];
        this.latitude = parseFloat(split[1]).toFixed(2);
        this.longitude = parseFloat(split[2]).toFixed(2);
    }

    showTownInfo() {
        console.log(JSON.stringify(this))
        // console.log("Name: " + this.name + " Latitude: " + this.latitude.toFixed(2) + " Longitude: " + this.longitude.toFixed(2))
    }
}

let data = [
    'Moscow| 55.7522 | 37.6156',
    'Beijing | 39.913818 | 116.363625'
]

let towns = data.map(d => new Town(d));

towns.forEach(c => c.showTownInfo())