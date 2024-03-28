import React, {useEffect, useState} from "react";
import {Card, Form, message} from "antd";
import {getLoginUserUsingGet} from "@/services/bi/userController";
import ReactECharts from "echarts-for-react";
import {DownOutlined, SmileOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Dropdown, Space} from 'antd';
import TabPane from "antd/lib/tabs/TabPane";

const Index: React.FC = () => {
  const [userData, setUserData] = useState<API.BaseResponseLoginUserVO_>();
  const fetchData = async () => {
    try {
      const [userRes] = await Promise.all([
        getLoginUserUsingGet()
      ]);
      if (userRes.data) {
        setUserData(userRes);
      } else {
        message.error(userRes.message);
      }
    } catch (e) {
      message.error('获取信息失败');
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Card>
        <a rel="noopener noreferrer">
          日期,用户数,收入      {'<-Excel表头'}<br/>
          1号,10,600<br/>
          2号,20,601<br/>
          3号,30,602<br/>
          4号,90,603<br/>
          5号,0,604<br/>
          6号,10,605<br/>
          7号,20,606<br/>
          8号,21,607<br/>
          9号,22,608<br/>
          10号,23,609<br/>
          11号,24,610<br/>
          12号,25,611<br/>
          13号,26,612<br/>
          14号,27,613<br/>
          15号,28,614<br/>
          16号,29,615<br/>
          17号,30,616<br/>
          18号,31,617<br/>
          19号,32,618<br/>
          20号,33,619<br/>
          21号,34,620<br/>
          22号,35,621<br/>
        </a>
        </Card>
      ),
    },
  ];
  return (
    <div>
      <Dropdown menu={{items}}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            原始数据
            <DownOutlined/>
          </Space>
        </a>
      </Dropdown>
        <Card title="欢迎使用,智能 BI">
        <h2>用户: {userData?.data?.userName},当前积分：{'->('}{userData?.data?.score}{')<-左下角可选择签到'}</h2>
        <Form name="addChart" labelAlign="left" labelCol={{span: 4}}
              wrapperCol={{span: 16}} initialValues={{}}>
          <Form.Item name="file" label={'样例'}>
            <div style={{marginBottom: 16}}/>
            <p>{'分析目标：网站用户增长趋势及收入情况'}</p>
            <p>{'分析结论：根据数据分析，网站用户数在前期有所波动，后期呈现较大幅度的增长，尤其在第23号用户数激增至360，之后保持较高水平。收入也呈现出类似的趋势，与用户数增长相关性较高。整体来看，用户数和收入呈现正相关关系，用户数增长带动了收入的增长。在数据的后期，用户数和收入均有较大的增长，说明网站的发展潜力较大。'}</p>
            <ReactECharts option={
              {
                "title": {
                  "text": "网站用户增长趋势及收入情况"
                },
                "legend": {
                  "textStyle": {
                    "color": "black"
                  },
                  "data": ["用户数", "收入"]
                },
                "xAxis": {
                  "type": "category",
                  "data": ["1号", "2号", "3号", "4号", "5号", "6号", "7号", "8号", "9号", "10号", "11号", "12号", "13号", "14号", "15号", "16号", "17号", "18号", "19号", "20号", "21号", "22号", "23号", "24号", "25号", "26号", "27号", "28号", "29号", "30号", "31号", "32号", "33号", "34号", "35号", "36号", "37号", "38号", "39号", "40号", "41号", "42号", "43号", "44号", "45号", "46号", "47号", "48号", "49号", "50号", "51号", "52号", "53号", "54号", "55号", "56号", "57号", "58号", "59号", "60号", "61号", "62号", "63号", "64号", "65号", "66号", "67号", "68号", "69号", "70号", "71号", "72号", "73号", "74号", "75号"]
                },
                "yAxis": {
                  "type": "value",
                  "axisLine": {
                    "lineStyle": {
                      "color": "black"
                    }
                  },
                  "axisLabel": {
                    "color": "black"
                  }
                },
                "series": [
                  {
                    "name": "用户数",
                    "type": "bar",
                    "data": [10, 20, 30, 90, 0, 10, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 69, 70, 71, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515]
                  },
                  {
                    "name": "收入",
                    "type": "bar",
                    "data": [600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 500, 530, 480, 626, 260, 628, 350, 321, 546, 456, 765, 634, 635, 636, 637, 638, 639, 640, 641, 642, 657, 644, 645, 646, 647, 648, 649, 650, 651, 652, 586, 654, 655, 656, 657, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
                  }
                ]
              }
            }/>
            <div style={{marginBottom: 16}}/>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default Index;
