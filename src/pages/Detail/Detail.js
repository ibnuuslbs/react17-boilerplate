import {Typography, Row, Col, Divider, Rate, Space, Image} from 'antd';
import { Tabs } from 'antd';
import { InputNumber } from 'antd';
import { Button } from 'antd';
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';
import img1 from "../../img/products/drum1.png";

export const Detail = () => {
    const {Title, Text, Paragraph} = Typography;
<<<<<<< HEAD

    function onChange(value) {
        console.log('changed', value);
    }

    const { TabPane } = Tabs;


=======
>>>>>>> cd4819ff661469bc8fac9f94d7a5485c8283921c
    return(
        <Row>
        <Col span={18} offset={3}>
            <Title level={3} strong>Lorem ipsum dolor sit amet</Title>
            <Row>
                <Space split={<Divider type="vertical" style={{borderColor:'#787878'}} />}>
                    <Text>Brand: Lorem ipsum </Text>
                    <Rate allowHalf defaultValue={2.5}/>
                </Space>
            </Row>
            <Divider style={{ borderWidth:1, borderColor: '#787878'}} />
            <Row>
                <Col span={12}>
                    <Image
                        width={500}
                        src={img1}
                    />
                </Col>
                <Col span={12}>
                    <Title level={4} strong>Rp. 20.000.000,-</Title>
                    <Text>Status: </Text>
                    <Divider style={{ borderWidth:1, borderColor: '#787878'}} />
                    <Row>
                    <Text>{'\u2B24'} Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</Text>
                    <Text>{'\u2B24'} Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</Text>
                    <Text>{'\u2B24'} Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</Text>
                    <Text>{'\u2B24'} Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</Text>
                    </Row>
                    <Divider style={{ borderWidth:1, borderColor: '#787878'}} />
                    <Space>
                        <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} size='large'/>
                        <Button type="primary" shape="round" icon={<ShoppingCartOutlined />} size='large'>
                           Add to cart
                        </Button> 
                        <HeartOutlined style={{ fontSize: '200%', color: '#FF0000'}} />     
                    </Space>
                    <Divider style={{ borderWidth:1, borderColor: '#787878'}} />
                    <Text>Categories: </Text>
                </Col>
                    {/* <Divider style={{ borderWidth:3, borderColor: '#FF0000'}} /> */}
                    <Tabs tabBarExtraContent>
                        <TabPane tab="Description" key="1">
                            <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Paragraph>
                        </TabPane>
                        <TabPane tab="Specification" key="2">
                            Content of tab 2
                        </TabPane>
                    </Tabs>
            </Row>
        </Col>
    </Row>
    )


} 
