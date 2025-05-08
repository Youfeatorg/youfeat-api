import mongoose from "mongoose";
import Agenda from "agenda";

const db =
  "mongodb+srv://js5618171:wBgx7mUYXZSOxLGH@cluster0.2tc2c.mongodb.net/youfeatdata";

const agenda = new Agenda({ db: { address: db, collection: "agendaJobs" } });

async function initAgender() {
  await agenda.start();
  console.log("Agenda started successfully");
}
initAgender();

agenda.define("get-thumbnail", async (job) => {
  const { } = job.att.data;
  console.log("hello");
});

await agenda.every("5 seconds", "get-thumbnail");

export default agenda;
