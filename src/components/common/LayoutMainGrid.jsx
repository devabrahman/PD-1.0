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
      } h-screen dark:bg-dark dark:text-white`}>
      {children}
    </section>
  );
};

// props validation
LayoutMainGrid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default LayoutMainGrid;
