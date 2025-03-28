# Project Setup

## **Installation**

### **Install JWT and Passport for Authentication**
```sh
npm install --save-dev @types/passport-jwt
npm install --save @nestjs/jwt passport-jwt
```

### **Install Bcrypt for Password Hashing**
```sh
npm install bcrypt
npm install -D @types/bcrypt
```

---

## **Understanding `CreateUserDto`**
Since `createUserDto` is of type `Prisma.UserCreateInput`, it follows the structure defined in the **Prisma schema**.

---

## **Setting Up Prisma**

### **Install Prisma and Initialize**
```sh
npm install prisma --save-dev
npm install @prisma/client --save-dev
npx prisma init
npx prisma@latest init --db
```

### **Database Migrations**
```sh
npx prisma migrate dev --name init
npm install @prisma/client
npx prisma generate
npx prisma db push --force-reset
npx prisma migrate dev --name init
```

---

## **Additional Dependencies**
Install essential packages for authentication and environment configuration:
```sh
npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt @prisma/client @nestjs/config
```

---

## **Generate a Secret Key**
To generate a **random secret key** for JWT:
```sh
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## **Validation Setup**
To enable request validation using `class-validator` and `class-transformer`:
```sh
npm install class-validator class-transformer
```

---

### **Final Notes**
- Ensure the **Prisma schema** is correctly defined before running migrations.
- Use `.env` for database connection and JWT secret configurations.
- Always restart the server after installing new dependencies.


npm install @nestjs/config
