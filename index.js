import express, { json } from "express";
const PORT = 3000;
const app = express();
app.use(json());
const memoryDB = [];
let id = 1;

//create
app.post("/", (req, res) => {
  let { name, price } = req.body;
  const newMenu = {
    id: id++,
    name,
    price,
  };
  memoryDB.push(newMenu);

  res.status(201).send({ Message: "New Menu is added ", newMenu });
});

//view | read
app.get("/", (req, res) => {
  res.status(200).send(memoryDB);
});

//view details | read details
app.get("/:id", (req, res) => {
  const { id } = req.params;
  const data = memoryDB.find((dataId) => {
    return dataId.id === parseInt(id);
  });

  if (!data) {
    return res.status(404).send("Menu Not found");
  }
  res.status(200).send(data);
});

//update | edit
app.put("/:id", (req, res) => {
  const { id } = req.params;
  const data = memoryDB.find((dataId) => {
    return dataId.id === parseInt(id);
  });

  if (!data) {
    return res.status(404).send("Menu Not found");
  }
  const { name, price } = req.body;
  data.name = name;
  data.price = price;

  res.status(201).send(`ID${id} is update`);
});
// app.get("/", (req, res) => {
//   res.send("Learning Express Js");
// });

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  const dataIndex = memoryDB.findIndex((data) => data.id === parseInt(id));
  if (dataIndex === -1) {
    return res.status(404).send(`Data Not Found`);
  }
  memoryDB.splice(dataIndex, 1);
  res.status(200).send(`Data ID ${id} is completely deleted`);
});

app.listen(PORT, () => {
  console.log(`server is connected at ${PORT}`);
});
