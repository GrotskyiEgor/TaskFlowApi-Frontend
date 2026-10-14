export interface Post{
    id: number
    userId: number
    title: string
    author : string
    description: string
    createdAt: string
    updatedAt: string
}

export const posts: Post[] = [
    {
        id: 1,
        userId: 1,
        title: "Яка сьогодні погода?",
        author: "Alex",
        description: "Сьогодні досить тепло і сонячно. А яка погода у вас?",
        createdAt: "2026-10-14T09:00:00",
        updatedAt: "2026-10-14T09:00:00",
    },
    {
        id: 2,
        userId: 2,
        title: "Доброго ранку!",
        author: "Maria",
        description: "Всім гарного дня та чудового настрою! Як ваш ранок?",
        createdAt: "2026-10-14T09:15:00",
        updatedAt: "2026-10-14T09:15:00",
    },
    {
        id: 3,
        userId: 3,
        title: "Що нового?",
        author: "John",
        description: "Давно тут не був. Розкажіть, що цікавого сталося останнім часом.",
        createdAt: "2026-10-14T09:30:00",
        updatedAt: "2026-10-14T09:30:00",
    },
    {
        id: 4,
        userId: 4,
        title: "Час для кави",
        author: "Sofia",
        description: "Без ранкової кави мій день просто не починається. А ви п'єте каву?",
        createdAt: "2026-10-14T10:00:00",
        updatedAt: "2026-10-14T10:00:00",
    },
    {
        id: 5,
        userId: 5,
        title: "Плани на вихідні",
        author: "David",
        description: "Думаю провести вихідні на природі. Які у вас плани?",
        createdAt: "2026-10-14T10:30:00",
        updatedAt: "2026-10-14T10:30:00",
    },
    {
        id: 6,
        userId: 6,
        title: "Улюблена музика",
        author: "Anna",
        description: "Порадьте якусь хорошу музику для прогулянок.",
        createdAt: "2026-10-14T11:00:00",
        updatedAt: "2026-10-14T11:00:00",
    },
    {
        id: 7,
        userId: 7,
        title: "Гарний вечір",
        author: "Max",
        description: "Сьогодні хочеться просто відпочити, подивитися фільм і випити чаю.",
        createdAt: "2026-10-14T11:30:00",
        updatedAt: "2026-10-14T11:30:00",
    },
    {
        id: 8,
        userId: 8,
        title: "Що подивитися?",
        author: "Olivia",
        description: "Шукаю цікавий фільм на вечір. Буду вдячна за рекомендації!",
        createdAt: "2026-10-14T12:00:00",
        updatedAt: "2026-10-14T12:00:00",
    },
    {
        id: 9,
        userId: 9,
        title: "Осінній настрій",
        author: "Daniel",
        description: "Осінь це чудовий час для довгих прогулянок і гарячого чаю.",
        createdAt: "2026-10-14T12:30:00",
        updatedAt: "2026-10-14T12:30:00",
    },
    {
        id: 10,
        userId: 10,
        title: "Як проходить ваш день?",
        author: "Emma",
        description: "Діліться своїми новинами. Сподіваюся, у всіх усе добре!",
        createdAt: "2026-10-14T13:00:00",
        updatedAt: "2026-10-14T13:00:00",
    },
];
