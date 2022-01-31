// El objeto
const cryptoNetwork = {
	USDC: 'ERC20',
	BNB: 'BEP20',
	BTC: 'Bitcoin',
	ETH: 'Ethereum',
	WEB: 'Mintme',
};
// se obtiene el objeto por las llaves
var networkBlockchain = Object.keys(cryptoNetwork);

function networkData() {
	// un valor de prueba, en este caso el bnb
	 var currencySelected = 'BNB';
	 // se obtiene el index del objeto 
	 var outIndex = networkBlockchain.indexOf(currencySelected, 0); //debería ser '1'
	 // se le pasa el index y el objeto comparando el index he imprimiendo el resultado
	 return Object.values(cryptoNetwork)[outIndex]; //debería ser 'BEP20'
}