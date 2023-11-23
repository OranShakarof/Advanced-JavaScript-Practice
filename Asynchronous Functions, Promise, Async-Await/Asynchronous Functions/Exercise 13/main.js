
function getGradesFormServer(callback){
    setTimeout (() => {
        const grades = [100, 98, 75, 80, 100, 87];
        callback(grades);
    },7000);
};

getGradesFormServer( grades => grades.forEach( grade => document.write( grade + " | ")));
