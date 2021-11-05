import React from 'react'
import classNames from 'classnames';

const BUTTON_SIZE = {
  md: `text-base px-4 py-2`,
  sm: `text-sm px-3 py-2 leading-4`,
  xs: `text-xs px-2.5 py-1.5`,
};

const BUTTON_COLOR = {
  destructive: `text-white bg-red-600 hover:bg-red-700`,
  primary: `text-white bg-indigo-600 hover:bg-indigo-700`,
  secondary: ``,
  disabled: `text-white bg-indigo-600 opacity-50 cursor-not-allowed`,
};

export default function Button(props) {
  const {
    className = ``,
    children,
    use = `primary`,
    size = `md`,
    type = `button`,
    onClick = () =>{},
  } = props;
  

  return (
    <button
      // {...{onClick, type}}
      onClick={onClick}
      type={type}
      className={classNames(
        `inline-flex items-center border border-transparent font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 justify-center`,
        BUTTON_SIZE[size],
        BUTTON_COLOR[use],
        className,
      )}>
      {children}
    </button>
  )
}
