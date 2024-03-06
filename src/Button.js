// import PropTypes from 'prop-types';
import className from "classnames";
// JavaScripte - yoksa direkt bg: true yazılabilir
// Fakat '- varsa bg-blue-500' gibi tırnak içinde ifade olmak zorundadır.

// const finalClassName = className('px-1.5', {
//   'py-1.5': true,
//   'bg-blue-500': false,
// });

// console.log(finalClassName);

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  const classes = className('px-3', 'py-1.5', 'border', {
    'border-blue-500 bg-blue-500 text-white': primary
  });

  return <button className={classes}>{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};

export default Button;
