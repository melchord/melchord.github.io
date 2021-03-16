import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

const classNames = require('classnames');

const Component = ({ type }) => {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.active);
  const currentPreview = useSelector((state) => state.currentPreview);

  const activeDispatch = () => {
    if (isActive === false) {
      return dispatch({
        type: 'setActive',
        active: !isActive,
        currentPreview: type,
      });
    } else if (currentPreview !== type) {
      return dispatch({
        type: 'setActive',
        active: isActive,
        currentPreview: type,
      });
    }

    return dispatch({
      type: 'setActive',
      active: !isActive,
      currentPreview: type,
    });
  };

  let display = 'others';
  let classname = 'other';
  if (type === 'nextjs') {
    display = 'Next.js';
    classname = 'nextjs';
  } else if (type === 'react') {
    display = 'React';
    classname = 'react';
  }

  const selectorClassname = classNames('previewSelector', classname);

  return (
    <span className={selectorClassname} onClick={activeDispatch}>
      {display}
    </span>
  );
};

Component.displayName = 'PreviewSelector';

Component.propTypes = {
  type: PropTypes.string,
};

Component.defaultProps = {
  type: 'other',
};

export default Component;
