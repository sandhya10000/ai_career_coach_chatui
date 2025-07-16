import sanitizeHtml from "sanitize-html";

const sanitizeInput = (req, res, next) => {
  if (req.body.message) {
    req.body.message = sanitizeHtml(req.body.message, {
      allowedTags: [],
      allowedAttributes: {},
    });
  }
  next();
};

export default sanitizeInput;
