window.addEventListener('load', ()=> {

    // var requiredSymbols = ["BTC", "ETH", ]

    let dataPromise = getData('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,USDT,BSV,LTC,EOS,BNB,XTZ&tsyms=USD&api_key={${a7c6ca3cbc2490b645dcb7daa84c800240e6ef8317fabdc6f46a5a68803264a3}}');

    dataPromise.then(sumRAW => {
        drawTable(sumRAW);
    })
    setActualDate ();
    async function setActualDate () {
        setInterval(updateTable, 1000*5);
    }    
})

//  получает данные из объекта

async function getData(currencyApi, array) {
    let response = await fetch(currencyApi)

    if (response.ok) {
        let json = await response.json();
        let sumRAW = Object.entries(json.RAW);
        return sumRAW;
    } else {
        return null
    }
}


// по количеству строк из полученного объекта рисовать таблицу

function drawTable(data) {
    for (let i = 0; i < data.length; i++) {
        
        let el = data[i];

        let createLine = document.createElement('tr');
        createLine.id = 'items';

        let nameOfCurrent = ['Bitcoin', 'Ethereum', 'XRP', 'Bitcoin Cash', 'Tether', 'Bitcoin SV', 'Litecoin', 'EOS', 'Binance Coin', 'Tezos']
        let symbol = el[1].USD.FROMSYMBOL;

        let price = el[1].USD.PRICE;
        let fixedPrice = price.toFixed(2);

        let capit = el[1].USD.MKTCAP;
        let fCapit = capit.toFixed(2);
        let fixedCapit = fCapit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

        let change = el[1].USD.CHANGEPCT24HOUR;
        let fixedChange = change.toFixed(3);

        createLine.innerHTML = `
        <td class="table-item columnName">${nameOfCurrent[i]}</td>
        <td class="table-item columnSymbol">${symbol}</td>
        <td class="value-table-item green columnPrice">${fixedPrice} $</td>
        <td class="value-table-item columnCapit">${fixedCapit} %</td>
        <td class="value-table-item red columnChange">${fixedChange} %</td>
        `
        document.getElementById('current-table').appendChild(createLine);
    }
}

function updateTable() {
    let dataPromise = getData('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,USDT,BSV,LTC,EOS,BNB,XTZ&tsyms=USD&api_key={${a7c6ca3cbc2490b645dcb7daa84c800240e6ef8317fabdc6f46a5a68803264a3}}');
    var prices = document.getElementsByClassName("columnPrice");
    var capitalizationRows = document.getElementsByClassName("columnCapit");
    var changeRows = document.getElementsByClassName("columnChange");
    dataPromise.then(data => {

        for (let i = 0; i < data.length; i++) {
            let el = data[i];
            let price = el[1].USD.PRICE;
            let fixedPrice = price.toFixed(2);

            prices[i].textContent = fixedPrice + " $";

            let capit = el[1].USD.MKTCAP;
            let fCapit = capit.toFixed(2);
            let fixedCapit = fCapit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            capitalizationRows[i].textContent = fixedCapit + " %";
            let change = el[1].USD.CHANGEPCT24HOUR;
            let fixedChange = change.toFixed(3);
            changeRows[i].textContent = fixedChange + " %";
        }
    });
}

// вставляет из объекта значения в нарисованную таблицу

function rotateButton() {
    document.getElementById('refresh').classList.toggle('rotate-refresh');
    updateTable();
}


