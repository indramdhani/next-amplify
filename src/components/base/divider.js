export default function BaseDivider({ className }) {
  const classes = `box-border h-px border border-solid border-gray-6 ${className}`

  return <hr className={classes} />
}
