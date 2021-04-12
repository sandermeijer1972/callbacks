const huiswerkMaken = (vak, callback) => {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
    setTimeout(function() {
        callback();
    }, 5000);
};

const klaarMetHuiswerk = () => {
    console.log(`Kijk Paps/Mams, ik ben klaar met mijn huiswerk!`);
};

huiswerkMaken("biologie", klaarMetHuiswerk);