
function checkValues(dotA, dotB, dotC, dotD) {
    return dotA == dotB && dotB == dotC && dotC == dotD;
}

const calculateSquareType = (A, B, C, D, sudut) => {
    
    if(sudut == 90) {
        if (checkValues(A, B, C, D)) {
            return "Persegi"
        } else {
            return "Persegi Panjang"
        }
    } else {

        const titikAB = A + B;
        const titikCD = C + D;
        
        if (titikAB > titikCD) {
            return "Jajargenjang"
        } else {

            // if ((A !== B && A !== C && A !== D) ||
            //     (B !== A && B !== C && B !== D) ||
            //     (C !== A && C !== B && C !== D) ||
            //     (D !== A && D !== B && D !== C)) {
            //     return "Trapesium";
            // }

            return "Segitiga Sembarang"
        }
    }
    
};

export default calculateSquareType;
