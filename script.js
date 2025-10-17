fetch('portfolio.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('crypto-list');
    if (!Array.isArray(data) || data.length === 0) {
      list.innerHTML = '<li>No cryptocurrencies found in portfolio.</li>';
      return;
    }
    // Clear any content
    list.innerHTML = '';
    data.forEach(crypto => {
      // Expecting keys: name, symbol, currentPrice (or price)
      const name = crypto.name || 'Unknown';
      const symbol = crypto.symbol || '';
      // To handle different naming in price key
      const price = crypto.currentPrice !== undefined ? crypto.currentPrice : (crypto.price !== undefined ? crypto.price : 'N/A');
      // Format price as USD currency
      const formattedPrice = price !== 'N/A' ? new Intl.NumberFormat('en-US', {style:'currency', currency:'USD'}).format(price) : 'N/A';

      const li = document.createElement('li');
      const nameSpan = document.createElement('span');
      nameSpan.classList.add('crypto-name-symbol');
      const textName = document.createElement('span');
      textName.textContent = name;
      const textSymbol = document.createElement('span');
      textSymbol.textContent = symbol;
      textSymbol.classList.add('crypto-symbol');
      nameSpan.appendChild(textName);
      nameSpan.appendChild(textSymbol);

      const priceSpan = document.createElement('span');
      priceSpan.classList.add('crypto-price');
      priceSpan.textContent = formattedPrice;

      li.appendChild(nameSpan);
      li.appendChild(priceSpan);

      list.appendChild(li);
    });
  })
  .catch(err => {
    const list = document.getElementById('crypto-list');
    list.innerHTML = '<li>Error loading portfolio data.</li>';
    console.error('Error fetching or parsing portfolio.json:', err);
  });