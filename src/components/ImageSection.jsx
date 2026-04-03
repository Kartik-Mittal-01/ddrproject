import Image from 'react-bootstrap/Image';

function ImageSection({ src, alt = "image", className = "" }) {
  return (
    <Image
      src={`/${src}`}   // 👈 takes from public folder
      alt={alt}
      fluid
      className={className}
      style={{
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
      }}
    />
  );
}

export default ImageSection;