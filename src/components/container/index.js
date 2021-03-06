export const Container = ({ className, withScroll = false, ...props }) => {
  return (
    <>
      {withScroll ? (
        <div data-scroll data-scroll-speed='3' className={className || ""} {...props}>
          {props.children}
        </div>
      ) : (
        <div className={className || ""} {...props}>
          {props.children}
        </div>
      )}
    </>
  );
};
