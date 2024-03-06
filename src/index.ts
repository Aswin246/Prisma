import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
    },
  });
  console.log(res);
}
//createUser("aswin23@gmail.com", "123", "Aswin", "M");

interface updateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  username: string,
  { firstName, lastName }: updateParams
) {
  const res = await prisma.user.update({
    data: {
      firstName,
      lastName,
    },
    where: {
      username,
    },
  });
  console.log(res);
}

// updateUser("aswin23@gmail.com", {
//   firstName: "Aswiin",
//   lastName: "MMMM",
// });

async function getUser(username: string) {
  const res = await prisma.user.findFirst({
    where: {
      username: username,
    },
  });
  console.log(res);
}

//getUser("aswin234@gmail.com");

async function createTodo(userId: number, title: string, description: string) {
  const res = await prisma.todo.create({
    data: {
      userId,
      title,
      description,
    },
  });
  console.log(res);
}

//createTodo(1, "Go GYM", "WE GO JIM");

async function getTodos(userId: number) {
  try {
    const res = await prisma.todo.findFirst({
      where: {
        userId: userId,
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

getTodos(2);
