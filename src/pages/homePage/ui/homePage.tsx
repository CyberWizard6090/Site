import React, { useEffect, useState } from "react";
import "./homePage.scss";
import { Gosuslugi } from "widgets/gosuslugi";
import { BusGov } from "widgets/NOK";
import { National } from "widgets/National";
import { Contact } from "widgets/contact";
import { SoCool } from "widgets/soCool";
import { NewsBlock } from "widgets/newsBlock";
import { Carousel } from "widgets/carousel";
import { NotificationButtons } from "features/notifications";
import { Banner, SimpleRichText } from "shared/ui/blocks";
import { Block } from "shared/ui/block";

type Props = {};

type TextBlock = {
  blockType: "text";
  text: string;
};

type ImageBlock = {
  blockType: "image";
  image: {
    url: string;
  };
  altText?: string;
};

type BannerBlock = {
  blockType: "banner-block";
  selectedBanners: {
    id: string;
    image: {
      sizes: any;
      url: string;
    };
    text?: string;
    buttonLink?: string;
    showButton?: boolean;
  }[];
};

type CodeBlock = {
  blockType: "code";
  code: string;
};

type Block = {
  title: string;
  width: number;
  content: (TextBlock | ImageBlock | BannerBlock | CodeBlock |any)[];
};

type RenderBlocksProps = {
  blocks: Block[];
};

const RenderBlocks: React.FC<RenderBlocksProps> = ({ blocks }) => {
  return (
    <div className="table-page">
      {blocks.map((block, index) => (
        <div key={index} className="Cell" style={{ width: `${block.width}%` }}>
          <h2>{block.title}</h2>
          {block.content.map((contentItem, i) => {
            switch (contentItem.blockType) {
              case "text":
                return <Block> <p key={i}> <pre>{contentItem.text} </pre></p></Block> ;
              case "image":
                return (
                  <img
                    key={i}
                    src={contentItem.image.url}
                    alt={contentItem.altText || "Изображение"}
                  />
                );
              case "banner-block":
                return (
                  <Carousel key={i}>
                    {contentItem.selectedBanners.map((banner:any) => (
                  <>   {console.log(banner)}
                      <Banner
                        key={i}
                        image={banner.image.url}
                        link={banner.buttonLink}
                        title={banner.text}
                        buttonDisabled={banner.showButton}
                      />
                      </> 
                    ))}
                  </Carousel>
                );
              case "code":
                return (
                  <pre key={i}>
                    <code>{contentItem.code}</code>
                  </pre>
                );
                case "simpleRichText" :return ( <Block><SimpleRichText body={contentItem.body}/> </Block> )
              default:
                return null;
            }
          })}
        </div>
      ))}
    </div>
  );
};

export const HomePage = (props: Props) => {
  const url = "/api/globals/home-page";
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched blocks:", data.blocks); // Inspect fetched data
        setPageData(data.blocks);
      })
      .catch((err) => {
        console.error("Fetch error:", err.message);
      });
  }, []);

  return (
    <div className="home">
      <div className="home__content">
        <RenderBlocks blocks={pageData} />
        {/* <Contact />
        <h2>Баннеры</h2>
        <Carousel>
          <SoCool />
          <BusGov />
          <National />
          <NotificationButtons />
        </Carousel> */}
        <Gosuslugi />
        <NewsBlock />

        {/* <NOK/> */}
      </div>
    </div>
  );
};
