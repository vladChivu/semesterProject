import bcrypt from "bcrypt";
const saltRounds = 12;
const plaintextPassword = "hunter12";
const hasedPassword = "$2b$12$nG8.kVEUV0tWI2Sfk3WUdu4.3RXpiTFyqjJ7PpeJYvBNBGbfhzlea";

async function loginRouter() {
    const isSame = await bcrypt.compare(plaintextPassword, hasedPassword);
    console.log(isSame);
}

async function signupRouter() {
    const hasedPassword = await bcrypt.hash(plaintextPassword, saltRounds);
    console.log(hasedPassword);
}

loginRouter();
signupRouter();