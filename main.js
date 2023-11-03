function averageAge(ages) {
    let totalAge = 0;
    for (let index = 0; index < ages.length; index++) {
        totalAge += ages[index];
    }
    return totalAge / ages.length;
}
let ages = [50, 30, 40, 68, 28];
let ortalamaYas = averageAge(ages);

console.log("Ortalama yas:", ortalamaYas);


