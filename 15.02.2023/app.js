const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://timcrocodile:Ciccore6!@cluster0.fnjlopo.mongodb.net/test";
const client = new MongoClient(url);

const dbName = "school";

async function main() {
  try {
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    // Creazione collezione "students"
    const collectionStudents = await db.createCollection("students");
    console.log(`Collection "students" created successfully`);

    // Creazione collezione "courses"
    const collectionCourses = await db.createCollection("courses");
    console.log(`Collection "courses" created successfully`);

    // Inserimento documenti nella collezione "torino"
    const docsStudents = [
      { name: "marco", lastname: "ricci", matricola: "345" },
      { name: "marcolino", lastname: "licci", matricola: "845" },
      { name: "lello", lastname: "case", matricola: "890" },
    ];
    await collectionStudents.insertMany(docsStudents);
    console.log(`Documents inserted successfully in "students"`);

    // Inserimento documenti nella collezione "courses"
    const docsCourses = [
      { name: "economia", facoltà: "legge" },
      { name: "storia", facoltà: "legge" },
      { name: "arte", facoltà: "bellearti" },
    ];

    //per cancellare un elemento
    // const deleteResult = await collectionCourses.deleteOne({ facoltà: "bellearti" });
    // console.log(`Deleted documents =>`, deleteResult);

    //per modificare un alemento
    // const collectionCourses = db.collection("courses");
    // const updateResult = await collectionCourses.updateMany(
    //   { facoltà: "bellearti" },
    //   { $set: { facoltà: "cucina" } }
    // );
    // console.log(`Updated documents in "courses" =>`, updateResult.modifiedCount);

    await collectionCourses.insertMany(docsCourses);
    console.log(`Documents inserted successfully in "courses"`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();

//per trovare tutti gli elemeti di courses
// async function main() {
//     try {
//       await client.connect();
//       console.log("Connected successfully to server");

//       const db = client.db("school");
//       const collection = db.collection("courses");

//       const courses = await collection.find().toArray();
//       console.log("All courses:", courses);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       await client.close();
//     }
//   }

//   main();
