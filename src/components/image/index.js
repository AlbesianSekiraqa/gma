const Image = ({ source, classList, alt, style }) => {
  return (
    <img
      src={source}
      className={`object-cover ${classList}`}
      loading="lazy"
      alt={alt}
      style={style}
    />
  );
};

export default Image;
