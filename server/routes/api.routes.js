/* eslint-disable import/no-dynamic-require */
const { Router } = require('express');
const { join } = require('path');

const Resume = require(join(__dirname, '../models/resume.model'));

const router = Router();

router.get('/resume', async (req, res) => {
  try {
    const resume = await Resume.find();
    if (!resume) throw new Error('No resume elements found');
    res
      .status(200)
      .json(resume);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message });
  }
});

module.exports = router;
