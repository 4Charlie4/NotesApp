const router = require("express").Router();
const noteRoute = require("../apiRoutes/notes");

router.use(noteRoute);

module.exports = router;
