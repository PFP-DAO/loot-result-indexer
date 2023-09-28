export const ABI_JSON = [
    {
        "type": "event",
        "anonymous": false,
        "name": "Claim",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": true
            },
            {
                "type": "uint16",
                "name": "roleId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "batch",
                "indexed": false
            }
        ]
    }
]
