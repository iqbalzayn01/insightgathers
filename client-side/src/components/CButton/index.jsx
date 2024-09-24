import PropTypes from 'prop-types';

export default function CButton({
  action,
  type,
  className,
  children,
  loading,
  disabled,
}) {
  return (
    <button
      type={type}
      onClick={action}
      className={className}
      disabled={disabled}
    >
      {loading ? 'Loading . . .' : children}
    </button>
  );
}

CButton.propTypes = {
  action: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};
