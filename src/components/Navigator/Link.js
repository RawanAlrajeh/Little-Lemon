import useNavigation from "../../hooks/use-navigation";
import classNames from "classnames";

function Link({ to, children, className, activeLink }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-secondary-border",
    className,
    currentPath === to && activeLink
  );

  const handelClick = (event) => {
    if (event.ctrlKey || event.metaKey) {
      return;
    }

    event.preventDefault();
    navigate(to);
  };
  
  return (
    <a className={classes} href={to} onClick={handelClick}>
      {children}
    </a>
  );
}

export default Link;
