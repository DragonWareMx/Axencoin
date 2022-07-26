<link href='https://shoptoweb.com/AXEN/css/bootstrap.min.css' rel='stylesheet' type='text/css'>
<script src="https://shoptoweb.com/AXEN/js/jquery.min.js"></script>
<script src="https://shoptoweb.com/AXEN/web3/js/web3_3.0.min.js"></script>
<script src="https://shoptoweb.com/AXEN/ABI/ABI_AXN.js"></script>
<body style="text-align: center;">
	<div class="container">
		<div class="row">
			Contract:
<a href="#" id="contractAddress"></a>
<hr>
<h1 id=rio><a href="#" onclick="deploy()" class="btn-lg btn btn-success">DAILY AXN LIQUIFY TO GEN -> SEND TRANSACTION</a> <br> </h1>

</div>
</div>
<script>

const privKey = '1672ba0e38d363f2265ec0b4d29158c527711ad7098b07b78bb6ad68788c91d4';//
const addressFrom = '0x860bd89485fCa1075D9026c705Dc11680C797277';//

let contractAddress = '0x59a07b8e4d9273473e5ffbb8ebd22a5221055370';0x17aa84f4809edd481a219d7e10e6d0f5b4009d77
let rewardInterval = 86400;//1 dia 

web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed1.binance.org/'));//data-seed-prebsc-1-s1.binance.org:8545
 jQuery(document).ready(function() {
			jQuery('#contractAddress').attr('href','https://bscscan.com/address/'+contractAddress);
			jQuery('#contractAddress').html(contractAddress);
	 });


const deploy = async () => {
	contract = new web3.eth.Contract(ABI, contractAddress);
	let nextDate;
contract.methods.lastSentToContract().call(function(err, result){ if(err)console.log(err); else { 
	let lastSentToContract = result;
	 nextDate=lastSentToContract * 1000 + rewardInterval * 1000;//new Date(( )).toGMTString()

	let ahora = new Date().getTime();
	console.log(ahora+'->'+nextDate);
	 if(ahora >= nextDate){
	
	//First generate your transaction
	let tx_builder = contract.methods.sendAndLiquify();
	let encoded_tx = tx_builder.encodeABI();
	let transactionObject = {
	    gas: 300000,
	    data: encoded_tx,
	    from: addressFrom,
	    to: contractAddress
	};
	//Then you can sign the transaction, using the address and the private key of this specific address. When it is signed, you can send it to the node
	web3.eth.accounts.signTransaction(transactionObject, privKey, function (error, signedTx) {
        if (error) {
        	console.log(error);
    } else {
	console.log(`Transaction sended with hash: ${signedTx.transactionHash}`);
	
	web3.eth.sendSignedTransaction(signedTx.rawTransaction)
        .on('receipt', function (receipt) {
	        jQuery('#rio').html('AXNs SENT TO GEN :'+ receipt.transactionHash);
            console.log(
                  `Transaction successful with hash: ${receipt.transactionHash}`
				  );
    });
 }   
})
}
	}});

} 

//deploy();

</script>