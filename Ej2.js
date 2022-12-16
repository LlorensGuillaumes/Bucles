//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y
// añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log.

const alumns = [
        {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

let isApproved;

for (const alumn of alumns) {
    let Aproved=0

    switch(alumn.T1){
        case true:
            Aproved ++
    }
    switch(alumn.T2){
        case true:
            Aproved ++
    }
    switch(alumn.T3){
        case true:
            Aproved++
    }




    if (Aproved>=2){
        alumn.isApproved=true
    }else{
        alumn.isApproved=false
    }
}

    console.log(alumns)