export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvaildLootTimes",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidSignature",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotEnoughMATIC",
        "inputs": []
    },
    {
        "type": "error",
        "name": "USDCPaymentFailed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "WhiteListUsed",
        "inputs": [
            {
                "type": "uint8",
                "name": ""
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AdminChanged",
        "inputs": [
            {
                "type": "address",
                "name": "previousAdmin",
                "indexed": false
            },
            {
                "type": "address",
                "name": "newAdmin",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BeaconUpgraded",
        "inputs": [
            {
                "type": "address",
                "name": "beacon",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "GuarResult",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": true
            },
            {
                "type": "uint8",
                "name": "newSSGuar",
                "indexed": false
            },
            {
                "type": "uint8",
                "name": "newSSSGuar",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "isUpSSS",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Initialized",
        "inputs": [
            {
                "type": "uint8",
                "name": "version",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LootResult",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "slot",
                "indexed": false
            },
            {
                "type": "uint8",
                "name": "balance",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "previousOwner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newOwner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PayLoot",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "usdc",
                "indexed": false
            },
            {
                "type": "uint16",
                "name": "captainId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Upgraded",
        "inputs": [
            {
                "type": "address",
                "name": "implementation",
                "indexed": true
            }
        ]
    },
    {
        "type": "function",
        "name": "activeNonce",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint8",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "dailyDivide",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint16[]",
                "name": "roleIds_"
            },
            {
                "type": "uint256[]",
                "name": "roleIdPoolBalanceToday_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "dividend",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "equipmentNFT",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getGuarInfo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "user_"
            }
        ],
        "outputs": [
            {
                "type": "uint8",
                "name": ""
            },
            {
                "type": "uint8",
                "name": ""
            },
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getLatestPrice",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "int256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getnSIdsLength",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getnSSIdsLength",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getnSSSIdsLength",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getupSSIdsLength",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "initialize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "equipmentAddress_"
            },
            {
                "type": "address",
                "name": "roleNFTAddress_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "isWhitelistLooted",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint8",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "loot1",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint16",
                "name": "captainId_"
            },
            {
                "type": "uint256",
                "name": "nftId_"
            },
            {
                "type": "bool",
                "name": "usdc_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "loot1",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "bool",
                "name": "usdc_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "loot10",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "bool",
                "name": "usdc_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "loot10",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint16",
                "name": "captainId_"
            },
            {
                "type": "uint256",
                "name": "nftId_"
            },
            {
                "type": "bool",
                "name": "usdc_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "mintTimesForSSS",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint8",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "mintTimesForUpSS",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint8",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "nSIds",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint16",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "nSSIds",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint16",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "nSSSIds",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint16",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "nextIsUpSSS",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "oldFreeLooted",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "oldRoleIdPoolBalance",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint16",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "owner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "priceLootOne",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "int256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "priceLootTen",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "int256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "proxiableUUID",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "relayer",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "roleNFT",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "router",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "setActiveNonce",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint8",
                "name": "nonce_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setDividend",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "dividend_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setFeed",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "oracle_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setPriceLootOne",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "int256",
                "name": "price_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setPriceLootTen",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "int256",
                "name": "price_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setRelayer",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "relayer_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setSigner",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "signer_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setStyleVariantManager",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "variantManager_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setSwapRouter",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "router_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setTreasury",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "treasury_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setUSDC",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "usdc_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setUseNewPrice",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bool",
                "name": "useNewPrice_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setWETH",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "weth_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setnSIds",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint16[]",
                "name": "nSIds_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setnSSIds",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint16[]",
                "name": "nSSIds_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setnSSSIds",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint16[]",
                "name": "nSSSIds_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setupSSIds",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint16[]",
                "name": "upSSIds_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setupSSSId",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint16",
                "name": "upSSSId_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "signer",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "styleVariantManager",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "treasury",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "upSSIds",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint16",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "upSSSId",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint16",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "upgradeTo",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newImplementation"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "upgradeToAndCall",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "newImplementation"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "usdc",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "weth",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "whitelistLoot",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint8",
                "name": "time_"
            },
            {
                "type": "bytes",
                "name": "signature_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "withdraw",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    }
]
