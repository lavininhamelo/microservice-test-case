import Movie from "../models/Movie";

class MovieController {
  async index(req, res) {
    const movie = await Movie.find({}).populate("genders");
    return res.json(movie);
  }

  async show(req, res) {
    const { id } = req.params;
    try {
      const movie = await Movie.findById(id).populate("genders");

      if (!movie) {
        return res.status(404).json({ error: "Movie was not found!" });
      }

      return res.status(200).json(movie);
    } catch (err) {
      return res.status(400).json({ error: "Error retrieving data!" });
    }
  }

  async create(req, res) {
    let { name, genders } = req.body;
    try {
      let movie = {
        name,
        genders,
      };

      const movie_data = await Movie.create(movie);

      return res.status(201).json(movie_data);
    } catch (err) {
      return res.status(400).json({ error: "Error registering movie" });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      const movie = await Movie.findById(id);

      if (!movie) {
        return res.status(404).json({ error: "Movie was not found!" });
      }

      await movie.remove();

      return res
        .status(204)
        .json({ message: "Movie annotation has been deleted!" });
    } catch (err) {
      return res.status(400).json({ error: "Error deleting data!" });
    }
  }
}

export default new MovieController();
