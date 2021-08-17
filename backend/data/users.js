import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Shun Kato',
    email: 'shun@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Alex Bay',
    email: 'alex@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
