import {Typography, Row, Col, Divider, Rate, Space, Image} from 'antd';
import {  } from '@ant-design/icons';


export const Detail = () => {
    const {Title, Text} = Typography;
    return(
        <Row>
        <Col span={18} offset={3}>
            <Title level={3} strong>Lorem ipsum dolor sit amet</Title>
            <Row>
                <Space split={<Divider type="vertical" style={{borderColor:'#787878'}} />}>
                    <Text>Brand: </Text>
                    <Rate allowHalf defaultValue={2.5}/>
                </Space>
            </Row>
            <Divider style={{ borderWidth: 2, borderColor: '#787878' }} />
            <Row>
                <Col span={12}>
                    <Image
                        width={200}
                        src="..."
                    />
                </Col>
                <Col span={12}>
                    <Title level={4} strong>Rp. 20.000.000,-</Title>
                    <Text>Status: </Text>
                    <Divider style={{ borderWidth:1, borderColor: '#787878'}} />
                    <Text></Text>
                </Col>
            </Row>
        </Col>
    </Row>
    )


} 
