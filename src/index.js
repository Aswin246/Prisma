"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                username,
                password,
                firstName,
                lastName,
            },
        });
        console.log(res);
    });
}
createUser("aswin23@gmail.com", "123", "Aswin", "M");
function updateUser(username, { firstName, lastName }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.update({
            data: {
                firstName,
                lastName,
            },
            where: {
                username,
            },
        });
        console.log(res);
    });
}
updateUser("aswin23@gmail.com", {
    firstName: "Aswiin",
    lastName: "MMMM",
});
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirst({
            where: {
                username: username,
            },
        });
        console.log(res);
    });
}
getUser("aswin23@gmail.com");
