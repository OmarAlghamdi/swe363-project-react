export { users }
export { events }

const users = [
    {
    firstName: 'Omar',
    lastName: 'Alghamdi',
    email: 'omar@kfupm.com',
    password: 'omar123',
    type: 'user'
    },
    {
        firstName: 'Abdullah',
        lastName: 'Khayat',
        email: 'abdul@kfupm.com',
        password: 'abdul123',
        type: 'user'
    },
    {
        firstName: 'Mohammed',
        lastName: 'Alattas',
        email: 'mohd@kfupm.com',
        password: 'mohd123',
        type: 'user'
    },
    {
        firstName: 'Hamza',
        lastName: 'Luqman',
        email: 'hamza@kfupm.com',
        password: 'hamza123',
        type: 'admin'
    }
]

const events = [
    {
        id: '1',
        name: 'football',
        desc: 'footbal in field 5',
        startDate: '20/11/2019',
        startTime: '07:00pm',
        endDate: '20/11/2019',
        endTime: '09:00pm',
        creator: 'omar@kfupm.com',
        joined: ['abdul@kfupm.com'],
        waiting: ['mohd@kfupm.com'],
        feedbacks: []
    },
    {
        id: '2',
        name: 'baskerball',
        desc: 'basketball in building 11',
        startDate: '21/11/2019',
        startTime: '07:00pm',
        endDate: '21/11/2019',
        endTime: '09:00pm',
        creator: 'abdul@kfupm.com',
        joined: ['omar@kfupm.com'],
        waiting: ['mohd@kfupm.com'],
        feedbacks: []
    },
    {
        id: '3',
        name: 'football',
        desc: 'footbal in field 5',
        startDate: '22/11/2019',
        startTime: '07:00pm',
        endDate: '22/11/2019',
        endTime: '09:00pm',
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