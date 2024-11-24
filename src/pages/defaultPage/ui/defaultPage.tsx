import "./defaultPage.scss";
import { RenderBlocks } from "entities/blocks";
import { Suspense } from "react";
import { useLoaderData } from "react-router-dom";
import { Empty } from "shared/ui/empty";
export const DefaultPage = () => {
  const data: any = useLoaderData();
  const text = "К сожалению, на этой странице возникла техническая ошибка.\n Мы уже работаем над ее устранением и приносим извинения за неудобства. Пожалуйста, попробуйте вернуться позже."

  return (
    <div className="Page shadow__style">
      <div className="Page__content">
        <Suspense fallback={<h1>Loading user...</h1>}>
          <RenderBlocks layout={data.layout} />
          {data.layout.length === 0 ? <Empty text={text} /> : <></>}
        </Suspense>
      </div>
    </div>
  );
};
