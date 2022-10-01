const FARM = '[{"inputs":[],"name":"claimBCash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"from","type":"uint256"},{"internalType":"uint256","name":"to","type":"uint256"}],"name":"claimForPeople","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_lp","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"lp","type":"uint256"}],"name":"StakedLP","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stakeLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"lp","type":"uint256"}],"name":"UnstakedLP","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unstakeLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lpStakeDayRatio","type":"uint256"}],"name":"updateRatio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"BCASH_CONTRACT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"bCashView","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"claimableView","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAmountOfStakers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LP_CONTRACT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LP_STAKE_DAY_RATIO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"LPStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"LPStakedFrom","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LPStakers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLPStaking","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"totalView","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"wavaxView","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]';
const JLP_ADDRESS = "0x058184ADde5426c5c6d11ad41eCb8f42EB704002";
const PGL_ADDRESS = "0x33B9da3bc122219C1B8ed484C6DB7f2D6c6d82C3";
const LP = '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sync","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]';
const JLP = "0xAa8D62E4C4Fd0F7DA00CB3E88fD5c9C162087b9B";
const PGL = "0x07280f32830e3A1Ca7B535b603B09890e692EaF6";
const AUTO = '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountLP","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountAvax","type":"uint256"}],"name":"LPLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountLP","type":"uint256"}],"name":"LPReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressToIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressToLocker","outputs":[{"internalType":"uint256","name":"lpLocked","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_holder","type":"address"}],"name":"amountClaimableFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_holder","type":"address"}],"name":"amountLockedFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bCashView","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"emergencyWithdrawERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockedAccounts","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"manualRemoveAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxLock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minLock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"reduceTotalLPLocked","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAmount","type":"uint256"}],"name":"setLockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAmount","type":"uint256"}],"name":"setMaxLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAmount","type":"uint256"}],"name":"setMinLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_holder","type":"address"}],"name":"timeUntilUnlockedFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAccountsLocked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLPLocked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalView","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wavaxView","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]';
const AUTO_ADDRESS = "0x0DD1d16dC27fc6edb6e07fd3d688D08D8b18d954";
const STAKING = '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AddStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAmount","type":"uint256"}],"name":"changeCooldown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"compound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"emergencyWithdrawERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountStaked","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountReceived","type":"uint256"}],"name":"RemoveStake","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"bc","type":"address"}],"name":"setBC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressToTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cooldown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_staker","type":"address"}],"name":"getShareFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_staker","type":"address"}],"name":"timeLeftFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalView","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]';
const STAKING_ADDRESS = "0xa090463090EE99b8AbbBF8E6d0480CB5FDDDD1C6";
const BCASH = '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_lp","type":"address"}],"name":"addLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_caller","type":"address"}],"name":"addMintingCaller","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressToLastUnstake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"availableIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAmount","type":"uint256"}],"name":"changeCooldown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAmount","type":"uint256"}],"name":"changeMaxStakers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cooldown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"index","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lp","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxStakers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_to","type":"address[]"},{"internalType":"uint256[]","name":"_amount","type":"uint256[]"}],"name":"mintBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lp","type":"address"}],"name":"removeLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_caller","type":"address"}],"name":"removeMintingCaller","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakerCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakerToIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unStake","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
const BCASH_ADDRESS = "0x4BA16DaF8ed418deD920C66e45cc3eaFFDE53Ac7";
let provider;
let signer;
let currentNetwork;
let merkleProof
let accounts;
const defaultNetwork = '0xa86a';
const { ethereum } = window;

const RPC = 'https://nd-842-550-223.p2pify.com/a3568200146f750b02655bc82e14b97e/ext/bc/C/rpc';

// Solution from https://labeebklatif.medium.com/js-number-tofixed-without-rounding-4da4207ba146
Number.prototype.toFixedNoRound = function (precision = 1) {
    const factor = Math.pow(10, precision);
    return Math.floor(this * factor) / factor;
}

const getDispenseAmount = async () => {
    const t = new ethers.providers.JsonRpcProvider(RPC);
    let contract = new ethers.Contract(JLP_ADDRESS, FARM, t);
    let contract2 = new ethers.Contract(PGL_ADDRESS, FARM, t);

    let amount = Number(await contract.LP_STAKE_DAY_RATIO()) / 10;
    let amount2 = Number(await contract2.LP_STAKE_DAY_RATIO()) / 10;

    $("#joeRewards").text(amount);
    $("#pglRewards").text(amount2);
    getStakedAmounts();
    getAutoAmounts();
}

const getStakedAmounts = async () => {
    const t = new ethers.providers.JsonRpcProvider(RPC);
    let contract = new ethers.Contract(STAKING_ADDRESS, STAKING, t)

    let [totalStakedBCash,totalBCash] = await contract.totalView();

    $("#totalBCash").text((Number(totalBCash) / 10**18).toFixedNoRound(6));
    $("#totalStakedBCash").text((Number(totalStakedBCash) / 10**18).toFixedNoRound(6));
}

const getAutoAmounts = async () => {
    const t = new ethers.providers.JsonRpcProvider(RPC);
    let contract = new ethers.Contract(AUTO_ADDRESS, AUTO, t)

    let [totalWavax, totalBCash, totalLP] = await contract.totalView();

    $("#totalAutoWavax").text((Number(totalWavax) / 10**18).toFixedNoRound(6));
    $("#totalAutoBCash").text((Number(totalBCash) / 10**18).toFixedNoRound(6));
    $("#totalAutoLP").text((Number(totalLP) / 10**18).toFixedNoRound(6));
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

const getMyJLPBalances = async (account) => {
    const t = new ethers.providers.JsonRpcProvider(RPC);
    let contract = new ethers.Contract(JLP_ADDRESS, FARM, t);
    const signer = provider.getSigner();

    let jlpContract = new ethers.Contract(JLP, LP, t);

    let myJLP = Number(await jlpContract.balanceOf(signer.getAddress()));

    let jlpStaked = Number(await contract.LPStaked(signer.getAddress()));
    let [jlpAvax, jlpBcash, claimable] = await contract.totalView(signer.getAddress());

    $("#myJLP").text((myJLP / 10**18).toFixedNoRound(6));
    $("#jlpStaked").text((jlpStaked / 10**18).toFixedNoRound(6));
    $("#jlpAvaxStaked").text((Number(jlpAvax) / 10**18).toFixedNoRound(6));
    $("#jlpBCashStaked").text((Number(jlpBcash) / 10**18).toFixedNoRound(6));
    $("#jlpBCashClaimable").text((Number(claimable) / 10**18).toFixedNoRound(6));
}

const getMyPGLBalances = async (account) => {
    const t = new ethers.providers.JsonRpcProvider(RPC);
    let contract = new ethers.Contract(PGL_ADDRESS, FARM, t);
    const signer = provider.getSigner();

    let pglContract = new ethers.Contract(PGL, LP, t);

    let myPGL = Number(await pglContract.balanceOf(signer.getAddress()));

    let pglStaked = Number(await contract.LPStaked(signer.getAddress()));
    let [pglAvax, pglBcash, claimable] = await contract.totalView(signer.getAddress());

    $("#myPGL").text((myPGL / 10**18).toFixedNoRound(6));
    $("#pglStaked").text((pglStaked / 10**18).toFixedNoRound(6));
    $("#pglAvaxStaked").text((Number(pglAvax) / 10**18).toFixedNoRound(6));
    $("#pglBCashStaked").text((Number(pglBcash) / 10**18).toFixedNoRound(6));
    $("#pglBCashClaimable").text((Number(claimable) / 10**18).toFixedNoRound(6));
}

const getMyAutoBalances = async (account) => {
    const t = new ethers.providers.JsonRpcProvider(RPC);
    let contract = new ethers.Contract(AUTO_ADDRESS, AUTO, t);
    const signer = provider.getSigner();

    let accountStaked = Number(await contract.amountLockedFor(signer.getAddress()));
    let [totalEstAvax, totalEstBCash,totalLockedPGL] = await contract.totalView(signer.getAddress());

    let accountPercent = accountStaked / Number(totalLockedPGL);
    let accountAvax = Number(totalEstAvax) * accountPercent;
    let accountBCash = Number(totalEstBCash) * accountPercent;

    $("#myLockedPGL").text((accountStaked / 10**18).toFixedNoRound(6));

    if (accountStaked > 0) {
        $("#lockedAvax").text((accountAvax / 10**18).toFixedNoRound(6));
        $("#lockedBcash").text((accountBCash / 10**18).toFixedNoRound(6));
    
        let timeLeft = Number(await contract.timeUntilUnlockedFor(signer.getAddress()));
        $("#timeUntilUnlocked").text(formatTime(timeLeft));
    } else {
        $("#lockedAvax").text(0);
        $("#lockedBcash").text(0);
        $("#timeUntilUnlocked").text(formatTime(0));
    }
    
}

const getMyBCashBalances = async (account) => {
    const t = new ethers.providers.JsonRpcProvider(RPC);
    let contract = new ethers.Contract(STAKING_ADDRESS, STAKING, t);
    const signer = provider.getSigner();

    let bCashContract = new ethers.Contract(BCASH_ADDRESS, BCASH, t);

    let bcash = Number(await bCashContract.balanceOf(signer.getAddress()));
    let staked = Number(await contract.balanceOf(signer.getAddress()));
    let share = Number(await contract.getShareFor(signer.getAddress()));

    $("#mybCASH").text((bcash / 10**18).toFixedNoRound(6));
    $("#bCASHStaked").text((staked / 10**18).toFixedNoRound(6));
    $("#estimatedClaimable").text(((share / 10**18)*0.9).toFixedNoRound(6));

    let timeLeft = Number(await contract.timeLeftFor(signer.getAddress()));
    $("#timeUntilClaimable").text(formatTime(timeLeft));
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

const stakeJLP = async () => {

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(JLP_ADDRESS, FARM, signer);
    
    try {
        $("#errorJLP").text("");
        let amount = $("#inputJLP").val();

        let tx = await connectedContract.stakeLP(ethers.utils.parseEther(amount));
        $("#errorJLP").text("Staking...");

        await tx.wait();

        let txLink = `<a href='https://snowtrace.io/tx/${tx.hash}' target="_blank" rel="noreferrer">
                                          View Transaction</a>`;

        $("#errorJLP").html(`Successfully staked: ${txLink}`);
        await getMyJLPBalances();
    } catch (error) {
        console.log(error)
        $("#errorJLP").text(`${error.data.message}`);
    }

}

const unStakeJLP = async () => {

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(JLP_ADDRESS, FARM, signer);
    
    try {
        $("#errorJLP").text("");
        let amount = $("#inputJLP").val();

        let tx = await connectedContract.unstakeLP(ethers.utils.parseEther(amount));
        $("#errorJLP").text("unStaking...");

        await tx.wait();

        let txLink = `<a href='https://snowtrace.io/tx/${tx.hash}' target="_blank" rel="noreferrer">
                                          View Transaction</a>`;

        $("#errorJLP").html(`Successfully unstaked: ${txLink}`);
        await getMyJLPBalances();
    } catch (error) {
        console.log(error)
        $("#errorJLP").text(`${error.data.message}`);
    }

}

const claimJLP = async () => {

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(JLP_ADDRESS, FARM, signer);
    
    try {
        $("#errorJLPclaim").text("");

        let tx = await connectedContract.claimBCash();
        $("#errorJLPclaim").text("Claiming...");

        await tx.wait();

        let txLink = `<a href='https://snowtrace.io/tx/${tx.hash}' target="_blank" rel="noreferrer">
                                          View Transaction</a>`;

        $("#errorJLPclaim").html(`Successfully claimed: ${txLink}`);
        await getMyJLPBalances();
    } catch (error) {
        console.log(error)
        $("#errorJLPclaim").text(`${error.data.message}`);
    }

}

const approveJLP = async () => {
    signer = provider.getSigner()
    connectedContract = new ethers.Contract(JLP, LP, signer);
    try {
        if (ethereum) {
            $(`#errorJLP`).text("");
            let amount = $("#inputJLP").val();
            let n = await connectedContract.approve(JLP_ADDRESS, ethers.utils.parseEther(amount));
            $(`#errorJLP`).text("Approving...");
            await n.wait();
            let a = `<a href='https://snowtrace.io/tx/${n.hash}' target="_blank" rel="noreferrer">View Transaction</a>`;
            $(`#errorJLP`).html(`Successfully approved: ${a}`);
            
        } else console.log("Ethereum object doesn't exist!"), $(`#errorJLP`).text("Connect wallet and refresh!");
    } catch (t) {
        console.log(t), $(`#$errorJLP`).text(`${t.data.message}`);
    }
};

const stakePGL = async () => {

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(PGL_ADDRESS, FARM, signer);
    
    try {
        $("#errorPGL").text("");
        let amount = $("#inputPGL").val();

        let tx = await connectedContract.stakeLP(ethers.utils.parseEther(amount));
        $("#errorPGL").text("Staking...");

        await tx.wait();

        let txLink = `<a href='https://snowtrace.io/tx/${tx.hash}' target="_blank" rel="noreferrer">
                                          View Transaction</a>`;

        $("#errorPGL").html(`Successfully staked: ${txLink}`);
        await getMyPGLBalances();
    } catch (error) {
        console.log(error)
        $("#errorPGL").text(`${error.data.message}`);
    }

}

const unStakePGL = async () => {

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(PGL_ADDRESS, FARM, signer);
    
    try {
        $("#errorPGL").text("");
        let amount = $("#inputPGL").val();

        let tx = await connectedContract.unstakeLP(ethers.utils.parseEther(amount));
        $("#errorPGL").text("unStaking...");

        await tx.wait();

        let txLink = `<a href='https://snowtrace.io/tx/${tx.hash}' target="_blank" rel="noreferrer">
                                          View Transaction</a>`;

        $("#errorPGL").html(`Successfully unstaked: ${txLink}`);
        await getMyPGLBalances();
    } catch (error) {
        console.log(error)
        $("#errorPGL").text(`${error.data.message}`);
    }

}

const claimPGL = async () => {

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(PGL_ADDRESS, FARM, signer);
    
    try {
        $("#errorPGLclaim").text("");

        let tx = await connectedContract.claimBCash();
        $("#errorPGLclaim").text("Claiming...");

        await tx.wait();

        let txLink = `<a href='https://snowtrace.io/tx/${tx.hash}' target="_blank" rel="noreferrer">
                                          View Transaction</a>`;

        $("#errorPGLclaim").html(`Successfully claimed: ${txLink}`);
        await getMyPGLBalances();
    } catch (error) {
        console.log(error)
        $("#errorPGLclaim").text(`${error.data.message}`);
    }

}

const approvePGL = async () => {
    signer = provider.getSigner()
    connectedContract = new ethers.Contract(PGL, LP, signer);
    try {
        if (ethereum) {
            $(`#errorPGL`).text("");
            let amount = $("#inputPGL").val();
            let n = await connectedContract.approve(PGL_ADDRESS, ethers.utils.parseEther(amount));
            $(`#errorPGL`).text("Approving...");
            await n.wait();
            let a = `<a href='https://snowtrace.io/tx/${n.hash}' target="_blank" rel="noreferrer">View Transaction</a>`;
            $(`#errorPGL`).html(`Successfully approved: ${a}`);
            
        } else console.log("Ethereum object doesn't exist!"), $(`#errorPGL`).text("Connect wallet and refresh!");
    } catch (t) {
        console.log(t), $(`#$errorPGL`).text(`${t.data.message}`);
    }
};

const stakeBCash = async () => {

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(STAKING_ADDRESS, STAKING, signer);
    
    try {
        $("#errorBCash").text("");
        let amount = $("#inputBCash").val();

        let tx = await connectedContract.stake(ethers.utils.parseEther(amount));
        $("#errorBCash").text("Staking...");

        await tx.wait();

        let txLink = `<a href='https://snowtrace.io/tx/${tx.hash}' target="_blank" rel="noreferrer">
                                          View Transaction</a>`;

        $("#errorBCash").html(`Successfully staked: ${txLink}`);
        await getMyBCashBalances();
        await getStakedAmounts();
    } catch (error) {
        console.log(error)
        $("#errorBCash").text(`${error.data.message}`);
    }

}

const unStakeBCash = async () => {

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(STAKING_ADDRESS, STAKING, signer);
    
    try {
        $("#errorBCashclaim").text("");

        let tx = await connectedContract.unStake();
        $("#errorBCashclaim").text("unStaking...");

        await tx.wait();

        let txLink = `<a href='https://snowtrace.io/tx/${tx.hash}' target="_blank" rel="noreferrer">
                                          View Transaction</a>`;

        $("#errorBCashclaim").html(`Successfully unStaked: ${txLink}`);
        await getMyBCashBalances();
        await getStakedAmounts();
    } catch (error) {
        console.log(error)
        $("#errorBCashclaim").text(`${error.data.message}`);
    }

}

const compoundBCash = async () => {

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(STAKING_ADDRESS, STAKING, signer);
    
    try {
        $("#errorBCashclaim").text("");

        let tx = await connectedContract.compound();
        $("#errorBCashclaim").text("Compounding...");

        await tx.wait();

        let txLink = `<a href='https://snowtrace.io/tx/${tx.hash}' target="_blank" rel="noreferrer">
                                          View Transaction</a>`;

        $("#errorBCashclaim").html(`Successfully compounded: ${txLink}`);
        await getMyBCashBalances();
        await getStakedAmounts();
    } catch (error) {
        console.log(error)
        $("#errorBCashclaim").text(`${error.data.message}`);
    }

}

const approveBCash = async () => {
    signer = provider.getSigner()
    connectedContract = new ethers.Contract(BCASH_ADDRESS, BCASH, signer);
    try {
        if (ethereum) {
            $(`#errorBCash`).text("");
            let amount = $("#inputBCash").val();
            let n = await connectedContract.approve(STAKING_ADDRESS, ethers.utils.parseEther(amount));
            $(`#errorBCash`).text("Approving...");
            await n.wait();
            let a = `<a href='https://snowtrace.io/tx/${n.hash}' target="_blank" rel="noreferrer">View Transaction</a>`;
            $(`#errorBCash`).html(`Successfully approved: ${a}`);
            
        } else console.log("Ethereum object doesn't exist!"), $(`#errorPGL`).text("Connect wallet and refresh!");
    } catch (t) {
        console.log(t), $(`#$errorBCash`).text(`${t.data.message}`);
    }
};

const autoLP = async () => {

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(AUTO_ADDRESS, AUTO, signer);
    
    try {
        $("#errorLock").text("");
        let amount = $("#inputAVAX").val();

        let tx = await connectedContract.deposit({value: ethers.utils.parseEther(amount)});
        $("#errorLock").text("Depositing...");

        await tx.wait();

        let txLink = `<a href='https://snowtrace.io/tx/${tx.hash}' target="_blank" rel="noreferrer">
                                          View Transaction</a>`;

        $("#errorLock").html(`Successfully locked: ${txLink}`);
        await getMyAutoBalances();
        await getAutoAmounts();
    } catch (error) {
        console.log(error)
        $("#errorLock").text(`${error.data.message}`);
    }

}

const claimAutoLP = async () => {

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(AUTO_ADDRESS, AUTO, signer);
    
    try {
        $("#errorLock").text("");

        let tx = await connectedContract.claim();
        $("#errorLock").text("Claiming...");

        await tx.wait();

        let txLink = `<a href='https://snowtrace.io/tx/${tx.hash}' target="_blank" rel="noreferrer">
                                          View Transaction</a>`;

        $("#errorLock").html(`Successfully claimed: ${txLink}`);
        await getMyAutoBalances();
        await getAutoAmounts();
    } catch (error) {
        console.log(error)
        $("#errorLock").text(`${error.data.message}`);
    }

}

$(function() {
    getDispenseAmount();
    $("button#connect").off().on("click", function(event) {
        event.preventDefault();
        connect();
    });
    $("button#stakeJLPButton").off().on("click", function(event) {
        event.preventDefault();
        stakeJLP();
    });
    $("button#unStakeJLPButton").off().on("click", function(event) {
        event.preventDefault();
        unStakeJLP();
    });
    $("button#claimJLPButton").off().on("click", function(event) {
        event.preventDefault();
        claimJLP();
    });
    $("button#approveJLPButton").off().on("click", function(event) {
        event.preventDefault();
        approveJLP();
    });
    $("button#stakePGLButton").off().on("click", function(event) {
        event.preventDefault();
        stakePGL();
    });
    $("button#unStakePGLButton").off().on("click", function(event) {
        event.preventDefault();
        unStakePGL();
    });
    $("button#claimPGLButton").off().on("click", function(event) {
        event.preventDefault();
        claimPGL();
    });
    $("button#approvePGLButton").off().on("click", function(event) {
        event.preventDefault();
        approvePGL();
    });
    $("button#approveBCashButton").off().on("click", function(event) {
        event.preventDefault();
        approveBCash();
    });
    $("button#stakeBCashButton").off().on("click", function(event) {
        event.preventDefault();
        stakeBCash();
    });
    $("button#unStakeBCashButton").off().on("click", function(event) {
        event.preventDefault();
        unStakeBCash();
    });
    $("button#compoundBCashButton").off().on("click", function(event) {
        event.preventDefault();
        compoundBCash();
    });
    $("button#lockAvaxButton").off().on("click", function(event) {
        event.preventDefault();
        autoLP();
    });
    $("button#claimPGLButton").off().on("click", function(event) {
        event.preventDefault();
        claimAutoLP();
    });
    checkWeb3();
});