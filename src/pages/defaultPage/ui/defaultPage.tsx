import "./defaultPage.scss";
import { RenderBlocks } from "entities/blocks";
import { Suspense } from "react";
import { useLoaderData } from "react-router-dom";
export const DefaultPage = () => {
  const data:any = useLoaderData();

  return (
    <div className="Page shadow__style">
      <div className="Page__content">
      <Suspense fallback={<h1>Loading user...</h1>}>
        <RenderBlocks layout={data.layout} />
        </Suspense>
      </div>
    </div>
  );
};
