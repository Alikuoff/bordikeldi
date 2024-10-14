function benzinHisobla(masofa, yeyish, narx) {
    const benzinMiqdori = (masofa / 100) * yeyish;
    const umumiyNarx = benzinMiqdori * narx;
    
    return {
        benzinMiqdori: benzinMiqdori.toFixed(2),
        umumiyNarx: umumiyNarx.toFixed(2)
    };
}

document.getElementById('benzinForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const masofa = parseFloat(document.getElementById('masofa').value);
    const yeyish = parseFloat(document.getElementById('yeyish').value);
    const narx = parseFloat(document.getElementById('narx').value);
    
    const natija = benzinHisobla(masofa, yeyish, narx);
    
    document.getElementById('natija').innerHTML = `
        <h2>Natija:</h2>
        <p>Kerakli benzin miqdori: ${natija.benzinMiqdori} litr</p>
        <p>Umumiy narx: ${natija.umumiyNarx} so'm</p>
    `;
});

