export { users }
export { events }

const users = [
    {
    firstName: 'Omar',
    lastName: 'Alghamdi',
    email: 'omar@kfupm.com',
    password: 'omar123',
        type: 'user',
    state: 'accepted'
    },
    {
        firstName: 'Abdullah',
        lastName: 'Khayat',
        email: 'abdul@kfupm.com',
        password: 'abdul123',
        type: 'user',
        state: 'waiting'
    },
    {
        firstName: 'Mohammed',
        lastName: 'Alattas',
        email: 'mohd@kfupm.com',
        password: 'mohd123',
        type: 'user',
        state: 'blocked'
    },
    {
        firstName: 'Hamza',
        lastName: 'Luqman',
        email: 'hamza@kfupm.com',
        password: 'hamza123',
        type: 'admin',
        state: 'active'
    }
]

const events = [
    {
        id: '1',
        name: 'football',
        desc: 'footbal in field 5',
        startDate: '2019-11-20',
        startTime: '19:00:00',
        endDate: '2019-11-20',
        endTime: '21:00:00',
        creator: 'omar@kfupm.com',
        joined: ['abdul@kfupm.com'],
        waiting: ['mohd@kfupm.com'],
        feedbacks: [
            {
                by: 'abdul@kfupm.com',
                content: 'great match',
                reply: ''
            }
        ]
    },
    {
        id: '2',
        name: 'baskerball',
        desc: 'basketball in building 11',
        startDate: '2019-11-21',
        startTime: '19:00:00',
        endDate: '2019-11-21',
        endTime: '21:00:00',
        creator: 'abdul@kfupm.com',
        joined: ['omar@kfupm.com'],
        waiting: ['mohd@kfupm.com'],
        feedbacks: []
    },
    {
        id: '3',
        name: 'football',
        desc: 'footbal in field 5',
        startDate: '2019-11-22',
        startTime: '19:00:00',
        endDate: '2019-11-21',
        endTime: '21:00:00',
        creator: 'modh@kfupm.com',
        joined: ['abdul@kfupm.com', 'omar@kfupm.com'],
        waiting: [],
        feedbacks: [
            {
                by: 'omar@kfupm.com',
                content: 'great match',
                reply: ''
            }
        ]
    },
]