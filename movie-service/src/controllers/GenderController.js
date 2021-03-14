import Gender from "../models/Gender";

class GenderController {
  async index(req, res) {
    const gender = await Gender.find({});
    return res.json(gender);
  }

  async show(req, res) {
    const { id } = req.params;
    try {
      const gender = await Gender.findById(id);

      if (!gender) {
        return res.status(404).json({ error: "Gender was not found!" });
      }

      return res.status(200).json(gender);
    } catch (err) {
      return res.status(400).json({ error: "Error retrieving data!" });
    }
  }

  async create(req, res) {
    const { name } = req.body;

    if (await Gender.findOne({ name })) {
      return res.status(400).json({ error: "Gender already created." });
    }

    const gender = new Gender({ name });

    await gender.save(function (err, gender) {
      if (err) return console.log("ERRO", err);
      res.send({ message: "Gender was created successfully" });
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      const gender = await Gender.findById(id);

      if (!gender) {
        return res.status(404).json({ error: "Gender was not found!" });
      }

      await gender.remove();

      return res
        .status(204)
        .json({ message: "Gender annotation has been deleted!" });
    } catch (err) {
      return res.status(400).json({ error: "Error deleting data!" });
    }
  }
}

export default new GenderController();
