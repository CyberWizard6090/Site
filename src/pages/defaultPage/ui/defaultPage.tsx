import { RenderBlocks } from "entities/blocks";
import { Suspense } from "react";
import { useLoaderData } from "react-router-dom";
import { Empty } from "shared/ui/empty";
import { Loader } from "shared/ui/loader";
import { Page } from "shared/ui/page";
export const DefaultPage = () => {
  const data: any = useLoaderData();
  const text =
    "К сожалению, на этой странице возникла техническая ошибка.\n Мы уже работаем над ее устранением и приносим извинения за неудобства. Пожалуйста, попробуйте вернуться позже.";

  return (
    <Page>
      <Suspense fallback={<Loader />}>
        <RenderBlocks layout={data.layout} />
        {data.layout.length === 0 ? <Empty text={text} /> : <></>}
      </Suspense>
    </Page>
  );
};
