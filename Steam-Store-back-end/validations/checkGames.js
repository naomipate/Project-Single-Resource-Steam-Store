const checkName = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ error: "'Name' is required" });
  } else {
    next();
  }
};

const checkPlatform = (req, res, next) => {
  if (!req.body.platform) {
    res.status(400).json({ error: "'Platform' is required" });
  } else {
    next();
  }
};

const checkYear = (req, res, next) => {
  if (!req.body.year) {
    res.status(400).json({ error: "'Year' is required" });
  } else {
    next();
  }
};

const checkGlobalSales = (req, res, next) => {
  if (!req.body.global_sales) {
    res.status(400).json({ error: "'Global Sales' is required." });
  } else {
    next();
  }
};

module.exports = { checkName, checkPlatform, checkYear, checkGlobalSales };
