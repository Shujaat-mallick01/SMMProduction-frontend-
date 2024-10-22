import { useState } from 'react';
import { ErrorMessage, Field } from 'formik';
import PropTypes from 'prop-types';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const FieldAndError = ({
    name,
    label,
    type = 'text',
    disabled = false,
    placeholder = '',
    rows,
    showPasswordToggle = false,
    customClass = '',
    labelClass = '',
    containerClass = '', // New prop for container class
    renderField,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className={`field-and-error ${containerClass}`}> {/* Apply containerClass here */}
            {label && <label htmlFor={name} className={`form-label ${labelClass}`}>{label}</label>}
            <div className="field-container">
                {renderField ? (
                    renderField()
                ) : (
                    <>
                        <Field
                            as={type === 'textarea' ? 'textarea' : 'input'}
                            type={type === 'password' && showPasswordToggle ? (showPassword ? 'text' : 'password') : type}
                            name={name}
                            id={name}
                            className={`form-control ${customClass}`}
                            disabled={disabled}
                            placeholder={placeholder}
                            rows={rows || undefined}
                            {...props}
                        />
                        {showPasswordToggle && (
                            <button
                                type="button"
                                className="password-toggle-btn"
                                onClick={toggleShowPassword}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        )}
                    </>
                )}
            </div>
            <ErrorMessage name={name} component="div" className="text-danger" />
        </div>
    );
};

FieldAndError.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    showPasswordToggle: PropTypes.bool,
    customClass: PropTypes.string,
    labelClass: PropTypes.string,
    containerClass: PropTypes.string, // New prop type for container class
    renderField: PropTypes.func,
};

export default FieldAndError;
