import PropTypes from 'prop-types';
import { FaChrome, FaSignature } from 'react-icons/fa';

const classNames = require('classnames');

const Component = ({ active, current }) => {
  const componentClassnames = classNames('previewPanel', current, {
    active: active,
  });
  const titleClassnames = classNames('title', current);
  const descriptionClassnames = classNames('description');

  let title = 'Others';
  let description =
    'I have also working in Java, C/C++, and a bit of Python. I have yet to make any personal projects to display here, but hope to change that soon.';
  let previews = null;
  if (current === 'nextjs') {
    title = 'Next.js';
    description = `Next.js is an open-source React front-end framework that enables functionality such as server-sider rendering and static generation. I have been 
      using this framework since December 2020.`;
    previews = (
      <div className='previewsContainer'>
        <a href='https://github.com/melchord/melchord.github.io'>
          <div className='preview'>
            <h3>Personal Website</h3>
            <span>
              <FaChrome />
            </span>
          </div>
        </a>
        <a href='https://github.com/melchord/nextjs-blog'>
          <div className='preview'>
            <h3>Blog Site</h3>
            <span>
              <FaSignature />
            </span>
          </div>
        </a>
      </div>
    );
  } else if (current === 'react') {
    title = 'React';
    description =
      'I first picked up react during my previous employment in 2020. I was a full stack developer for the company website, check it out:';
    previews = (
      <div className='previewsContainer'>
        <a href='https://quoininc.com/'>
          <div className='preview'>
            <h3>Company Website</h3>
            <span>
              <FaChrome />
            </span>
          </div>
        </a>
      </div>
    );
  }

  return (
    <div className={componentClassnames}>
      <div className={titleClassnames}>{title}</div>
      <div className={descriptionClassnames}>{description}</div>
      {previews}
    </div>
  );
};

Component.displayName = 'PreviewPanel';

Component.propTypes = {
  active: PropTypes.bool,
  current: PropTypes.string,
};

Component.defaultProps = {
  active: false,
  current: 'nextjs',
};

export default Component;
