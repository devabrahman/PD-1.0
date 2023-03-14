import PropTypes from 'prop-types';

const LayoutMainGrid = ({ children, position = 'app-grid' }) => {
  return (
    <section
      className={` ${
        position === 'left'
          ? 'app-grid-left'
          : position === 'right'
          ? 'app-grid-right'
          : position === 'top'
          ? 'app-grid-top'
          : 'app-grid-left'
      } app-grid h-screen overflow-hidden overflow-y-scroll`}>
      {children}
    </section>
  );
};

// props validation
LayoutMainGrid.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default LayoutMainGrid;
