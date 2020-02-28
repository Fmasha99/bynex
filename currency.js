window.addEventListener('load', ()=> {

    showTable ();
    setActualDate ();

    async function setActualDate () {
        setInterval(showCurrentInformation, 1000*5);
    }

    
})

function showTable () {
    const ApiKey = 'a7c6ca3cbc2490b645dcb7daa84c800240e6ef8317fabdc6f46a5a68803264a3';
    const currencyApi = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,USDT,BSV,LTC,EOS,BNB,XTZ&tsyms=USD&api_key={${ApiKey}}`

    document.querySelectorAll('.items').forEach(e => e.remove());

    fetch(currencyApi)

    .then(response => {
        return response.json();
    })
    .then(data => {
        let dataRAW = data.RAW;
        let sumRAW = Object.entries(dataRAW);
        
        for (let i = 0; i < sumRAW.length; i++) {
            let el = sumRAW[i];

            let symbol = el[1].USD.FROMSYMBOL;
            let nameOfCurrent;

            let createLine = document.createElement('tr');
            createLine.id = 'items';

            let price = el[1].USD.PRICE;
            let fixedPrice = price.toFixed(2);

            let capit = el[1].USD.MKTCAP;
            let fCapit = capit.toFixed(2);
            let fixedCapit = fCapit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            let change = el[1].USD.CHANGEPCT24HOUR;
            let fixedChange = change.toFixed(3);

            createLine.innerHTML = `
            <td class="table-item">${nameOfCurrent}</td>
            <td class="table-item">${symbol}</td>
            <td class="value-table-item green">${fixedPrice} $</td>
            <td class="value-table-item">${fixedCapit} %</td>
            <td class="value-table-item red">${fixedChange} %</td>
            `
            document.getElementById('current-table').appendChild(createLine);
        }
    })
}

function rotateButton() {
    document.getElementById('refresh').classList.add('rotate-refresh');
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

            // createLine.innerHTML = `
            // <td class="table-item"></td>
            // <td class="table-item"></td>
            // <td class="value-table-item green">${fixedPrice} $</td>
            // <td class="value-table-item">${fixedCapit} %</td>
            // <td class="value-table-item red">${fixedChange} %</td>
            // `
            // document.getElementById('items').appendChild(createLine);
        }
    })
}
