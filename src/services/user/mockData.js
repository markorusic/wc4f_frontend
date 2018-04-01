export default {
    contacts: [
        {
            id: 1,
            name: "John Doe"
        },
        {
            id: 2,
            name: "Dragana Mirkovic"
        },
        {
            id: 3,
            name: "John Doee"
        }
    ],
    resources: [
        {
            id: 1,
            amount: 90,
            unit: 'minute',
            displayValue: 'minuta'            
        },
        {
            id: 2,
            amount: 200,
            unit: 'sms',
            displayValue: 'sms'            
        },
        {
            id: 3,
            amount: 56,
            unit: 'net',
            displayValue: 'mb'            
        }
    ],
    offers: [
        {
          id: 1,
          name: '100 sms + 100mb',
          desc: 'Jos smsa i neta za samo 199 dinara.',
          isFeatured: false,
          isBought: false
        },
        {
          id: 2,
          name: '50 sms besplatno',
          desc: 'Vraćamo te na tvoju standardnu potrošnju.',
          isFeatured: true,
          isBought: false
        },
        {
          id: 3,
          name: '100mb',
          desc: 'Jos neta za samo 90 dinara.',
          isFeatured: false,
          isBought: false
        }
    ]
}