window.addEventListener('load', ()=> {

    getData('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,USDT,BSV,LTC,EOS,BNB,XTZ&tsyms=USD&api_key={${a7c6ca3cbc2490b645dcb7daa84c800240e6ef8317fabdc6f46a5a68803264a3}}');

    // setActualDate ();

    async function setActualDate () {
        setInterval(showCurrentInformation, 1000*5);
    }

    
})

//  получает данные из объекта

function getData(currencyApi) {
    console.log(currencyApi)
    fetch(currencyApi)

    .then(response => {
        return response.json();
    })
    .then(data => {
        let dataRAW = data.RAW;
        let sumRAW = Object.entries(dataRAW);
        drawTable(sumRAW);
    })
}


// по количеству строк из полученного объекта рисовать таблицу

function drawTable(data) {
    for (let i = 0; i < data.length; i++) {
        
        let el = data[i];

        let createLine = document.createElement('tr');
        createLine.id = 'items';

        let nameOfCurrent = ['Bitcoin', 'Ethereum', 'XRP', 'Bitcoin Cash', 'Tether', 'Bitcoin SV', 'Litecoin', 'EOS', 'Binance Coin', 'Tezos']
        let symbol = el[1].USD.FROMSYMBOL;

        createLine.innerHTML = `
        <td class="table-item columnName">${nameOfCurrent[i]}</td>
        <td class="table-item columnSymbol">${symbol}</td>
        <td class="value-table-item green columnPrice">- $</td>
        <td class="value-table-item columnCapit">- %</td>
        <td class="value-table-item red columnChange">- %</td>
        `
        document.getElementById('current-table').appendChild(createLine);
    }
}

// вставляет из объекта значения в нарисованную таблицу

function putData () {
    g
}


function rotateButton() {
    document.getElementById('refresh').classList.toggle('rotate-refresh');
    showCurrentInformation();
}

function showCurrentInformation () {
    const ApiKey = 'a7c6ca3cbc2490b645dcb7daa84c800240e6ef8317fabdc6f46a5a68803264a3';
    const currencyApi = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,USDT,BSV,LTC,EOS,BNB,XTZ&tsyms=USD&api_key={${ApiKey}}`

    document.querySelectorAll('.value-table-item').forEach(e => e.remove());

    fetch(currencyApi)

    .then(response => {
        return response.json();
    })
    .then(data => {
        let dataRAW = data.RAW;
        let sumRAW = Object.entries(dataRAW);
        
        for (let i = 0; i < sumRAW.length; i++) {
            let el = sumRAW[i];

            let createColumn = document.createElement('td');
            createColumn.className = 'value-table-item';

            let price = el[1].USD.PRICE;
            let fixedPrice = price.toFixed(2);

            let capit = el[1].USD.MKTCAP;
            let fCapit = capit.toFixed(2);
            let fixedCapit = fCapit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            let change = el[1].USD.CHANGEPCT24HOUR;
            let fixedChange = change.toFixed(3);

            // createColumn.innerHTML = `
            // <td class="table-item">first</td>
            // <td class="table-item">second</td>
            // <td class="value-table-item green">${fixedPrice} $</td>
            // <td class="value-table-item">${fixedCapit} %</td>
            // <td class="value-table-item red">${fixedChange} %</td>
            // `
            // document.getElementById('items').appendChild(createColumn);
        }
    })
}
