import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "API up n running!" });
});

export default router;
