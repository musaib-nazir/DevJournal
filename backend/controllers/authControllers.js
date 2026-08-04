const User = require("../modals/User");
const  bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const isUser = await User.findOne({ email: email });

    if (isUser) {
      res.status(400).json({ error: "User already exists" });
    } else {
      // Create new user
      const hashedPassword = await bcrypt.hash(password,10);
            const newUser = new User({ name, email, password:hashedPassword });
      await newUser.save();

       return res.status(201).json({ message: "User registered successfully" });
    }
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
};

const login = async (req, res) => {

const {email,password} = req.body;
try{


if(!email || !password){
  return res.status(400).json({error:"All fields are required"})}
    const isUser = await User.findOne({ email});
    if(!isUser){
      return res.status(400).json({error:"User not found"})
    }
    const isPasswordValid = await bcrypt.compare(password, isUser.password);
    if(!isPasswordValid){
      return res.status(400).json({error:"Invalid credentials"})
    }

    const token = jwt.sign({id:isUser._id},process.env.JWT_SECRET);

    return res.status(200).json({message:"Login successful", token});

  }
catch(err){
  console.error(err);
  res.status(500).json({message:err.message})}




}

module.exports={register,
login
}