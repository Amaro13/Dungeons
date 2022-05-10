import { classes } from "../model/classes.js";

export const getIndex = async (req, res) => {
  try {
    const listClasses = await classes.findAll();
    res.render("index.ejs", { listClasses });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const getDetails = async (req, res) => {
  try {
    const classesDetails = await classes.findByPk(req.params.id);
    res.render("details.ejs", { classesDetails });
  } catch (err) {
    res.send(error.message);
  }
};

export const getDelete = async (req, res) => {
  try {
    await classes.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/");
  } catch (err) {
    res.send(error.message);
  }
};

export const getCreate = (req, res) => {
  try {
    res.render("create.ejs"), { toggle: false };
  } catch (err) {
    res.send(error.message);
  }
};

export const postCreate = async (req, res) => {
  const {
    class_name,
    hit_die,
    primary_ability,
    saves,
    description,
    img,
    iframe,
  } = req.body;
  try {
    if (
      !class_name ||
      !hit_die ||
      !primary_ability ||
      !saves ||
      !description ||
      !img ||
      !iframe
    ) {
      res.send("Nice try, but you won't break the game so easily");
    } else {
      await classes.create({
        class_name,
        hit_die,
        primary_ability,
        saves,
        description,
        img,
        iframe,
      });

      res.redirect("/");
    }
  } catch (err) {
    res.send(err.message);
  }
};

export const getEdit = async (req, res) => {
  try {
    const character = await classes.findByPk(req.params.id);
    res.render("edit.ejs", { character });
  } catch (error) {
    res.send(error.message);
  }
};

export const postEdit = async (req, res) => {
  try {
    const {
      class_name,
      hit_die,
      primary_ability,
      saves,
      description,
      img,
      iframe,
    } = req.body;
    await classes.update(
      {
        class_name: class_name,
        hit_die: hit_die,
        primary_ability: primary_ability,
        saves: saves,
        description: description,
        img: img,
        iframe: iframe,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.redirect("/");
  } catch (error) {
    res.send(error.message);
  }
};

export const getFight = async (req, res) => {
  try {
    const character = await classes.findByPk(req.params.id);
    res.render("fight.ejs", { character });
  } catch (error) {
    res.send(error.message);
  }
};
