import config from "../config";

const getItem = (path, label, key, icon, children, withAuth) => {
  if (children) {
    return { label, key, icon, children, path, withAuth };
  }
  return { label, key, icon, path, withAuth };
};

export const getSideBarData = (arr) => {
  if (arr instanceof Array) {
    return arr.reduce((prev, item) => {
      if (item?.belongsToSidebar) {
        if (item.children instanceof Array) {
          const children = item.children.reduce(
            (prevElement, currentSubChild) => {
              if (currentSubChild?.belongsToSidebar) {
                prevElement.push(
                  getItem(
                    currentSubChild?.path,
                    currentSubChild?.name,
                    currentSubChild?.key,
                    currentSubChild?.icon,
                    ""
                  )
                );
              }
              return prevElement;
            },
            []
          );
          prev.push(
            getItem(item?.path, item?.name, item?.key, item?.icon, children)
          );
        } else {
          prev.push(getItem(item?.path, item?.name, item?.key, item?.icon));
        }
      }
      return prev;
    }, []);
  }
  return [];
};
export function ImageElement({
  previewSource = "",
  source,
  alt = "image",
  ...rest
}) {
  let pattern = /^\//g;
  return (
    <>
      {previewSource ? (
        <img src={previewSource} alt={alt} {...rest} />
      ) : (
        <img
          src={`${config.IMAGE_URL}/${source?.replace(pattern, "")}`}
          alt={alt}
          {...rest}
        />
      )}
    </>
  );
}
