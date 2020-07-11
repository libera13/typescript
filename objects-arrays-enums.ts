const person: {
    name: string;
    age: number;
    hobbies: (string | number)[]
} = {
    name: "janek",
    age: 24,
    hobbies: ["pilka", 23]
};
person.age;

enum variables {
    ADMIN , WLODARZ
}

for (const hobby of person.hobbies) {
    console.log(hobby)
}

