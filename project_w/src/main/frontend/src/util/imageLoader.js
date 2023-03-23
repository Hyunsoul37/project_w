const imageLoader = ({ src, width }) => {
  return `${src}?w=${width}`;
};
module.exports = imageLoader;
