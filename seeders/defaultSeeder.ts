import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import User from '../models/User';
import "../config/DB";
dotenv.config();




const seedUser = async () => {


  const existing = await User.findOne({ email: process.env.EMAIL });
  if (existing) {
    console.log('User already exists');
    process.exit(0);
  }

  
  const hashedPassword = await bcrypt.hash(process.env.PASSWORD!, 10);


  const user = new User({
    userName: 'soulayman',
    email: process.env.EMAIL,
    password: hashedPassword,
    role: process.env.ROLE
  });

  await user.save();
  console.log('✅ User created:');
  process.exit(0);
};

seedUser();
