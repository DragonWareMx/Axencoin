//const onboarding = new MetaMaskOnboarding();
let metamaskOK=false;
let chainIdX=false;//alert(chainId);
let web3OK=false;
checkMobile();
let coinAddress = '0xf6ada314f60972208f4d09c2b0af65bd26f35c27';//0xC5f1776F276c88b98B84D4c54f37724d4A8F2ea2
let USDT = '0x55d398326f99059fF775485246999027B3197955';
let oldAddress = '0x04dcc0b0CA187c4b1784f6F7607F21c2afb59894';


jQuery('#contractAddress').attr('href','https://bscscan.com/address/'+coinAddress);
let approved=false;

if (window.ethereum) { 
	try {     
	web3 = new Web3(window.ethereum);
	(async() => {await window.ethereum.enable();})();
	web3OK = true; 
	console.log("web3OK");
	checkNet();
	startApp();
	} catch (error) {console.log('Error web3'+error);}
	
	 } else {
		try {     
		web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed1.binance.org'));//https://bsc-dataseed1.binance.org
		console.log("web3 provider");
		//checkMetamask();
	} catch (error) {console.log('Error web3Provider'+error);} 

}


async function checkMetamask(){
		if( ! isMobile.any()){
			if (MetaMaskOnboarding.isMetaMaskInstalled()==true)
					{
						jQuery('.selAccount ').addClass('hidden');
						jQuery('.menu-item').find('#BNB_CONNECT').html('Metamask Installed!');
						checkNet();
						//getAccounts();
					} else {
				      chainIdX=false;	//alert(netId);
				      jQuery('.menu-item').find('#BNB_CONNECT').html('Install Metamask');
				      jQuery('.selAccount ').removeClass('hidden');//alert('1')
				      //jQuery('.purchaseArtSpace ').addClass('hidden');
				     // jQuery('#BNB_CONNECT').attr('href','#BNB_FORCE');
					}
		}			
					startApp();	
	}
	  
async function checkNet(){
			if (window.ethereum) {//
			const netId = await ethereum.request({ method: 'eth_chainId' });
			console.log(netId);
				chainId = netId; 
				//
				if(netId === '0x38'){//'0x61'97--- 0x38 56
					chainIdX=true;//alert(chainIdX+'oo');
					console.log('This page is BNB  network:'+netId);
					jQuery('#BNB_CONNECT').html('Connected to BSC ');
					
			      } else {
				      chainIdX=false;	//alert(netId);
				      //alert('This is wrong network: Please Connect to Binance Smart Chain');
				      jQuery('#BNB_CONNECT').html('Connect to BSC ');
				      jQuery('.selAccount ').removeClass('hidden');//alert('2')
				      
				      web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed1.binance.org'));//https://bsc-dataseed1.binance.org
					  
					  if (web3OK == await true){
					      addBinanceChain();
					       }
				  }
		}
		
}
async function updateHeader(){
	if( isMobile.Android() &&(await chainIdX==false) ) {
jQuery('#BNB_CONNECT').html('<div align=center>Connect</div>');
}
if( isMobile.iOS()) { jQuery(document).ready(function() {jQuery('#main').css('margin-top',80);});
if(await chainIdX==false){
//https://metamask.github.io/metamask-deeplinks/#
//alert('Due to Apple restrictions Wallet is not enabled on iOS devices');
jQuery('#BNB_CONNECT').html('<div align=center>Connect to BSC</div>');
} }//alert(await chainIdX+'xxx')!isMobile.any() &&
if( (await chainIdX==false) ) {
jQuery('#BNB_CONNECT').append('<div align=center>Connect to BSC</div>');
}
}
	  	async function bnbPrice(){
	     	try{
	     jQuery.getJSON("https://api.binance.com/api/v3/ticker/price?symbol=BNBBUSD", function(data){
			 		jQuery.each(data, function (index, value) {  
				 		if(index==='price') {
					 		bnb = value;
					 		//setTimeout( getNftPrice( bnb), 500000);	
					 		console.log('BNBBUSD: '+ bnb); 
					 		} 
			 		});
			});
			return await bnb;
		}catch(err)	{console.log('BNB ERR:'+err)}
		
		
		}
		
		async function getBnbPrice(){ return await bnbPrice(); console.log('call BNBBUSD: '+ bnb);}



async function startApp(){
		console.log("startApp");
		getAccounts();

		//(async() => {console.log('before start '+await bnb);bnb = await getBnbPrice();updateHeader();console.log('after start '+bnb);})();
		
		jQuery('#form-field-tokenToBuy').attr('disabled', true);
		
} 
        
		let account, accounts=[],receiver,balance; 
		let accountOK=false;
		let bnb,chainId;
		let contractCoin, contractCoinOld, decimalsOld  = Math.pow(10, 5);;
		let transactionHash;
		let price,priceWei,tokenName,tokenSymbol, decimals = Math.pow(10, 18),totBalToken;
		
		
	async	function getAccounts(){
		
		if (MetaMaskOnboarding.isMetaMaskInstalled()==true){}
		try{
		accounts = await window.ethereum.request({method: "eth_requestAccounts"});
		account = accounts[0];
		
			  if (accounts.length == 0) {
			    console.log("No account found! Make sure the Wallet client is configured properly.");
			    jQuery('.selAccount ').removeClass('hidden');
			    account='';
			    jQuery('.noPurchases').removeClass('hidden');
			   // return;
			   // account = '0x08B5a2F083af0cF2aA596bB48f49a50507bB1dfa';
			   jQuery('#qrcode').html('Connect wallet');
			  }else{
				  accountOK=true;
				  //alert(accountOK);
				  web3.eth.defaultAccount = account;
				  console.log('Account: ' +  web3.eth.defaultAccount+'-bool:'+accountOK); 
				  jQuery('.referralLink').html(''+account+'');
				  jQuery('#BNB_CONNECT').html(account.substr(0, 9)+'...'+account.substr(36, 40));

				  jQuery(document).ready(function() { generate(); console.log(jQuery('#receive').val(), ' ***VALOR')});
			 }
			getCoinInfo(await account);
		
		}catch(err){jQuery('#qrArea').append('<h3>Connect wallet to create your QR</h3>');jQuery('#qrcode').addClass('hidden');}
		
		}
			
async	function getCoinInfo(owner){
		contractCoin = await new web3.eth.Contract(ABI, coinAddress);
		contractCoinOld = await new web3.eth.Contract(ABI_ERC20, oldAddress);

	//jQuery("#contractaddress").html('<a href=https://bscscan.com/token/'+coinAddress+' target=_blank>'+coinAddress+'</a>');
	//jQuery("#contractaddress").html(coinAddress);
/*	jQuery.getJSON("https://api.binance.com/api/v3/ticker/price?symbol=BNBUSD", function(data){
			 		jQuery.each(data, function (index, value) {  
				 		if(index==='price') {
				jQuery('span:contains("Total Dogedi Staked (usd):")').html('Total Dogedi Staked (usd): '+(Number(value)*Number(totalSupply)));	 		
					 		console.log('BNB-USD'+value);
				 		} //alert(index+'-'+value);
			 		});//alert(bnb);
			});*/

	decimals  = Math.pow(10, 18);
	decimalsOld  = Math.pow(10, 5);
	
	contractCoin.methods.totalSupply().call(function(err, result){ if(err)console.log(err); else { 
	let totalSupply  = result / decimals;
	jQuery('.totalSupply').html(totalSupply.toLocaleString(undefined, { minimumFractionDigits: 0 })+' AXN');   
	    
	} });
	contractCoin.methods.name().call(function(err, result){ if(err)console.log(err); else {tokenName = result;}; });
	contractCoin.methods.symbol().call(function(err, result){ if(err)console.log(err); else {tokenSymbol = result;}; });
	
	contractCoin.methods.getTotalRewardsDistributed().call(function(err1, result1){ if(err1)console.log(err1); else { 
	let boh1 = web3.utils.fromWei( result1, 'ether');
	console.log('.totRewards '+boh1)
	jQuery('.totRewards ').html(Number(boh1).toLocaleString(undefined, { minimumFractionDigits: 2 })+' AXN');
	}
	});
	if(accountOK==true){
			getTokenBalance();
	}//
	
	}

async function getTokenBalance(){
	totBalToken = contractCoin.methods.balanceOf(account).call();
	let totBalTokenOld = contractCoinOld.methods.balanceOf(account).call();
	let allowance = contractCoinOld.methods.allowance(account,coinAddress).call();
	//price = contractCoin.methods.tokenPrice().call();
		try{
		totBalToken = await totBalToken;//
		jQuery('#totalAXN ').html((Math.round(await totBalToken / decimals * 1000) / 1000).toLocaleString(undefined, { minimumFractionDigits: 2 })+'');// $AXN
		jQuery('#form-field-tokenToStake').val(totBalToken / decimals).toLocaleString();	//alert( tokenName + totBalToken);
		
		//priceWei = await price;///alert(allowance);
		//price = Number(await price) / Number(decimals);
		price = Number(priceWei) / Number(decimals);
		jQuery('#tokenPrice ').html(price+' BNB');
		
		if(Number(await totBalToken)>0){ calculateReward();
			//ljQuery('#claimBtn ').attr('onclick','claimStakedToken()');
			jQuery('#unStakeBtn ').attr('disabled','true');///emergengency
			jQuery('#unStakeBtn ').find('span').html('Claim Amount').fadeOut().fadeIn();
			//jQuery('#form-field-tokenToStake ').val(await stakeBalance / decimals);
			jQuery('#unStakeBtn ').removeClass('hidden');
		} else{
			
		}

//SWAPPP

totBalTokenOld = await totBalTokenOld;
		allowance = await allowance;
		if(totBalTokenOld > 0 ){
		jQuery('#tokenToSwap').val(totBalTokenOld / decimalsOld);	
		jQuery('#swapArea ').removeClass('hidden');
		
		if(await allowance > (1*decimalsOld)){
			jQuery('#tokenToSwap').val(Math.min(parseInt(allowance),parseInt(totBalTokenOld)) / decimalsOld);
			//jQuery('#form-field-tokenToStake ').prop('disabled','true');
			jQuery('#approveToken').addClass('hidden');
			jQuery('#swapToken ').removeClass('hidden');
			approved=true;
		} else{
			//jQuery('#approveToken ').html('Approve');
			jQuery('#approveToken ').removeClass('hidden');
			//jQuery('#approveToken ').attr('onclick','approveToken()');
			approved=false;
		}
		}else {jQuery('#stakeTokenBtn ').prop('disabled',true).fadeOut();}
		console.log('allowance: '+allowance+'-'+approved);
		console.log('Balance OLD AXN: '+totBalTokenOld);
		
		


	}catch(err){}
	
	contract = await new web3.eth.Contract(ABI, USDT);
	contract.methods.balanceOf(coinAddress).call(function(err, result){ if(err)console.log(err); else {
		console.log('.contractbalance '+result)
		jQuery(".contractbalance").html(''+Number(web3.utils.fromWei(result, 'ether')).toLocaleString(undefined, { minimumFractionDigits: 2 }) +' USDT');
		};
	});
	/* var balance = web3.eth.getBalance( coinAddress, function (error, result) {
        if (!error) {
	        balance = web3.utils.fromWei(result, 'ether');
          jQuery(".contractbalance").html(''+Number(balance).toFixed(4)+' BNB');
        };
        
      });*/
      
}

	
async function temporizador(){
	let allowance = contractCoin.methods.allowance(account,coinAddress).call(function(err, result){ if(err)console.log(err); else {
	allowance = result;
	if(allowance >= 0){
			jQuery('.spinner').addClass('hidden');	
			jQuery(".wait").addClass('hidden');
			jQuery('#approveToken').addClass('hidden');
			jQuery('#swapToken ').removeClass('hidden');
			jQuery('#swapToken ').css('display','inline');
			jQuery('#swapToken ').fadeOut(200).fadeIn(200);

	}else{
		
		setTimeout(function(){temporizador();}, 1000);
		}
	}; 
	});
	
}

async function calculateReward(){
	
		
contractCoin.methods.getAccountRewardsInfo(account).call(function(err, result){ if(err)console.log(err); else { 
	let boh = web3.utils.fromWei( result[4], 'ether');
	//jQuery('h2:contains("TOTAL REWARDS RECEIVED")').html('TOTAL REWARDS RECEIVED: '+boh+' BNB');
	jQuery('#tokenReward').html((Number(boh)).toLocaleString(undefined, { minimumFractionDigits: 5 })+' AXN');
	 if(Number(result[5]>0)){
	jQuery('#earningArea ').removeClass('hidden');
	 let nDate=new Date(result[5]*1000).toGMTString(); jQuery('#lastReceived').html(nDate); 
	 nDate=new Date(result[6]*1000).toGMTString(); jQuery('span:contains("next date dividend received")').html('next date dividend received: '+ nDate); 
	 
	 jQuery('#lastReceivedNum').html(result[7]); 
	 
	 }
	 
	 


	}
	});

/*	contractCoin.methods.claimCalculateOwnerReward(account).call(function(err, result){ if(err)console.log(err); else {
		if(Number(result)>0){
			console.log('BNB REWARD: '+result)
			jQuery('.rewardDiv').removeClass('hidden');
			rewards = web3.utils.fromWei(result, 'ether')+' BNB';
			//jQuery('#tokenReward').html('Staked Tokens:'+ (totBalToken / decimals)+' <br>Token Reward: '+ Number(result / decimals).toLocaleString()+' BNB');
		//	jQuery('#tokenReward').html(rewards+' BNB');
			
jQuery('#totalAXN ').html((Math.round( totBalToken / decimals * 1000) / 1000).toLocaleString(undefined, { minimumFractionDigits: 0 })+'');
			}
		}; });
	
	contractCoin.methods.claimCalculateRewardFraction(account).call(function(err, result){ if(err)console.log(err); else {
		if(Number(result)>0){
			console.log('BNB REWARD 15 MIN: '+result)
			jQuery('.rewardDiv').removeClass('hidden');
		let	rewards2 = web3.utils.fromWei(result, 'ether')+'';
			//jQuery('#tokenReward').html('Staked Tokens:'+ (totBalToken / decimals)+' <br>Token Reward: '+ Number(result / decimals).toLocaleString()+' BNB');
			jQuery('#tokenReward').html(Number(rewards2).toLocaleString(undefined, { minimumFractionDigits: 2 })+' BNB');
			
jQuery('#totalAXN ').html((Math.round( totBalToken / decimals * 1000) / 1000).toLocaleString(undefined, { minimumFractionDigits: 0 })+'');
			}
		}; });	
		
		contractCoin.methods.getReferralRewards(account).call(function(err1, result1){ if(err1)console.log(err1); else {
			let boh = Number(web3.utils.fromWei(result1, 'ether')).toFixed(2);
			console.log('referral rewards: '+result1);
			jQuery('#referralReward').html(Number(boh).toLocaleString(undefined, { minimumFractionDigits: 2 })+' BNB');
			
		}; });
		
		contractCoin.methods.getEarnedBNB(account).call(function(err, result3){ if(err)console.log(err); else {
			let boh = Number(web3.utils.fromWei(result3, 'ether')).toFixed(2);
			jQuery("#earned").html(Number(boh).toLocaleString(undefined, { minimumFractionDigits: 2 })+' BNB');
						
		}; });
		*/
	}
	
	
jQuery(document).on('click', '#claimBtnAll', function(e) {
	e.preventDefault();
	claimAllToken();
	});
	
async function claimAllToken(){//You will claim : '+rewards+'. \nWarning: \nThe "Claim" button only works ONCE, once clicked and accepted in Metamask you will leave the Pool with the actual accumulated total. \n
		if (confirm('Do you want withdraw Now?')) {
	let transfer = contractCoin.methods.claimAllToken().send({from: account })//, gas: '34373030303030'
		.once('sending', function(payload){ console.log('Sending : '+payload);jQuery('.spinner').removeClass('hidden'); jQuery('a[href = "#enjoyPrivateSale"]').addClass('hidden');})
		.once('sent', function(payload){ console.log('Sent : '+payload);jQuery('#unStakeBtn ').fadeOut(200); })
		.once('transactionHash', function(hash){ 
			transactionHash =hash; loadDiv();
			console.log("Got the transaction receipt: ", transactionHash);
		})
		.once('receipt', function(receipt){ console.log('Receipt : '+receipt) })
		.on('confirmation', function(confNumber, receipt, latestBlockHash){ console.log('Confirmation receipt : '+receipt); })
		.on('error', function(error){ console.log("Errore: ", error); jQuery("#buyTxtCoin").html(error); alert(error.message);})
		.then( function(receipt){ 
			console.log("Submitted transaction with hash: ", transactionHash);
			jQuery('.spinner').addClass('hidden');	
			jQuery(".wait").addClass('hidden');
			alert('Rewards Claimed successfully');	
			setTimeout(function(){ getTokenBalance()} ,300);
			jQuery('#totalAXN').html('0');
			jQuery('.rewardDiv').addClass('hidden');
      	});
		} else {
//  console.log('Thing was not saved to the database.');
	}
}	

jQuery(document).on('click', '#claimBtn', function(e) {
	e.preventDefault();
	claimToken();
	});
	
async function claimToken(){//You will claim : '+rewards+'. \nWarning: \nThe "Claim" button only works ONCE, once clicked and accepted in Metamask you will leave the Pool with the actual accumulated total. \n
	//	if (confirm('Do you want withdraw Now?')) {
		let AMOUNT1 =((jQuery('#form-field-claim').val()*decimals)).toString(); 
	let transfer = contractCoin.methods.claimToken(AMOUNT1).send({from: account })//, gas: '34373030303030'
		.once('sending', function(payload){ console.log('Sending : '+payload);jQuery('.spinner').removeClass('hidden');})
		.once('sent', function(payload){ console.log('Sent : '+payload);jQuery('#unStakeBtn ').fadeOut(200); })
		.once('transactionHash', function(hash){ 
			transactionHash =hash; loadDiv();
			console.log("Got the transaction receipt: ", transactionHash);

		})
		.once('receipt', function(receipt){ console.log('Receipt : '+receipt) })
		.on('confirmation', function(confNumber, receipt, latestBlockHash){ console.log('Confirmation receipt : '+receipt); })
		.on('error', function(error){ console.log("Errore: ", error); jQuery("#buyTxtCoin").html(error); alert(error.message);})
		.then( function(receipt){ 
			console.log("Submitted transaction with hash: ", transactionHash);
			jQuery('.spinner').addClass('hidden');	
			jQuery(".wait").addClass('hidden');
			alert('Rewards Claimed successfully');	
			setTimeout(function(){ getTokenBalance()} ,300);
			jQuery('#totalAXN').html(totBalToken - AMOUNT1);
			jQuery('.rewardDiv').addClass('hidden');
      	});
	//	} else {}
//  console.log('Thing was not saved to the database.');
	
}
	
jQuery(document).on('click', '#sendToken', function(e) {
	e.preventDefault();
	sendToken();
	});
	
async function sendToken(){
	let receiver;
	if(jQuery('#receiver').val()!==''){
		
		 receiver = web3.utils.toChecksumAddress(jQuery('#receiver').val().replace('/?rec=',''));		
	}else{
		 receiver = '0x0000000000000000000000000000000000000000';alert('insert a wallet');return;
	}
	
	let amount = ((jQuery('#form-field-tokenToSend').val()*decimals)).toLocaleString('fullwide', {useGrouping:false});
	//let AMOUNT2 = (parseInt(AMOUNT2)*decimals).toLocaleString('fullwide', {useGrouping:false}); 
	//console.log('tokens:'+AMOUNT2);
	console.log('amount:'+amount);
	//alert(amount+'---'+tokenToBuy+'---'+priceWei);
	//tokenToBuy = tokenToBuy.toLocaleString('fullwide', { useGrouping: false });
	//	if( Number(starting_balance) > Number(amount) ){
let transfer = contractCoin.methods.transfer(receiver,amount).send({from: account })
		.once('sending', function(payload){ console.log('Sending : '+payload);jQuery('.spinner').removeClass('hidden'); jQuery('a[href = "#enjoyPrivateSale"]').addClass('hidden');})
		.once('sent', function(payload){ console.log('Sent : '+payload);jQuery('#unStakeBtn ').fadeOut(200); })
		.once('transactionHash', function(hash){ 
			transactionHash =hash; loadDiv();
			console.log("Got the transaction receipt: ", transactionHash);
		})
		.once('receipt', function(receipt){ console.log('Receipt : '+receipt) })
		.on('confirmation', function(confNumber, receipt, latestBlockHash){ console.log('Confirmation receipt : '+receipt); })
		.on('error', function(error){ console.log("Errore: ", error); jQuery("#buyTxtCoin").html(error); alert(error.message);})
		.then( function(receipt){ 
			console.log("Submitted transaction with hash: ", transactionHash);
			jQuery('.spinner').addClass('hidden');	
			jQuery(".wait").addClass('hidden');
			alert('AXN SENT successfully');	
			setTimeout(function(){ getTokenBalance()} ,300);
      	});
}
	
jQuery(document).on('click', '.addToWallet', function(e) {
e.preventDefault();
addToWallet(e);

});
	function addToWallet(e){//add token to wallet
		
		web3.currentProvider.sendAsync({
	    method: "wallet_watchAsset",
		params: {
		type: "ERC20",
		options: {
		address: coinAddress,// e.token.address,
		symbol: tokenSymbol,
		decimals: 18,
		image: "https://axencoin.finance/iconoAxenCoin.png"//
				}
			}
		});/* metodo aggiornato ma non funzionante su mobile
		ethereum.request({
		method: 'wallet_watchAsset',
		params: {
	    type: 'ERC20',
	    options: {
	      address: coinAddress,// e.token.address,
		symbol: tokenSymbol,
      decimals: 10,
    },
  },
})
  .then((success) => {
    if (success) {
      console.log('MJC successfully added to wallet!')
    } else {
      throw new Error('Something went wrong.')
    }
  })
  .catch(console.error)
  */
    }      
jQuery(document).on('click', '#buyToken', function(e) {	// alert('Mining not yet Open'); return;
	e.preventDefault();
	
	let amount = ((jQuery('#form-field-bnbToBuy').val()*decimals)).toLocaleString('fullwide', {useGrouping:false});
	AMOUNT = (parseInt(AMOUNT)*decimals).toLocaleString('fullwide', {useGrouping:false}); 
	console.log('tokens:'+AMOUNT);
	console.log('amount:'+amount);
	//alert(amount+'---'+tokenToBuy+'---'+priceWei);
	//tokenToBuy = tokenToBuy.toLocaleString('fullwide', { useGrouping: false });
	//	if( Number(starting_balance) > Number(amount) ){
let transfer = contractCoin.methods.buyToken().send({from: account , value: amount })
		.once('sending', function(payload){ console.log('Sending : '+payload);jQuery('.spinner').removeClass('hidden');})
		.once('sent', function(payload){ console.log('Sent : '+payload) })
		.once('transactionHash', function(hash){ 
			transactionHash =hash; loadDiv();
			console.log("Got the transaction receipt: ", transactionHash);
			

		})
		.once('receipt', function(receipt){ console.log('Receipt : '+receipt) })
		.on('confirmation', function(confNumber, receipt, latestBlockHash){ console.log('Confirmation receipt : '+receipt); })
		.on('error', function(error){ console.log("Errore: ", error); jQuery("#buyTxtCoin").html(error); alert(error.message);})
		.then( function(receipt){ 
			//alert('Congratulations! You got '+ (tokenToBuy.toLocaleString()) +' '+tokenSymbol);
			console.log("Submitted transaction with hash: ", transactionHash);
			jQuery('.spinner').addClass('hidden');	
			jQuery(".wait").addClass('hidden');
			getTokenBalance();
      	});
			//}catch(err){alert(err)}
	    		
	 //   }	else{ alert('Not enough BNB in Wallet');}	
});


function calcToken(){ 
				let am = jQuery('#form-field-bnbToBuy').val();
				 am = am.replace(/,/g,".");
				 	if(Number(am)>0){
				contractCoin.methods.getAmountOfTokenForEth(web3.utils.toWei(Number(am).toString(), 'ether')).call(function(err, result){ if(err)console.log(err); else { 
				let tokenAmount = Number(am) / result; 
				console.log('calc token'+am +'-'+ result);
				AMOUNT = tokenAmount;
				jQuery('.tokenCalc').removeClass('hidden');
				jQuery('.tokenCalc').fadeOut().fadeIn();//.toFixed(8));//;
				jQuery('#tokenToBuy').val((Number(web3.utils.fromWei(result, 'ether'))*0.95).toLocaleString(undefined, { minimumFractionDigits: 0 })+' AXN');//totBalToken;
	 				}
				
				});
}
}


async function approveToken(){ 
//	let tokenToBuy = AMOUNT;//jQuery('#tokenToBuy').val()
	let T = ((jQuery('#tokenToSwap').val()*decimalsOld)).toLocaleString('fullwide', {useGrouping:false});
	stakingVal = T;
	//let T = Number(totBalToken).toString();
	let transfer = contractCoinOld.methods.approve(coinAddress,''+ T+ '').send({from: account})
		.once('sending', function(payload){ console.log('Sending : '+payload);jQuery('.spinner').removeClass('hidden'); jQuery('a[href = "#enjoyPrivateSale"]').addClass('hidden');})
		.once('sent', function(payload){ console.log('Sent : '+payload);
			jQuery('#stakeTokenBtn ').attr('disabled',true).fadeOut(); 
			jQuery('#stakeTokenBtn ').html('Approving Staking Dogedi');
			})
		.once('transactionHash', function(hash){ 
			transactionHash =hash;
			console.log("Got the transaction receipt: ", transactionHash);
			jQuery('.spinner').removeClass('hidden');

		})
		.once('receipt', function(receipt){ console.log('Receipt : '+receipt) })
		.on('confirmation', function(confNumber, receipt, latestBlockHash){ console.log('Confirmation receipt : '+receipt); })
		.on('error', function(error){ console.log("Errore: ", error); jQuery("#buyTxtCoin").html(error); alert(error.message);})
		.then( function(receipt){ 
			console.log("Submitted transaction with hash: ", transactionHash);
			setTimeout(function(){temporizador(); }, 5000);
      	});
	
	}
	
async function temporizador(){
	let allowance = contractCoin.methods.allowance(account,coinAddress).call(function(err, result){ if(err)console.log(err); else {
	allowance = result;
	if(allowance >= 0){
			jQuery('.spinner').addClass('hidden');	
			jQuery(".wait").addClass('hidden');
			jQuery('#approveToken').addClass('hidden');
			jQuery('#swapToken ').removeClass('hidden');
			jQuery('#swapToken ').css('display','inline');
			jQuery('#swapToken ').fadeOut(200).fadeIn(200);

	}else{
		
		setTimeout(function(){temporizador();}, 1000);
		}
	}; 
	});
	
}
async function swapToken(){
	let T = ((jQuery('#tokenToSwap').val()*decimalsOld)).toLocaleString('fullwide', {useGrouping:false});
	console.log(T);
	let transfer = contractCoin.methods.swapToken().send({from: account})
		.once('sending', function(payload){ console.log('Sending : '+payload);jQuery('.spinner').removeClass('hidden');})
		.once('sent', function(payload){ console.log('Sent : '+payload); jQuery('#stakeTokenBtn ').attr('disabled',true).fadeOut(); })
		.once('transactionHash', function(hash){ 
			transactionHash =hash; loadDiv();
			console.log("Got the transaction receipt: ", transactionHash);
		})
		.once('receipt', function(receipt){ console.log('Receipt : '+receipt) })
		.on('confirmation', function(confNumber, receipt, latestBlockHash){ console.log('Confirmation receipt : '+receipt); })
		.on('error', function(error){ console.log("Errore: ", error); jQuery("#buyTxtCoin").html(error); alert(error.message);})
		.then( function(receipt){ 
			console.log("Submitted transaction with hash: ", transactionHash);
			jQuery('.spinner').addClass('hidden');	
			jQuery(".wait").addClass('hidden');
		/*	jQuery('#totalWHALE ').find('span').html('TOKENs STAKED').fadeOut(200).fadeIn(200);
			jQuery(".addToWallet").removeClass('hidden');
			jQuery('#unStakeBtn ').removeClass('hidden');
			jQuery('#unStakeBtn ').fadeOut(200).fadeIn(200);
			*/
			getTokenBalance();
			getCoinInfo(account);
			alert('Congratulations! You\'ve finalized you Token Swap');
//window.top.location.reload();			
			setTimeout(function(){ getTokenBalance()} ,800);
      	});
	
}


function loadDiv(){
			
				jQuery("#contractBuyBtn").attr('href',"https://bscscan.com/tx/"+transactionHash+"");
				jQuery(".e-form__buttons").prop('disabled', true);
				jQuery(".confirmationDiv").removeClass('hidden');
				jQuery(".tokenSymbol").html(tokenSymbol);
				jQuery(".tokenName").html(tokenName);
				//jQuery(".form-field-tokenToBuy").html(AMOUNT.toLocaleString()+' '+tokenSymbol.toLowerCase());
				//jQuery("#confirmText").append(AMOUNT.toLocaleString()+' '+tokenSymbol.toLowerCase());
				
		}  
		
 async function addBinanceChain() {
try {     
        const data = [{
            chainId: '0x38',//'0x61'97--- 0x38 56
            chainName: 'Binance Smart Chain',
            nativeCurrency:
                {
                    name: 'BNB',
                    symbol: 'BNB',
                    decimals: 18
                },
            rpcUrls: ['https://bsc-dataseed1.binance.org/'],//https://bsc-dataseed1.binance.org/. https://bsc-dataseed.binance.org/
            blockExplorerUrls: ['https://bscscan.com/'],
        }]
        /* eslint-disable */
        const tx = await ethereum.request({method: 'wallet_addEthereumChain', params:data}).then((result) => {
	        window.top.location.reload();
	       }).catch((error) => {
		   	console.log('switch error'+error);
  			});//ethereum.request(
        if (tx) {
            console.log('switch ok'+tx);
			
        }
        accounts = await window.ethereum.request({method: "eth_requestAccounts"});
        } catch (error) {
        }
    }
    
jQuery(document).on('click', '#BNB_CONNECT', function(e) {
					if( isMobile.Android()  ) {
					window.location.href='https://link.trustwallet.com/open_url?coin_id=60&url='+window.location.href+'&c=56&to=c60';
					return;
					}
					if( isMobile.iOS()) { //https://metamask.github.io/metamask-deeplinks/#
					let abc = window.location.href.replace('https://', '');
					window.location.href='https://metamask.app.link/dapp/'+abc;
					return;
					}
			
		        e.preventDefault();	
		        
				let linkZ = 'wallet.php';
				window.top.jQuery('#DIV-MODAL').html('');
				//alert();
				jQuery('#IFRAME-MODAL').removeClass('hidden');
	        	window.top.jQuery('#IFRAME-MODAL').attr('src',linkZ);
	        	window.top.jQuery('#IFRAME-MODAL').css({height: window.top.innerHeight});
	        	window.top.jQuery('#IFRAME-MODAL').removeClass('hidden');
				getAccounts()
	        	//jQuery('#wallet-modal').modal('toggle');
				//jQuery('#wallet-modal').modal('show');
	        	/*jQuery.magnificPopup.open({
					  items: {
					    src: '#myModal'
					  },
					  callbacks: {
				    open: function() {
				jQuery('#IFRAME-MODAL').removeClass('hidden');
				    },
				    close: function() {
				jQuery('#IFRAME-MODAL').addClass('hidden');    
				}
				  },
					 type: 'inline'
					});*/
});


jQuery('#qrcode').empty();

// Set Size to Match User Input
jQuery('#qrcode').css({
'width' : jQuery('.qr-size').val(),
'height' : jQuery('.qr-size').val()
})

//https://metamask.app.link/send/0x3Fa85dF3fbC50A2ABCECf00Db6c75BfCa058d492@97/transfer?address=0xc1556Af1e89Bd643004199d8BD26a3850d1Ee1ca&uint256=1e18
function download(){
var download = document.getElementById("downloader");
        var image = document.getElementById("canvas").toDataURL("image/png")
                    .replace("image/png", "image/octet-stream");
        download.setAttribute("href", image);
 //   document.getElementById("downloader").download = "image.png";
   // document.getElementById("downloader").href = document.getElementById("qrcode").toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
}
async function generate(){
	if(chainIdX){
	//https://metamask.app.link/send/0x201b1bf0687efe7b1866cce3e7e921f34b2f5a8f@97/transfer?address=0x201b1bf0687efe7b1866cce3e7e921f34b2f5a8f&uint256=1e18	
	let Q = Number(jQuery('#receive').val());
	if(Q=='')Q=1;
	jQuery('#qrcode').empty();
	jQuery('#downloader').removeClass('hidden');
	jQuery('.qr-url').removeClass('hidden');
	//jQuery('.qr-url').val('https://metamask.app.link/send/'+coinAddress+'@'+97+'/transfer?address='+ web3.utils.toChecksumAddress(await account)+'&uint256='+Q+'e18');
	jQuery('.qr-url').val('https://metamask.app.link/dapp/https://axencoin.finance/envia?address='+ web3.utils.toChecksumAddress(await account)+'&uint256='+Q);

	// Generate and Output QR Code
	jQuery('#qrcode').qrcode({width: jQuery('.qr-size').val(),height: jQuery('.qr-size').val(),text: jQuery('.qr-url').val()});
	jQuery("canvas").css('border', '10px solid #fff'); jQuery("canvas").addClass('rio');jQuery("canvas").attr("id","canvas")
	//dataURL = jQuery("canvas").toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
	}else{
		jQuery('#qrArea').append('<h3>Connect wallet to create your QR</h3>');
	}
}




function checkMobile(){
	isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

}
if( isMobile.any() &&(chainId==false) ) {
jQuery('#BNB_CONNECT').html('<div align=center><a href=https://link.trustwallet.com/open_url?coin_id=60&url='+window.location.href+'&c=56&to=c60><img src=https://theartclub.io/web/images/trustwallet-binance.png width=125 style=padding-top:10px sizes="(max-width: 409px) 100vw, 409px"></a></div>');
}
if( isMobile.iOS() ) { 
//alert('Due to Apple restrictions Wallet is not enabled on iOS devices');
jQuery('#main').css('margin-top',80);
}

jQuery(document).on('keyup', '#form-field-bnbToBuy', function(e) { calcToken();});
jQuery(document).on('click', '#approveToken', function(e) {approveToken()});
jQuery(document).on('click', '#swapToken', function(e) {swapToken()});
jQuery(document).on('click', '#btn-download', function(e) {download()});

let searchParams = new URLSearchParams(window.location.search)
let ref = searchParams.get('address');
jQuery(document).ready(function() {jQuery('#receiver').val(ref); jQuery('#receive').val(searchParams.get('uint256')); });
jQuery(document).on('keyup', '#receive', function(e) { generate();});



