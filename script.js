var demo = document.getElementById('demo')
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

function myButton() {
    let date = new Date('July 21, 2020 01:15:00')
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    //return result;
    demo.innerText=result
};
const submitAPI = function(formData) {
    return true;
};
//console.log(fetchAPI('July 21 2020 01:12:00'))