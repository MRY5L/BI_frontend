import {Button, Card, Form, message, Space} from 'antd';
import ReactECharts from "echarts-for-react";
import {loginSingInUsingPost} from "@/services/bi/chartController";
import React, {useEffect, useState} from 'react';
import {getLoginUserUsingGet} from "@/services/bi/userController";

/**
 * 我的图表页面
 * @constructor
 */
const AddScore: React.FC = () => {
  /**
   * 签到
   */
  const fetchUserInfo = async () => {
    const res = await loginSingInUsingPost(userData?.data?.id ?? -1);
    if (res.code !== 0) {
      message.error(res.message);
      return;
    }
    message.success('签到成功');
    fetchData();
  };

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
  return (
    <div>
      <Card title="智能 BI,欢迎签到">
        <h2>用户: {userData?.data?.userName},当前积分：{userData?.data?.score}</h2>
        <Form name="addChart" labelAlign="left" labelCol={{span: 4}}
              wrapperCol={{span: 16}} initialValues={{}}>
          <Form.Item name="file" label={'样例'}>
            <div style={{marginBottom: 16}}/>
            <p>{'分析目标：网站用户增长趋势'}</p>
            <p>{'分析结论：根据折线图数据分析结论：从1号到60号，网站用户数呈现逐渐增长的趋势，但在35号和47号出现了异常数据，用户数分别为3和5，可能是数据采集或记录错误导致的异常值。整体来看，网站用户数呈现出稳步增长的态势，需要进一步关注和分析异常值的原因，以确保数据的准确性和可靠性'}</p>
            <ReactECharts option={
              {
                "title": {
                  "text": "网站用户增长情况"
                },
                "legend": {
                  "textStyle": {
                    "color": "#000"
                  },
                  "data": ["用户数"]
                },
                "xAxis": {
                  "type": "category",
                  "data": ["1号", "2号", "3号", "4号", "5号", "6号", "7号", "8号", "9号", "10号", "11号", "12号", "13号", "14号", "15号", "16号", "17号", "18号", "19号", "20号", "21号", "22号", "23号", "24号", "25号", "26号", "27号", "28号", "29号", "30号", "31号", "32号", "33号", "34号", "35号", "36号", "37号", "38号", "39号", "40号", "41号", "42号", "43号", "44号", "45号", "46号", "47号", "48号", "49号", "50号", "51号", "52号", "53号", "54号", "55号", "56号", "57号", "58号", "59号", "60号"],
                  "axisLine": {
                    "lineStyle": {
                      "color": "#000"
                    }
                  },
                  "axisLabel": {
                    "color": "#000"
                  }
                },
                "yAxis": {
                  "type": "value",
                  "axisLine": {
                    "lineStyle": {
                      "color": "#000"
                    }
                  },
                  "axisLabel": {
                    "color": "#000"
                  }
                },
                "series": [
                  {
                    "name": "用户数",
                    "type": "line",
                    "data": [10, 20, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 3, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 5, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87],
                    "lineStyle": {
                      "color": "#000"
                    }
                  }
                ]
              }
            }/>
            <div style={{marginBottom: 16}}/>
          </Form.Item>

          <Form.Item wrapperCol={{span: 16, offset: 4}}>
            <Space>
              <Button type="primary" htmlType="submit" onClick={fetchUserInfo}>
                签到
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default AddScore;
