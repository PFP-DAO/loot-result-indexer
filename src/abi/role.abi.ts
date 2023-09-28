export const ABI_JSON = [
    {
        "type": "event",
        "anonymous": false,
        "name": "LevelResult",
        "inputs": [
            {
                "type": "uint256",
                "name": "nftId",
                "indexed": true
            },
            {
                "type": "uint8",
                "name": "newLevel",
                "indexed": false
            },
            {
                "type": "uint32",
                "name": "newExp",
                "indexed": false
            }
        ]
    }
]
