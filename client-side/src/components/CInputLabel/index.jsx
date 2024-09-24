import PropTypes from 'prop-types';

export default function CInputLabel({
  htmlFor,
  label,
  name,
  type,
  value,
  className,
  classNameLabel,
  placeholder,
  onChange,
  accept,
}) {
  return (
    <>
      <label htmlFor={htmlFor} className={classNameLabel}>
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        accept={accept}
        required
      />
    </>
  );
}

CInputLabel.propTypes = {
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  classNameLabel: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  accept: PropTypes.string,
};
