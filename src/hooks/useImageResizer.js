import Resizer from "react-image-file-resizer";
import PropTypes from "prop-types";

export const resizeFile = (props) => {
  const {
    file,
    maxWidth = 439,
    maxHeight = 315,
    minWidth = 132,
    minHeight = 108,
  } = props;

  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      maxWidth,
      maxHeight,
      "PNG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64",
      minWidth,
      minHeight
    );
  });
};

resizeFile.propTypes = {
  file: PropTypes.string,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
  minWidth: PropTypes.number,
  minHeight: PropTypes.number,
};
