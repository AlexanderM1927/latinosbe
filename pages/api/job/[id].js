export default function handler(req, res) {
    const { id } = req.query

    const jobs = [
        {
            id: 1,
            title: 'First job',
            content: 'Software Developer',
            image: 'https://cdn.quasar.dev/img/parallax2.jpg',
            location: 'Cali',
            date: '28-02-2021 08:00 p.m.',
            contact: 'admin@latinosbe.com'
        },
        {
            id: 2,
            title: 'Second job',
            content: 'QA',
            image: 'https://cdn.quasar.dev/img/parallax2.jpg',
            location: 'Cali',
            date: '28-02-2021 08:00 p.m.',
            contact: 'admin@latinosbe.com'
        },
        {
            id: 3,
            title: 'Second job',
            content: 'QA',
            image: 'https://cdn.quasar.dev/img/parallax2.jpg',
            location: 'Remote',
            date: '28-02-2021 08:00 p.m.',
            contact: 'admin@latinosbe.com'
        },
        {
            id: 4,
            title: 'Second job',
            content: 'QA',
            image: 'https://cdn.quasar.dev/img/parallax2.jpg',
            location: 'Remote',
            date: '28-02-2021 08:00 p.m.',
            contact: 'admin@latinosbe.com'
        },
        {
            id: 5,
            title: 'Second job',
            content: 'QA',
            image: 'https://cdn.quasar.dev/img/parallax2.jpg',
            location: 'Cali',
            date: '28-02-2021 08:00 p.m.',
            contact: 'admin@latinosbe.com'
        }
    ]

    const job = jobs.filter(job => job.id === parseInt(id))

    res.status(200).json(job[0])
  }