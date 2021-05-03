import { PageHeader, Card, Button } from "antd";
import { createFromIconfontCN } from '@ant-design/icons';
import drum1 from "../../img/products/drum1.png";
import drum2 from "../../img/products/drum2.png";
import drum3 from "../../img/products/drum3.png";
import gitar2 from "../../img/products/gitar2.webp";



export const Product = (props) => {
  const { Meta } = Card;
  const IconFont = createFromIconfontCN({
    scriptUrl: [
      '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
      '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
    ],
  });
  const {numberOfItems=99} = props;
  const products = [
    {
      key: 1,
      image: drum1,
      title: "TAMA STAR Bubinga Drum Set",
      description: "Rp 20.000.000,-",
    },
    {
      key: 2,
      image: drum2,
      title: "TAMA STAR Bubinga Maple Set",
      description: "Rp 20.000.000,-",
    },
    {
      key: 3,
      image: drum3,
      title: "TAMA STAR Bubinga Walnut Set",
      description: "Rp 20.000.000,-",
    },
    {
      key: 4,
      image: drum2,
      title: "TAMA STAR Bubinga Maple Set",
      description: "Rp 20.000.000,-",
    },
    {
      key: 5,
      image: gitar2,
      title: "Yamaha f335",
      description: "Rp 2.000.000,-",
    },
    {
      key: 6,
      image: gitar2,
      title: "Yamaha f335",
      description: "Rp 2.000.000,-",
    },
  ];
  return (
    <div className="container" style={{
      // marginTop: "10%",
      paddingBottom: "10%",
    }}>
    <PageHeader
      style={{
        padding: 0,
        marginBottom: 10,
        height: 40,
        backgroundColor: "transparent",
        zIndex: 0
      }}
      title={"Products"}
    ></PageHeader>
    <div
      className="container" 
      style={{
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      {products.slice(0, numberOfItems).map((product) => {
        return (
          // <div
          //   className="card border-light"
          //   key={product.key}
          //   style={{
          //     width: "17rem",
          //     margin: "5px",
          //     padding: "15px",
          //     boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.2)",

          //   }}
          // >
          //   <img src={product.image} className="card-img-top" alt="..." />
          //   <div className="card-body">
          //     <h5 className="card-title mt-2">{product.title}</h5>
          //     <p className="card-text">{product.description}</p>
          //   </div>
          // </div>
          <Card
          hoverable
          style={{ 
            width: "17rem",
            margin: "5px",
            padding: "15px",
            border: "none",
          }}
          cover={<img alt="example" src={product.image} 
          key={product.key}
          />}
        >
          <Meta title={product.title} description={product.description} style={{marginBottom: "15px"}}/>
          <Button type="primary"><IconFont type="icon-shoppingcart" style={{paddingBottom: "10px"}}/></Button>
          <Button style={{marginLeft: 7}}>Detail</Button>
        </Card>
        )
      })}
    
    </div>
    </div>
  );
};
