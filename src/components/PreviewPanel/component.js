import PropTypes from 'prop-types';

const classNames = require('classnames');

const Component = ({ active, current }) => {
  const componentClassnames = classNames('previewPanel', current, {
    active: active,
  });

  const titleClassnames = classNames('title', current);
  const descriptionClassnames = classNames('description');
  return (
    <div className={componentClassnames}>
      <div className={titleClassnames}>Next.js</div>
      <div className={descriptionClassnames}>
        Next.js is an open-source React front-end framework that enables functionality such as
        server-side rendinger and static generation. I have been using it since December 2020.
      </div>
      <div className='previewsContainer'>
        <div className='preview' style={{ backgroundImage: 'url(/owl.gif)' }}>
          <h3>Personal Website</h3>
        </div>
        <div className='preview'>
          <h3>Blog Site</h3>
        </div>
      </div>
    </div>
  );
};

Component.displayName = 'previewPanel';

Component.propTypes = {
  active: PropTypes.bool,
  current: PropTypes.string,
};

Component.defaultProps = {
  active: false,
  current: 'nextjs',
};

export default Component;
