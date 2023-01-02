const BCASH = '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_lp","type":"address"}],"name":"addLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_caller","type":"address"}],"name":"addMintingCaller","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressToLastUnstake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"availableIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAmount","type":"uint256"}],"name":"changeCooldown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAmount","type":"uint256"}],"name":"changeMaxStakers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cooldown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"index","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lp","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxStakers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_to","type":"address[]"},{"internalType":"uint256[]","name":"_amount","type":"uint256[]"}],"name":"mintBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lp","type":"address"}],"name":"removeLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_caller","type":"address"}],"name":"removeMintingCaller","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakerCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakerToIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unStake","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
const BCASH_ADDRESS = "0x4BA16DaF8ed418deD920C66e45cc3eaFFDE53Ac7";
const MGR = '[{"inputs":[],"name":"flipPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_stakoor","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"manualTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_stakoor","type":"address"},{"internalType":"address","name":"_to","type":"address"}],"name":"manualTransferAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"","type":"bytes"}],"name":"performUpkeep","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_stakoor","type":"address"},{"internalType":"bool","name":"_excluded","type":"bool"}],"name":"setExcluded","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAmount","type":"uint256"}],"name":"setCooldown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAmount","type":"uint256"}],"name":"setMinTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_stakoor","type":"address"},{"internalType":"address","name":"_payee","type":"address"}],"name":"setPayee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAmount","type":"uint256"}],"name":"setTimestamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_cooldown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_minTransfer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_timestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"","type":"bytes"}],"name":"checkUpkeep","outputs":[{"internalType":"bool","name":"upkeepNeeded","type":"bool"},{"internalType":"bytes","name":"performData","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"excludeAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakoors","outputs":[{"internalType":"address[29]","name":"","type":"address[29]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakoors","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakoorToPayee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"timeUntilNextTransfer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]';
const MGR_ADDRESS = "0x750fa97B017deFE7Dc7ca36944512a32E0bfF1eD";
let provider;
let signer;
let currentNetwork;
let merkleProof
let accounts;
const defaultNetwork = '0xa86a';
const { ethereum } = window;

const stakoors = ["0x6198d3f701645DF383C19766C50D939d1aA7B6Ae",
                  "0xAF11c8336f4b0d6A91eb96Db58f5fa1783fce26E",
                  "0x11bc52a5B56817b8962E919eB5451f32C696cFC1",
                  "0x1b322cc442543796851cAF045849903315Add199",
                  "0x5ef50cC88Db3e6cc5Cd0b7D865aBE30Ff9beE10f",
                  "0x5cE163646a36B7fBfA702D56211691F695DcCCc9",
                  "0x18Afa29c73E685590609D3f1d5Bd375AaD9CD6A6",
                  "0xb77677b4a5a3C2B5D533c61c33cb3BCD78Fb9951",
                  "0x655541Fe4d9E21B9039720FCa8ee2750Ee1dC96D",
                  "0xb7F2D765728a4383b2492E7a6EB0542498701161",
                  "0xA8f3ba358d92Aa5A6428A4AfC7a293A013109fBe",
                  "0xF7fC6CD91A39a945CB95aCe30c2f990E2D727297",
                  "0x9B6c5efC97D4C7735e83E7724B20519997Aa4aDD",
                  "0xA01dB74a897183Ecf7a9c350c0AB5278F26274ec",
                  "0xE2e08dA26a2668019fC6f791BB32583212388BD9",
                  "0xcAcA417700e0eD56424003D2D6e6d1367C471700",
                  "0xF223e10A40717b705EF060fc8aF3b0E9eE4e2E6E",
                  "0x199271a8e94f693A316b1534D1A0AE39180B39B8",
                  "0xeCaF031Bbc664ac2DF917019Ba76c7FFA8112015",
                  "0x6a5E1cf2Fc4eAd0DC673D0E7bB63467abCCDf97e",
                  "0xeEA6E71BbEB5E9869EB5b598D019C20eb6D238ba",
                  "0xF960259fa9e88936573422Ddb6d69fB88994e37C",
                  "0xd01255450E39D081Cd8645f18C4998908b61291E",
                  "0x186cEEbff3390c47EaeE35f7D6221E427efE7E66",
                  "0xceAcBA1F445Fd56AE6D77F8f76FBd1a0Aec4c742",
                  "0x168a93436E9b3813578527f70947DB14eb9C85C3",
                  "0xF364705eFCe1f1e502fBeA43675b648Ca95D94a6",
                  "0x7BD504417FC499B54C8f2aAC5966285D435a105f",
                  "0x523a25F504A56286940FdDFc8fCbf8E39d19cc06"];

const RPC = 'https://api.avax.network/ext/bc/C/rpc';

// Solution from https://labeebklatif.medium.com/js-number-tofixed-without-rounding-4da4207ba146
Number.prototype.toFixedNoRound = function (precision = 1) {
    const factor = Math.pow(10, precision);
    return Math.floor(this * factor) / factor;
}

const getBalances = async () => {
    const t = new ethers.providers.JsonRpcProvider(RPC);
    let contract = new ethers.Contract(BCASH_ADDRESS, BCASH, t);

    $("#balanceTable").empty();
    $("#balanceTable").append( `<colgroup>
                                    <col style="width:45%">
                                    <col style="width:55%">
                                </colgroup>
                                <tr id="tableHead">
                                    <td>
                                        Contract Index
                                    </td>
                                    <td>
                                        Balance
                                    </td>
                                </tr>`);

    for(let i = 0; i < stakoors.length; i++) {
        let balance = Number(await contract.balanceOf(stakoors[i]));
        $("#balanceTable").append(`<tr><td>Stakoor #${i}</td><td>${(balance / 10**18).toFixedNoRound(3)}</td></tr>`);
    }

}

const getTimeUntilTransfer = async () => {
    const t = new ethers.providers.JsonRpcProvider(RPC);
    let contract = new ethers.Contract(MGR_ADDRESS, MGR, t);

    let timeLeft = Number(await contract.timeUntilNextTransfer());
    $("#timeUntilTransfer").text(formatTime(timeLeft));
}

function formatTime(sec) {
    // time conversion from https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
    let hours = ~~(sec / 3600);
    let minutes = ~~((sec % 3600) / 60);
    let seconds = ~~sec % 60;

    // Output the result in an element with id="demo"
    let timeString = hours + "h:" + minutes + "m:" + seconds + "s";

    return timeString;
}

/* web3 code borrowed and modified from ftso.alexdupre.com */
const networks = {
    '0xa86a': {
        chainId: '0xa86a',
        chainName: 'Avalanche',
        nativeCurrency: { decimals: 18, symbol: 'AVAX' },
        rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
        blockExplorerUrls: ['https://snowtrace.io'],
    },
}

async function checkWeb3() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('Web3 provider is installed!')
        provider = new ethers.providers.Web3Provider(window.ethereum)
        signer = provider.getSigner()
        try {
            // check if already connected by getting the wallet address
            await signer.getAddress()
            await checkNetwork()
            await checkAccount()
            $("button#connect").html('Connected').css("background", "#dec424");
            $("button#connect").prop('disabled', true);
            getMyJLPBalances();
            getMyPGLBalances();
            getMyAutoBalances();
            getMyBCashBalances();
        } catch (err) {
            console.log(err)
        }
    } else {
        console.log('Please install MetaMask or another web3 provider!')
        alert('Please install MetaMask or another web3 provider!')
    }
}

async function connect() {
    console.log("Connecting...")
    $("p#mintError").text(``);

    $("button#connect").prop('disabled', true);
    try {
        // connect
        await ethereum.request({ method: 'eth_requestAccounts' });
        await checkNetwork();
        await checkAccount();
        console.log("Connected.");
        $("button#connect").html('Connected').css("background", "#dec424");
        getMyJLPBalances();
        getMyPGLBalances();
        getMyAutoBalances();
        getMyBCashBalances();
    } catch (err) {
        $("button#connect").prop('disabled', false);
        if (err.code === 4001) {
            // user rejected the connection
            console.log('Please connect to MetaMask.');
        } else {
            console.error(err);
        }
        $("p#mintError").text(`${err}`);
    }
}

async function checkNetwork() {
    ethereum.on('chainChanged', handleChainChanged);
    let chainId = await ethereum.request({ method: 'eth_chainId' })
    if (networks[chainId] !== undefined) {
        currentNetwork = networks[chainId]
        //await handleChainChanged(chainId)
    } else if (ethereum.isMetaMask) {
        await setupNetwork(defaultNetwork)
        if (chainId === await ethereum.request({ method: 'eth_chainId' }))
            console.log('Please switch to one of the supported networks.')
    } else {
        console.log('Please switch to one of the supported networks.')
    }
}

async function checkAccount() {
    accounts = await ethereum.request({ method: 'eth_accounts' })
    ethereum.on('accountsChanged', handleAccountsChanged)

}

async function setupNetwork(network) {
    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: networks[network].chainId }],
        });
    } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
            try {
                await ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [networks[network]],
                });
            } catch (addError) {
                if (addError.code === 4001) {
                    console.log('Please approve the Avalanche network.')
                } else {
                    // handle other "add" errors
                    console.error(addError)
                }
            }
        } else if (switchError.code === 4001) {
            // user rejected the change
            console.log('Avalanche configuration already present.')
        } else {
            // handle other "switch" errors
            console.error(switchError)
        }
    }
    provider = new ethers.providers.Web3Provider(window.ethereum)
    signer = provider.getSigner()
}


async function handleChainChanged(chainId) {
    //window.location.reload()
    console.log("Chain changed to " + chainId)
    $("p#mintError").text(``);
    currentNetwork = networks[chainId]
    // reload provider and signer on chain change
    provider = new ethers.providers.Web3Provider(window.ethereum)
    signer = provider.getSigner()
    getMyJLPBalances();
    getMyPGLBalances();
    getMyAutoBalances();
    getMyBCashBalances();
    if (currentNetwork !== undefined) {
        // show main section
    } else {
        // reload or ask to change network
        console.log('Please switch to one of the supported networks.')
        $("p#mintError").text(`Wrong Network`);
    }
}

async function handleAccountsChanged(accounts) {
    //window.location.reload()
    console.log('Account changed to ' + accounts)
    getMyJLPBalances();
    getMyPGLBalances();
    getMyAutoBalances();
    getMyBCashBalances();
    if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
    }
}


$(function() {
    getTimeUntilTransfer();
    getBalances();
    //checkWeb3();
});